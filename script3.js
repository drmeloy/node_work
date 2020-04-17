const fs = require('fs');

// READ
fs.readFile('./hello.txt', (err, data) => {
  if (err) console.log('ERROR');
  console.log('1', data.toString());
});

const file = fs.readFileSync('./hello.txt');
console.log('2', file.toString());

// APPEND
// fs.appendFile('./hello.txt', ' General Kenobi', err => {
//   if (err) console.log(err);
// });

// WRITE
// fs.writeFile('bye.text', 'Sad to see you go', err => {
//   if(err) console.log(err);
// });

// DELETE
fs.unlink('./bye.text', err => {
  if (err) console.log(err);
});
