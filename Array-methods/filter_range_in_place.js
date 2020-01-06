function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] >= a && arr[i] <= b) {
            continue;
        } else {
            let item = arr.indexOf(arr[i]);
            arr.splice(item, 1);
        }
        
    }
}