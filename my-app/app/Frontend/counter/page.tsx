import type { Metadata } from "next";
import AppLayout from "@/app/Frontend/components/layout";
import { PageTemplate } from "@/app/Frontend/components/PageTemplate";
import { DemosPageClient } from "@/app/Frontend/components/DemosPageClient";

export const metadata: Metadata = {
  title: "Démos - TechShop",
  description: "Explorez nos démos interactives et tests de performances",
};

export default function DemosPage() {
  return (
    <AppLayout>
      <PageTemplate 
        title="Démos Interactives" 
        subtitle="Testez et comparez nos produits avant d'acheter. Accédez à des outils de benchmark professionnels et des démonstrations en direct."
      >
        <DemosPageClient />
      </PageTemplate>
    </AppLayout>
  );
}
