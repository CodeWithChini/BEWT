const fs = require('fs')
fs.copyFile('info.txt', 'data.txt', (err) => {
    if (err) {
        console.log('error', err);
    }
    console.log('copied sucessfully');
} )
