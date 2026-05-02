"use client";

import { useApp } from "@/context/AppContext";
import styles from "./HeaderActions.module.css";

export const HeaderActions = () => {
  const { cartCount, setIsCartOpen } = useApp();

  return (
    <div className={styles.actions}>
      <button 
        className={styles.cart} 
        onClick={() => setIsCartOpen(true)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
      >
        <span className={styles.cartIcon}>🛒</span>
        <span className={styles.badge}>{cartCount}</span>
      </button>
    </div>
  );
};
