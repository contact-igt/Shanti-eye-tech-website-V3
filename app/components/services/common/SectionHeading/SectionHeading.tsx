import { Eyebrow } from "../Eyebrow/Eyebrow";
import styles from "./styles.module.css";

type Props = {
  eyebrow?: string;
  title: string;
  accent: string;
  body?: string;
  align?: "center" | "left";
};

export function SectionHeading({ eyebrow, title, accent, body, align = "center" }: Props) {
  return (
    <div className={`${styles.heading} ${align === "left" ? styles.left : styles.center}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2>
        {title} <br className={styles.desktopBr} /><span className={styles.spacePrefix}> </span><span>{accent}</span>
      </h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}
