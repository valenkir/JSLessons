function formatDate(date) {
    let currentDate = new Date();
    if (((currentDate - date) / 1000) < 1) {
        return "right now";
    } else if (((currentDate - date) / 60000) < 1) {
        let seconds = (currentDate - date) / 1000;
        return seconds + " sec. ago";
    } else if (((currentDate - date) / 3.6e+6) < 1) {
        let minutes = (currentDate - date) / 60000;
        return minutes + " min. ago";
    } else {
        let year = date.getFullYear().toString().slice(2);
        let dateArr = [
            date.getDate(),
            date.getMonth() + 1,
            year,
            date.getHours(),
            date.getMinutes()
        ]
        let result = dateArr.map((item) => {
            item = item.toString();
            if(item.length == 1){
                item = '0' + item; 
            }
            return item;
        });
        return result.slice(0, 3).join('.') + ' ' + dateArr.slice(3).join(':');
    }
}