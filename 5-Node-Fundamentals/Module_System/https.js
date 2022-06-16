//! CommonJS 
// const { send } = require('./internals/request');
// const { read } = require('./internals/response');

// function makeRequest(url, data) {
//     send(url, data);
//     return read();
// }

// const responseData = makeRequest('https://www.google.com', 'hello');
// console.log(responseData);

//! CommonJS using folders with index.js
//* Using index.js makes the Module System confusing and complex, so you need to be careful with it

// Getting the functions directly from the folder
const { send, read } = require('./internals');

function makeRequest(url, data) {
    send(url, data);
    return read();
}

const responseData = makeRequest('https://www.google.com', 'hello');
console.log(responseData);

//! ES6 Syntax To use it you need to change .js to .mjs

// import { send } from './request.mjs';
// import { read } from './response.mjs';

// function makeRequest(url, data) {
//     send(url, data);
//     return read();
// }

// const responseData = makeRequest('https://www.google.com', 'hello');
// console.log(responseData);
