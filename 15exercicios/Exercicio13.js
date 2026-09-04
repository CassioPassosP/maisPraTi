// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.   

const prompt = require('prompt-sync')();

let numero = []
let somaTotal = 0
let i = 0

do {
    numero[i] = parseInt(prompt("insira um valor:")); //coleta a entrada de dados e passa para inteiro
    somaTotal = somaTotal + numero[i]  //soma cada indice na soma total ate terminar o loop
    i++
    }while(numero[i-1] !== 0){ 
    }
    i--
let resultado = (somaTotal / i) // calculo da media
console.log(`resultado e ${resultado}`)

