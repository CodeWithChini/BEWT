const fs = require('fs')

fs.appendFile('output.txt', 'This is appendfile in fs module', 'utf-8', (err) => {
    if (err) {
        console.log('Error : ', err);
    }
    console.log('append in fs is successful');
})
