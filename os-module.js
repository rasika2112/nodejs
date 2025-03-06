const os = require('os');

const user = os.userInfo(); // info about current user
console.log(user);

console.log(`The system uptime is ${os.uptime()} ms`); // method returns the system uptime in seconds
