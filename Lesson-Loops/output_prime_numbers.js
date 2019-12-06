let number = prompt("Enter the number greater than 2");

if (number >= 2) {
    for (let i = 2; i <= number; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if(i % j == 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime) {
            alert(i);
        }
    }
} else {
    alert("Wrong number!");
}