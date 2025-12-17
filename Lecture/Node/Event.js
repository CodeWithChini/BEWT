const EventEmitter = require("events");

let counter = 0;
class MyEvent extends EventEmitter {
    startEvent() {
        setInterval(() => {
            counter++;
            if (counter % 5 == 0) {
                this.emit("5 second")
            }
            else {
                this.emit("1 second")
            }
        }, 1000);
    }
}

const me = new MyEvent()
me.startEvent();
me.on("1 second", () => {
    console.log("1second");
});
