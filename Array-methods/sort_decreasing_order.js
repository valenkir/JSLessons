let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => {
    if (a > b) {
        return -1;
    } else {
        return 1;
    }
});
alert(arr);