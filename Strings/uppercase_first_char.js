function ucFirst(str) {
    let result = str[0].toUpperCase() + str.slice(1);
    return result;
}

let str = prompt("Enter a string");
alert(ucFirst(str));