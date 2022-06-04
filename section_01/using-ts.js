"use strict";
exports.__esModule = true;
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var button = document.querySelector("button");
var add = function (num1, num2) {
    return num1 + num2;
};
button.addEventListener("click", function () {
    console.log(add(+num1.value, +num2.value));
});
