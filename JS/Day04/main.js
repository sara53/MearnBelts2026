/**  */

// function show() {
// 	console.log("Btn Clicked");
// }

// function sayHello() {
// 	console.log("hello belts group");
// }
// function great() {
// 	console.log("welcome at ITI");
// }

// event
// var p = document.getElementsByTagName("p")[0];

// function changeText() {
// 	//console.log(p.innerText);
// 	// set (override)
// 	//p.innerText = "Hello Angular Group";
// }
// var p = document.getElementsByTagName("p")[0];
// var second = document.getElementById("second");

// function changeText() {
// 	second.innerText = p.innerText;
// }
//==============================================
// var p = document.getElementsByTagName("p")[0];
// var second = document.getElementById("second");
// function changeText() {
// 	// p.innerHTML = "Hello Angular Group";
// 	// p.innerHTML = "<h1>Hello Angular Track</h1>";
// 	// second.innerText = "<h1>Hello Angular Track</h1>";
// }
//==============================================
// var p = document.getElementsByTagName("p")[0];
// var second = document.getElementById("second");
// function changeText() {
// 	console.log(second.innerHTML);
// 	console.log("========================");
// 	console.log(second.innerText);
// }
//==============================================
// var input = document.getElementById("input1");
// var p = document.getElementById("second");

// function execute() {
// 	p.innerHTML = input.value;
// 	input.value = 100;
// }
//====================(inputs)==========================
// var inputs = document.getElementsByName("gender");
// var p = document.getElementById("second");

// function execute() {
// 	for (var i = 0; i < inputs.length; i++) {
// 		if (inputs[i].checked) {
// 			p.innerHTML = `<h1>${inputs[i].value}</h1>`;
// 		}
// 	}
// }
//====================(style)==========================
// var p = document.getElementsByClassName("info")[0];

// function changeStyle() {
// 	p.style.backgroundColor = "#e786bc";
// 	p.style.letterSpacing = "3px";
// 	p.style.padding = "2rem";
// }
//====================(className)==========================
// var p = document.getElementsByClassName("info")[0];

// function changeStyle() {
// 	// get
// 	// console.log(p.className);
// 	p.className += " jsClass";
// }
//====================(classList)==========================
// var p = document.getElementsByClassName("info")[0];

// function changeStyle() {
// 	// p.classList.add("jsClass");
// 	// p.classList.remove("testData");
// 	p.classList.toggle("jsClass");
// }
//====================(attributes)==========================

// var link1 = document.getElementById("link1");
// var img = document.images[0];
// function execute() {
// 	if (link1.hasAttribute("class")) {
// 		link1.removeAttribute("class");
// 	} else {
// 		link1.setAttribute("class", "jsClass");
// 	}
// 	// toggle logic without toggle method
// 	// toggleAttribute
// 	// img.setAttribute("src", "./2.jpg");
// 	// console.log(img.getAttribute("src"));
// 	// link1.setAttribute("href", "#twiiter");
// 	// link1.setAttribute("class", "testData");
// 	// console.log(link1.getAttribute("class"));
// }
//====================(v1)==========================
// var parent = document.getElementById("parent");

// console.log(element);

// // dom -- change - style

// function execute() {
// 	var element = document.createElement("p");
// 	element.innerHTML = "Hello Angular Group";
// 	element.setAttribute("class", "jsClass");

// 	parent.appendChild(element);
// }
//====================(v2)==========================
// var parent = document.getElementById("parent");

// var element = document.createElement("p"); // as a node
// var span = document.createElement("span"); // as a node

// var text = document.createTextNode("Hello angular group");

// span.innerHTML = "Hello Span";
// element.appendChild(text);

// // dom -- change - style

// function execute() {
// 	// parent.appendChild(element, span);
// 	// parent.appendChild(span, element);
// 	var result = parent.appendChild(element);
// 	console.log(result);
// 	// parent.appendChild(span);
// }

//<p>text</p>
// node -- node
//===============================
// var parent = document.getElementById("parent");
// var text = document.createTextNode("Hello angular group");

// var element = document.createElement("p"); // as a node
// var span = document.createElement("span"); // as a node

// span.innerHTML = "Hello Span";
// element.append("Hello angular group");
// element.append(text);

// // dom -- change - style

// function execute() {
// 	var result = parent.append(element, span);
// 	console.log(result);
// }
