import type { Metadata } from "next";
import AppLayout from "@/app/Frontend/components/layout";
import { PageTemplate } from "@/app/Frontend/components/PageTemplate";
import { SearchPageClient } from "@/app/Frontend/components/SearchPageClient";

export const metadata: Metadata = {
  title: "Documentation - TechShop",
  description: "Guides complets et documentation technique pour nos produits",
};

export default function DocumentationPage() {
  return (
    <AppLayout>
      <PageTemplate 
        title="Documentation Complète" 
        subtitle="Trouvez tout ce que vous avez besoin de savoir sur nos produits et services. Guides détaillés, tutoriels vidéo et support technique professionnel."
      >
        <SearchPageClient />
      </PageTemplate>
    </AppLayout>
  );
}
