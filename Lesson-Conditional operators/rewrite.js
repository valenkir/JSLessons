//Rewrite 'if' into '?'

let result;
let a = 1;
let b = 4;
(a + b < 4) ? result = 'Below' : result = 'Over';
console.log(result);

//Rewrite 'if..else' into '?'

let login = prompt("Who are you?");

let message = (login == 'Employee') ? message = 'Hello':
            (login == 'Director') ? message = 'Greetings':
            (login == "") ? message = 'No login':
            message = '';

 console.log(message);