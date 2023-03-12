'use strict'
function durationBetweenDates (initalDate = "14 Jan 1992", endDate = "11 March 2023", timeUnit = "days") {
    let duration;
    const timeUnitsTable = {
        seconds: 1000,
        minutes: 60000,
        hours: 3600000,
        days: 86400000
    }
    const milisecInitalDate = new Date(initalDate);
    const milisecEndDate = new Date(endDate);
    let milisecDif = milisecEndDate - milisecInitalDate;
    if (milisecDif < 0) {
        milisecDif *= -1;
    };
    switch (true) {
        case timeUnit === "seconds":
            duration = milisecDif / timeUnitsTable.seconds;
            break;
        case timeUnit === "minutes":
            duration = milisecDif / timeUnitsTable.minutes;
            break;
        case timeUnit === "hours":
            duration = milisecDif / timeUnitsTable.hours;
            break;
        default:
            duration = milisecDif / timeUnitsTable.days;
            break;
    }
    return `${duration} ${timeUnit}`;
}

console.log(durationBetweenDates('14 Jan 1992', '11 March 2023', 'minutes'));