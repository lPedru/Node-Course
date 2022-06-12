// const { get } = require('https');

// //? GET Protocol doesn't need to have an end function, since it already has it built-in

// get('https://www.google.com', (res) => {
//     res.on('data', (chunk) => {
//         console.log(`Data chunk: ${chunk}`);
//     });
//     res.on('end', () => {
//         console.log('No more data');
//     });
// });

//* Modules are saved in a cache when it get required for the first time, so it doesn't have to run the code any more times.