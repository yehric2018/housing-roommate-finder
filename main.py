import time
from flask import Flask, request, jsonify
from firebase import firebase

app = Flask(__name__, static_folder='./build', static_url_path='/')
firebase = firebase.FirebaseApplication("https://housing-roommate-finder-286520.firebaseio.com/", None)

@app.route('/')
def get_html():
	return app.send_static_file('index.html')

@app.route('/time')
def get_current_time():
	return {'time': time.time()}

@app.route('/add_listing')
def add_listing():
	description = request.args.get("desc", type=str)
	length = request.args.get("length", type=int)
	location = request.args.get("loc", type=str)
	price = request.args.get("price", type=int)
	squareFootage = request.args.get("area", type=int)
	title = request.args.get("title", type=str)

	listing = {
		"description": description,
		"length": length,
		"location": location,
		"price": price,
		"squareFootage": squareFootage,
		"title": title
	}

	result = firebase.post('/listings', listing, {'print': 'pretty'}, {'X_FANCY_HEADER': 'VERY FANCY'})
	return result

@app.route('/add_roommate')
def add_roommate():
	name = request.args.get('name', type=str)
	major = request.args.get('major', type=str)
	profileImage = request.args.get('img', type=str)
	sleepStart = request.args.get('sleepStart', type=str)
	sleepEnd = request.args.get('sleepEnd', type=str)
	habits = request.args.get('habits', type=str).split(",")
	room_id = request.args.get('room_id', type=str)
	roommate = {
		"name": name,
		"major": major,
		"profileImage": profileImage,
		"sleepSchedule": {"start": sleepStart, "end": sleepEnd},
		"habits": habits,
		"listing_id": room_id
	}
	result = firebase.post("/roommates", roommate, {'print': 'pretty'}, {'X_FANCY_HEADER': 'VERY FANCY'})
	return result

@app.route('/housing', methods=["GET"])
def get_housing_info():
	result = firebase.get('/listings', None)
	return str(result)
