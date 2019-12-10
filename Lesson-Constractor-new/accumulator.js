function Accumulator(startingValue) {
    return accumulator = {
        value: startingValue,
        read() {
            let addition = +prompt("Enter the value that will be added to the current one", 0);
            this.value += addition;
        },
    };
}

let accumulator = new Accumulator(1); 

accumulator.read(); 
accumulator.read(); 

alert(accumulator.value); 