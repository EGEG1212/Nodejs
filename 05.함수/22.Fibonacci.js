//피보나치 수열 _재귀가없었다면 해결하는데 문제가 있었을것. (22)
/* 피보나치 수열 Fibonacci  앞 두항을 더해서 
1 1 2 3 4 8 13 21 34
fibo(n) fibo(n-1)+fibo(n-2) n>=2
fibo(1) = 1
fibo(0) =  */

function fibo(n) {
    if (n === 0 || n === 1)
        return 1;
    return fibo(n-1) + fibo(n-2);
}

for (let i=0; i<10; i++) {
    console.log(`fibonacci(${i}) = ${fibo(i)}`);
}


/* fibonacci(0) = 1
fibonacci(1) = 1
fibonacci(2) = 2
fibonacci(3) = 3
fibonacci(4) = 5
fibonacci(5) = 8
fibonacci(6) = 13
fibonacci(7) = 21
fibonacci(8) = 34
fibonacci(9) = 55 */