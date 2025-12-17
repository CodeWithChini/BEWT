const fs = require('fs')

fs.mkdir('my-data', (err) => {
    if (err) {
        if (err.code === 'EXSIST') {
            console.log('file alredy exsist');
        } else {
            console.log('create folder');
        }
    }
    console.log('folder created sucessfully');
})
 