let firstValue = +prompt("The first number?");
let secondValue = +prompt("The second number?");
alert(sum(firstValue, secondValue));


function sum (firstNumber, secondNumber) {
    let sum = firstNumber + secondNumber;
    return +sum.toFixed(2);
}

