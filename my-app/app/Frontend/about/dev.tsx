import AppLayout from "@/app/Frontend/components/layout";
import { PageTemplate } from "@/app/Frontend/components/PageTemplate";

export default function DevPage() {
  return (
    <AppLayout>
      <PageTemplate title="Développement" badge="server">
        <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '32px' }}>
          Informations sur le développement et l'architecture de l'application.
        </p>
        <div style={{ display: 'grid', gap: '24px' }}>
          <div className="card">
            <h3 style={{ marginBottom: '12px' }}>Architecture</h3>
            <p>Structure basée sur Next.js App Router avec séparation claire entre composants et pages.</p>
          </div>
          <div className="card">
            <h3 style={{ marginBottom: '12px' }}>Technologies</h3>
            <p>Next.js, TypeScript, CSS Modules, Context API pour la gestion d'état.</p>
          </div>
        </div>
      </PageTemplate>
    </AppLayout>
  );
}
