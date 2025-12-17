const fs = require('fs')

fs.readdir('H:/DU/Backend/JavaScript', (err, files) => {
    if (err) {
        console.log('error', err);
    }
    console.log(files);
})
