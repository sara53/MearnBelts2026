function successCB(position) {
	console.log(position.coords.latitude);
	console.log(position.coords.longitude);
}
function errorCB() {
	console.log("user allow location");
}

navigator.geolocation.getCurrentPosition(successCB, errorCB);
