function callThreeTimes(callback) {
    if (callback) {         //언디파인드가 아니면
        for (let i=0; i<3; i++) {
            callback();
        }        
    } else {
        console.log('callback 함수를 정의하세요');
    }
}
callThreeTimes(function() {     //펑션이라는 익명함수를 넣어줬다
    console.log('호출');
});

callThreeTimes(); //이것이 오류의 원인


