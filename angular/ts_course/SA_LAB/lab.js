"use strict";
exports.__esModule = true;
var _ = require("./dice.js");
var diceSet = [];
var diceInstances = [];
for (var i = 0; i < 4; i++) {
    diceSet.push({
        'div': document.createElement('div')
    });
}
diceSet.map(function (elem, index) {
    var dice = new _.dieRoller(elem.div, 200, 200, "yellow", 5);
    diceInstances.push(dice);
    document.body.appendChild(elem.div);
});
var buttonx = document.createElement('button');
document.body.appendChild(buttonx);
buttonx.onclick = function (event) {
    diceInstances.map(function (elem, index) {
        elem.roll();
    });
};
