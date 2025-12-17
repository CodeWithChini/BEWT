const fs = require('fs');

console.log('start');

fs.writeFile('output.txt','Hello everyone!!!', 'utf-8', (err) => {
    if (err) {
        console.log('Error : ', err);
    }
    console.log('file has been written sucessfully');
})
