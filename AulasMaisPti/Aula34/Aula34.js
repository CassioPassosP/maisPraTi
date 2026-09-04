// Falta fazer o envio do formulario, dar funcoes a pagina.
document.addEventListener('DOMContentLoaded', ()=>{  // evento responsavel por mostrar e ocultar o menu 
    const navToggle = document.getElementById('navToggle')
    const navMenu = document.getElementById('navMenu')
    navToggle.addEventListener('click', () =>{
        navMenu.classList.toggle('open')
    })
})