import styles from "./PageTemplate.module.css";

interface Props {
  title: string;
  subtitle?: string;
  badge?: "server" | "client";
  children: React.ReactNode;
}

export const PageTemplate = ({ title, subtitle, badge, children }: Props) => (
  <div className={styles.page}>
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {badge && <span className={`badge badge-${badge}`}>Mode {badge}</span>}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  </div>
);
