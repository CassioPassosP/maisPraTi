// Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.


const prompt = require('prompt-sync')(); //importacao do o módulo prompt-sync que permite ler entrada de dados do teclado no terminal, no estilo prompt()

let opcao = prompt("Voce deseja pagar com:( [1]cartao de debito, [2]cartao de credito, [3]dinheiro )"); // numero recebido

switch(opcao){
    case '1':
        console.log("Metodo de pagamento: cartao de debito")    
    break
    case '2':
        console.log("Metodo de pagamento: cartao de credito")        
    break
    case '3':
        console.log("Metodo de pagamento: dinheiro")         
    break
    default:
        console.log("opcao de metodo de pagamento invalida")         
    break
}

