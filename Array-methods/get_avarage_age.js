const john = { name: "John", age: 25 };
const pete = { name: "Pete", age: 30 };
const mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

function getAverageAge(arr) {
    let avarageAge = arr.map(user => user.age);
    let result = 0;
    for (let age of avarageAge) {
        result += age;
    }

    return Math.round(result / avarageAge.length);
}