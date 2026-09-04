// Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.
    

const prompt = require('prompt-sync')();

let numeroTabuada = parseInt(prompt("insira um valor:")); // numero recebido
let numeroLista = []

for(let i = 0; i <= 10; i++){ //executa o loop ate 5 vezes
    numeroLista[i] = numeroTabuada * i
    console.log(`${numeroTabuada} ${i} = ${numeroLista[i]}`)
}

