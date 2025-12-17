const EventEmitter = require('events')

const myEmitter = new EventEmitter();

myEmitter.on('greet', (name) => {
    console.log(`Hello ${name}!`);
})

myEmitter.emit('greet', 'World');
setInterval(() => {
    myEmitter.emit('greet', 'Everyone');
}, 1000);
