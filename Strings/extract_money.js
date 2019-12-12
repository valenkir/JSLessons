alert(extractCurrencyValue("$1293"));

function extractCurrencyValue(str){
    let amount = str.slice(1);
    return +amount;
}