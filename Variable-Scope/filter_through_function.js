function inBetween (a, b) {
    return function (item) {
        if (item >= a && item <= b) {
            return true;
        } else {
            return false;
        }
    }
}

function inArray (arr) {
    return function (item) {
        if (arr.includes(item)) {
            return true;
        } else {
            return false;
        }
    }
}