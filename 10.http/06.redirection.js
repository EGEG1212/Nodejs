const http = require('http');

let server = http.createServer(function(request, response) {
    response.writeHead(302,                              //Redirection Found 헤더에 값을 잘 주면 동작합니다🤔
        {'Location': 'http://www.hanbit.co.kr'});
    response.end();
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
};  


//http status code 구글링
//CMD에서 실행시키고
//크롬에서 리로드... F12개발자도구에서 Network