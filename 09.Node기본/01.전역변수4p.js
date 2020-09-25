const path = require('path'); //😵풀패스네임을 바꾸고싶을때?? 4p.

console.log(__dirname);         //형재 실행 중인 코드의 파일 경로<<시스템에서 많이 사용하는 변수
console.log(__filename);        //현재 실행 중인 코드의 폴더 경로
//https://nodejs.org/  _ path.join
//사용자가 올린 파일을 다른 저장소로 보내줘야하니까 
//파일네임을 받아서 연결하는 작업path.join
let filename = path.join(__dirname, 'txt', 'texfile.txt');
let dirtyname = path.join(__dirname, 'txt', '..', 'tmp', 'texfile.txt');
console.log(filename);
console.log(dirtyname);

