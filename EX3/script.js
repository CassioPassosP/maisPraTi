  const btnMenu = document.getElementById('btn-menu');
  const menuLateral = document.getElementById('menu-lateral');
  const fecharMenu = document.getElementById('fechar-menu');

  btnMenu.addEventListener('click', () => {
    menuLateral.classList.add('ativo');
  });

  fecharMenu.addEventListener('click', () => {
    menuLateral.classList.remove('ativo');
  });