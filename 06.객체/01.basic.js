/* [6] 객체
JSON형식으로 주고받으면 문제가 없다
(자바JAVA 파이썬Python 간에서도) */

// 배열(Array) 대괄호 숫자 입력
let arrayPersonInfo = ['홍길동', '남자', 29];
console.log(arrayPersonInfo[0], arrayPersonInfo[1], arrayPersonInfo[2]); //홍길동 남자 29

//객체 (Object) 중괄호사용 key, value 쌍으로 구성
let personInfo = {
    'name':'홍길동',
    'gender' : '남자',
    'age' : 29
}
//let g = 'gender' 라고해도 문제없다 
//방법1))
console.log(personInfo['name'], personInfo['gender'], personInfo['age']); //홍길동 남자 29
///이건 별로 안좋은 방법 .. 메리트가 없어요~~ㅜㅜㅜㅜ


///이게 좋은 방법 파이썬에서는 딕셔너리, 자바스트립트에서는 오브젝, 자바에서는 map이라고해요
//한글 (나이) 입력가능하긴한데 다른 랭기지에서 잘받을지는 의문..
let person = {
    name: '홍길동', gender: '남자', 나이: 29
}
//방법2))
console.log(person.name, person.gender, person.나이); //홍길동 남자 29

console.log(process.env.JAVA_HOME); //키가 되고 밸류출력된것임 C:\Program Files\Java\jdk-14.0.2 