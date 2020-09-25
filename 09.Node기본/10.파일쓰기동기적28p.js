//동기적으로 파일쓰기

const fs = require('fs');

let buffer = `동기적 파일 쓰기 쓸내용
쓸내용을 적어라 2줄분량이다
`;
fs.writeFileSync('tmp/sync.txt', buffer); //위치에 싱크라는 파일을 만들꺼야
//파일내용도 들어감 이것이 쓰기다!!! +ㅁ+ 신기방기 😋 
//그런데 덮어씌여짐 ㅋㅋ


//기존 파일에 데이터를 추가하는 경우
buffer = '추가 데이터입니다.\n';
fs.writeFileSync('tmp/sync.txt', buffer, {flag: 'a'});  
//a의 뜻은 업앤드 node js 홈피에 써있음. 플래그옵션을 넣어준 방법