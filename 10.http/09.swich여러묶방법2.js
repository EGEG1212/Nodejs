const http = require('http');
const url = require('url');
const fs = require('fs');
const view = require('./view/01.first');
                    //여러가지 묶어서 해보자 크롬에서 localhost:3000 접속하면
                    // localhost:3000/image 등등 접속가능
                    // 👍swich가 훨씬 깔끔하다👍
                    // 패스네임으로 구분

let server = http.createServer((req, res) => {         
    let pathname = url.parse(req.url).pathname;    
    switch(pathname) {
    case '/':
        let html = view.first();
        res.end(html);
        break;
    case '/image':
        fs.readFile('media/Elvis2.png', (error, image) => {    
            res.writeHead(200, {'Content-Type': 'image/png'});  
            res.end(image);      
        });
        break;
    case '/audio':
        fs.readFile('media/EmbraceableYou.mp3', (error, audio) => {     
            res.writeHead(200, {'Content-Type': 'audio/mp3'});  
            res.end(audio);   
        })
        break; 
    default:
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end();
    }
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});  
