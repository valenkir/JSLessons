let number;

do{
    number = prompt("Enter the number greater than 100", 0);
    if (number == null || number == '') {
        alert("Cancelled!");
        break;
    } else if(number <= 100) {
        alert("Wrong number!");
        continue;
    }
} while(number <= 100);