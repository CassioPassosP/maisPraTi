// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require('prompt-sync')(); //importacao do o módulo prompt-sync que permite ler entrada de dados do teclado no terminal, no estilo prompt()

let num1 = prompt("insira o primeiro valor:"); // numero recebido

let num2 = prompt("insira o segundo valor:"); 

if(num1 < num2 ){
    console.log(num1) 
    console.log(num2)    
}else if(num1 > num2){
    console.log(num2) 
    console.log(num1) 
}2