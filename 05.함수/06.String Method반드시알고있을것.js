//w3c] String Length - 속성이라 괄호가 안붙는다
let hello = '안녕하세요.'
console.log(hello.length);           //6

// String 내에서 문자열을 찾을 때 .indexOf .lastIndexOf .search
console.log(hello.indexOf('하'));   // 6 2(두번째칸이라고알려줌)
console.log(hello.indexOf('한'));  // 없으니까 -1이라고 알려줌

let str = "Please locate where 'locate' occurs!";
let pos = str.lastIndexOf("locate");
console.log(pos);

console.log(str.search('locate'));

//문자열내 일부 추출Extracting String Parts
str = "Apple, Banana, Kiwi";
let res = str.slice(7, 13); //시작인덱스, 끝인덱스
console.log(res);           //Banana
console.log(str.slice(-4));         //Kiwi

console.log(str.substr(7,6)); //Banana //시작인덱스, 갯수

//문자열을 대체 Replacing String Content
let newStr = str.replace(',', ':');  //한개만바뀜 Apple: Banana, Kiwi
console.log(newStr);
newStr = str.replace(/,/g, ':') //다바뀜 Apple: Banana: Kiwi
console.log(newStr);


//이런게 있다~~~
//패스워드 정규표현식  regular expression
//패스워드 규칙.. 대소문자,특수기호,숫자. 3가지이상섞어 8-10자리
//자바스크립트 패스워드 정규식 ' " 아니고 /이걸로끊음
//스트링에 정규표현식을 써서 막강하게 일을 처리할 수 있다.
//카톡내용긁어왔을때 ㅋ ㅎㅎ 이런거 지우는 표현식

//공백 제거 String.trim()
str = "       Hello World!        ";
console.log(str);
console.log(str.trim());

//문자 추출 Extracting String Characters
console.log(hello.charAt(2), hello[2]);  //하 하 같다.

//문자열을 Array로 변경 Converting a String to an Array
let txt = "a,b,c,d,e";
console.log(txt.split(','));        //[ 'a', 'b', 'c', 'd', 'e' ]


