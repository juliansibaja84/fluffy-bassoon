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
exports.__esModule = true;
var Ch = require("chance");
var diceFaces;
(function (diceFaces) {
    diceFaces[diceFaces["uno"] = 1] = "uno";
    diceFaces[diceFaces["dos"] = 2] = "dos";
    diceFaces[diceFaces["tres"] = 3] = "tres";
    diceFaces[diceFaces["cuatro"] = 4] = "cuatro";
    diceFaces[diceFaces["cinco"] = 5] = "cinco";
    diceFaces[diceFaces["seis"] = 6] = "seis";
})(diceFaces || (diceFaces = {}));
var newchance = new Ch();
var Dice = /** @class */ (function () {
    function Dice(div, height, width, color, border) {
        if (border === void 0) { border = 1; }
        this.div = div;
        this.height = height + "px";
        this.width = width + "px";
        this.border = border + "px Solid Black";
        this.color = color;
    }
    return Dice;
}());
exports.Dice = Dice;
var dieRoller = /** @class */ (function (_super) {
    __extends(dieRoller, _super);
    function dieRoller(div, height, width, color, border) {
        if (height === void 0) { height = 100; }
        if (width === void 0) { width = 100; }
        if (color === void 0) { color = "white"; }
        if (border === void 0) { border = 5; }
        var _this = _super.call(this, div, height, width, color) || this;
        _this.div.style.width = _this.width;
        _this.div.style.height = _this.height;
        _this.div.style.border = _this.border;
        _this.div.style.backgroundColor = _this.color;
        _this.div.style.cssFloat = "left";
        _this.div.style.textAlign = "center";
        _this.div.style.verticalAlign = "middle";
        _this.div.style.lineHeight = (height * 0.8) + "px";
        _this.div.textContent = "?";
        return _this;
    }
    dieRoller.prototype.roll = function () {
        var luckyNumber = newchance.d6();
        this.div.textContent = diceFaces[luckyNumber];
        return true;
    };
    return dieRoller;
}(Dice));
exports.dieRoller = dieRoller;
var getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
exports["default"] = Dice;
