// //! CommonJS

function decrypt(data) {
    return 'decrypted data';
}

function read() {
    return decrypt('data');
}

module.exports = {
    read,
}

//! ES6 Syntax

// function decrypt(data) {
//     return 'decrypted data';
// }

// function read() {
//     return decrypt('data');
// }

// export {
//     read,
// }