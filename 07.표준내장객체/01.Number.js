//남이 만든 객체 가져다 쓰기 (스트링객체15p)(Date객체20p)
//객체는 대문자로 시작😃
let numberFromLiteral = 273; //되도록 이렇게 쓰세요~
let numberFromConstructor = new Number (273); //피곤한방법

console.log(numberFromLiteral, numberFromConstructor );

let number = 273.12345;
console.log(number.toExponential()); //2.7312345e+2 지수표시로 나타낸 문자열
console.log(number.toFixed(2)); //273.12😃소수점 둘째자리까지toFixed(2)
console.log(number.toPrecision(6));//273.123 유효자리숫자가 6자리되게toPrecision(6)

console.log(Number.MAX_VALUE); //대문자로 시작하는건 상수!!! 자바스크립트가 나타낼 수 있는 최대 숫자 1.7976931348623157e+308
console.log(Number.MIN_VALUE); //자바스크립트가 나타낼 수 있는 최소 숫자5e-324
console.log(Number.MAX_SAFE_INTEGER); //양의 무한대 숫자(2의53승-1) 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);//음의 무한대 숫자(-2의53승) -9007199254740991

console.log(Math.pow(2,53)-1); //2의53승-1 9007199254740991