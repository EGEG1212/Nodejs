//사용자가 양수입력안하고 음수입력했을때 오류뜸..
let size = -10;

try {
    let array = new Array(size);    
} catch (e) {
    console.log(e.name);
    console.log(e.message);
    console.log('양의 정수를 입력하세요.');
}



