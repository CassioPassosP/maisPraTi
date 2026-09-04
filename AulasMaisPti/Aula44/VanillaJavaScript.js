const selecao = document.getElementById("selecao")
const content = document.getElementById("content")
const buttonPq = document.getElementById("pq-react")
const buttonPrin = document.getElementById("prin-react")
const buttonRel = document.getElementById("rel-react")


selecao.style.listStyleType = "none";

buttonPq.addEventListener('click', (event)=>{
    content.innerHTML = ` 
            <li>React e extremamente popular</li>
            <li>Facilita a criacao de interfces de usuario complexas e interativas</li>
            <li>E poderoso e flexivel</li>
            <li>Possui um ecossitema muito ativo e versatil</li>`
})


buttonPrin.addEventListener('click', (event)=>{
    content.innerHTML = ` 
            <li>Componentes, JSX e Props</li>
            <li>Estado</li>
            <li>Hooks</li>
            <li>Renderizacao dinamica</li>`
})


buttonRel.addEventListener('click', (event)=>{
    content.innerHTML = ` 
            <li>Pagina oficial</li>
            <li>Next.js (Framework Fullstack)</li>
            <li>React Native (Construa aplicativos moveis nativos com React)</li>`
})


