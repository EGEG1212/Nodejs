
// 6p.process 객체의 속성과 메소드
// https://nodejs.org/dist/latest-v12.x/docs/api/process.html
console.log('- process.arch:',process.arch);
console.log('- process.platform:', process.platform);
console.log('- process.connected:', process.connected);
console.log('- process.execArgv:', process.execArgv);
console.log('- process.exitCode:', process.exitCode);
console.log('- process.mainModule:', process.mainModule); //왜 너만 밑줄이? 마우스올리면, deprecated 앞으로는 없어질꺼야..
console.log('- process.release:', process.release);
console.log('- process.memoryUsage():', process.memoryUsage());
console.log('- process.uptime():', process.uptime());
console.log('- process.argv', process.argv);

process.exit();

console.log('프로세스');  //뿌옇.. exit 프로그램 종료 이후에는 실행안한다는 ! 🙌