import styles from "./Footer.module.css";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logo}>TechShop</div>
          <p className={styles.text}>
            La destination premium pour les passionnés de technologie.
            Découvrez les dernières innovations et profitez d'un service exceptionnel.
          </p>
        </div>
        
        <div className={styles.links}>
          <h4>Entreprise</h4>
          <Link href="/" className={styles.link}>Accueil</Link>
          <Link href="/about" className={styles.link}>À propos</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </div>

        <div className={styles.links}>
          <h4>Support</h4>
          <Link href="/counter" className={styles.link}>Démos</Link>
          <Link href="/search" className={styles.link}>Documentation</Link>
          <Link href="/faq" className={styles.link}>FAQ</Link>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>© {currentYear} TechShop. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
