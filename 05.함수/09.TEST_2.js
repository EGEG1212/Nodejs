/* 2. a + b + c = 1000 인 피타고라스 수를 구하시오.
    즉, a*a + b*b = c*c 을 만족하고
    a < b < c 이고, a + b > c 이다. */

/*     모든 가능한 경우를 확인.
        답이 맞는지 확인 👌*/

        let a, b, c; //루핑 돌기 전 선언합니다.
        for (a=1; a<=332; a++) { // 루핑 for a332, b333 , c335까지가 큰수;ㅁ;넹?
            for(b=a+1; b<=499; b++) {
                c = 1000 - a - b ; 
                if ( c > (a + b)) //이 값이 맞으면 
                    continue; //더이상 돌 이유가 없다 
                if (c*c === a*a + b*b) {//이게 맞으면 피타고라스
                    console.log(a, b, c); //원하는결과 출력
                    console.log(a*a, b*b, c*c);
                    break; //루프 1단계 빠져나가기
                } 
            }
        }

//테크닉추가 outerBreak//
        let a, b, c; //루핑 돌기 전 선언합니다.
        let outerBreak = false; //바깥에서 조건을 줘서 
        for (a=1; a<=332; a++) { // 루핑 for a999해도됨
            for(b=a+1; b<=499; b++) {
                c = 1000 - a - b ; 
                if ( c > (a + b)) //이 값이 맞으면 
                    continue; //더이상 돌 이유가 없다 
                if (c*c === a*a + b*b) {//이게 맞으면 피타고라스
                    console.log(a, b, c); //원하는결과 출력
                    console.log(a*a, b*b, c*c);
                    outerBreak = true; //상태를 표시하는 값이 맞으면 완전 나가라!
                    break; //루프 1단계 빠져나가기
                } 
            }
            if (outerBreak)
                break;
        }





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