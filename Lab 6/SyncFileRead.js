const fs = require('fs')
try {
    const data = fs.readFileSync('info.txt', 'utf-8')
    console.log('content of info.txt file');
    console.log(data);
} catch (err) {
    console.log('Error : ', err);
}
