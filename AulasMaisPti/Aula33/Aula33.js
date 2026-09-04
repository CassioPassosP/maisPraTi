const input = document.getElementById('input-item');
const lista = document.getElementById('lista-itens');
const formAdicionar = document.getElementById('form-lista');
const btnlimpar = document.getElementById('limpar');
const formAdd = document.getElementById('form-add');
const filterStatus = document.getElementById('filters-status');
const sort = document.getElementById('ordenar');
const totalCounter = document.getElementById('conunter-total');
const pendingCounter = document.getElementById('conunter-pendent');
const counterPurchased = document.getElementById('conunter-purchased');

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
  let display = [...itens];
  const status = filterStatus.value;

  if (status === 'pending') {
    display = display.filter(i => !i.purchased);
  }

  if (status === 'purchased') {
    display = display.filter(i => i.purchased);
  }

  if (ordenar.value === 'alphabetical') {
    display.sort((a, b) => a.text.localeCompare(b.text));
  } else if (ordenar.value === 'status') {
    display.sort((a, b) => a.purchased - b.purchased);
  }

  lista.innerHTML = '';

  display.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item

    const btnToggle = document.createElement('button');
    btnToggle.textContent = item.purchased ? 'Marcar pendente' : 'Marcar Comprado'
    btnToggle.addEventListener('click', () => {
      item.purchased = !item.purchased
      salvarDados()
      renderizarLista()
    })

    li.appendChild(btnToggle)

    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'X';
    btnRemover.addEventListener('click', () => {
      removerItem(index);
    });

    li.appendChild(btnRemover);
    lista.appendChild(li);
    })

    totalCounter.textContent = `Total: ${itens.length}`
    pendingCounter.textContent = `Pendentes: ${itens.filter(i => !i.purchased).length}`
    counterPurchased.textContent = `Comprados: ${itens.filter(i => i.purchased).length}`
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