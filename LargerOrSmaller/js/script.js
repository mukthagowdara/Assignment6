/*jslint node: true */
"use strict";

var integer1;
var integer2;
var largerInt;

integer1 = window.prompt("Enter first integer");
integer2 = window.prompt("Enter second integer");

if (integer1 > integer2) {
    largerInt = integer1;
    window.document.write("Larger integer between " + integer1 + " and " + integer2 + " is : " + largerInt);
} else if (integer2 > integer1) {
    largerInt = integer2;
    window.document.write("Larger integer between " + integer1 + " and " + integer2 + " is : " + largerInt);
} else {
    window.document.write("Integers are equal");
}