function readNumber() {

    let value;
    
    do {
        value = prompt("Enter a number:");
        if (value == "" || value == null) {
            return null;
        } else if (!(isNaN(value))){
            return +value;
        }
    } while(true)
}

alert(readNumber());

