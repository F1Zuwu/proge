const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.question(`Mitu korda äratada: `, valik => {
  mitu_korda_aratada = valik

  for(let mitu_korda_aratada = 0; mitu_korda_aratada < valik; mitu_korda_aratada++) {
    console.log("Äratust")
  }
  rl.close()
})