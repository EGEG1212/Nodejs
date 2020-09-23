/* 1. 양의 정수 N을 입력으로 받아 
    1부터 N까지 제곱의 합과
    합의 제곱을 구하시오. */    
/*교수님풀이     --1😁👍
썸오프스퀘어 제곱의 합초기화
곱하기가 우선순위가 있으니

합의제곱 구하기
let sum
for let */

rl.on('line', function (buf) {
    let number = parseInt(buf);

    let sumOfSquare = 0; //제곱의 합의 초기화
    for (let i=1; i<=number)
})






//1~10까지 제곱의 합
function sigma_n2(n) {
    let sum = 0;
    for (let i=1; i<=10; i++) {
        sum += i*i;
    }
    return sum;
}
console.log(sigma_n2(10));  //385

- 지수,거듭제곱,제곱근 등
. Math.exp(x)   : ex (e의 x 거듭제곱)
. Math.expm1(x) : ex-1 (e의 x 거듭제곱에서 1을 뺀 값)
. Math.pow(x,y) : xy
. Math.sqrt(x)  : √x (x의 제곱근), Math.pow(x,0.5)와 같음
. Math.cbrt(x)  : x1/3 (x의 세제곱근)
. Math.hypot(x,y,...) : 인수들의 제곱 합의 제곱근
자바스크립트 수치 활용
http://www.ktword.co.kr/abbr_view.php?m_temp1=5721 



//1~100까지 합...제곱을 해야하는데ㅔㅔㅔㅔㅔ
let sum = 0;
for(let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);
https://hianna.tistory.com/393