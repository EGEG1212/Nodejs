let cart = [            //array가 되어서  {}오브젝트안에 또다른 {}오브젝트가 들어왔어용
    {
        product: {name: '치약', vol: 500, price: 3000},
        quantity: 5
    },
    {
        product: {name: '비누', vol: 200, price: 1000},
        quantity: 4
    }
];

//제이슨으로 만들어볼까요
console.log(JSON.stringify(cart)); 
//[{"product":{"name":"치약","vol":500,"price":3000},"quantity":5},{"product":{"name":"비누","vol":200,"price":1000},"quantity":4}]

//치약의 단가를 알고싶으면
console.log(cart[0].product.price);

//카트의 합계를 구해보자.  👍반복문필요 19,000
let sum = 0 ;  //무조건 초기화 하고 시작
for (let item of cart ) {           //아이템이 오브젝트로 나온다        
    sum += item.product.price * item.quantity;
}
console.log(sum);