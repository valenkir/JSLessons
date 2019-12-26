function fib(n) {
    let first = 1;
    let second = 1;

    for (let i = 3; i <= n; i++) {
        let interim = second;
        second = first + interim;
        first = interim;
    }

    return second;
}