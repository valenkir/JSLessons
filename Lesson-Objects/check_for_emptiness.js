function isEmpty(obj) {
    for (key in obj) {
        return false;
    }
    return true;
}

function isEmptyKeys(obj) {
    if (Object.keys(obj).length === 0) {
        return true;
    }
    return false;
}