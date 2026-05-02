"use client";

import { Smartphone, Laptop, Tv, Zap, Gauge } from "lucide-react";
import { HoverButton } from "@/app/Frontend/components/HoverButton";

const demos = [
  {
    icon: Smartphone,
    title: "Calculateur de Performance",
    description: "Comparez les performances de nos téléphones haut de gamme avec des benchmarks en temps réel.",
    features: ["Geekbench 6", "AnTuTu Benchmark", "Graphiques 3D en direct"],
  },
  {
    icon: Laptop,
    title: "Test de Vitesse Portable",
    description: "Vérifiez les vitesses de traitement et les performances des ordinateurs portables professionnels.",
    features: ["Cinebench R23", "GeekBench CPU", "Test d'endurance"],
  },
  {
    icon: Tv,
    title: "Calibration Écran",
    description: "Démonstration interactive des technologies d'affichage et calibrage des couleurs.",
    features: ["Test de gamme de couleurs", "Test de contraste", "Analyse HDR"],
  },
  {
    icon: Gauge,
    title: "Configurateur de Système",
    description: "Créez votre configuration idéale et obtenez des recommandations personnalisées.",
    features: ["Sélection de composants", "Estimation de performance", "Gestion de budget"],
  },
];

const testimonials = [
  {
    author: "Jean Martin",
    role: "Développeur Full-Stack",
    text: "Les démos m'ont permis de comparer précisément les MacBook pour mon projet. Très utile!",
  },
  {
    author: "Sarah Dupont",
    role: "Designer Graphique",
    text: "Le test de calibration écran m'a aidée à trouver le bon moniteur pour mon studio créatif.",
  },
  {
    author: "Pierre Lefevre",
    role: "Gamer Professionnel",
    text: "Les benchmarks de gaming sont très précis. J'ai trouvé mon setup parfait grâce à ça.",
  },
];

export function DemosPageClient() {
  return (
    <>
      <div id="demos" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '80px' }}>
        {demos.map((demo) => (
          <div key={demo.title} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <demo.icon size={40} color="var(--primary)" strokeWidth={1.5} />
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--foreground)', margin: 0 }}>
                {demo.title}
              </h3>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px', flex: 1 }}>
              {demo.description}
            </p>
            <div>
              <p style={{ fontSize: '12px', fontWeight: '600', color: 'var(--foreground)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Fonctionnalités
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {demo.features.map((feature) => (
                  <li key={feature} style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '4px', height: '4px', background: 'var(--primary)', borderRadius: '50%' }}></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <HoverButton 
              style={{ marginTop: '24px', padding: '12px 20px', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', fontSize: '14px', width: '100%', transition: 'all 0.2s', background: 'var(--primary)' }}
              hoverEffect="color-change"
              primaryColor="var(--primary)"
              hoverColor="var(--primary-hover)"
              onClick={() => alert(`Lancement de la démo : ${demo.title}`)}
            >
              Lancer la Démo
            </HoverButton>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: '80px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '12px', color: 'var(--foreground)' }}>
          Ce que disent nos utilisateurs
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '48px' }}>
          Découvrez comment nos démos ont aidé des milliers de clients à faire le bon choix.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="card">
              <p style={{ fontSize: '16px', color: 'var(--foreground)', marginBottom: '24px', lineHeight: '1.6', fontStyle: 'italic' }}>
                "{testimonial.text}"
              </p>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--foreground)', margin: 0 }}>
                  {testimonial.author}
                </p>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: 'linear-gradient(135deg, var(--primary), #818cf8)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '16px' }}>
          Prêt à Tester ?
        </h2>
        <p style={{ fontSize: '16px', marginBottom: '32px', opacity: 0.95 }}>
          Accédez à toutes nos démos interactives et trouvez le produit parfait pour vous.
        </p>
        <HoverButton 
          style={{ padding: '14px 40px', color: 'var(--primary)', border: 'none', borderRadius: '8px', fontWeight: '700', fontSize: '16px', cursor: 'pointer', transition: 'transform 0.2s', background: 'white' }}
          hoverEffect="scale"
          onClick={() => window.location.href = '#demos'}
        >
          Découvrir Tous les Tests
        </HoverButton>
      </div>
    </>
  );
}
