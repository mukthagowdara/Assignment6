/*jslint node: true */
"use strict";

var modulusof3;
var modulusof5;
var number;

for (number = 1; number <= 100; number += 1) {
    modulusof3 = number % 3;
    modulusof5 = number % 5;
    if ((modulusof3 === 0) && (modulusof5 === 0)) {
        window.document.write("Marco! Polo!" + "<br>");
    } else if (modulusof5 === 0) {
        window.document.write("Polo!" + "<br>");
    } else if (modulusof3 === 0) {
        window.document.write("Marco!" + "<br>");
    } else {
        window.document.write(number + "<br>");
    }
}