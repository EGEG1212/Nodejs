//시간간격구하기 24p
//수능일 몇일 남았나.. 72일 남았다
let today = new Date(2020, 9, 23);
let examDay = new Date(2020, 12, 3);

let diff = examDay.getTime() - today.getTime();
let dDay = diff / (1000 * 60 * 60 * 24)
console.log(`오늘은 수능 D-${dDay}일 입니다.`);
