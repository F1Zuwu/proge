const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let ounu_on = 14

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

rl.question("Mitu pöialpoissi tahab õunu: ", arv => {
    for(let poialpoisid_votavad = 0; poialpoisid_votavad < arv; poialpoisid_votavad++) {
        const palju_vottis = randomNumber(1, 2)
        ounu_on = Math.floor(ounu_on - palju_vottis)
        console.log(palju_vottis)
    }

    console.log("Lumivalgekesele jäi " + ounu_on)
})