const strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];

function unique(arr) {
    let unique = [];

    for (let item of arr) {
        
        let arrayIncludesItem = unique.includes(item);

        if (!arrayIncludesItem) {
            unique.push(item);
        }
    }

    return unique;
}

  
alert( unique(strings) ); // Hare, Krishna, :-O