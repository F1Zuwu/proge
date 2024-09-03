const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let failisuurus = 0;
let pealkiri = "";
let failkaasas = false;
let onSpam = false;

rl.question(`Sisesta kirja suurus: `, valik => {
    failisuurus = valik
    rl.question(`Kirja pealkiri: `, valik => {
        if (valik === "" || valik === null) {
            onSpam = true
        }

        pealkiri = valik.toString()

        rl.question(`Fail kaasas (true / false): `, valik => {
            failkaasas = valik

            if (valik === "true" && failisuurus > 1) {
                onSpam = true
            }
            Vastus()
        })
    })
})

const Vastus = () => {
    if (onSpam === true) {
        console.log("on spam")
    } else {
        console.log("ei ole spam")
    }
}