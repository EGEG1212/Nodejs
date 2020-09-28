const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
    fs.readFile('view/02.any.html', 'utf8', (error, html) => { //순서중요!!!!!
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
    })
});

server.listen(3000);

//최초접속하는 파일 인덱스는 이런 방법으로 (파일 보내는)
///순서중요!!!!!!!!

//그 외 방법들은 01.서버기본방법으로 보통 한다.