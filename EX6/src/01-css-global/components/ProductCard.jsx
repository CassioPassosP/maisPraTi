import React from "react";
import Button from "./Button";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} loading="lazy" />
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
      <p>{"★".repeat(product.rating)}</p>
      <span>{product.tag}</span>
      <Button variant="solid">Adicionar</Button>
    </div>
  );
}
