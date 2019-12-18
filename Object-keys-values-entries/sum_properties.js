let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
alert( sumSalaries(salaries) );

function sumSalaries(obj) {
      let salariesSum = Object.values(obj);
      let result = 0;
      for ( let amount of salariesSum) {
          result += amount;
      }
      return result;
  }