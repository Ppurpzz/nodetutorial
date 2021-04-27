const OS = require('os');


//getting the current user info
const user = OS.userInfo();
console.log(user);


// method gives the system uptime in seconds

console.log(`The system uptime is ${OS.uptime() / 3600} seconds`);

const currentOS = {
    name : OS.type(),
    release : OS.release(),
    totalMem : OS.totalmem(),
    freeMem : OS.freemem()

}
console.log(currentOS);