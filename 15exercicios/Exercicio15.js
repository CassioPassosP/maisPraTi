// Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

const prompt = require('prompt-sync')();

// let numeroFib 
let listaFib=[0, 1]

for(let i = 3; i <= 10; i++){ 
    listaFib[i-1] = listaFib[i - 3] + listaFib[i - 2]
    console.log(listaFib[i])
}

// for(let i = 0; i <= 10; i++){ 
//     if(i === 0){
//         listaFib[i] = 0
//         listaFib[i]= listaFib[i] + numeroFib
//     }else if( i ===  1 ){
//         listaFib[i] = listaFib[i-1] + numeroFib
//     }else{
//         listaFib[i] = listaFib[i-2] + listaFib[i-1]
//     }
//     console.log(listaFib[i])
// }

