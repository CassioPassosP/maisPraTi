// Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require('prompt-sync')(); //importacao do o módulo prompt-sync que permite ler entrada de dados do teclado no terminal, no estilo prompt()

let somaTotal = 0
let num1 = []

for(let i = 0; i < 5; i++){ //executa o loop ate 5 vezes
    num1[i] = parseInt(prompt("insira um valor:")); //coleta a entrada de dados e passa para inteiro
    somaTotal += num1[i] //soma cada indice na soma total ate terminar o loop
}

console.log(`a soma total e ${somaTotal}`)