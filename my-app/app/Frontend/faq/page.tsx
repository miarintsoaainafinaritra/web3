import type { Metadata } from "next";
import AppLayout from "@/app/Frontend/components/layout";
import { PageTemplate } from "@/app/Frontend/components/PageTemplate";
import { FAQPageClient } from "@/app/Frontend/components/FAQPageClient";

export const metadata: Metadata = {
  title: "FAQ - TechShop",
  description: "Réponses aux questions les plus fréquentes sur nos produits et services",
};

export default function FAQPage() {
  return (
    <AppLayout>
      <PageTemplate 
        title="Questions Fréquentes" 
        subtitle="Tout ce que vous devez savoir sur nos produits, la livraison, les garanties et plus encore."
      >
        <FAQPageClient />
      </PageTemplate>
    </AppLayout>
  );
}
