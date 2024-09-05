const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

rl.question("Mitu täringut: ", arv => {
    for (let täringute_arv = 0; täringute_arv < arv; täringute_arv++){
      console.log(randomNumber(1, 6))
    }
    rl.close()
})