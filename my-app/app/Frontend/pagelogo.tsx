import AppLayout from "@/app/Frontend/components/layout";
import { ProductGrid } from "@/app/Frontend/components/ProductGrid";
import styles from "../page.module.css";

export default function FrontendPage() {
  const partnerBrands = ["Apple", "Samsung", "Dell", "Sony", "Google"];

  return (
    <AppLayout>
      <div className={styles.hero}>
        <div className={styles.heroBadge}>Module Frontend - Catalogue</div>
        <h1 className={styles.heroTitle}>
          <span className={styles.gradientText}>TechShop</span>
        </h1>
        <p className={styles.heroDescription}>
          Cette section regroupe l'interface utilisateur (Frontend) du catalogue TechShop.
          Découvrez une expérience d'achat fluide et moderne.
        </p>
      </div>

      <div className="container">
        <ProductGrid />
      </div>

      <div className={styles.partnerSection}>
        <h2 className={styles.partnerTitle}>NOS MARQUES PARTENAIRES</h2>
        <div className={styles.partnerLogos}>
          {partnerBrands.map((brand) => (
            <span key={brand} className={styles.partnerBrand}>
              {brand}
            </span>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}