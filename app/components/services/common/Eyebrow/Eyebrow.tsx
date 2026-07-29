import styles from "./styles.module.css";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className={styles.eyebrow}>
      <i aria-hidden="true" />
      {children}
    </span>
  );
}
