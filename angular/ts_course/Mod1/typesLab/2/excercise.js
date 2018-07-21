"use strict";
var ColorChange = /** @class */ (function () {
    function ColorChange(div) {
        this.div = div;
    }
    ColorChange.prototype.changeColor = function (color) {
        this.div.style.background = color;
        return true;
    };
    return ColorChange;
}());
var Colors;
(function (Colors) {
    Colors[Colors["green"] = 0] = "green";
    Colors[Colors["blue"] = 1] = "blue";
    Colors[Colors["white"] = 2] = "white";
    Colors[Colors["black"] = 3] = "black";
    Colors[Colors["orange"] = 4] = "orange";
    Colors[Colors["red"] = 5] = "red";
    Colors[Colors["yellow"] = 6] = "yellow";
})(Colors || (Colors = {}));
var elementSets = [];
var squareSizeN = 100;
var squareDimention = squareSizeN + "px";
for (var index = 0; index < 7; index++) {
    elementSets.push({
        'div': document.createElement('div'),
        'button': document.createElement('button')
    });
}
elementSets.map(function (elem, index) {
    var colorChangeClass = new ColorChange(elem.div);
    elem.div.style.width = squareDimention;
    elem.div.style.height = squareDimention;
    elem.button.textContent = "Change Color";
    elem.button.onclick = function (event) {
        colorChangeClass.changeColor(Colors[index]);
    };
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
});
