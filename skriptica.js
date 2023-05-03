"use strict";
let firstname = "Marko";
let fruits = ["apel", "orenđ", "bananananana"];
let mix = ["apel", 1, "orenđ", 2, "bananananana", 3];
for (var index in fruits) {
    console.log(fruits[index]);
}
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
function sum(a, b) {
    return a + b;
}
var total = sum(10, 20);
let suma = (x, y) => {
    return x + y;
};
