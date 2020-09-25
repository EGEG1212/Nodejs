//동기적으로 파일 읽기
const fs = require('fs'); //동기적으로 파일을 읽어들이려면 제일먼저 입력필수

//Binary data읽기
let buffer = fs.readFileSync('tmp/textfile.txt') //tmp폴더안에 파일을 읽어서 버퍼에 담아둘꺼야~
console.log(buffer);
console.log(buffer.toString()); //16진수와 함께 파일 내용이 보여짐 'this is a textfile.txt'

//Text dataㅇ 읽기 /더 쉽다
let text = fs.readFileSync('tmp/textfile.txt', 'utf8'); //옵션utf8을 줬더니 글자만 뙇!!
console.log(text);