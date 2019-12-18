let user = {
    name: 'John',
    age: 30
  };
  
alert( count(user) );

function count(obj) {
    return Object.values(obj).reduce((counter) => counter += 1, 0);
}