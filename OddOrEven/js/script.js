/*jslint node: true */
"use strict";

var modulus;
var number;

for (number = 0; number <= 15; number += 1) {
    modulus = number % 2;
    if (modulus === 0) {
        window.document.write("\"" + number + " is even\" " + "<br>");
    } else {
        window.document.write("\"" + number + " is odd\" " + "<br>");
    }
}