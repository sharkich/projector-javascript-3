'use strict'
function optimizer (data) {
    const objArray = Object.entries(data);
    const modArray = objArray.map(a => a.map((b) => {
        if (Number.isNaN(Number(b))) {
          return b.toLowerCase();
        } else {
          return Number(b).toFixed(2)
        }
      }))
    return Object.fromEntries(modArray);
}