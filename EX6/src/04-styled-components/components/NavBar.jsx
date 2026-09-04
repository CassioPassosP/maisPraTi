import React from "react";

export default function Navbar({ toggleTheme, cartCount }) {
  return (
    <nav className="navbar">
      <div className="logo">Mini Loja</div>
      <button onClick={toggleTheme} aria-label="Alternar tema">
        🌙
      </button>
      <div className="cart-badge" aria-label={`Carrinho com ${cartCount} itens`}>
        🛒 {cartCount}
      </div>
    </nav>
  );
}