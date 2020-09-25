//디렉토리에 있는 파일 목록😏 알아내기
//파일의 바이트크기가 같이 나옵니다. stat😁

const fs = require('fs')

/* fs.readdir('tmp', function(e, files) {
    for (let file of files) {
        let filename = 'tmp/' + file;
        let stat = fs.statSync(filename);
        console.log(file, '\t', stat.size, '바이트');
    }
}); */

//파일 삭제하기 fs.unlink 😎
/* fs.unlink('tmp/tmp.txt', error => {
    if (error)
    console.log(error);
}); */

//파일 이름 변경하기 fs.rename  sync에서 tmp로 바뀜😁
fs.rename('tmp/sync.txt', 'tmp/tmp.txt', error => {
    if (error)
    console.log(error);
});