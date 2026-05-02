"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
  { href: "/counter", label: "Démos" },
  { href: "/search", label: "Documentation" },
  { href: "/faq", label: "FAQ" },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <ul className={styles.desktopNav}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <button 
        className={styles.menuButton} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        Menu
      </button>
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={styles.navLink}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
