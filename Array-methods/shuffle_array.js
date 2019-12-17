let arr = [1, 2, 3];

alert(shuffle(arr));
alert(shuffle(arr));
alert(shuffle(arr));
alert(shuffle(arr));

function shuffle (arr) {
    let arrWithKeys = [];
    
    for(let item of arr) {
        alert(item);
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