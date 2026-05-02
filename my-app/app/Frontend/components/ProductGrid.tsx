"use client";

import { useState } from "react";
import { Smartphone, Laptop, Tv, X, LucideIcon } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { HoverButton } from "@/app/Frontend/components/HoverButton";
import styles from "./ProductGrid.module.css";

const iconMap: Record<string, LucideIcon> = {
  Smartphone,
  Laptop,
  Tv,
};

interface Product {
  id: number;
  nom: string;
  description: string;
  prix: number;
  categorie: "smartphone" | "laptop" | "tv";
  icon: string;
}

const products: Product[] = [
  {
    id: 1,
    nom: "iPhone 15 Pro",
    description: "Smartphone haut de gamme avec puce A17 Pro",
    prix: 1199,
    categorie: "smartphone",
    icon: "Smartphone"
  },
  {
    id: 2,
    nom: "Samsung Galaxy S24",
    description: "Smartphone Android avec IA intégrée",
    prix: 999,
    categorie: "smartphone",
    icon: "Smartphone"
  },
  {
    id: 3,
    nom: "MacBook Pro 14",
    description: "Ordinateur portable professionnel avec puce M3",
    prix: 1999,
    categorie: "laptop",
    icon: "Laptop"
  },
  {
    id: 4,
    nom: "Dell XPS 15",
    description: "Ultrabook premium avec écran OLED",
    prix: 1499,
    categorie: "laptop",
    icon: "Laptop"
  },
  {
    id: 5,
    nom: "LG OLED C4",
    description: "TV OLED 4K avec qualité d'image exceptionnelle",
    prix: 2499,
    categorie: "tv",
    icon: "Tv"
  },
  {
    id: 6,
    nom: "Samsung Neo QLED",
    description: "TV QLED 8K avec Mini LED",
    prix: 2999,
    categorie: "tv",
    icon: "Tv"
  }
];

export const ProductGrid = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const { addToCart } = useApp();

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.nom.toLowerCase().includes(search.toLowerCase());
    const matchesCat = category === "all" || p.categorie === category;
    return matchesSearch && matchesCat;
  });

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Rechercher un produit..."
            className={styles.searchInput}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button
              className={styles.clearButton}
              onClick={() => setSearch("")}
              aria-label="Effacer la recherche"
            >
              <X size={18} />
            </button>
          )}
        </div>
        <div className={styles.categoryTabs}>
          {["all", "téléphone", "ordinateur", "télévision"].map((cat) => (
            <button
              key={cat}
              className={`${styles.tab} ${category === cat ? styles.active : ""}`}
              onClick={() => setCategory(cat)}
            >
              {cat === "all" ? "Tous" : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        {filteredProducts.map((p) => (
          <div key={p.id} className="card">
            <div className={styles.iconWrapper}>
              {(() => {
                const IconComponent = iconMap[p.icon];
                return <IconComponent className={styles.icon} size={64} />;
              })()}
              <span className="badge badge-server">{p.categorie}</span>
            </div>
            <div className={styles.details}>
              <h3 className={styles.name}>{p.nom}</h3>
              <p className={styles.price}>{p.prix} €</p>
              <p className={styles.desc}>{p.description}</p>
              <HoverButton
                className="btn btn-primary"
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: 'none', background: 'var(--primary)', color: 'white', fontWeight: '600', cursor: 'pointer' }}
                hoverEffect="color-change"
                primaryColor="var(--primary)"
                hoverColor="var(--primary-hover)"
                onClick={() => addToCart(p.id)}
              >
                Ajouter au panier
              </HoverButton>
            </div>
          </div>
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <p className={styles.empty}>Aucun produit trouvé pour votre recherche.</p>
      )}
    </div>
  );
};
