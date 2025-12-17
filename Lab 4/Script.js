const path = require('path')
const os = require('os')

console.log(path.basename(__dirname));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(__filename);


// PATH JOIN
console.log(path.join( "users", "arjun", "documents", "project"));

// PATH NORMALIZE
console.log(path.normalize('//JavaScript//Lab 4////file.txt'));

// PATH ABSOLUTE & RELATIVE
console.log(path.isAbsolute('//folder//subfolder////file.txt'));
console.log(path.isAbsolute('./folder//subfolder////file.txt'));
console.log(path.isAbsolute('H:/DU/Backend'));

// PATH RESOLVE
console.log(path.resolve( "folder", "subfolder", "app.js"));

// OS
console.log(os.type());
console.log(os.version());
console.log(os.platform());
console.log(os.arch());

// OS MEMORY
console.log(os.totalmem()); // 16.98 GB
console.log(os.freemem());  // 6.65 GB

// OS CURRENTLY LOG IN USER
console.log(os.userInfo());

//OS UPTIME
console.log(os.uptime());  // 13.56 hour

// CPU
console.log(os.cpus());

//Modal
const cpus = os.cpus();
cpus.forEach((cpu, index) => {
  console.log(`Core ${index + 1}: ${cpu.model}`);
});

//Network
console.log(os.networkInterfaces());
