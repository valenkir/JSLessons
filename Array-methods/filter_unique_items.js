let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
alert( unique(strings) ); // Hare, Krishna, :-O

function unique(arr) {
    let unique = [];

    for (let item of arr){
        if (!unique.includes(item)) {
            unique.push(item);
        }
    }

    return unique;
}
