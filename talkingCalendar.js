// Takes in a date string with format YYYY/MM/DD and returns a new human readable date that looks like December 2nd, 2017
let talkingCalendar = function(dateString) {
  let parsedDate = dateString.split('/');
  let year = Number(parsedDate[0]);
  let numMonth = Number(parsedDate[1]);
  let date = Number(parsedDate[2]);

  switch (numMonth % 10) {
    case 1:
      return `${months[numMonth]} ${date}st, ${year}`;
    case 2:
      return `${months[numMonth]} ${date}nd, ${year}`;
    case 3:
      return `${months[numMonth]} ${date}rd, ${year}`;
    default:
      return `${months[numMonth]} ${date}th, ${year}`;
  }
};

const months = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December'
};

// const suffix = {
//   1: 'st',
//   2: 'nd',
//   3: 'rd'
// };

//////////
// TEST //
//////////

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));