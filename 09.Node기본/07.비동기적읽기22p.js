//비동기적 파일읽기 _ 익숙해질것 

const fs = require('fs');
fs.readFile('tmp/textfile.txt', 'utf8', function(error, buffer){
    console.log(buffer);
});    
//파일을 읽어서 버퍼안에서 처리하라라는 뜻 