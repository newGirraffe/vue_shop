console.log("hello world")
const sum = (a, b) => a + b;
exports.add = sum;
const greeting = name => `hello ${ name }`;
module.exports.greeting = greeting;
console.log('has changed now!')