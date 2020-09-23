//Date객체 21p.

let date = new Date();
console.log(`현재 시간은 ${date}입니다.`);

//유닉스 데이트로 바꾸어 일 시간 분 초를 계산한다.
let unixDate = new Date(1600000000000); //1970.01.01.0시~ msec단위시계가 돌아갔고..
console.log(`unixDate 시간은 ${unixDate}입니다.`);

//문자열 기반으로 Date객체 생성
//let stringDate = new Date('Sun Sep 13 2020 21:26:40') //방법1
let stringDate = new Date('2020-09-23 14:50')           //방법2
console.log(`문자열로 만든 시간은 ${stringDate}입니다.`);

let elementDate = new Date(2020, 9-1, 23, 14, 50);
console.log(`요소로 만든 시간은 ${elementDate}입니다.`);