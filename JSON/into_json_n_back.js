let user = {
    name: "John Smith",
    age: 35
  };

  let jsonUser = JSON.stringify(user);
  let newUser = JSON.parse(jsonUser);

  alert(newUser);