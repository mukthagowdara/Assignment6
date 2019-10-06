/*jslint node: true */
"use strict";

var coinFlip;
var step;

for (step = 1; step <= 10; step += 1) {
    coinFlip = Math.random();
    //window.console.log("coinflip value" + coinFlip);
    if (coinFlip > 0.5) {
        coinFlip = Math.ceil(coinFlip);
    } else {
        coinFlip = Math.floor(coinFlip);
    }
    if (coinFlip === 0) {
        window.document.write("Heads" + "<br>");
    } else if (coinFlip === 1) {
        window.document.write("Tails" + "<br>");
    }
}
