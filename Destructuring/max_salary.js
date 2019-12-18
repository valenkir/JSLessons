let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

function topSalary(salaries) {
    let maxSalary = 0;
    let topName = null;
    for (let [name, salary] of Object.entries(salaries)){
        if (salary >= maxSalary){
            maxSalary = salary;
            topName = name;
        }
    }
    
    return topName;
}