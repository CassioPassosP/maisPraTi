import React from "react";

export default function Button({ children, variant = "solid", disabled }) {
  return (
    <button className={`btn ${variant}`} disabled={disabled}>
      {children}
    </button>
  );
}