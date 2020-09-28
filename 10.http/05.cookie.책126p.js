const http = require('http');

let server = http.createServer(function(request, response) {
    console.log(request.headers.cookie);
    let cookie = request.headers.cookie;                  //쿠키 정보를 받을 수 있다
    response.writeHead(200, {                               //Status code, OK)
        'Content-Type': 'text/html',
        'Set-Cookie': ['breakfast = toast', 'dinner = chicken']
    });
        response.end(`<h1>${cookie}</h1>`);

});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});  

//F12- Application에서 쿠키 확인가능
//삭제해도 리로드하면 다시 나온다.. 무시무시한 쿠키놈ㅋㅋ