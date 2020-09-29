const http = require('http');
const url = require('url')
const qs = require('querystring');         
const fs = require('fs');
const view = require('./view/index');

http.createServer(function(req, res) {
    let pathname = url.parse(req.url).pathname;
    switch(pathname) {
    case '/':                             //루트일경우 처리하는 방법
        fs.readdir('data', function(error, filelist) {       //데이터 폴더를 주면
            let list = '';
            for (let file of filelist) {
                let filename = file.substring(0, file.length-4); //파일명의txt를떼려고
                list += `<li><a href="/?id=${filename}">${filename}</a></li>`
            }
            let html = view.index(list);
            res.end(html);                
        }) 
        break; 
    default:
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end();
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});  