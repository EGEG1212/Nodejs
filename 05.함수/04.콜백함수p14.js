//콜백함수 - 익명함수넣어주면됨
//사용하는 이유: 실행순서를 맞춰주기 위해서
//2.이벤트 핸들러(클릭했을때 어떻게 동작하라)

function callFiveTimes(callback) {
    for(let i=0; i<5; i++) {
        callback();
    }
}

callFiveTimes(function() {
    console.log('Function call');
});