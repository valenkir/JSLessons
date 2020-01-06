let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

  function byField(fieldName) {
      return function (a, b) {
        return a[fieldName] > b[fieldName] ? 1 : -1;
      }
  }