//15p. 사용자가 아무리 잘못 입력을해도 프로그램이 안죽을 수 있다!!
// 메모이어서해야함 ..............

function callThreeTimes(callback) {
    if (callback) {         //언디파인드가 아니면
        for (let i=0; i<3; i++) {
            try {
                callback();
            } catch (e) {
                console.log(e.name);
                console.log(e.message);
                console.log('콜백 함수를 정의하세요.');
            } finally {
                console.log('fainally는 항상 실행됨');
            }
        }        
    }
}
callThreeTimes(function() {     //펑션이라는 익명함수를 넣어줬다
    console.log('호출');
});



