function checkSpam(str){
    const via = "viagra";
    const x3 = "xxx";
    let lowerCaseString = str.toLowerCase();

    if (lowerCaseString.indexOf(via) != -1 || lowerCaseString.indexOf(x3) != -1) {
       return true;
    }
    return false;
}