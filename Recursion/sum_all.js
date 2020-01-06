function sumToLoop (n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

function sumToRec (number) {
    if (number == 1) {
        return number;
    }
    return number + sumToRec(number - 1);

}

function sumToProgression (number) {
    const initialTerm = 1;
    const difference = 1;
    let nthTerm = initialTerm + difference * (number - 1);
    return (number * (initialTerm + nthTerm)) / 2;
}

