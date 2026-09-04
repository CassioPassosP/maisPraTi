import React from "react";

export default function Navbar({ toggleTheme, cartCount }) {
  return (
    <nav className="navbar">
      <div className="logo">Online Shop</div>

      <div className="navbar-btns" >      
        <button onClick={toggleTheme} aria-label="Alternar tema">
        <img className="icons" src="src/images/modo-escuro.png"/>
      </button>
      <div className="cart-badge" aria-label={`Carrinho com ${cartCount} itens`}>
        <img className="icons" src="src/images/carrinho-de-compras.png"/>{cartCount}
      </div>

      </div>
    </nav>
  );
}