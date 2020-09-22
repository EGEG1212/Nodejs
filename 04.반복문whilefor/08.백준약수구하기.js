/* for (let i=2; i<1000; i++) {
    약수구하기
    for(let k=1; k<i; k++) {
        약수배열
    }
    약수배열의 합
}
 */


for (let i=2; i<10000; i++) {
    //약수구하기
    let divArray = [];
    for (let k=1; k<i; K++) {
        if (i % k === 0) {
            divArray.push(k);
        }
    }
    //약수의합구하기
    let sum = 0;
    for (let divisor of divArray)
        sum += divisor;
    //숫자비교하기
    if (i === sum) {
        console.log(i);
        console.log(divArray);
    }
}