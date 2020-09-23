//교수님이 99%다 알려주셨지만.. 헛것을보았나ㅠㅠ06객체 18p.
/*  html += 포인트 */

let products = [
    { name: '바나나', price: 1200 },
    { name: '사과', price: 2000 },
    { name: '배', price: 3000 },
    { name: '고구마', price: 700 },
    { name: '감자', price: 600 },
    { name: '수박', price: 5000 },
];

let html = `<table>
    <tr>
        <th>품목</th>
        <th>가격</th>   
    </tr>    
`;

for (let product of products) {
    html += `
    <tr>
        <td>${product.name}</td>
        <td>${product.price}</td>   
    </tr>    
`;
}


html += '</table>'
console.log(html);


