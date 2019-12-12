function random(min, max) {

    min = Math.round(min);
    max = Math.round(max);
    let randomNumber;

    if (min == max){
        return min;
    } else {
        randomNumber = getNumber(min, max);
        randomNumber = Math.round(randomNumber);

        if(randomNumber > max){ //crutch ^^
            return randomNumber - 1;
        }
        return randomNumber;
    }
}

function getNumber(min, max){
    number = Math.random();
    while (!((number >= min) && (number <= max))) {
        number *= 10;
        if(number > max){
          number = Math.random();
        }
    }
    return number;
}

let min = +prompt("First number?");
let max = +prompt("Second number?");

alert(random(min, max));