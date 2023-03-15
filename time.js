'use strict'
function durationBetweenDates (initalDateStr = "14 Jan 1992", endDateStr = "11 March 2023", timeUnit = "days") {
    const timeUnitsTable = {
        seconds: 1000,
        minutes: 60000,
        hours: 3600000,
        days: 86400000
    }
    const InitalDateObj = new Date(initalDateStr);
    const EndDateObj = new Date(endDateStr);
    const DateDif = Math.abs(EndDateObj - InitalDateObj);
    const duration = DateDif / timeUnitsTable[timeUnit];
    return `${duration} ${timeUnit}`;
}

console.log(durationBetweenDates('15 Jan 1992', '13 jan 1992', 'hours'));