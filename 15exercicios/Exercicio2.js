// Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else

// const prompt = require('prompt-sync')(); //importacao do o módulo prompt-sync que permite ler entrada de dados do teclado no terminal, no estilo prompt()

// let idade = prompt("Insira sua idade:"); // numero recebido

let idade = 6

if (idade > 2 && idade < 11 ){ // se idade for maior que 2 e menor que 11 classifica como crianca
    console.log("classificacao: criança")
}else if(idade >= 11 && idade < 18){ // se idade for maior que 11 e menor que 18 classifica como adolescente
    console.log("classificacao: adolescente")
}else if(idade >= 18 && idade < 60){ // se idade for maior que 18 e menor que 60 classifica como adulto
    console.log("classificacao: adulto")
}else if(idade >= 60 ){  // se idade for maior que 60 classifica como idoso
    console.log("classificacao: idoso")
}else{ 
    console.log("numero invalido")
}