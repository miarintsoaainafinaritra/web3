"use client";
import { useState } from "react";
import styles from "./Counter.module.css";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.counter}>
      <span className={styles.count}>{count}</span>
      <div className={styles.controls}>
        <button onClick={() => setCount(count - 1)} className="btn btn-secondary">-</button>
        <button onClick={() => setCount(0)} className="btn btn-secondary">Reset</button>
        <button onClick={() => setCount(count + 1)} className="btn btn-primary">+</button>
      </div>
    </div>
  );
};
