import * as lod from "lodash";
class ArrayUtilities {
    reverseArray(array: Array<number>) {
        return lod.reverse(array.slice(0));
    }
    lastItemOfArray(array: Array<number>) {
        return lod.last(array.slice(0));
    }
    firstItemOfArray(array: Array<number>) {
        return lod.head(array.slice(0));
    }
    concatenateArray(array1: Array<number>, array2: Array<number>) {
        return lod.concat(array1,array2);
    }
}
export default new ArrayUtilities;

