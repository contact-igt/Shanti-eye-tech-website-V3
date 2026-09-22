import type { BlogDoctorProfileBlock } from "@/lib/blogApi";
import styles from "./styles.module.css";

function resolveImage(block: BlogDoctorProfileBlock): string | null {
  return (
    block.url ??
    block.original_url ??
    block.profile_url ??
    block.media?.original_url ??
    null
  );
}

export function BlogDoctorInsight({ data }: { data?: BlogDoctorProfileBlock }) {
  if (!data || data.enabled === false) return null;
  if (!data.name && !data.bio) return null;

  const imageUrl = resolveImage(data);

  return (
    <aside className={styles.card}>
      <div className={styles.header}>
        {imageUrl ? (
          <div className={styles.avatar}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageUrl} alt={data.name ?? "Doctor"} />
          </div>
        ) : (
          <div className={styles.avatarPlaceholder} aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        )}
        <div className={styles.meta}>
          {data.name ? <strong className={styles.name}>{data.name}</strong> : null}
          {data.role ? <span className={styles.role}>{data.role}</span> : null}
          {data.credentials ? <span className={styles.credentials}>{data.credentials}</span> : null}
        </div>
      </div>
      {data.bio ? <p className={styles.bio}>{data.bio}</p> : null}
    </aside>
  );
}
