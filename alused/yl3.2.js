const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let porganditeKoguarv = 0;

rl.question(`Sisesta ringi arv: `, ringideArv => {
    for (let ring = 2; ring <= ringideArv; ring += 2) {
        porganditeKoguarv += ring;
    }
    console.log(porganditeKoguarv)
})