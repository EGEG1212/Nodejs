//익명함수 3p. 
//Anonymous 3가지방법 결과는 같다~~

let fn = function () {
    console.log( '익명 함수를 변수 fn이 참조');
}
fn();
console.log(fn);                            //[Function: fn]


function funcName() {
    console.log('함수 이름을 갖는 함수');
}
funcName();
console.log(funcName);                          //[Function: funcName]

//function대신 화살표 함수 (요즘 많이 쓰는 추세)
let arrowFunc = () => {
    console.log('화살표 함수');
}
arrowFunc();
console.log(arrowFunc);                             //[Function: arrowFunc]

let power = x => {
    return x*x;
}
let power2 = x => x*x 
console.log(power(10), power2(20));                 //100 400