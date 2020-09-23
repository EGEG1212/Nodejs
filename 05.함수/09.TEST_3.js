/* 3. 디지털 시계에 하루동안(00:00~23:59) 3이 표시되는 시간을 
    초로 환산하면 총 몇 초(second) 인가? */
/*     00:03
    00:13
    00:23 3들어간 시.분 골라내어 *60초
    03:00
    03:03
    03:13
    03:23 숫자를 스트링으로. 
     */

let total = 0;                           //0으로 초기화
for(let hour=0; hour<=23; hour++) {
    for (let min=0; min<60; min++) {
        let time = hour + ':' + min;     //트릭 스트링으로 바꾸고
        if (time.indexOf('3')>=0)       //indexOf사용해서 3을 찾는다.
            total +=60;
    }
}
console.log(total); //29700 초 