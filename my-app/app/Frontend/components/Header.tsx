import Link from "next/link";
import { Navigation } from "@/app/Frontend/components/Navigation";
import { HeaderActions } from "@/app/Frontend/components/HeaderActions";
import { Cpu } from "lucide-react";
import styles from "./Header.module.css";

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <div className={styles.logoIcon}>
          <Cpu size={24} strokeWidth={2.5} />
        </div>
        <span className={styles.logoText}>Tech<span className={styles.logoAccent}>Shop</span></span>
      </Link>
      <div className={styles.navWrapper}>
        <Navigation />
        <HeaderActions />
      </div>
    </div>
  </header>
);
