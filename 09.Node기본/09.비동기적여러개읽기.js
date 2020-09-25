//여러개 파일 비동기적으로 읽기

const fs = require('fs');

fs.readFile('tmp/a.txt', 'utf8', (e, bufA) => {
    console.log(bufA);
});
fs.readFile('tmp/b.txt', 'utf8', (e, bufB) => {
    console.log(bufB);
});
fs.readFile('tmp/c.txt', 'utf8', (e, bufC) => {
    console.log(bufC);
});

//순서대로 안읽히고 ~~ 순서를 알수없다 😚 그때그때 달라요
//이걸 극복하는 방법을 또 배워야한다.??? 동기적쓰면 되지않나영🎈
//비동기는 입문하려면 영상 3개이상은 봐야함 'ㅁ'!!!!리액트시 필요

//순서보장 방법 _안에안에 넣어버렷! 
//..이것이 콜백지옥_ 또해결하는방법이있음ㅋㅋ
fs.readFile('tmp/a.txt', 'utf8', (e, bufA) => {
    fs.readFile('tmp/b.txt', 'utf8', (e, bufB) => {
        fs.readFile('tmp/c.txt', 'utf8', (e, bufC) => {
            console.log(bufA);
            console.log(bufB);
            console.log(bufC);
        });
    });
});