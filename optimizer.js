'use strict'
function optimizer (data) {
    const objArray = Object.entries(data);
    const modArray = objArray.map(entryPair => 
        entryPair.map((entry, index) => {
        index === 0 ? entry = entry.toLowerCase() : entry = entry.toFixed(2);
        return entry;
     }))
 return Object.fromEntries(modArray);
}
