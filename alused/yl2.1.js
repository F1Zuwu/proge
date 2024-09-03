const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Temp: `, temp => {
    if (temp > 4.0) {
        console.log("Ei ole jäätumise ohtu")
    }

    if (temp < 4.0 || temp === 4.0) {
        console.log("On jäätumise oht")
    }

    rl.close()
})