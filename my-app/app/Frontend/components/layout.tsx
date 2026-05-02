import { Header } from "@/app/Frontend/components/Header";
import { Footer } from "@/app/Frontend/components/Footer";
import { CartDrawer } from "@/app/Frontend/components/CartDrawer";
import styles from "./layout.module.css";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
