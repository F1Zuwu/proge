const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
}); 

let vanus = null;
let sugu = null;
let treeningType = null;

let minPulss = 0;
let maxPulss = 0;

const MeheMaxPulss = 220 - vanus
const NaiseMaxPulss = Math.floor(206 - (vanus * 0.88))

const MõtleVälja = () => {
    if (treeningType === 1) {
        if(sugu === "m" || sugu === "M") {
            minPulss = MeheMaxPulss * 0.5
            maxPulss = MeheMaxPulss * 0.7
        } else {
            minPulss = NaiseMaxPulss * 0.5
            maxPulss = NaiseMaxPulss * 0.7
        }
    } else if (treeningType === 2) {
        if (treeningType === 1) {
            if(sugu === "m" || sugu === "M") {
                minPulss = MeheMaxPulss * 0.7
                maxPulss = MeheMaxPulss * 0.8
            } else {
                minPulss = NaiseMaxPulss * 0.7
                maxPulss = NaiseMaxPulss * 0.8
            }
        }
    } else {
            if(sugu === "m" || sugu === "M") {
                minPulss = MeheMaxPulss * 0.8
                maxPulss = MeheMaxPulss * 0.87
            } else {
                minPulss = NaiseMaxPulss * 0.8
                maxPulss = NaiseMaxPulss * 0.87
            }
    }

    return `Max:${Math.round(maxPulss)} | Min: ${Math.round(minPulss)}`
}

const Küsimused = () => {
    rl.question(`Vanus: `, vanusIn => {
       vanus = vanusIn
       rl.question(`Sugu: `, suguIn => {
        if (sugu === "m" || sugu === "M" || sugu === "N" || sugu === "n") {
            sugu = suguIn
        }
        rl.question(`treeningu tüüp (1 - tervisetreening, 2 - põhivastupidavuse treening, 3 - intensiivne aeroobne treening): `, typeIn => {
            if (typeIn > 3 || typeIn < 0) {
                console.log("1-3 valik!")
            } else {
                treeningType = typeIn
                console.log(`${MõtleVälja()}`)
            }
           })
       })
    })
}

Küsimused()