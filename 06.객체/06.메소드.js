/* let fn = function () {
    console.log('익명함수입니다.');
}
fn(); // 불려집니다~~ */

//함수를 포함하는 객체 this를 꼭👌 넣어줘야함(파이썬의 self같은거)
//메소드는 제이슨으로 못만든다
//데이터를 담는 큰 오브젝트, 메소드 포함한 
let name = '외부 이름' ;
let price = '외부 가격' ;
let product = {
    name: '치약', 
    vol: 500, 
    price: 3000,
    print: function() {
        console.log(`제품명은 ${name}이고, 가격은 ${price}입니다.`);//외부에서 지정된 값을 받아 출력
        console.log(`제품명은 ${this.name}이고, 가격은 ${this.price}입니다.`); //안에있는 값을 받아 출력
    },
    string: function() {                                                       //일반적인 방법
        return `제품명은 ${this.name}이고, 가격은 ${this.price}입니다.`;
    }
}

product.print()
console.log(product.string());

/* 제품명은 외부 이름이고, 가격은 외부 가격입니다.
제품명은 치약이고, 가격은 3000입니다. */