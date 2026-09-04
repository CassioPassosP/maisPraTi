// Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.


// const prompt = require('prompt-sync')(); //importacao do o módulo prompt-sync que permite ler entrada de dados do teclado no terminal, no estilo prompt()

// let nota = prompt("Insira sua nota:"); // numero recebido

let nota = 11

if ( nota > 0 && nota <= 2 ){ // se nota for maior que 0 e menor ou igual a 2 reprovado
    console.log("Reprovado")
}else if( nota > 2 && nota < 6 ){ // se nota for maior que 2 e menor que 6 recuperação
    console.log("Recuperação")
}else if( nota >= 6 && nota <= 10 ){ // se nota for maior ou igual a 6 e menor ou igual a 10 aprovado
    console.log("Aprovado")
}else{ 
    console.log("numero invalido")
}