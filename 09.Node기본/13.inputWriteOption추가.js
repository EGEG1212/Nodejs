const { error } = require('console');
// node this.js failename [option]파일명에 append있으면 올라가게
const fs = require('fs');
const readline = require('readline');

// filename을 받는 방법
if (process.argv.length < 3) {
    console.log('사용법: node this.js filename을 입력하세요 [option]');
    process.exit();
}
let filename = process.argv[2];
//option 설정
let option;
if (process.argv.length === 4) {
    if (process.argv[3] === 'append')
    option = 'a';
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.setPrompt('> ');

rl.prompt();
let input = '';         // 빈스트링을 하나 만들어줍니다.
rl.on('line', function(buf) {
    input += buf + '\n';
    rl.prompt();
}).on('close', function() {
    if (option === 'a') {
        fs.writeFile(filename, input, {flag: 'a'}, error => {
            if (error)
                console.log(error);
        });

    } else {
        fs.writeFile(filename, input, error => {
            if(error)
                console.log(error);
        });

    }
});


//CMD에서 node 13.inputWrite.js tmp/tmp.txt  tmp폴더에 tmp.txt파일로 생성
//입력하라고 나옵니다아~