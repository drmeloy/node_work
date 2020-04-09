const { largeNumber } = require('./script2');

const a = 4;
const b = 5;
const c = largeNumber;

console.log(a + b);

setTimeout(() => {
  console.log(a + b);
}, 3000);

console.log(__dirname);

console.log(c + a);

