const { exec } = require('child_process');
const { stdout } = require('process');

exec('node --version', (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error}`);
        return;
    }
    if (stderr) {
        console.log(`stderr : ${stderr}`);
        return;
    }
    console.log(`node version : ${stdout}`);
});

exec('CPexec.py', (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error}`);
        return;
    }
    if (stderr) {
        console.log(`stderr : ${stderr}`);
        return;
    }
    console.log(`node version : ${stdout}`);
})
