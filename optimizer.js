'use strict'

const priceData = {
  Apples: '23.4',
  BANANAS: '48',
  oRAngGEs: '48.7584',
   };

const optimizer = (data) => {
  const modArray = Object.entries(data).map(([key, value]) => {
    return [key, value] = [key.toLowerCase(), Number(value).toFixed(2)];
  })
  return Object.fromEntries(modArray);
}