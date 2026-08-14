import Link from "next/link";
import { ReactNode } from "react";

interface Action {
  label: string;
  href: string;
  variant: "primary" | "outline";
  /** Use `<a>` instead of Next Link (e.g. tel: or mailto: hrefs) */
  external?: boolean;
}

interface SubmissionStatusProps {
  variant: "success" | "error";
  icon: string;
  eyebrow: string;
  titleId: string;
  title: string;
  body: ReactNode;
  actions: Action[];
}

export function SubmissionStatus({
  variant,
  icon,
  eyebrow,
  titleId,
  title,
  body,
  actions,
}: SubmissionStatusProps) {
  return (
    <main className="submission-status-page">
      <section className="submission-status-card" aria-labelledby={titleId}>
        <span className={`submission-status-icon ${variant}`} aria-hidden="true">
          {icon}
        </span>
        <p className="submission-status-eyebrow">{eyebrow}</p>
        <h1 id={titleId}>{title}</h1>
        <p>{body}</p>
        <div className="submission-status-actions">
          {actions.map((action) =>
            action.external ? (
              <a
                key={action.label}
                className={`button button-${action.variant}`}
                href={action.href}
              >
                {action.label}
              </a>
            ) : (
              <Link
                key={action.label}
                className={`button button-${action.variant}`}
                href={action.href}
              >
                {action.label}
              </Link>
            )
          )}
        </div>
      </section>
    </main>
  );
}
