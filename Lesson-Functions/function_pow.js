function pow(x, n){
    if(isNatural(n)){
        let result = 1;
        for(let i=0; i<n; i++){
            result*=x;
        }
        return result;
    } else {
        return "Wront value!";
    }
}

function isNatural(n){
    if (n < 1 || n%1!=0){
        return false;
    }
    return true;
}