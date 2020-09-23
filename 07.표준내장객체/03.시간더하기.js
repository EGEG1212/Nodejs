const { parseTwoDigitYear } = require("moment");

//Date객체 23p.

let date = new Date();

//현재 날짜에서 100을 더한 날짜 setDate getDate 를 이용
date.setDate(date.getDate() + 100);
console.log(date.toDateString());

//시간간격구하기 24p
