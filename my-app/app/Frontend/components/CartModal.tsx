"use client";

import { useApp } from "@/context/AppContext";
import { X, Trash2, ShoppingBag } from "lucide-react";
import { HoverButton } from "./HoverButton";
import styles from "./CartModal.module.css";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  const { cart, removeFromCart, clearCart, cartCount } = useApp();

  if (!isOpen) return null;

  const cartItems = cart;

  const totalPrice = cartItems.reduce((sum, item) => sum + item.prix * item.quantity, 0);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <ShoppingBag size={24} color="var(--primary)" />
            <h2 style={{ fontSize: '20px', fontWeight: '800' }}>Votre Panier</h2>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className={styles.content}>
          {cartItems.length === 0 ? (
            <div className={styles.empty}>
              <p>Votre panier est vide</p>
              <HoverButton 
                style={{ marginTop: '20px', padding: '12px 24px', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
                onClick={onClose}
              >
                Continuer mes achats
              </HoverButton>
            </div>
          ) : (
            <>
              <ul className={styles.itemList}>
                {cartItems.map((item) => (
                  <li key={item.id} className={styles.item}>
                    <div className={styles.itemInfo}>
                      <h4 style={{ fontWeight: '700' }}>{item.nom}</h4>
                      <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                        {item.prix} € x {item.quantity}
                      </p>
                    </div>
                    <div className={styles.itemActions}>
                      <span style={{ fontWeight: '800', color: 'var(--primary)' }}>
                        {item.prix * item.quantity} €
                      </span>
                      <button 
                        className={styles.removeBtn} 
                        onClick={() => removeFromCart(item.id)}
                        title="Supprimer un exemplaire"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className={styles.footer}>
                <div className={styles.total}>
                  <span>Total</span>
                  <span style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)' }}>
                    {totalPrice} €
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                  <HoverButton 
                    style={{ flex: 1, padding: '14px', background: 'var(--secondary)', color: 'var(--foreground)', border: '1px solid var(--border)', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}
                    onClick={clearCart}
                  >
                    Vider
                  </HoverButton>
                  <HoverButton 
                    style={{ flex: 2, padding: '14px', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '700', cursor: 'pointer' }}
                    onClick={() => alert("Passage à la caisse (Démo)")}
                  >
                    Commander
                  </HoverButton>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
