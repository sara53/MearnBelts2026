// var p = document.getElementById("info");
// var btn = document.getElementById("btn");

// function changeText() {
// 	// console.log(e.target);
// 	p.innerHTML = "<h1>Hello Angular Group</h1>";
// }
// function changeStyle() {
// 	p.style.background = "green";
// }
// function changeStyle1(color) {
// 	p.style.background = color;
// }
// event object
//changeText({target:'btn'}) -- jsEngine
// btn.onclick = changeText;

// var x = (function () {
// 	console.log("X");
// })();
//

// btn.onmouseenter = changeStyle;

// callback function -- jsEngine

// btn.onclick = function () {
// 	console.log("Btn Clicked");
// };

// btn.onclick = function () {
// 	changeStyle1("red");
// };

// btn.onclick = function () {
// 	changeText();
// 	changeStyle();
// };
// btn.onclick = changeText;
// btn.onclick = changeStyle;
/**=========================== */
var p = document.getElementById("info");
var btn = document.getElementById("btn");

function changeText(e) {
	console.log(e.target); //btn
	p.innerHTML = "<h1>Hello Angular Group</h1>";
}
function changeStyle() {
	p.style.background = "green";
}

//
// btn.addEventListener("click", function (e) {
// 	console.log("hello", e.target);
// });
// btn.addEventListener("click", changeText);
// btn.addEventListener("click", changeStyle); // add

//remove

//btn.removeEventListener("click", changeStyle); // remove

// removeEventListener
// valid -- jsEngine -- Event Object
// btn.addEventListener("click", changeText);
// btn.addEventListener("mouseenter", changeStyle);
// btn.addEventListener("click", changeText);
// btn.addEventListener("click", changeStyle);

// onEventName -- addEventListener('EventName')
//jsEngine
// btn.addEventListener("click", function () {
// 	console.log("Btn Clicked");

// });

// var input = document.getElementById("input1");
// var span = document.getElementById("output");
// var errorMsg = document.getElementById("errorMsg");

// // remove -- refer -- reuse
// input.addEventListener("focus", function () {
// 	input.style.border = "3px solid blue";
// });
// input.addEventListener("blur", function () {
// 	input.style.border = "3px solid orange";
// });
// input.addEventListener("input", function (e) {
// 	if (input.value.length >= 3) {
// 		input.style.border = "3px solid green";
// 		errorMsg.style.display = "none";
// 	} else {
// 		input.style.border = "3px solid red";
// 		errorMsg.style.display = "block";
// 	}
// 	// span.innerHTML = e.target.value;
// });

// login({})

// fire event js engine attach (sendEventObject)

// function login(e) {
// 	e.preventDefault();
// 	console.log("Form submitted successfully");
// }

// login({ fname: "alaa" });
// var btn = document.getElementById("btn");

// var p = document.getElementsByTagName("p")[0];
// function changeText() {
// 	p.innerHTML = "Hello";
// }
// //

// btn.addEventListener("click", function () {
// 	p.innerHTML = "Hello";
// });
// btn.removeEventListener("click", function () {
// 	p.innerHTML = "Hello";
// });
// function first(e) {
// 	// e.stopPropagation();

// 	console.log("first");
// }
// function second(e) {
// 	e.stopPropagation();
// 	console.log("second");
// }
// function third(e) {
// 	// e.stopPropagation();
// 	console.log("third");
// }
// var myWind;
// function openNewWindow() {
// 	myWind = window.open("./about.html", "", "width=200,height=200");
// }
// function closeWindow() {
// 	myWind.close();
// }
// function moveToWindow() {
// 	myWind.moveTo(300, 300);
// }
// function MoveByWindow() {
// 	myWind.moveBy(-100, -100);
// }
// function ResizeToWindow() {
// 	myWind.resizeTo(400, 400);
// }
// function ResizeByWindow() {
// 	myWind.resizeBy(100, 100);
// }

/**
 * == BOM --- Browser Object Model
 * 	== window
 * 	== history
 *  == navigator
 *  == location
 * 	== screen
 */

// jsEngine -- after time
// setTimeout(function () {
// 	open("/about.html");
// }, 3000);

// function sayHello(trackName, supName) {
// 	console.log(`Hello ${trackName} at ITI ${supName}`);
// }

// //
// setTimeout(sayHello, 3000, "React", "Ahmed");

// var i = 0;
// var myInterval = setInterval(function () {
// 	console.log(i++);
// }, 1000);

// //

// setTimeout(function () {
// 	clearInterval(myInterval);
// }, 5000);
// console.log("--------------------------")
// function execute() {
// 	// location.assign("https://www.google.com/");
// 	//location.replace("https://www.google.com/");
// 	// location.reload();
// 	// location.pathname = "/about.html";
// 	// console.log(location.pathname);
// 	// location.href = "https://www.google.com/";
// 	// get
// 	// console.log(location.href);
// }
//========================================
// history
// length == forward ()- back () - go()
// function execute() {
// 	// location.assign("https://www.google.com/");
// 	//location.replace("https://www.google.com/");
// 	// location.reload();
// 	// location.pathname = "/about.html";
// 	// console.log(location.pathname);
// 	// location.href = "https://www.google.com/";
// 	// get
// 	// console.log(location.href);
// }
