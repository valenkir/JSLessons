function random(min, max) {
    let randomNumber = Math.random();
    while (!((randomNumber >= min) && (randomNumber < max))) {
        if(randomNumber < min){
            randomNumber *= 10;
        } else if (randomNumber >= max) {
            randomNumber = Math.random();
        }
    }
    return randomNumber;
}

let min = +prompt("First number?");
let max = +prompt("Second number?");
alert(random(min, max));
