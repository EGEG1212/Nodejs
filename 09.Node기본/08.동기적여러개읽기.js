//여러개 파일 동기적으로 읽기

const fs = require('fs');

let bufA = fs.readFileSync('tmp/a.txt', 'utf8');
let bufb = fs.readFileSync('tmp/b.txt', 'utf8');
let bufc = fs.readFileSync('tmp/c.txt', 'utf8');

console.log(bufA);
console.log(bufb);
console.log(bufc); //abc순서대로 출력되었다

//Q.파일내용이 길거나, 파일갯수가 여러개면... 문제겠네...?😯