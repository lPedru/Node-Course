//! Asyncronous Example
//* JS is a Syncronous language
// Set timeout callbacks into the console.log after a 1000ms passes, the rest of the syncronous code will run, so the turtle will come out first
// even if the bunny code started running before it.

//setTimeout(() => console.log('🐇'), 1000);
//console.log('🐢');

//! Events
// Processes and callbacks

// const EventEmitter = require('events');
// const celebrity = new EventEmitter();

// //* Subscribe to celebrity for Observer 1
// celebrity.on('race', (result) => {
//     if (result === 'win') console.log('Congrats!')
// });

// //* Subscribe to celebrity for Observer 2
// celebrity.on('race', (result) => {
//     if (result === 'lose') console.log('Dang, i lost!')
// });

// celebrity.emit('race', 'win');
// celebrity.emit('race', 'lose');