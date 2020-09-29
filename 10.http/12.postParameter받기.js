const http = require('http');
const url = require('url')
const qs = require('querystring');          // querystring신기술ㅋㅋ
const fs = require('fs');

http.createServer(function(req, res) {
    let pathname = url.parse(req.url).pathname;
    if (pathname === '/') { // 이것이 첫 화면. 제출버튼 누르니
        fs.readFile('view/12.form.html', 'utf8', (error, html) => {
            res.end(html)
        });
    } else if (pathname === '/proc') {
        let body = '';
        req.on('data', function(data) { //긴~데이터가 들어오면 바디에 붙이고붙이고
            body += data;
        })
        req.on('end', function() {
            let param = qs.parse(body);
            console.log(param);
            console.log(param.uid, param.pwd);
            res.end(`<h1>${JSON.stringify(param)}</h1>`);
        });
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});  