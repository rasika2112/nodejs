// Events
// First listen to event .on() and then emit it
const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
    console.log(`data received user ${name} with id:${id}`);
}
);

customEmitter.emit('response', 'john', 34);