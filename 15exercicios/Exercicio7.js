// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')(); //importacao do o módulo prompt-sync que permite ler entrada de dados do teclado no terminal, no estilo prompt()

let macas = prompt("quantas macas vc deseja?"); // numero recebido

let preco = 0.30

if(macas >= 12 ){
    preco = 0.25
    precoMacas = preco * macas
    console.log(`desconto de quantidade: R$ ${preco} cada`)
    console.log(`preco total: R$${precoMacas}`)
}else{
    preco = 0.30
    precoMacas = preco * macas
    console.log(`preco total: R$${precoMacas}`)
}

