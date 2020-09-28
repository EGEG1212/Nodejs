module.exports = {
    randInt: function (from, to) {
        return Math.floor(Math.random()*(to - from+1)+from); //random0~0.9999까지
    },

    area : function(radius) {
        return Math.PI * radius * radius;
    }
}

//펑션이름 자체가 객체가 되었다........
//외부 파일에 있는 ?.? 🤐