function Calculator() {
    return calculator = {

        firstValue: 0,
        secondValue: 0,
        
        read() {
            this.firstValue = +prompt("Enter the first value", 0);
            this.secondValue = +prompt("Enter the second value", 0);
        },

        sum() {
            return this.firstValue + this.secondValue;
        },

        mul() {
            return this.firstValue * this.secondValue;
        },
    } 
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );