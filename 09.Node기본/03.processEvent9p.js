//exit이벤트를 연결
process.on('exit', function(code ) {    //code라는 아귀먼트가 올수 있음11p.
    console.log('프로세스가 종료되었습니다.');
    console.log('exit code:', code);
});

//uncaughtException 이벤트를 연결
process.on('uncaughtException', error => { //에러의 내용이 궁금하면. CMD창에서 몇번째줄이라 알려줌
    console.log('예외가 발생했습니다.');
    console.log('uncaughtException 매개변수\n', error);
});

//임의의 이벤트를 연결했으나ㅏㅏㅏ?? 음? 출려안되고
process.on('message', () => {
    console.log('message event');
});

//예외를 강제로 발생
error.error.error();


//🙄왜 순서가... 
//강제로 error종료시키니 예외발생했다 뜨고 종료되었다 뜸
