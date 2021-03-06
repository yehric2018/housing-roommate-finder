import time
from flask import Flask, request, redirect, url_for, send_from_directory
from firebase import firebase

import os
import tempfile


app = Flask(__name__, static_folder='./build', static_url_path='/')
firebase = firebase.FirebaseApplication("https://housing-roommate-finder-286520.firebaseio.com/", None)

UPLOAD_FOLDER = './img'
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

@app.route('/')
def get_html():
	return app.send_static_file('index.html')

@app.route('/time')
def get_current_time():
	return {'time': time.time()}

@app.route('/upload_image', methods=['POST'])
def send_individual_picture():
	if 'picture' not in request.files:
		return {"error": "upload file not provided"}
	picture = request.files['picture']
	filename = picture.filename
	picture.save(os.path.join(app.config["UPLOAD_FOLDER"], filename))
	return redirect(url_for('uploaded_file', filename=filename))

@app.route('/uploads/<filename>')
def uploaded_file(filename):
	return send_from_directory(app.config["UPLOAD_FOLDER"], filename)

@app.route('/add_listing')
def add_listing():
	description = request.args.get("desc", type=str)
	length = request.args.get("length", type=int)
	location = request.args.get("loc", type=str)
	price = request.args.get("price", type=int)
	squareFootage = request.args.get("area", type=int)
	roommateCount = request.args.get("count", type=int)
	title = request.args.get("title", type=str)

	if (not description or not length or not location or not price
			or not squareFootage or not roommateCount or not title):
		return {"error": "one or more attributes missing"}

	listing = {
		"description": description,
		"length": length,
		"location": location,
		"price": price,
		"squareFootage": squareFootage,
		"roommateCount": roommateCount,
		"title": title
	}

	result = firebase.post('/listings', listing, {'print': 'pretty'}, {'X_FANCY_HEADER': 'VERY FANCY'})
	return result

@app.route('/add_roommate')
def add_roommate():
	name = request.args.get('name', type=str)
	major = request.args.get('major', type=str)
	profileImage = request.args.get('img', type=str)
	sleepSchedule = request.args.get('sleep', type=str)
	habits = request.args.get('habits', type=str)
	room_id = request.args.get('room_id', type=str)
	
	if (not name or not major or not profileImage or not sleepSchedule or
		not habits or not room_id):
		return {"error": "one or more attributes missing"}

	roommate = {
		"name": name,
		"major": major,
		"profileImage": profileImage,
		"sleepSchedule": sleepSchedule,
		"habits": habits.split(","),
		"listing_id": room_id
	}
	result = firebase.post("/roommates", roommate, {'print': 'pretty'}, {'X_FANCY_HEADER': 'VERY FANCY'})
	return result

@app.route('/housing', methods=["GET"])
def get_housing_info():
	location = request.args.get('loc', default="", type=str)
	price = request.args.get('price', default=-1, type=int)
	length = request.args.get('length', default=-1, type=int)
	squareFootage = request.args.get('area', default=-1, type=int)
	majors = request.args.get('majors', default="", type=str)

	listings = []
	result = firebase.get('/listings', None)
	roommates = firebase.get('/roommates', None)

	same_major = set()
	for k, mate in list(roommates.items()):
		if "major" in mate and mate["major"] == majors:
			same_major.add(mate.listing_id)

	for k, v in list(result.items()):
		if majors != "" and k not in same_major:
			continue
		if price != -1 and abs(price - v.price) <= 200:
			continue
		if squareFootage != -1 and abs(squareFootage - v.squareFootage) <= 200:
			continue
		if length != -1 and length != v.length:
			continue
		listings.append(v)

	return {"listings": listings}
