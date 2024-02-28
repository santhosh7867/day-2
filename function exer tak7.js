function findDaysInMonth(month, year) {
    if (month < 1 || month > 12) {
      console.log("Invalid month");
    } else if (month === 2) {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(" The month has 29 days");
      } else {
        console.log(" The month has 28 days");
      }
    } else if ([4, 6, 9, 11].includes(month)) {
      console.log(" The month has 30 days");
    } else {
      console.log(" The month has 31 days");
    }
          }
  const month = 2;
  const year = 2012;
  findDaysInMonth(month, year);