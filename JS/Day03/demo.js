/**
 * How to select elements from dom
 * -----------------(Methods)--------------------
 *  == getElementById ==> element | null
 *  == querySelector ==> element | null
 *  == getElementsByClassName ==> collection[]
 *  == getElementsByTagName ==> collection[]
 *  == getElementsByName ==> nodeList[]
 *  == querySelectorAll ==> nodeList[]
 * ------------------(props)----------------------------
 * == document.body
 * == document.images
 * == document.links
 * == document.forms
 * == element.firstChild
 * == element.firstElementChild
 * == element.lastChild
 * == element.lastElementChild
 * == element.children
 * == element.childNodes
 */

var parent = document.getElementById("parent");

console.log(parent.children); // htmlChildren
console.log(parent.childNodes);
// console.log(parent.lastElementChild);

// console.log(document.links);
// console.log(document.images);
// var parent = document.getElementById("parent");

// var element = document.querySelector(".info");

// console.log(element);
// for (var i = 0; i < elements.length; i++) {
// 	console.log(elements[i]);
// }
