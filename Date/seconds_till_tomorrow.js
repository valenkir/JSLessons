function getSecondsToTomorrow() {
    const DAYINSECONDS = 86400;
    return DAYINSECONDS - getSecondsToday();;
}

function getSecondsToday(){
	let now = new Date();
    return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}