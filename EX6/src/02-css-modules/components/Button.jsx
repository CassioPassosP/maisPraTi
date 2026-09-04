import React from "react";
import styles from "../styles/Button.module.css";

export default function Button({ children, variant = "solid", disabled = false, loading = false, ...rest }) {
  const classNames = [styles.btn, styles[variant]];
  if (disabled) classNames.push(styles.disabled);
  if (loading) classNames.push(styles.loading);
  return (
    <button
      className={classNames.filter(Boolean).join(" ")}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      {...rest}
    >
      {loading ? <span className={styles.spinner} aria-hidden="true"></span> : children}
    </button>
  );
}
