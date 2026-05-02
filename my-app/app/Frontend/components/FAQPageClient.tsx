"use client";

import { HelpCircle, ShoppingCart, Zap, Smartphone, RotateCcw, Eye } from "lucide-react";
import { HoverButton } from "@/app/Frontend/components/HoverButton";

const faqs = [
  {
    category: "Achats et Commandes",
    icon: ShoppingCart,
    questions: [
      {
        q: "Quels sont les délais de livraison ?",
        a: "Nous offrons une livraison gratuite sous 24-48h en France métropolitaine pour les commandes passées avant 14h. Les régions ultrapériphériques reçoivent leur commande sous 3-5 jours ouvrables.",
      },
      {
        q: "Puis-je annuler ma commande ?",
        a: "Oui, vous pouvez annuler votre commande dans les 24 heures suivant sa création. Après ce délai, si le produit n'a pas été expédié, contactez-nous directement.",
      },
      {
        q: "Comment puis-je payer sécurisement ?",
        a: "Nous acceptons les cartes bancaires (Visa, Mastercard, AMEX), PayPal, et Apple Pay. Tous les paiements sont sécurisés via SSL 256-bits.",
      },
      {
        q: "Y a-t-il des frais cachés ?",
        a: "Non, le prix affiché est le prix final. Aucune charge supplémentaire n'est appliquée sauf les frais de port, mais celui-ci est gratuit pour les commandes > 50€.",
      },
    ],
  },
  {
    category: "Garantie et Service",
    icon: Zap,
    questions: [
      {
        q: "Quelle est la durée de la garantie ?",
        a: "La garantie standard est de 2 ans pour tous nos produits. Vous pouvez l'étendre de 1 à 3 années supplémentaires moyennant un coût optionnel.",
      },
      {
        q: "Qu'est-ce qui est couvert par la garantie ?",
        a: "La garantie couvre les défauts de fabrication, les pannes matérielles dues à des défauts de conception, et les problèmes liés à l'usure normale.",
      },
      {
        q: "Comment démarrer une réclamation garantie ?",
        a: "Visitez notre page de support, téléchargez un formulaire de réclamation ou appelez notre hotline 24/7. Vous recevrez une étiquette d'expédition gratuite.",
      },
      {
        q: "Puis-je obtenir un remboursement au lieu d'une réparation ?",
        a: "Oui, si le produit ne peut pas être réparé ou s'il y a plusieurs pannes, nous offrons le remboursement ou l'échange complet.",
      },
    ],
  },
  {
    category: "Produits et Spécifications",
    icon: Smartphone,
    questions: [
      {
        q: "Les produits sont-ils originaux ou reconditionnés ?",
        a: "Tous nos produits sont originaux et neufs, sauf si spécifié dans la description. Nous n'utilisons pas de produits reconditionnés ou d'occasion.",
      },
      {
        q: "Puis-je comparer plusieurs produits ?",
        a: "Oui ! Utilisez notre outil de comparaison pour mettre côte à côte jusqu'à 4 produits et voir toutes les différences de spécifications.",
      },
      {
        q: "Quels sont les modèles en stock actuellement ?",
        a: "Consultez notre page de stock en temps réel. Vous pouvez aussi ajouter des produits à votre liste d'attente pour être notifié dès leur réapprovisionnement.",
      },
      {
        q: "Offrez-vous des accessoires avec les produits ?",
        a: "Oui, certains produits incluent des accessoires essentiels (câbles, adaptateurs, housse). Vérifiez la description du produit pour plus de détails.",
      },
    ],
  },
  {
    category: "Retours et Remboursements",
    icon: RotateCcw,
    questions: [
      {
        q: "Quel est le délai de rétractation ?",
        a: "Vous avez 30 jours à compter de la réception pour retourner un produit sans raison particulière et obtenir un remboursement complet.",
      },
      {
        q: "Les retours sont-ils gratuits ?",
        a: "Oui, nous fournissons une étiquette d'expédition gratuite. Le coût de l'expédition du retour est à notre charge.",
      },
      {
        q: "Combien de temps faut-il pour recevoir mon remboursement ?",
        a: "Une fois le produit reçu et inspecté (2-3 jours), le remboursement est crédité sous 5-7 jours ouvrables.",
      },
      {
        q: "Puis-je retourner un produit non utilisé ?",
        a: "Oui, tant qu'il est dans son emballage original, non ouvert et sans signes d'utilisation, vous pouvez le retourner pour un remboursement intégral.",
      },
    ],
  },
  {
    category: "Techniques et Setup",
    icon: Eye,
    questions: [
      {
        q: "Comment optimiser les performances de mon appareil ?",
        a: "Consultez notre guide d'optimisation complet dans la section Documentation. Nous couvrons le nettoyage, les mises à jour, et les paramètres avancés.",
      },
      {
        q: "Puis-je installer un autre système d'exploitation ?",
        a: "Cela dépend de l'appareil. Les ordinateurs portables Dell et HP supportent Linux et Windows. Consultez les spécifications pour les limitations spécifiques.",
      },
      {
        q: "Comment augmenter la durée de vie de la batterie ?",
        a: "Réduisez la luminosité, fermez les applications en arrière-plan, et utilisez le mode économie d'énergie. Vérifiez aussi la santé de la batterie mensuellement.",
      },
      {
        q: "Quel type de support technique bénéficiez-vous ?",
        a: "Nous offrons le support technique 24/7 par chat, email, téléphone et vidéo-consultation. Temps de réponse moyen : 5 minutes.",
      },
    ],
  },
];

export function FAQPageClient() {
  return (
    <>
      <div style={{ display: 'grid', gap: '60px' }}>
        {faqs.map((section) => (
          <div key={section.category}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
              <section.icon size={32} color="var(--primary)" strokeWidth={1.5} />
              <h2 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--foreground)', margin: 0 }}>
                {section.category}
              </h2>
            </div>

            <div style={{ display: 'grid', gap: '16px' }}>
              {section.questions.map((item, idx) => (
                <details
                  key={idx}
                  style={{
                    background: 'var(--background)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '20px 24px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  <summary style={{ fontWeight: '700', fontSize: '16px', color: 'var(--foreground)', cursor: 'pointer', outline: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {item.q}
                    <span style={{ fontSize: '20px', marginLeft: '12px' }}>+</span>
                  </summary>
                  <p style={{ marginTop: '16px', marginBottom: 0, fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '80px', background: 'linear-gradient(135deg, var(--primary), #818cf8)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center' }}>
        <HelpCircle size={48} style={{ margin: '0 auto 24px' }} strokeWidth={1.5} />
        <h2 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '16px' }}>
          Vous n'avez pas trouvé la réponse ?
        </h2>
        <p style={{ fontSize: '16px', marginBottom: '32px', opacity: 0.95 }}>
          Notre équipe de support est disponible 24/7 pour répondre à toutes vos questions.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <HoverButton
            style={{ padding: '12px 32px', color: 'var(--primary)', border: 'none', borderRadius: '8px', fontWeight: '600', fontSize: '16px', cursor: 'pointer', background: 'white' }}
            hoverEffect="scale"
            onClick={() => window.location.href = '/contact'}
          >
            Contacter le Support
          </HoverButton>
          <HoverButton
            style={{ padding: '12px 32px', background: 'rgba(255,255,255,0.2)', color: 'white', border: '2px solid white', borderRadius: '8px', fontWeight: '600', fontSize: '16px', cursor: 'pointer' }}
            hoverEffect="scale"
            onClick={() => window.open('https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ec=GAlAFw&hl=en&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-668455589%3A1777566009019518', '_blank')}
          >
            Envoyez un Email
          </HoverButton>
        </div>
      </div>
    </>
  );
}
