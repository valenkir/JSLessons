const john = { name: "John", surname: "Smith", id: 1 };
const pete = { name: "Pete", surname: "Hunt", id: 2 };
const mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => ({fullName: `${user.name} ${user.surname}`, id: user.id})); //template literal + placeholder

alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // John Smith

