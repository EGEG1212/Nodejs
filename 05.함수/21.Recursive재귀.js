//재귀적 호출 (Recursive call) 본인이 본인을 부르는게 가능
/* n! 팩토리얼
 ...헐 ㅋㅋㅋ n(n-1)!  */

function facto(n) {
    if (n === 0)
        return 1;
    return n * facto(n-1);
}
console.log(facto(5));
