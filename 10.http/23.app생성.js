const http = require('http');
const url = require('url')
const qs = require('querystring');         
const fs = require('fs');
const view = require('./view/index');
const template = require('./view/template');

http.createServer(function(req, res) {
    let pathname = url.parse(req.url).pathname;
    let query = url.parse(req.url, true).query;
    console.log(pathname, query.id);                   //잘안될때 이걸 찍어보라~🤔
    switch(pathname) {
    case '/':                               //루트일경우 처리하는 방법(메인화면)
        if  (query.id === undefined) {
            fs.readdir('data', function(error, filelist) {       //데이터 폴더를 주면
                let list = template.listGen(filelist);
                let content = template.HOME_CONTENTS;
                let control = template.buttonGen();
                let html = view.index('Web 기술', list, content, control);
                res.end(html);                
            });
        } else {
            fs.readdir('data', function(error, filelist) {       //데이터 폴더를 주면
                let list = template.listGen(filelist);
                let title = query.id;
                let control = template.buttonGen(title);
                let filename = 'data/' + title + '.txt';
                fs.readFile(filename, 'utf8', (error, buffer) => {
                    let html = view.index(title, list, buffer, control);
                    res.end(html);   
            });
        });
    }
        break;              //확실하게 브레이크🙌해줘야 에러안납니다~
    case '/create':         //생성부분 시작!!! 폼과 제출버튼 만들어주려고
        fs.readdir('data', function(error, filelist) {       
            let list = template.listGen(filelist);
            let content = template.createForm(); //만드는 폼을주고
            let control = template.buttonGen(); //버튼유지
            let html = view.index('글 생성', list, content, control);
            res.end(html);   
        });
        break;
    case '/create_proc' :               //proc은 세트다 세트✨
        let body = '';                      //post파라미터 받는 방법✨
        req.on('data', function(data) {  //긴~데이터가 들어오면 바디에 붙이고붙이고
            body += data;
        })
        req.on('end', function() {
            let param = qs.parse(body);             //여기까지 post파라미터 받는 방법
            let filepath = 'data/' + param.subject + '.txt' ;       //redirection을 수정해서
            fs.writeFile(filepath, param.description, error => {
                res.writeHead(302,{'Location': `/?id=${param.subject}`});
                res.end();
            });
        });
        break;                          //여기까지 생성부분
    default:
        res.writeHead(404);
        res.end();
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});  