const http = require('http');
const url = require('url');
const fs = require('fs');
const view = require('./view/01.first');
                    //여러가지 묶어서 해보자 크롬에서 localhost:3000 접속하면
                    // localhost:3000/image 등등 접속가능

let server = http.createServer((req, res) => {         
    let pathname = url.parse(req.url).pathname;     //구분지을 수 있다....??🤔
    if (pathname === '/') {
        let html = view.first();
        res.end(html);
    } else if (pathname === '/image') {
        fs.readFile('media/Elvis2.png', (error, image) => {     //여기 이미지 
            res.writeHead(200, {'Content-Type': 'image/png'});  // 여기 mime type
            res.end(image);                         //여기 이미지
        });
    } else if (pathname === '/audio') {
        fs.readFile('media/EmbraceableYou.mp3', (error, audio) => {     //여기 오디오. 요기 같으면 잘 돌아감
            res.writeHead(200, {'Content-Type': 'audio/mp3'});  // 여기 mime type
            res.end(audio);                                   //여기 오디오. 요기 같으면 잘 돌아감
        })
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end();
    }
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});  
