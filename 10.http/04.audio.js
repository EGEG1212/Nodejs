const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
    fs.readFile('media/EmbraceableYou.mp3', (error, x) => {     //여기 오디오. 요기 같으면 잘 돌아감
        res.writeHead(200, {'Content-Type': 'audio/mp3'});  // 여기 mime type
        res.end(x);                                   //여기 오디오. 요기 같으면 잘 돌아감
    })
});

server.listen(3000);

//최초접속하는 파일 인덱스는 이런 방법으로 (파일 보내는)
///순서중요!!!!!!!!1

//그 외 방법들은 01.서버기본방법으로 보통 한다.