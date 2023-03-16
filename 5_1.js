/* const startDateStr = '02 Aug 1985';
const endDateStr = '03 Aug 1985'; */

const startDateStr = '31 Jan 2022';
const endDateStr = '03 Feb 2021'
function dateDiff(startDateStr, endDateStr, unit = 'seconds') {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);
  let result = Math.abs(endDate - startDate);
  switch (unit) {
    case 'seconds' :
      result = result / 1000;
      break;
    case "minutes" :
      result = result / 60000;
      break;
    case "hours" :
      result = result / (1000 * 60 * 60);
      break;
     case "days" :
      result = result / (1000 * 60 * 60 * 24);
      break;
  }
  console.log(result);
}
dateDiff(endDateStr, startDateStr, 'seconds');