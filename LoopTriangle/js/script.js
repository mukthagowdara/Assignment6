/*jslint node: true */
"use strict";

var step;
var loop;

for (loop = 1; loop <= 7; loop += 1) {
    step = 1;
    while (step <= loop) {
        window.document.write("#");
        step += 1;
    }
    window.document.write("<br>");
}