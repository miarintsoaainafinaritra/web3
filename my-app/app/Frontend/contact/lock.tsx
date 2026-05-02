import AppLayout from "@/app/Frontend/components/layout";
import { PageTemplate } from "@/app/Frontend/components/PageTemplate";

export default function ContactFrontend() {
  return (
    <AppLayout>
      <PageTemplate title="Contact Support Frontend" badge="server">
        <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h3 style={{ marginBottom: '20px', color: 'var(--primary)' }}>Support Technique</h3>
          <p style={{ marginBottom: '16px' }}>Pour toute question relative à l'interface utilisateur ou au catalogue :</p>
          <div style={{ display: 'grid', gap: '16px' }}>
            <p><strong>Email :</strong> dev-frontend@techshop.com</p>
            <p><strong>Heures d'ouverture :</strong> Lundi - Vendredi, 9h - 18h</p>
          </div>
          <div style={{ marginTop: '24px' }}>
            <button className="btn btn-primary" style={{ width: '100%' }}>Ouvrir un ticket</button>
          </div>
        </div>
      </PageTemplate>
    </AppLayout>
  );
}
