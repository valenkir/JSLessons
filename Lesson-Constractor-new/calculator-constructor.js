function Calculator() {
    return calculator = {

        firstValue: 0,
        secondValue: 0,
        
        read() {
            firstValue = +prompt("Enter the first value", 0);
            secondValue = +prompt("Enter the second value", 0);
        },

        sum() {
            return firstValue + secondValue;
        },

        mul() {
            return firstValue * secondValue;
        },
    } 
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );