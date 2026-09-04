import { useState } from "react"  //usestate - e um hook, uma funcao especial da biblioteca do react para trabalhar com estados, permite a gente adicionar um estado para o nosso componente 

const content = [
  {
    label: "Por que React?",
    items:[
      "React e muito popular",
      "Facilita a criação de interfaces de usuário complexas e interativas",
      "É poderoso e flexível",
      "Possui um ecossistema muito ativo e versátil"
    ]
  },

  {
    label: "Principais Recursos",
    items:[
      "Componentes, JSX e Props",
      "Estado",
      "Hooks",
      "Renderização dinâmica"
    ]
  },

  {
    label: "Recursos Relacionados",
    items:[
      "Página oficial",
      "Next.js (Framework Fullstack)",
      "React Native (Construa aplicativos móveis nativos com React)"
    ]
  }
  
]

function App() {
  const [activeContetIndex, setActiveContentIndex] = useState(0)

  return (
    <>
    <div className="container">
      <header>
        <img src="react-logo-xs" alt=""/>
        <div>
          <h1>React.js</h1>
          <p>Estou usando React</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          {content.map((tab, index) => (
            <button 
            key={tab.label} 
            className={activeContetIndex === index ? "active" : ""}
            onClick={() => setActiveContentIndex(index)}
            >
            {tab.label}
            </button>
          ))}
        </menu>

        <div id="tab-content">
          <ul>
            {content[activeContetIndex].items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
