let numero = parseFloat(prompt("Digite um numer:"))
let tabuada = "Tabuada do " + numero + "\n"

for(let i = 0; i <=10; i++){
  tabuada = (`${tabuada} ${i} x ${numero} = ${i*numero} \n`)

}
console.log(tabuada)