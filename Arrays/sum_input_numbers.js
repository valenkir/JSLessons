let arr = sumInput();
alert(arr);


function sumInput(){
    let arrNumbers = [];
    let number = +prompt("Enter a number", 0);

    while(!isNaN(number) && number != "" && number != null){
        arrNumbers.push(number);
        number = +prompt("Enter a number", 0);
    }

    return sumNumbers(arrNumbers);
}

function sumNumbers(arr){
    let sum = 0;
    for (let num of arr){
        sum += num;
    }

    return sum;
}