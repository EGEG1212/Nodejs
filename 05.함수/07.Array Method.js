    //Array생성
    let cars = ["Saab", "Volvo", "BMW"];
    let persons = new Array('Jhon', 'Mary')
    console.log(cars, persons); //[ 'Saab', 'Volvo', 'BMW' ] [ 'Jhon', 'Mary' ]

    console.log(cars.length, persons.length); // 3 2
    cars.sort();
    console.log(cars); //[ 'BMW', 'Saab', 'Volvo' ] 순서가 바뀜! sort

    //맨 마지막 엘리먼트
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits[fruits.length - 1]);         //Mango

    let html = '' ;
    html += '<ul>\n';
    for (let fruit of fruits) {
        html += '<il>' + fruit + '</li>\n'
    }
    html += '</ul>\n'
    console.log(html);

    fruits[fruits.length] = 'Cherry'; // 렝스에 체리추가됨
    console.log(fruits.join('-')); //하나로 묶는데 join -표시로 Banana-Orange-Apple-Mango-Cherry

    let popitem = fruits.pop(); //맨 끝 엘리먼트 제거pop <>push
    console.log(popitem, fruits); //pop 제일끝에있던 체리가 앞으로 튕겨져나감(꺼내는)

    let shiftItem = fruits.shift(); //제일 앞 엘리먼트 제거shift...많이사용은안하더라~
    console.log(shiftItem, fruits); //제일 앞에있던 엘리먼트 바나나가 앞으로 나옴

    fruits.unshift('Lemon'); //제일 앞 엘리먼트 추가unshift...많이사용은안하더라~
    console.log(fruits);

    delete fruits[0]; //파이썬에서는 없어지는데.. 빈칸이 나옴
    console.log(fruits);

    fruits = ["Banana", "Orange", "Apple", "Mango"];
    let spliceItem = fruits.splice(2, 1); //2번위치에 애플앞으로 꺼내기(그자리삭제)
    console.log(spliceItem, fruits);

    console.log(cars + fruits); //차와 과일이 같이 출력이 될뿐, 합쳐지진 않았다.
    console.log(cars.concat(fruits)); //차과 과일이 합쳐졌다! concat

    fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    let citrus = fruits.slice(2); //레몬부터 끝까지 잘려서 나옴 [ 'Lemon', 'Apple', 'Mango' ]
    console.log(citrus);
    citrus = fruits.slice(1, 3); //[ 'Orange', 'Lemon' ]
    console.log(citrus);

    console.log(fruits.toString()); //Banana,Orange,Lemon,Apple,Mango 스트링으로 찍힌답

    fruits.forEach(function(value, index)){ //포이치 이런게 있다고만 알고있어라 ... 
        console.log(index, value);
    }
