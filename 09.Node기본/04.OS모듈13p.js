// 운영 체제 관련 유틸리티 메서드 및 속성을 제공 https://nodejs.org/dist/latest-v12.x/docs/api/os.html
const os = require('os') ; //os모듈을 사용하고 싶으면 상단에 꼭 기입할것

console.log(os.hostname()); //기계번호
console.log(os.type());
console.log(os.platform()); 
console.log(os.arch());
console.log(os.release());
console.log(os.uptime());
console.log(os.loadavg());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.cpus());
console.log(os.networkInterfaces());
