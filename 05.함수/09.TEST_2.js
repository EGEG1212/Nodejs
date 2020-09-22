/* 2. a + b + c = 1000 인 피타고라스 수를 구하시오.
    즉, a*a + b*b = c*c 을 만족하고
    a < b < c 이고, a + b > c 이다. */

...실행안됨
    function p009(n){
        let a, b, c; 
        for(let i=1; i<n; i++) {
            a = i;
            let t = n-i;
            c = parseInt((a*a + t*t) / (2*t));
            b = n - a - c;  
            if(a*a + b*b == c*c)
                break;  
        }
        return a*b*c;
    }
    https://blog.g1s.kr/2012/02/project-euler-9-b-c-1000.html