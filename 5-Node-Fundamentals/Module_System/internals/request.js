// //! CommonJS

function encrypt(data) {
    return 'encrypted data';
}

const REQUEST_TIMEOUT = 500;

function send(url, data) {
    const encryptedData = encrypt(data);
    console.log(`sending ${encryptedData} to ${url}`);
}

module.exports = {
    REQUEST_TIMEOUT,
    send,
};

//! ES6 Syntax

// function encrypt(data) {
//     return 'encrypted data';
// }

// const REQUEST_TIMEOUT = 500;

// function send(url, data) {
//     const encryptedData = encrypt(data);
//     console.log(`sending ${encryptedData} to ${url}`);
// }

// export {
//     REQUEST_TIMEOUT,
//     send,
// };