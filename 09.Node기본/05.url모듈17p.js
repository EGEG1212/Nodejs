const url = require('url'); //꼭 쓰는것
//필요한 프로그램있음 설치(지난번 모먼트처럼)

let urlSample = 'https://www.hanbit.co.kr/store/books/look.php?p_code=B4872223435'
let parsedObject = url.parse(urlSample);
console.log(parsedObject);  //쭉쭉 내용나옴
console.log(parsedObject.query);  //쿼리가 궁금할떄 



console.log(url.format(parsedObject));  //url주소 문자열로 찍어줌