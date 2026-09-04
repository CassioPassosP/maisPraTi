import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

// Importando CSS Modules como objetos
import buttonStyles from "./styles/Button.module.css";
import navbarStyles from "./styles/Navbar.module.css";
import productCardStyles from "./styles/ProductCard.module.css";
import skeletonStyles from "./styles/Skeleton.module.css";
import tokens from "./styles/tokens.module.css";

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem("dark") === "true");

  useEffect(() => {
    document.body.className = dark ? "dark" : "";
    localStorage.setItem("dark", dark);
  }, [dark]);

  return (
    <>
      {/* Exemplo: usando classes do Navbar */}
      <Navbar
        toggleTheme={() => setDark(!dark)}
        cartCount={2}
        className={navbarStyles.navbar} // se quiser aplicar alguma classe específica do Navbar
      />
      
      <div className={tokens.grid}>
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            cardClass={productCardStyles.card} // passando classe via props
          />
        ))}
      </div>

      {/* Exemplo de botão usando Button.module.css */}
      <button className={buttonStyles.primary}>Clique aqui</button>
    </>
  );
}