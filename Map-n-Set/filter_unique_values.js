let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
  
alert( unique(values) ); // Hare, Krishna, :-O

function unique(arr) {
    let set = new Set ();
    for (let value of values){
        set.add(value);
    }

    let uniqueValues = Array.from(set);
    return uniqueValues;
}