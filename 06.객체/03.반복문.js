let persons = [                     //많이 사용하는방법입니다 😍 대괄호
    {name: '홍길동', gender: '남자', 나이: 29},
    {name: '성춘향', gender: '여자', 나이: 17}
];

for (let person of persons) {
    console.log(person.name, person.gernder, person.age);
}

//불러쓰는 방법
console.log(persons[0]);                //통으로 나와요 { name: '홍길동', gender: '남자', '나이': 29 }
console.log(persons[0].name);           //오브젝.네임은 홍길동만 나와요 