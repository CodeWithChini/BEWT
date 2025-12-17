const fs = require('fs')
console.log(`changes ${files}`);

fs.watch('.', (change, files) => {
    if (change == 'change') {
        console.log(`file change ${files}`);
    }
})
