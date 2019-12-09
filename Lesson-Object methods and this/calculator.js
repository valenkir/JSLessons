let calculator = {

    firstValue: 0,
    secondValue: 0,
    
    read () {
        this.firstValue = +prompt("Enter the first value");
        this.secondValue = +prompt("Enter the second value");
    },
    sum() {
        return this.firstValue + this.secondValue;
    },
    mul() {
        return this.firstValue * this.secondValue;
    }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );