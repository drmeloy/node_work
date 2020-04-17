const fs = require('fs');

console.time('SantaProblem');

const instructions = fs.readFileSync('./instructions.txt').toString();

let floor = 0;

for(const char of instructions){
  if (char === '(') floor++;
  if (char === ')') floor--;
};

console.log(floor);
console.timeEnd('SantaProblem');
