const http = require('http');
const url = require('url');

let server = http.createServer((req, res) => {          //오디오때와 비슷..한데 복잡했졌당ㅋㅋ
    let pathname = url.parse(req.url).pathname;     //구분지을 수 있다....??🤔
    console.log(pathname);
    let html;
    if (pathname === '/')
        html = '/';
    else if (pathname === '/file')
        html = '/file';
    else   
        html = pathname;
    res.end(`<h1>${html}</h1>`);
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});  
