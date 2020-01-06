let number;

do {
    number = prompt("Enter the number greater than 100", 0);
    if (number == null) {
        alert ("Cancelled!");
        break;
    } else {
        alert ("Wrong number!");
        continue;
    }
} while (number <= 100);