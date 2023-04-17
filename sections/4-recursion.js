
const deepEntries = (object) => {
    const result = [];
    if (Object.keys(object).length === 0) return result;

    for (let i = 0; i < Object.keys(object).length; i++) {
        const keyType = object[Object.keys(object)[i]]
        if (typeof keyType === 'object') {
            result.push([Object.keys(object)[i], deepEntries(keyType)]);
        } else {
            result.push([Object.keys(object)[i], Object.values(object)[i]]);
        };
    };
    return result;
 };

const deeplyEquals = (a, b) => {
    if (!a && !b) return false;
    if (a === b ) return true;
    
    //Check if Array
    if (Array.isArray(a) && Array.isArray(b)) {
        for (let i = 0; i < a.length; i++) {
            if (Array.isArray(a[i])) {
                return deeplyEquals(a[i], b[i]);
            };
        };
        return a.every((value, index) => value === b[index])
    };

    //Check if Object
    if (typeof a === 'object' && typeof b === 'object') {
        for (let key in a) {
            if (typeof a[key] === 'object') {
                return deeplyEquals(a[key], b[key]);
            };
        };
        return Object.keys(a).every((value, index) => value === Object.keys(b)[index])
            && Object.values(a).every((value, index) => value === Object.values(b)[index])
    };



    return false;
 };

const flat = (arr, depth) => {
    let nestedArray = [];
    let furtherNestedArray = [];
    const depthLevel = depth - 1;

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            nestedArray = nestedArray.concat(arr[i]);

            if (depth > 1) {
                for (let b = 0; b < nestedArray.length; b++) {
                    if (Array.isArray(nestedArray[b])) {
                        furtherNestedArray = flat(nestedArray, depthLevel);
                        nestedArray.splice(b, 1);
                        nestedArray = furtherNestedArray;
                        break;
                    };
                };
            };
        };
    };
    return arr
        .filter((value) => !Array.isArray(value))
        .concat(nestedArray)
        .sort((a, b) => a - b);
};

module.exports = { deeplyEquals, flat, deepEntries };
