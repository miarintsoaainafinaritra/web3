"use client";

import { BookOpen, Video, FileText, Code, HeadphonesIcon, Layers } from "lucide-react";
import { HoverButton } from "@/app/Frontend/components/HoverButton";

const documentationCategories = [
  {
    icon: BookOpen,
    title: "Guides d'Installation",
    description: "Instructions détaillées pour installer et configurer vos produits.",
    articles: [
      "Configuration initiale du MacBook",
      "Installer Windows sur Dell XPS",
      "Optimiser les performances",
      "Troubleshooting avancé",
    ],
  },
  {
    icon: Video,
    title: "Tutoriels Vidéo",
    description: "Vidéos pas-à-pas pour apprendre à utiliser vos appareils au maximum.",
    articles: [
      "Déballer et configurer",
      "Astuces et raccourcis",
      "Maintenance et nettoyage",
      "Sécurité et protection",
    ],
  },
  {
    icon: FileText,
    title: "Spécifications Techniques",
    description: "Fiches techniques détaillées et comparaisons de specs.",
    articles: [
      "Processeurs et CPU",
      "Mémoire RAM vs SSD",
      "Résolutions et écrans",
      "Batterie et autonomie",
    ],
  },
  {
    icon: Code,
    title: "Documentation API",
    description: "Pour les développeurs : intégrations et connectivité.",
    articles: [
      "REST API Reference",
      "Webhooks et événements",
      "Authentification OAuth",
      "Exemples de code",
    ],
  },
  {
    icon: HeadphonesIcon,
    title: "Support Technique",
    description: "Articles de dépannage et solutions aux problèmes courants.",
    articles: [
      "Problèmes de connectivité",
      "Écran noir ou gelé",
      "Problèmes de batterie",
      "Perte de données",
    ],
  },
  {
    icon: Layers,
    title: "Mises à Jour & Firmware",
    description: "Guides pour mettre à jour vos appareils et télécharger les derniers drivers.",
    articles: [
      "Télécharger les mises à jour",
      "Mettre à jour le BIOS",
      "Installer les drivers",
      "Rollback et restauration",
    ],
  },
];

const quickLinks = [
  { label: "Configuration de base", badge: "5 min" },
  { label: "Optimisation de performance", badge: "15 min" },
  { label: "Sauvegarde des données", badge: "10 min" },
  { label: "Résoudre les problèmes", badge: "20 min" },
];

export function SearchPageClient() {
  return (
    <>
      <div style={{ marginBottom: '80px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '32px', color: 'var(--foreground)' }}>
          Commencez ici
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {quickLinks.map((link) => (
            <HoverButton 
              key={link.label}
              style={{
                padding: '20px 24px',
                background: 'var(--background)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              hoverEffect="scale"
              onClick={() => alert(`Chargement du guide : ${link.label}`)}
            >
              <span style={{ fontWeight: '600', color: 'var(--foreground)' }}>{link.label}</span>
              <span style={{ fontSize: '12px', background: 'var(--primary)', color: 'white', padding: '4px 12px', borderRadius: '20px', fontWeight: '600' }}>
                {link.badge}
              </span>
            </HoverButton>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '80px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '48px', color: 'var(--foreground)' }}>
          Parcourez notre documentation
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {documentationCategories.map((category) => (
            <div key={category.title} className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <category.icon size={40} color="var(--primary)" strokeWidth={1.5} />
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--foreground)', margin: 0 }}>
                  {category.title}
                </h3>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px' }}>
                {category.description}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {category.articles.map((article) => (
                  <li key={article} style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                    <span style={{ width: '4px', height: '4px', background: 'var(--primary)', borderRadius: '50%' }}></span>
                    {article}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '80px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '32px', color: 'var(--foreground)' }}>
          Cherchez une réponse
        </h2>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <input 
            type="text" 
            placeholder="Rechercher dans la documentation..."
            style={{
              width: '100%',
              padding: '16px 20px',
              fontSize: '16px',
              border: '1px solid var(--border-strong)',
              borderRadius: '12px',
              background: 'var(--background)',
              color: 'var(--foreground)',
              boxShadow: 'var(--shadow-sm)',
              transition: 'all 0.2s',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'var(--primary)';
              e.currentTarget.style.boxShadow = 'var(--shadow)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-strong)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}
          />
        </div>
      </div>

      <div style={{ background: 'var(--secondary)', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', border: '1px solid var(--border)' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '16px', color: 'var(--foreground)' }}>
          Vous n'avez pas trouvé de réponse ?
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '32px' }}>
          Notre équipe d'experts est prête à vous aider. Contactez-nous via le formulaire de support.
        </p>
        <HoverButton 
          style={{ padding: '12px 32px', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', fontSize: '16px', cursor: 'pointer', transition: 'all 0.2s' }}
          hoverEffect="color-change"
          primaryColor="var(--primary)"
          hoverColor="var(--primary-hover)"
          onClick={() => window.location.href = '/contact'}
        >
          Contacter le Support
        </HoverButton>
      </div>
    </>
  );
}
