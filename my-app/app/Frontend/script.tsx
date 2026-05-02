import AppLayout from "@/app/Frontend/components/layout";
import { PageTemplate } from "@/app/Frontend/components/PageTemplate";
import { ProductGrid } from "@/app/Frontend/components/ProductGrid";
import styles from "../page.module.css";

export default function FrontendPage() {
  return (
    <AppLayout>
      <div className={styles.hero}>
        <div className={styles.heroBadge}>Module Frontend - Catalogue</div>
        <h1 className={styles.heroTitle}><span className={styles.gradientText}>TechShop</span></h1>
        <p className={styles.heroDescription}>
          Cette section regroupe l'interface utilisateur (Frontend) du catalogue TechShop. 
          Découvrez une expérience d'achat fluide et moderne.
        </p>
      </div>

      <div className="container">
        <ProductGrid />
      </div>

      <div style={{ padding: '60px 0', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '32px', color: 'var(--text-muted)' }}>NOS MARQUES PARTENAIRES</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px', opacity: 0.5, filter: 'grayscale(1)' }}>
          {['Apple', 'Samsung', 'Dell', 'Sony', 'Google'].map(s => (
            <span key={s} style={{ fontSize: '20px', fontWeight: 'bold' }}>{s}</span>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
