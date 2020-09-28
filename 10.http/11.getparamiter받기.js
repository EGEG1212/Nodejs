const http = require('http');
const url = require('url');

http.createServer((req, res)=> {
    let query = url.parse(req.url, true).query;
    console.log(query.name, query.region);             // GET parameta를 내 터미널에도 출력
    // GET parameta를 웹화면에 출력 localhost:3000?name=kim&region=Seoul
    res.end(`<h1>${JSON.stringify(query)}</h1>`)
}).listen(3000, () => { 
    console.log('Server running at http://localhost:3000');
}); 


/* const http = require('http');
const url = require('url');

http.createServer((req, res)=> {    //앞에 let server = 도 떼고
        //내용넣기//
}).listen(3000, () => { //요렇게 생긴건 좀 다른방법 //기억을해두라
    console.log('Server running at http://localhost:3000');
}); 
 */
//localhost:3000?name=kim&region=Seoul