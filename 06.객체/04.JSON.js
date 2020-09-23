//많이 사용하는방법입니다 😍 
let persons = [ 
    {name: '홍길동', gender: '남자', 나이: 29},
    {name: '성춘향', gender: '여자', 나이: 17}
]; 

//외부로 내보낼때는 stringify 
let externalForm = JSON.stringify(persons);
console.log(externalForm);


//폼을 받아서 내가 쓸때는parse
let p = JSON.parse(externalForm);
for (let person of p) {
    console.log(person.name, person.gender, person.age);
}