"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var lod = __importStar(require("lodash"));
var ArrayUtilities = /** @class */ (function () {
    function ArrayUtilities() {
    }
    ArrayUtilities.prototype.reverseArray = function (array) {
        return lod.reverse(array.slice(0));
    };
    ArrayUtilities.prototype.lastItemOfArray = function (array) {
        return lod.last(array.slice(0));
    };
    ArrayUtilities.prototype.firstItemOfArray = function (array) {
        return lod.head(array.slice(0));
    };
    ArrayUtilities.prototype.concatenateArray = function (array1, array2) {
        return lod.concat(array1, array2);
    };
    return ArrayUtilities;
}());
exports.default = new ArrayUtilities;
