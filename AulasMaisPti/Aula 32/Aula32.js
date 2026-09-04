const input = document.getElementById('input-item');
const lista = document.getElementById('lista-itens');
const formAdicionar = document.getElementById('form-lista');
const btnlimpar = document.getElementById('limpar');

let itens = [];

window.addEventListener('DOMContentLoaded', ()=>{
  const dados = localStorage.getItem
  ('listaCompras')
  if(dados){
    itens = JSON.parse(dados)
    renderizarLista()
  }
})

function salvarDados(){
  localStorage.setItem('listaCompras', JSON.stringify(itens)) // local de armazenamento temporario do cliente // JSON.stringify = transforma um valor JS em uma string JSON
}

function renderizarLista(){
  lista.innerHTML = ''

  itens.forEach((item, index)=>{
    const li = document.createElement('li')
    li.textContent= item

    const btnRemover = document.createElement('button')
    btnRemover.textContent='X'
    btnRemover.addEventListener('click', () => {
      removerItem(index)
    })

    li.appendChild(btnRemover)
    lista.appendChild(li)
  })
}

formAdicionar.addEventListener('submit', (event) => {
  event.preventDefault()
  const novoItem = input.value.trim() /// captura o valor do input item //.trim() = tira espacos em branco
  if(novoItem === '')return;
  itens.push(novoItem)

  salvarDados()
  renderizarLista()

  input.value = ''
})

function removerItem(indice){
  itens.splice(indice,1)
  salvarDados()
  renderizarLista()
}

function Limpalista(){
  itens =[];
  salvarDados();
  renderizarLista();
}