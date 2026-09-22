import { Eyebrow } from "../Eyebrow/Eyebrow";
import styles from "./styles.module.css";

type Props = {
  eyebrow?: string;
  title: string;
  accent: string;
  body?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
};

export function SectionHeading({ eyebrow, title, accent, body, align = "center", as: HeadingTag = "h2" }: Props) {
  return (
    <div className={`${styles.heading} ${align === "left" ? styles.left : styles.center}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <HeadingTag>
        {title} <span>{accent}</span>
      </HeadingTag>
      {body ? <p>{body}</p> : null}
    </div>
  );
}
