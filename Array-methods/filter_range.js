function filterRange(arr, a, b) {
    
    let filtered = [];

    for(let i = 0; i < arr.length; i++) {

        if(arr[i] >= a && arr[i] <= b) {
            filtered.push(arr[i]);
        }
    }

    return filtered;
}