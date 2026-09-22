"use client";

import styles from "./GoogleReviewBadge.module.css";

interface GoogleReviewBadgeProps {
  doctorName?: string;
  clinicName?: string;
  rating?: number;
  totalReviews?: number;
  avatarUrl?: string;
  reviewUrl?: string;
}

export function GoogleReviewBadge({
  doctorName = "Dr. Amit Solanki Eye Specialist",
  clinicName = "Shanti EyeTech Indore",
  rating = 4.9,
  totalReviews = 776,
  avatarUrl = "/assets/home/doctor-profile.webp",
  reviewUrl = "https://www.google.com/search?q=Dr.+Amit+Solanki+Eye+Specialist+Shanti+EyeTech+Indore#lrd=0x3962fd5037568439:0xb4160c93774cf232,3",
}: GoogleReviewBadgeProps) {
  return (
    <div className={styles.googleBadgeCard}>
      <div className={styles.badgeHeader}>
        <div className={styles.avatarWrapper}>
          <img src={avatarUrl} alt={doctorName} className={styles.avatarImg} />
        </div>
        <div className={styles.badgeInfo}>
          <h4 className={styles.badgeTitle}>
            {doctorName} {clinicName}
          </h4>
          <div className={styles.ratingRow}>
            <span className={styles.ratingNumber}>{rating.toFixed(1)}</span>
            <div className={styles.starsRow} aria-label={`${rating} out of 5 stars`}>
              {[1, 2, 3, 4].map((star) => (
                <svg key={star} className={styles.starIcon} viewBox="0 0 24 24">
                  <path fill="#FF9800" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
              <svg className={styles.starIcon} viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="halfGrad">
                    <stop offset="85%" stopColor="#FF9800" />
                    <stop offset="85%" stopColor="#e0e0e0" />
                  </linearGradient>
                </defs>
                <path fill="url(#halfGrad)" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
          </div>
          <p className={styles.reviewCount}>Based on {totalReviews} reviews</p>
          <div className={styles.poweredBy}>
            <span>powered by </span>
            <span className={styles.googleBrand}>
              <span style={{ color: "#4285F4" }}>G</span>
              <span style={{ color: "#EA4335" }}>o</span>
              <span style={{ color: "#FBBC05" }}>o</span>
              <span style={{ color: "#4285F4" }}>g</span>
              <span style={{ color: "#34A853" }}>l</span>
              <span style={{ color: "#EA4335" }}>e</span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.badgeFooter}>
        <a
          href={reviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.reviewButton}
        >
          <span>review us on</span>
          <span className={styles.gLogoCircle}>
            <svg viewBox="0 0 24 24" className={styles.gLogoSvg}>
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}
