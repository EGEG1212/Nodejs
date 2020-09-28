/* function randInt(from, to) {
    return Math.floor(Math.random()*(to - from+1)+from); //random0~0.9999까지
}
 */
// require 연결
//myModule 꼭 붙어야함


const myModule = require('./19.module');

for (let i=0; i<5; i++ ) {
    console.log(myModule.area(myModule.randInt(1, 5))); //1에서부터 5까지 결과를 뽑길 원함
}

//같은 파일에 있는 함수는 잘 들어옴.