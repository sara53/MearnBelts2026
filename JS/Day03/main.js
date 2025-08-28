// var trackName = "dotnet";
// function sum(x, y) {
// 	console.log(trackName);
// 	var trackName = "Mearn";
// 	console.log(trackName);
// 	return x + y;
// }

// var result = sum(3, 4);

// console.log(trackName);
// console.log(result);
// var trackName = "MEarn";
// function sum() {
// 	var trackName = "angular";
// 	console.log(trackName);
// }

// sum(3, 4); // return

// console.log(trackName);

// angular -- undefined
// angular -- Error
// function sayHello(trackName) {
// 	console.log(`Hello ${trackName} at iti`);
// }
// function great(trackName) {
// 	console.log("Welcome at iti");
// 	return sayHello(trackName);
// }

// console.log(great("Dotnet"));
/**
 * Object -- props & methods
 *  prop -> key : value (any datatype)
 *
 */
// var student = {
// 	name: "ali",
// 	age: 20,
// 	gender: "male",
// 	graduated: true,
// 	courses: ["Angular", "React", "c++"],
// 	address: {
// 		city: "Alex",
// 		street: "Saad street",
// 		code: 123,
// 	},
// 	display: function (param) {
// 		console.log("Hello display fun", param);
// 		return Number(param);
// 	},
// };

// var result = student.display("10");
// console.log(result);
// console.log(student.display());
// prop (set) -- founded - override
// prop (set) -- not founded - add
// student["favColor"] = "green";
// student["name"] = "ahmed";

// set
// student.name = "Alaa";

// console.log(student);
// console.log(student.address.city);
// console.log(student["address"]["city"]);
// console.log(student["address"].city);
// console.log(student.address["city"]);
// object
/**
 * == dot notation
 * == subscript notation
 */

// console.log(student["name"]);
// console.log(student["courses"]);
// console.log(student["favColor"]);

// console.log(student1.favColor);
// console.log(student1.name); // get
// console.log(student1.age); // get
// console.log(student1.gender); // get
// console.log(student1.courses); // get
// user defined
// built in objects

// var str = "hello";
// console.log(str["charAt"](0));

/**
 *  == PI
 * ------------------------
 *  == sqrt
 *  == pow
 *  == sign
 *         -- 1 - positive
 *         -- -1 -- negative
 *          -- 0 -- zero
 * == max
 * == round
 *== ceil
 *
 */

// console.log(Math.sin((90 * Math.PI) / 180));
// console.log(Math.floor(Math.random() * 10));
// var x = 1234455.2344455;

// console.log(x.toFixed(2));
// console.log(Math.floor(5.9));
// console.log(Math.ceil(5.0));
// console.log(Math.round(5.5));

console.log("-----------------------");
// console.log(Math.max(10, 20, 50, 80, 90, 30));
// console.log(Math.min(10, 20, 50, 80, 90, 30));
// console.log(Math.PI);
// console.log(Math.sqrt(25));
// console.log(Math.pow(2, 3));
// console.log(Math.sign(100));
// console.log(Math.sign(-30));
// console.log(Math.sign(0));
