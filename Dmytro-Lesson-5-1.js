function dateDiff(startDateStr, endDateStr, unit = 'seconds') {
    const startDate = Date.parse(startDateStr);
    const endDate = Date.parse(endDateStr);
    let result = Math.abs(endDate - startDate);
    switch (unit) {
        case 'seconds' :
            result = result / 1000;
          break;
        case "minutes" :
          result = result / (1000 * 60);
          break;
      case "hours" :
          result = result / (1000 * 60 * 60);
          break;
       case "days" :
          result = result / (1000 * 60 * 60 * 24);
          break;
    }
    return result;
  }
  console.log(dateDiff('02 Aug 1985', '03 Aug 1985'))
  console.log(dateDiff('31 Jan 2022', '03 Feb 2021', 'days'));