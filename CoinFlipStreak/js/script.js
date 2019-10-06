/*jslint node: true */
"use strict";

var coinFlip;

do {
    coinFlip = Math.random();
    window.console.log("coinflip value" + coinFlip);
    if (coinFlip > 0.5) {
        coinFlip = Math.ceil(coinFlip);
    } else {
        coinFlip = Math.floor(coinFlip);
    }
    window.document.write("<br>");
    if (coinFlip === 0) {
        coinFlip = "Heads";
    } else if (coinFlip === 1) {
        coinFlip = "Tails";
    }
    window.document.write(coinFlip);
} while (coinFlip !== "Tails");