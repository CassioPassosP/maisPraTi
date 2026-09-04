// Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.


// const prompt = require('prompt-sync')(); //importacao do o módulo prompt-sync que permite ler entrada de dados do teclado no terminal, no estilo prompt()

// let numero = prompt("Digite um numero:"); // numero recebido

let numero = 3

if (numero % 2 === 0){ // caso o resto de uma divisao por 2 for igual a 0 o numero inserido e par, se nao e impar
    console.log("número inserido é par")
}else{
    console.log("número inserido é impar")
}