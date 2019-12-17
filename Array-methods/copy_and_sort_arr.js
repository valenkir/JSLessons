let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted );
alert( arr ); 

function copySorted(arr) {
    let copied = arr.slice();
    copied.sort();
    return copied;
}