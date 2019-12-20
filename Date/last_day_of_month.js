function getLastDayOfMonth(year, month) {
    let dateOfMonth = new Date (year, month);
    let days = 0;
    let nextMonth = dateOfMonth.getMonth() + 1;

    while(dateOfMonth.getMonth() < nextMonth) {
        
        dateOfMonth.setDate(dateOfMonth.getDate() + 1);
        days++;
    }

    return days; 
}