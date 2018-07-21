"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ColorChange = /** @class */ (function () {
    function ColorChange(div) {
        this.div = div;
    }
    ColorChange.prototype.changeColor = function (color) {
        if (typeof (color) === "number") {
            return true;
        }
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
var NumericColor = /** @class */ (function (_super) {
    __extends(NumericColor, _super);
    function NumericColor(div) {
        var _this = _super.call(this, div) || this;
        _this.div.style.width = squareDimention;
        _this.div.style.height = squareDimention;
        return _this;
    }
    NumericColor.prototype.changeColor = function (color) {
        this.div.style.backgroundColor = Colors[color];
        return true;
    };
    NumericColor.Colors = Colors;
    return NumericColor;
}(ColorChange));
var elementSets = [];
var squareSizeN = 100;
var squareDimention = squareSizeN + "px";
for (var index = 0; index < 7; index++) {
    elementSets.push({
        'div': document.createElement('div'),
        'button': document.createElement('button')
    });
}
var getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
elementSets.map(function (elem, index) {
    var colorChangeClass = new NumericColor(elem.div);
    elem.div.style.width = squareDimention;
    elem.div.style.height = squareDimention;
    elem.button.textContent = "Change Color";
    elem.button.onclick = function (event) {
        colorChangeClass.changeColor(getRandomIntInclusive(0, 6));
    };
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
});
