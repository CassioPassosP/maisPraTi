// let nome ='Julio Cesar'

// console.log(nome.length)
// console.log(nome.charAt(0))
// console.log(nome.indexOf('C'))

// console.log(nome.replace('Julio', 'Clayton'))
// console.log(nome.substr(6, 5))
// console.log(nome.toUpperCase())
// console.log(nome.toLowerCase())

//ex1: fazer funcao que inverta uma string.

// console.log(nome)

// function InvertString(nome){
//     let i = 0
//     for(let j = nome.length - 1; j > 0; j--){
//             nome = nome[j]  
//             i++
//     }
//     return nome
// }


// InvertString(nome)

//nao terminado


//ex2: encontre um numero de vogais em uma string
// function InvertString(){
//     let nome ='Julio Cesar'   
//     let cont = 0
//         for(let i = 0 ; i > nome.length -1 ; i++){
//                 if(nome[i]=('o','a','e','i','u')){
//                     cont++
//                 }

//         }
//     console.log(cont)

//     }
    
// InvertString()


//Usando logicas

// let numero = Array(10,9,8,7,6,5,4,3,2,1)
// let pares = Array()
// let soma = 0
// let media = 0


// for(let i = 0; i < numero.length;i++){
//     soma += numero[i]
//     if(numero[i] % 2 == 0){
//         pares.push(numero[i])
//     }
// }


// media = soma/numero.length

// console.log(numero)
// console.log(soma)
// console.log(media)
// console.log(pares)



//Usando metodos/funcoes

// const numero = [10,9,8,7,6,5,4,3,2,1]
// const soma = numero.reduce((acumulador, valor)=>     //.reduce() - reduz o array ao um unico valor, somando todos elementos do array, usando o acumulador
//     acumulador+valor, 0   // o 0 diz que o acumulador comeca com 0
// )

// const media = soma/numero.length
// const pares = numero.filter(num => num % 2 === 0) //num - representa a posicao do array  //.filter() -  filtra os elementos que "passam no teste" da função que você fornece


// console.log(numero)
// console.log(soma)
// console.log(media)
// console.log(pares)


//Ordernar o array em ordem crescente antes de calcular a soma e a media

// const numero = [10,9,8,7,6,5,4,3,2,1]

// for(let i = 0; i < numero.length-1;i++){  //bubblesort
//     for(let j = 0; j < numero.length-1 -i;j++){
//         if(numero[j] > numero[j+1]){   
//             let g = numero[j]
//             numero[j] = numero[j+1] 
//             numero[j+1] = g      
//         }   
//     } 
// }


// const soma = numero.reduce((acumulador, valor)=>     //.reduce() - reduz o array ao um unico valor, somando todos elementos do array, usando o acumulador
//     acumulador+valor, 0   // o 0 diz que o acumulador comeca com 0
// )

// const media = soma/numero.length
// const pares = numero.filter(num => num % 2 === 0) //num - representa a posicao do array  //.filter() -  filtra os elementos que "passam no teste" da função que você fornece

// console.log(numero)
// console.table(numero)
// console.log(soma)
// console.log(media)
// console.log(pares)


//Ordernar o array em ordem crescente usando metodos/funcoes

// const numero = [10,9,8,7,6,5,4,3,2,1]

// console.log(numero) 
// console.table(numero.sort((a,b)=> a -b))  

// sort - A função .sort() por padrão ordena valores como strings, 
// então ao ordenar números, precisamos passar uma função de comparação.
// a - b faz com que:
// Se for negativo, a vem antes de b
// Se for positivo, b vem antes de a
// Se for zero, mantém a ordem



//Arrays multidimensionais / matriz

// let numero=[]

// console.table(numero)

// for(let i = 0; i < 10;i++){
//     numero[i] = []  
//     for(let j = 0; j < 10;j++){  
//          numero[i][j]=10
// }
// }

// console.table(numero)


//Calcular a diagonal de uma matriz

// let comercio = [['celulares'], ['Eletrodomesticos']]
// comercio = ['celulares']['Samsung']
// comercio = ['celulares']['Xiaomi']

// console.log(comercio)
// console.table(comercio)

//Aula09

// console.log("-"+"         Denise".trim() + "-") // remove os espacos em branco

// console.log(Math.ceil(9.4)) // .ceil() -Arredonda o valor para um numero maior
// console.log(Math.floor(9.4)) // .floor() - Arredonda o valor para um numero menor
// console.log(Math.round(9.4)) // .round() - Arredonda o valor o inteiro mais perto do valor

// let date = new Date()

// console.log(date.getDate())
// console.log(date.getMonth() + 1)
// console.log(date.getFullYear())
// console.log(date.toString())


// let date1 = new Date(2025, 7, 5)
// let date2 = new Date(2002, 7, 4)

// console.log(date1.toString())
// console.log(date2.toString())

// console.log(date1.getTime())
// console.log(date2.getTime())

// let milissegundosEntreDatas = Math.abs((date1.getTime()) - date2.getTime())

// console.log(milissegundosEntreDatas)

// let milissegundosPorDia = Math.abs(1*24*60*60*1000)

// console.log(`A diferenca entre as datas e de ${Math.ceil(milissegundosEntreDatas/milissegundosPorDia)} dias`)


//Reverter uma string 

// function reverseString(str){
//     return str.split('').reverse().join('')   
//str.split('') , Divide a string em um array de caracteres.
//.reverse() , Inverte a ordem dos elementos do array.
//.join(''), Junta os elementos do array de volta em uma string, sem separação entre eles.

// }

// console.log(reverseString('Ola mundo!'))


//formatar uma data

// let date = new Date()

// function formatDate(date){
//     let day = date.getDate().toString().padStart(2 , '0')
//     let month = (date.getMonth() + 1 ).toString().padStart(2 , '0')
//     let year = date.getFullYear()

//     return `${day}/${month}/${year}`
// }

// console.log(formatDate(date))




// Gerar um numero randomico entre dois valores

// let min = 0
// let max = 10

// function randomEntreMinMax(min, max){
//     let numero = Math.floor(Math.random()*(max - min + 1))  + min

//     return numero
// }

// console.log(randomEntreMinMax(min,max))




// Contar vogais de uma string


//Eu fazendo da fomra tradicional:
// let nome = 'aaaaa'
// let vogais = ['a','e','i','o','u']

// let cont = 0 

// for(let i = 0; i < nome.length; i++){
//     for(let j = 0; j < vogais.length; j++){
//         if(nome[i] === vogais[j]){
//             cont++
//         }

// }

// }

// console.log(cont)

//Funcao para fazer este exercicio:

// function countVowels(str){
//     let vowels = str.match(/[aeiou]/gi)  
    //.match() retorna um array com todas as ocorrências que combinam com o padrão
    // [] é um conjunto de caracteres: ou seja, vai encontrar qualquer letra que seja a, e, i, o ou u.
    // g (global): encontra todas as ocorrências, não só a primeira.
    // i (ignore case): ignora maiúsculas e minúsculas.
//     return vowels ? vowels.length : 0 
// }

// console.log(countVowels('aaa'))













// Aula11

//OPbjetos em js

// let serie = {
//     nome: 'Voce',
//     dataLancamento: 2021,
//     Atores: ['Joe', 'Hana'],
//     status:'finalizada',
//     classificacao: 18,
//     nrTemporadas:{
//         temp1:12,
//         temp2:1,
//         temp3: 0 
//     },

//     mostrarCaracteristicas: function(){
//         return `O nome da serie e ${this.nome} a classificacao e ${this.classificacao} anos e ela esta ${this.status}`
//     }
// }

// console.log(serie.mostrarCaracteristicas())





//funcao que retorna objeto

// function Anime(nome,  personagemForte, personagemFraco, nota){
//     this.nome = nome
//     this.personagemForte = personagemForte
//     this.personagemFraco = personagemFraco
//     this.nota = nota

//     this.mostrarAnime = function(){
//         return `
//              nome: ${this.nome}
//              maisForte: ${this.personagemForte}
//              maisFraco: ${this.personagemFraco}
//              nota: ${this.nota}
//         `
//     }
// }


// let naruto = new Anime('Naruto','guy','orochimaru', 10)
// console.log(naruto.mostrarAnime())






// function jogos(titulo, genero, anoLancamento, empresa, jogar){
//     return{
//         titulo,
//         genero,
//         anoLancamento,
//         empresa,
//         jogar
//     }
// }


// let jogo = jogos("The last", "Terror", "2018","	Naughty Dog", ()=>  console.log("Morrendo"))


// let personagem = [{nome:"Killua"}, "Minato", "Pain"]

// for(let key in personagem){ //key - representa a posicao
//     console.log(personagem[key])
// }

// let palavra = 'testte'

// for(let char of palavra){ //imprime caracter por caracter, desmebra a string
//     console.log(char)
// }

// for(let perso of personagem){ //imprime personagem por personagem (so itera em arrays)
//     console.log(perso)
// }


// for(let jogo1 of Object.keys(jogo)){
//     console.log(jogo[jogo1])
// }





// let professor = {
//     nome: 'Jac',
//     disciplina: 'java',
//     media:6,
//     notas:{
//         aluno1:[1,2,6,1,8,2,3],
//         aluno2:[1,2,2,1,3,1,1]
//     },

// }

// function mediaAlunos(){
// let mediaNotaAluno = (professor.notas.aluno1.reduce((acumulador, valor)=> acumulador+valor, 0 ))/professor.notas.aluno1.length
       
// return(mediaNotaAluno)
// }

// function mediaNotasProfessor(){
// let quantidadeAlunos = Object.keys(professor.notas).length
// let SomaNotaAlunos = ((professor.notas.aluno1.reduce((acumulador, valor)=> acumulador+valor, 0 ))+(professor.notas.aluno2.reduce((acumulador, valor)=> acumulador+valor, 0 )))/quantidadeAlunos
   
// if(SomaNotaAlunos >= 20){
// return(`A media do professor e de ${SomaNotaAlunos} portanto o professor esta apto`)
// }else if(SomaNotaAlunos < 20){
//  return(`A media do professor e de ${SomaNotaAlunos} portanto o professor nao esta apto`)   
// }
// }      

// console.log(mediaNotasProfessor())





//Aula 12

//Verificar dentro de uma lista de livros os que foram publicados antes de 2000
//Utilizem for of

// const livraria = [
//     {titulo: "Codigo Limpo", autor: "Martin", ano: 2019, genero: "estudos"},
//     {titulo: "The gunslinger", autor: "Stephen King", ano: 1991, genero: "Acao"},
//     {titulo: "Laranja Mecanica", autor: "Nicole", ano: 1810, genero: "Acao"},
//     {titulo: "Pequenos Principe", autor: "Fabiana", ano: 1903, genero: "Aventura"},
//     {titulo: "As Cronicas Marciana", autor: "Bradbury", ano: 2010, genero: "Aventura"},
// ]

// for(let livro of livraria){
//     if(livro.ano < 2000){
//         console.log(livro)
//     }
// }

// let contagemGenero = {}

// livraria.forEach(livraria => {
//     if(contagemGenero[livraria.genero]){
//         contagemGenero[livraria.genero]++;
//     }else{
//         contagemGenero[livraria.genero] = 1
//     }
// });


// console.log(contagemGenero)


// for (let genero in contagemGenero){
//     console.log(`Existem ${contagemGenero[genero]} livro(s) do genero ${genero}`)
// }


//Aula 13 - Recursividade

// function fatorial(n){
//     if(n === 0){
//         return 1;
//     }else{
//         return n * fatorial(n - 1);
//     }
// }

// console.log(fatorial(3));


// function fibonacci(n){
//     if(n == 0){
//         return 0 ;
//     }else if(n == 1){
//         return 1 ;
//     }else{
//         console.log(n)
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }

// console.log(fibonacci(6));



//Aula 14

// class Node {
//     constructor(valor){
//         this.valor = valor;
//         this.proximo = null;
//     }
// }

// class SimplyLnkedList {
//     constructor(){
//         this.head = null;
//     }


//     inserirInicio(v){
//         let novo = new Node(v);
//         novo.proximo = this.head;
//         this.head = novo;
//     }

//     imprimir(){
//         let atual = this.head;
//         let str = "";
//         while(atual){ // percorre ate chegar em null
//             str += atual.valor + " -> ";
//             atual = atual.proximo;
//         }

//         str += 'null';
//         console.log(str);
//     }
// }

// const lista = new SimplyLnkedList();

// lista.inserirInicio(10);
// lista.inserirInicio(20);
// lista.inserirInicio(30);
// lista.inserirInicio(40);
// lista.inserirInicio(50);

// lista.imprimir();





// Aula 15 lista dupla encadeada

// class Node {
//     constructor(valor){
//         this.valor = valor;
//         this.anterior = null;    // nó anterior
//         this.proximo = null;     // próximo nó
//     }
// }


// class DoublyLnkedList {
//     constructor(){
//         this.head = null;      // primeiro nó
//         this.tail = null;      // último nó
//         this.length = 0;       // tamanho
//     }


//     inserirInicio(v){
//          let novo = new Node(v);
//          novo.proximo = this.head
//         if(!this.head){
//             this.head = this.tail = novo
//         }else{
//             novo.proximo = this.tail
//             this.head.anterior = novo
//             this.head = novo
//         }
//         this.length++
//     }

    // inserirFim(v){
    //     let novo = new Node(v);
    //     if(!this.head){
    //         this.head = this.tail = novo
    //     }else{
    //         this.tail.proximo = novo
    //         novo.anterior = this.tail
    //         this.tail = novo
    //     }
    //     this.length++
    // }

//     inserirEm(index, valor){
//         if(index < 0 || index > this.length) throw new RangeError("Indice fora dos limites")
//         if(index === 0) return this.inserirInicio(valor)
//         if(index === this.length) return this.inserirFim(valor)

//         let atual = this.head;

//         for(let i = 0; i < index; i++){
//             atual = atual.proximo
//         }

//         let novo = new Node(v)
//         let noAnterior = atual.anterior

//         noAnterior.proximo = novo
//         novo.anterior = noAnterior
//         novo.proximo = atual
//         atual.anterior = novo

//         this.length++
//     }

//     removerEm(index){
//         if(index < 0 || index > this.length) throw new RangeError("Indice fora dos limites")
         
//         let remover
        
//         if(this.length === 1){
//             remover = this.head
//             this.head = this.tail = null
//         }else if(index === 0){
//             remover = this.head
//             this.head = this.head.proximo
//             this.head.anterior = null
//         }else if(index === this.length -1){
//             remover = this.head
//             this.head = this.head.proximo
//             this.head.anterior = null
//         }else{
//             let atual = this.head

//             for (let i = 0; i < index; i++) {
//                 atual = atual.proximo
                
//             }

//             remover = atual
//             let {anterior, proximo} = atual
//             anterior.proximo = proximo
//             proximo.anterior = anterior
//         }

//         this.length--     
//     }
    // Exibir lista de frente para trás
    // imprimirFrente(){
    //     let atual = this.head;
    //     while (atual) {
    //         console.log(atual.value);
    //         atual = atual.proximo;// guarda o proximo valor na variavel atual
    //     }
    // }

    // // Exibir lista de trás para frente 
    // imprimirAtras(){
    //     let atual = this.tail;
    //     while (atual) {
    //         console.log(atual.value);
    //         atual = atual.prev; // guarda o valor anterior na variavel atual
    // }
    // }
    // imprimir(){
    //     let atual = this.head;
    //     let str = "";
    //     while(atual){ // percorre ate chegar em null
    //         str += atual.valor + " - ";
    //         atual = atual.proximo;
    //     }

    //     str += 'null';
    //     console.log(str);
    // }
// }

// const lista = new DoublyLnkedList();

// lista.inserirInicio(10);
// lista.inserirInicio(20);
// lista.inserirInicio(30);
// lista.inserirInicio(40);
// lista.inserirInicio(50);

// lista.inserirInicio(10);
// lista.inserirInicio(20);
// lista.inserirInicio(30);
// lista.inserirInicio(40);
// lista.inserirInicio(50);

// lista.removerEm(2);
// lista.imprimir();




//first-in first-out

//Pilha


// Classe que representa um nó da pilha
// class Node {
//     constructor(value){           // Construtor recebe o valor do nó
//         this.value = value;       // Armazena o valor
//         this.next = null;         // Ponteiro para o próximo nó (inicialmente nulo)
//     }
// }

// Comentário explicativo: 
// Arrays são mais rápidos para pesquisa, pois têm acesso direto via índices.
// Pilhas são mais rápidas para inserção e remoção, pois só manipulam o topo.

// Classe que representa a pilha (estrutura LIFO - Last In, First Out)
// class Stack {
//     constructor(){
//         this.top = null;          // Inicialmente a pilha está vazia, topo é nulo
//     }

//     // Método para inserir um elemento no topo da pilha
//     push(value){
//         let newNode = new Node(value); // Cria um novo nó com o valor
//         newNode.next = this.top;       // O próximo do novo nó aponta para o antigo topo
//         this.top = newNode;            // Atualiza o topo para o novo nó
//     }

        // Método para remover (desempilhar) o elemento do topo da pilha
    // pop(){
    //     if(!this.top){                 // Se a pilha estiver vazia, retorna null
    //         return null;
    //     }

    //     let poppedValue = this.top.value; // Guarda o valor que será removido
    //     this.top = this.top.next;         // Atualiza o topo para o próximo nó
    //     return poppedValue;               // Retorna o valor removido
    // }

    // peek(){
    //     if(!this.top){                 // Se a pilha estiver vazia, retorna null
    //         return null;
    //     }
        
    //     return this.top.next  // <-- Mostrar o valor no topo da pilha
    // }

    // isEmpty(){
    //     return this.top === null
    // }

    
    // Método para imprimir todos os elementos da pilha
//     imprime(){
//         let atual = this.top;            // Começa do topo
//         let listaString = "";            // Acumulador de string

//         while (atual){
//             listaString += atual.value + " -> ";  // Adiciona o valor seguido de seta
//             atual = atual.next;                  // Avança para o próximo nó
//         }

//         listaString += "null";                   // Indica o fim da pilha
//         console.log(listaString);                // Exibe a pilha
//     }
// }


//outra maneira de fazer uma pilha

// function Stack(){
//     this.items = []
//     this.top = -1

//     this.push = function (element){
//         this.top++
//         this.items[this.top] = element    
//     }

//     this.pop = function(){
//         if(this.top < 0){
//             return null
//         }
//         let element = this.items[this.top]
//         this.items[this.top] = undefined
//         this.top--
//         return element
//     }

// }



// let pilha = new Stack();

// pilha.push(1);
// pilha.push(2);
// pilha.push(12);
// pilha.push(13);
// console.log(pilha.pop()); 
// console.log(pilha.isEmpty());
// console.log(pilha.imprime());



//Queues - Filas

// Classe que representa a pilha (estrutura LIFO - Last In, First Out)


// class Node {
//     constructor(value){           // Construtor recebe o valor do nó
//         this.value = value;       // Armazena o valor
//         this.next = null;         // Ponteiro para o próximo nó (inicialmente nulo)
//     }
// }

// class Queues {
//     constructor(){
//         this.front = null
//         this.rear = null
//         this.size = 0     
//     }

//     enqueue(value){
//         let newNode = new Node(value)
//         if(this.rear){
//             this.rear.next = newNode
//         }

//         this.rear = newNode
//         if(!this.front){
//             this.front = newNode
//         }

//         this.size++
//     }
    
//     dequeue(){

//     }
// }


// let pilha = new Queues();

// pilha.push(1);
// pilha.push(2);
// pilha.push(12);
// pilha.push(13);
// console.log(pilha.pop()); 
// console.log(pilha.imprime());




//Aula 17 

//Realizar implementacao functiopn momoize(fn) que armazene em cache chamadas anteriores
//de fn (por argumentos), retornando resultados instantaneos em repetidas inovacoes.

function memoize(fn){
    const cache = new Map

    return function(...args){
        const key = JSON.stringify(args)

        if(cache.has(key)){
            return cache.get(key)
        }
    }
}
