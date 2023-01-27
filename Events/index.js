// membuat event

const { EventEmitter } = require('events');

const birthdayEventListener = (name) => {
    console.log(`happy birthday! ${name}`);
}

const myEmitter = new EventEmitter()
myEmitter.on('birthday', birthdayEventListener);
myEmitter.emit('birthday', 'Nazhat');