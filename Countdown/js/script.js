/*jslint node: true */
"use strict";

var number;

number = window.prompt("Enter a number to countdown");

while (number > -1) {
    window.document.write(number + " ");
    number -= 1;
}
