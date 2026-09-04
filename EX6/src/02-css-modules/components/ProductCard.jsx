import React, { useState, useEffect } from "react";
import Button from "./Button";
import styles from "../styles/ProductCard.module.css";
import Skeleton from "./Skeleton";

export default function ProductCard({ product }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500 + Math.random() * 700);
    return () => clearTimeout(t);
  }, []);
  
  return (
    <div className={styles.card}>
      {loading ? (
        <Skeleton className={styles.img} />
      ) : (
        <img className={styles.img} src={product.image} alt={product.title} loading="lazy" />
      )}
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
      <p>{"★".repeat(product.rating)}</p>
      <span>{product.tag}</span>
      <Button variant="solid">Adicionar</Button>
    </div>
  );
}
