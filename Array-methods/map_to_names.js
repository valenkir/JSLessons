const john = { name: "John", age: 25 };
const pete = { name: "Pete", age: 30 };
const mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(user => ' ' + user.name);

alert( names ); 

