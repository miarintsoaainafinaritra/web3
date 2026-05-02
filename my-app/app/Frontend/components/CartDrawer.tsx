"use client";

import { useApp } from "@/context/AppContext";
import { X, Trash2, ShoppingBag, Download } from "lucide-react";
import { HoverButton } from "./HoverButton";
import styles from "./CartDrawer.module.css";
import { jsPDF } from "jspdf";

export const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cart, removeFromCart, clearCart } = useApp();

  if (!isCartOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.prix * item.quantity, 0);

  const generateReceipt = () => {
    const orderId = Math.random().toString(36).substr(2, 9).toUpperCase();
    const date = new Date().toLocaleDateString();

    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("TECHSHOP", 105, 20, { align: "center" });
    doc.setFontSize(14);
    doc.text("REÇU DE COMMANDE", 105, 30, { align: "center" });

    doc.setFontSize(12);
    doc.text(`ID Commande: ${orderId}`, 20, 50);
    doc.text(`Date: ${date}`, 20, 60);

    doc.line(20, 70, 190, 70);

    let y = 85;
    doc.setFontSize(11);
    doc.setFont("", "bold");
    doc.text("Produit", 20, y);
    doc.text("Qté", 100, y);
    doc.text("Prix", 140, y);
    doc.setFont("", "normal");

    y += 15;
    cart.forEach(item => {
      doc.text(item.nom, 20, y);
      doc.text(String(item.quantity), 100, y);
      doc.text(`${item.prix * item.quantity} €`, 140, y);
      y += 12;
    });

    doc.line(20, y + 5, 190, y + 5);

    y += 20;
    doc.setFontSize(14);
    doc.setFont("", "bold");
    doc.text(`TOTAL: ${total} €`, 140, y);

    y += 25;
    doc.setFontSize(11);
    doc.setFont("", "normal");
    doc.text("Merci pour votre achat !", 105, y, { align: "center" });

    doc.save(`recu-techshop-${orderId}.pdf`);

    alert("Commande réussie ! Votre reçu a été téléchargé au format PDF");
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <div className={styles.overlay} onClick={() => setIsCartOpen(false)}>
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <ShoppingBag size={24} color="var(--primary)" />
            <h2 style={{ fontSize: '20px', fontWeight: '800' }}>Mon Panier</h2>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsCartOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className={styles.content}>
          {cart.length === 0 ? (
            <div className={styles.empty}>
              <ShoppingBag size={64} style={{ opacity: 0.2, marginBottom: '20px' }} />
              <p>Votre panier est vide</p>
              <HoverButton 
                style={{ marginTop: '20px', padding: '12px 24px', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600' }}
                onClick={() => setIsCartOpen(false)}
              >
                Continuer mes achats
              </HoverButton>
            </div>
          ) : (
            <>
              <div className={styles.itemList}>
                {cart.map((item) => (
                  <div key={item.id} className={styles.item}>
                    <div className={styles.itemInfo}>
                      <h4 style={{ fontWeight: '700', marginBottom: '4px' }}>{item.nom}</h4>
                      <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                        {item.quantity} x {item.prix} €
                      </p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontWeight: '800', color: 'var(--primary)' }}>
                        {item.prix * item.quantity} €
                      </span>
                      <button 
                        className={styles.removeBtn}
                        onClick={() => removeFromCart(item.id)}
                        title="Supprimer"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.footer}>
                <div className={styles.totalRow}>
                  <span>Total</span>
                  <span style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)' }}>
                    {total} €
                  </span>
                </div>
                <div style={{ display: 'grid', gap: '12px', marginTop: '24px' }}>
                  <HoverButton 
                    style={{ width: '100%', padding: '16px', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '12px', fontWeight: '700', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}
                    onClick={generateReceipt}
                  >
                    <Download size={20} />
                    Commander & Télécharger le reçu
                  </HoverButton>
                  <button 
                    className={styles.clearBtn}
                    onClick={clearCart}
                  >
                    Vider le panier
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
