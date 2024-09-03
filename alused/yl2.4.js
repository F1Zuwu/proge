const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
}); 

let koht = null;
let isevmitte = null;

rl.question(`Koha valik (ise / loos): `, valik => {

    if (valik === "loos") {
        isevmitte = "loosis"
        const random = Math.random(1,3)
        if (random === 1) {
           koht = "aken"
        } else {
            koht = "muu"
        }
        output()
    } else {
        isevmitte = "valisite"
        rl.question(`Akna koht või muu (aken / muu): `, valik => {
           if (valik === "aken") {
            koht = "aken"
           } else {
            koht = "muu"
           }

           output()
        })
    }
})

const output = () => {
    if (isevmitte === "loosis") {
        console.log(`loosis saite: ${koht}`)
    } else {
        console.log                                                         (`valisite koha ${koht}`)
    }
    rl.close()
}