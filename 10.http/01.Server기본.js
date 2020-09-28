const http = require('http');
const view = require('./view/01.first');

let server = http.createServer(function(request, response) {
    //console.log(request); 너무 기니까 ~ 생략 
    let html = view.first();
    response.writeHead(200,      //Status code, OK)
        //{'Content-Type': 'text/html'}); //이것이 디폴트, 생략해도 됨_mim type 책125p
        {'Content-Type': 'text/html'});
        response.end(html);

});

server.listen(3000);  //보통 nodeJS에서사용하는 포트번호 0~65535 
//내가만든건 뒤쪽으로 하려고 
//포트80 http기본으로쓰는데 생략되어있음
//포트23 메일, 포트25는 또 다른 애가.. 
//낮은 포트번호에 위치 Well Known Port
//자동으로 부여'ㅁ'???


//CMD에 돌려야!
//크롬에서 http://localhost:3000/  내 자신pc를 부르다....
//크롬에서 First Sever 출력 🥰

//좋은점은 아귀먼트를 줄 수 있다 
//HTML이 아닌 펑션을 주는 방법 