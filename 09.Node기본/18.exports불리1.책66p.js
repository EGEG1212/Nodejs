exports.randInt = function (from, to) {
    return Math.floor(Math.random()*(to - from+1)+from); //random0~0.9999까지
}

exports.area = function(radius) {
    return Math.PI * radius * radius;
}


//exports 외부 파일에 있는 함수 가져다 쓰기?  
//randInt 외부에서 쓸수 있도록 만들어주는것