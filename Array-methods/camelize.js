function camelize(str) {
    let strArr = str.split("-");
    let upperCaseLetter;

    for (i = 1; i < strArr.length; i++) {
        
        if (strArr == "") {
            continue;
        }
        
        upperCaseLetter = strArr[i][0].toUpperCase();
        strArr[i] = upperCaseLetter + strArr[i].slice(1);
    }
    
    return strArr.join("");
}