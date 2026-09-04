// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.


// const prompt = require('prompt-sync')(); //importacao do o módulo prompt-sync que permite ler entrada de dados do teclado no terminal, no estilo prompt()

// let peso = prompt("Voce deseja pagar com:( [1]cartao de debito, [2]cartao de credito, [3]dinheiro )"); // numero recebido

let peso = 73
let altura = 1.70

let imc = (peso / (altura**2))

console.log(imc) 

if (imc <= 18.5 ){
    console.log("Usuario esta abaixo do peso") 
}else if (imc > 18.5 && imc <= 24.9 ){
    console.log("Usuario esta com o peso normal") 
}else if (imc >= 25 && imc <= 29.9 ){
    console.log("Usuario esta com sobrepeso") 
}else if (imc >= 30 && imc <= 34.9 ){
    console.log("Usuario esta com obesidade") 
}