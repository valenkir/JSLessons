// the first variant

let age = prompt("Enter the age");

if (age <= 14 || age >= 90) {
    alert("Great! The age is outside the defined range");
} else {
    alert("The age is within the defined range");
}

//the second variant

let age2 = prompt("Enter the age");

if (!(age2 >= 14 && age2 <= 90)){
    alert("Great! The age is outside the defined range");
} else {
    alert("Oh, no! The age is within the defined range");
}