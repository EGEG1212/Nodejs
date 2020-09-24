//트라이 캐치안에 
try {
    error.error.error(); //의심가는 문구를 넣어봄
} catch (e) {      
    console.log(e.name);
    console.log(e.message);
}

console.log('프로그램 정상 종료');

/* ReferenceError
error is not defined
프로그램 정상 종료 */