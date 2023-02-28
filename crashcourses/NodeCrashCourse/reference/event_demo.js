const EventEmitter = require("events")

// create class from EveetEmitter var above
class MyEmitter extends EventEmitter {}

// Initiate an object from MyEmitter class
const myEmitter = new MyEmitter()

// Initiate an event to your object, use .on() to add events, can use .off() to remove events
myEmitter.on('event',()=> console.log('event fired..'))


// trigger the event, use the .emit('event') method
myEmitter.emit('event')