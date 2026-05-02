import AppLayout from "@/app/Frontend/components/layout";
import { PageTemplate } from "@/app/Frontend/components/PageTemplate";

export default function AboutFrontend() {
  return (
    <AppLayout>
      <PageTemplate title="À Propos - Frontend" badge="server">
        <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '32px' }}>
          Découvrez les technologies utilisées pour le développement du catalogue TechShop.
        </p>
        <div style={{ display: 'grid', gap: '24px' }}>
          <div className="card">
            <h3 style={{ marginBottom: '12px' }}>Next.js (App Router)</h3>
            <p>Utilisation des Server Components pour le rendu initial ultra-rapide et Client Components pour l'interactivité.</p>
          </div>
          <div className="card">
            <h3 style={{ marginBottom: '12px' }}>CSS Modules</h3>
            <p>Styles isolés par composant pour éviter les conflits et faciliter la maintenance.</p>
          </div>
          <div className="card">
            <h3 style={{ marginBottom: '12px' }}>Context API</h3>
            <p>Gestion globale de l'état (Panier, Thème) sans dépendances externes lourdes.</p>
          </div>
        </div>
      </PageTemplate>
    </AppLayout>
  );
}
