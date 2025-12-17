const fs = require('fs')

fs.copyFile('img.jpg', 'new.jpg', (err) => {
    if (err) {
        console.log('error',err);
    }
    console.log('copied sucessfully');
})
