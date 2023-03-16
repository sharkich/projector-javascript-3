'use strict'
function durationBetweenDates (initalDateStr = "14 Jan 1992", endDateStr = "11 March 2023", timeUnit = "days") {
    const timeUnitsTable = {
        seconds: 1000,
        minutes: 60000,
        hours: 3600000,
        days: 86400000
    }
    const initalDateObj = new Date(initalDateStr);
    const endDateObj = new Date(endDateStr);
    const dateDif = Math.abs(endDateObj - initalDateObj);
    const duration = dateDif / timeUnitsTable[timeUnit];
    if (isNaN(duration)) {
        return 'Incorrenct entry. Please try again.';
    }
    return `${duration} ${timeUnit}`;
}