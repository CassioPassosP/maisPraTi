// Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.


const prompt = require('prompt-sync')();

let numeroF = parseInt(prompt("insira um valor:")); // numero recebido
let i = numeroF
let calculo = 0

do{
    i--
    calculo += numeroF * i
}

while( i > 0 ){ 
    i--
    calculo += (i+1) * i

}
console.log(calculo)

