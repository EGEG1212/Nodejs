let today = new Date();
console.log(today);

setTimeout(function() {
    console.log('3초 경과');
    today = new Date();
    console.log(today);
}, 3000);


setInterval(() => {
    console.log('setInterval()');
}, 1000);       //끝내려면 ctrl C  //1초간격 셋인터벌찍힘

setInterval(() => {
    console.log(new Date());
}, 1000);       //끝내려면 ctrl C //1초간격 시간찍힘



//5초만에 끝내는거 메모삭제됨 ㅠㅠ



let today = new Date();
console.log(today);

setTimeout(() => {
    console.log('3초 경과');
}, 3000);

setTimeout(function() {
    clearInterval(si);    
}, 5000);

let si = setInterval(() => {
    console.log(new Date());
}, 1000);  
//콜백함수를써서 3초경과찍히고 5초만에끝냄