"use client";

import Link from "next/link";
import styles from "./MobileMenu.module.css";

interface Props {
  links: { href: string; label: string }[];
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ links, isOpen, onClose }: Props) {
  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
      <ul className={styles.list}>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={styles.link} onClick={onClose}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
