const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Error reading file:', err);
        return;
    } else {
        fs.appendFile('output.txt', 'This is appendfile in fs module', 'utf-8', (err) => {
            if (err) {
                console.log('Error : ', err);
                return;
            }
            console.log('append in fs is successful');
        })
    }
});
