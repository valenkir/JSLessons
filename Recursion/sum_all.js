function sumToLoop (n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

function sumToRec (n) {
    if (n == 1) {
        return n;
    }
    return n + sumToRec(n - 1);

}

function sumToProgression (n) {
    let a1 = 1;
    let d = 1;
    let an = a1 + d * (n - 1);
    return (n * (a1 + an)) / 2;
}

