const moment = require('moment');

// Jan 1st 1970 00:00:00 am

// const date = moment();
// date.add(100, 'years').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

const someTimestamp = moment().valueOf();
console.log(someTimestamp);

const time = moment();
console.log(time.format('h:mm a'));