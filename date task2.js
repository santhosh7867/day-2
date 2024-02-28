function getDaysInMonth(month, year) {
    let date = new Date(year, month -1,1); 
    date.setMonth(date.getMonth() + 1);
    date.setDate(date.getDate() - 1);
    return date.getDate();
  }
  console.log(getDaysInMonth(1, 2012));
  console.log(getDaysInMonth(2, 2012)); 
  console.log(getDaysInMonth(9, 2012)); 
  console.log(getDaysInMonth(12, 2012));