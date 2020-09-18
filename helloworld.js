console.log('Hello World');

let sum=0;
for (let i=1; i<=100; i++)
    sum += i;

console.log(`1에서 100까지 정수의 합은 ${sum}입니다.`);
// 백코트로 엄청 간편해졌다
console.log('1에서 100까지 정수의 합은 ' + sum + '입니다.');
// 원래 자바
// 줄바꿈반영

/* let msg = `1에서 100까지 정수의 합은 */
${sum}
입니다. `;
console.log(msg);
