let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
replaceMiddleItem(styles, "Classics");
alert(styles.shift());
styles.unshift("Rap", "Reggae");

//alert(styles);

function replaceMiddleItem(arr, elem) {
    let midIndex = Math.round(arr.length / 2) - 1;
    arr[midIndex] = elem;
}