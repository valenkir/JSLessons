let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(date) );

function getLocalDay(date) {
    if (date.getDay() == 0) {
        return 7;
    }
    return date.getDay();
}