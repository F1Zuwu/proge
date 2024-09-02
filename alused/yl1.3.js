const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var essa = null;
var teine = null;

rl.question(`essa: `, num => {
  essa = num
  TeineKusimus()
});


const TeineKusimus = () =>{
    rl.question(`teine: `, num => {
        teine = num
        console.log(Math.floor(essa**teine))
        rl.close();
    });
} 