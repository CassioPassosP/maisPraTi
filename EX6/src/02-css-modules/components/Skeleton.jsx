import React from "react";
import styles from "../styles/Skeleton.module.css";

export default function Skeleton({ width = "100%", height = "100px" }) {
  return <div className={styles.skeleton} style={{ width, height }} />;
}
