const fs = require('fs')
const fname = 'config.json';
if (fs.existsSync(fname)) {
    console.log('file exsist');
} else {
    console.log('file does not exists');
}
