//매개변수 초기화
function print(name, count) {
    console.log(`${name}이/가 ${count}개 있습니다.`);
}

print('사과', 10);          //사과이/가 10개 있습니다.
print('감');            //감이/가 undefined개 있습니다.

function print(name, count) {
    if(!count) //undefined일때 0일 출력하라
    count = 0;
    console.log(`${name}이/가 ${count}개 있습니다.`);
}
print('감');     //감이/가 0개 있습니다.

function print(name, count) {
    count = !count ? 0 : count;  //삼항 선택1
    count = count ? count : 0; //삼항 선택2 (짧은게더좋응)
    console.log(`${name}이/가 ${count}개 있습니다.`);
}
print('감');
