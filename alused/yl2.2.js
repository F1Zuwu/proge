const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.question(`Nimi: `, nimi => {
    if (nimi.slice(-2) === "ne") {
        console.log("Abielus")
    } else if (nimi.slice(-2) === "te") {
        console.log("Vallaline")
    } else if (nimi.slice(-1) === "e") {
        console.log("Määramata")
    } else {
        console.log("ei tundu olevalt leedu nimi")
    }

    rl.close()
})