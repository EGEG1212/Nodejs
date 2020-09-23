/* 5. 세자리 수를 곱해 만들 수 있는 가장 큰 대칭수(palindrome)와
    세자리 수를 구하시오.
    단, 대칭수는 12321과 같은 수를 의미함.​ */
/*     가장 큰 6자리 대칭수 먼저, 그 다음 5자리 대칭수 검사
    대칭수는 abccba의 형태
    자리수로 차례대로 나눠봐서 나누어떨어지고 
        몫이 3자리 수인 경우를 찾으면 두 3자리 수의 곱 */
//palindrome 팰린드롬 함수만들기 _논리 전개하는데 필요한 
// 993*913 = 906,609 답은찾았는데 허허허 👀

//쪼개서 쪼개서 로직로직
//스트링으로 받아야 편하니까 스트링str
function isPailndrome(srt) {
    let len = str.length;
    for (let i=0; i<parseInt(len/2); i++) {
        if (stt[i] === str[len-1-i]) //str0 str4하고 비교, ㄴstr1 str3 하교 비교
            return false; // 맞으니까  더 이상 볼것도 없이 나와라
    }
    return true;
}
/* console.log(isPailndrome('소주 만병만 주소')); //true나와용 */
let maxPal = 0;
let maxX, maxY;
for (let i=100; i<=999; i++) {
    for (let k=i; k<=999; k++) {
        let product = i * k; //팰린드롬인지아닌지 확인
        if (isPailndrome(String(product))) {
            if (product > maxPal) {
                    maxPal = poduct;
                    maxX = i;
                    maxY = k;
            }
        }
    }
}
console.log(maxX, maxY, maxPal); 
//어마어마하게 팰린드롬이 많이 나옴(맥시멈을 찾아야하는데)