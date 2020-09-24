function callThreeTimes(callback) {
    for (let i=0; i<3; i++) {
        callback();
    }
    
}
callThreeTimes(function() { //펑션이라는 익명함수를 넣어줬다
    console.log('호출');
});



/* 호출
호출
호출 */