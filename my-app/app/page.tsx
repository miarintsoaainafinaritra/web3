"use client";

import AppLayout from "@/app/Frontend/components/layout";
import { ProductGrid } from "@/app/Frontend/components/ProductGrid";
import { HoverButton } from "@/app/Frontend/components/HoverButton";
import { Zap, Shield, Truck, Award, Smartphone, Laptop, Tv, Monitor, Cpu, Globe } from "lucide-react";
import styles from "./page.module.css";

export default function Home() {
  const benefits = [
    { icon: Zap, title: "Technologie Avant-Garde", description: "Accédez aux derniers produits technologiques du marché" },
    { icon: Shield, title: "Garantie Complète", description: "Protection totale sur tous vos achats jusqu'à 2 ans" },
    { icon: Truck, title: "Livraison Rapide", description: "Livraison gratuite sous 24-48h en France métropolitaine" },
    { icon: Award, title: "Service Premium", description: "Support client 24/7 par des experts technologiques" },
  ];

  const partners = [
    { name: 'Apple', icon: Smartphone, color: 'linear-gradient(135deg, #333, #000)' },
    { name: 'Samsung', icon: Monitor, color: 'linear-gradient(135deg, #034EA2, #007DB8)' },
    { name: 'Dell', icon: Laptop, color: 'linear-gradient(135deg, #007DB8, #00b0ff)' },
    { name: 'Sony', icon: Tv, color: 'linear-gradient(135deg, #000, #444)' },
    { name: 'Google', icon: Globe, color: 'linear-gradient(135deg, #4285F4, #34A853)' },
    { name: 'Tecno', icon: Cpu, color: 'linear-gradient(135deg, #0056B3, #00aaff)' }
  ];

  return (
    <AppLayout>
      <div className={styles.hero}>
        <div className={styles.heroBadge}>Édition Spéciale 2026</div>
        <h1 className={styles.heroTitle}>
          L'Excellence <span className={styles.gradientText}>Technologique</span>
        </h1>
        <p className={styles.heroDescription}>
          Découvrez notre sélection curatée de matériel informatique haute performance.
          Des solutions conçues pour les passionnés et les professionnels exigeants.
        </p>
        <div className={styles.heroActions}>
          <HoverButton 
            className="btn btn-primary" 
            style={{ padding: '14px 40px', fontSize: '16px', fontWeight: '600', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', background: 'var(--primary)' }}
            hoverEffect="color-change"
            primaryColor="var(--primary)"
            hoverColor="var(--primary-hover)"
            onClick={() => window.location.href = '#products'}
          >
            Découvrir nos produits
          </HoverButton>
          <HoverButton 
            className="btn btn-secondary" 
            style={{ padding: '14px 40px', fontSize: '16px', fontWeight: '600', color: 'var(--foreground)', border: '1px solid var(--border-strong)', borderRadius: '8px', cursor: 'pointer', background: 'var(--background)' }}
            hoverEffect="scale"
            onClick={() => window.location.href = '/about'}
          >
            En savoir plus
          </HoverButton>
        </div>
      </div>

      <div style={{ padding: '80px 24px', background: 'var(--background-secondary, rgba(0,0,0,0.02))' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800', textAlign: 'center', marginBottom: '60px', color: 'var(--foreground)' }}>
            Pourquoi nous choisir ?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card" style={{ textAlign: 'center', padding: '40px 32px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                  <benefit.icon size={48} color="var(--primary)" strokeWidth={1.5} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px', color: 'var(--foreground)' }}>
                  {benefit.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="products" className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '12px', color: 'var(--foreground)' }}>
          Nos Produits Vedettes
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '60px' }}>
          Sélection de matériels haut de gamme pour tous les besoins technologiques
        </p>
        <ProductGrid />
      </div>

      <div style={{ padding: '80px 24px', borderTop: '1px solid var(--border)', background: 'var(--background)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '800', textAlign: 'center', marginBottom: '50px', color: 'var(--foreground)', letterSpacing: '0.05em' }}>
            NOS PARTENAIRES DE CONFIANCE
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px', alignItems: 'center' }}>
            {partners.map(partner => (
              <div 
                key={partner.name} 
                style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  width: '120px',
                  transition: 'all 0.3s ease'
                }} 
                className="hover:scale-110"
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '18px',
                  background: partner.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  border: '2px solid rgba(255,255,255,0.1)'
                }}>
                  <partner.icon size={32} strokeWidth={2} />
                </div>
                <span style={{ 
                  fontSize: '14px', 
                  fontWeight: '800', 
                  color: 'var(--foreground)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: '80px 24px', background: 'linear-gradient(135deg, var(--primary), #818cf8)', color: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '20px' }}>
            Prêt à Upgrader votre Setup ?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '40px', opacity: 0.95, lineHeight: '1.6' }}>
            Rejoignez des milliers de clients satisfaits et découvrez la différence que peut apporter un équipement professionnel.
          </p>
          <HoverButton 
            style={{ padding: '16px 48px', fontSize: '16px', fontWeight: '700', background: 'white', color: 'var(--primary)', border: 'none', borderRadius: '8px', cursor: 'pointer', transition: 'transform 0.2s ease' }}
            hoverEffect="scale"
            onClick={() => window.location.href = '#products'}
          >
            Explorer la Collection
          </HoverButton>
        </div>
      </div>
    </AppLayout>
  );
}
