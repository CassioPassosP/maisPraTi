//import { useState } from "react"  //usestate - e um hook, uma funcao especial da biblioteca do react para trabalhar com estados, permite a gente adicionar um estado para o nosso componente 
function Button(props){
  return <button onClick={props.onClick}>Clique aqui!</button>
}

function Products(props) {
    return (
      <div>
      <h2>Produto: {props.name}</h2>
      <h2>Preco: {props.preco}</h2>
      <h2>Descricao: {props.descricao}</h2>    
      </div>
    )
}

// <button onClick={handleClick}>Clique aqui!</button>

//  const handleClick = () => {
//     alert('Botao Clicado!')
//   }

function App() {
  const produto= {
    name: "Camiseta",
    preco: 90.90,
    descricao: "Camisera muito maneira"
  }
  
  return (
    <>
      <Products name={produto.name} preco={produto.preco} descricao={produto.descricao}></Products>
    </>
  )
}

export default App
