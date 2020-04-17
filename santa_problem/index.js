const fs = require('fs');

console.time('SantaProblem');

const instructions = fs.readFileSync('./instructions.txt').toString();

let floor = 0;
let basement;
let neverUnderground = true;

for(let i = 0; i < instructions.length; i++){
  if (instructions[i] === '(') floor++;
  if (instructions[i] === ')') floor--;
  if(neverUnderground === true && floor < 0){
    basement = i + 1;
    neverUnderground = false;
  }; 
};

console.log(floor);
console.log(basement);
console.log(instructions.length);
console.timeEnd('SantaProblem');
