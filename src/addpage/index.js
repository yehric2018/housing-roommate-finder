import React, { useState, useEffect } from 'react';
import { Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function AddPage() {
	const [currentTime, setCurrentTime] = useState(0);

	useEffect(() => {
		fetch('/time').then(res => res.json()).then(data => {
			setCurrentTime(data.time);
		});
	}, []);

	return (
		<div className="page" style={styles.page}>
			<Button variant="primary">
				<Image src="https://specials-images.forbesimg.com/imageserve/5db4c7b464b49a0007e9dfac/960x0.jpg?fit=scale" roundedCircle fluid class="col-sm-2" />
			</Button>{' '}
			<div>The current time is {currentTime}</div>
		</div>
	);
}

export default AddPage;

const styles = {
	page: {
		backgroundColor: "red",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
};
