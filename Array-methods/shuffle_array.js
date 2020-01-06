const count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };
  
  for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    let newArr = shuffle(array);
    count[newArr.join('')]++;
  }
  
  // show counts of all possible permutations
  for (let key in count) {
    alert(`${key}: ${count[key]}`);
  }

function shuffle (arr) {
    let arrWithKeys = [];
    
    for(let item of arr) {
        let random = Math.random();
        arrWithKeys.push(
            {
                key: random,
                value: item
            }
        )
    }

    arrWithKeys.sort((a, b) => a.key - b.key);
    arr = arrWithKeys.map(item => item.value);
    return arr;
}