import styles from "./styles.module.css";

export function ContactHero() {
  return (
    <section className={styles.section}>
      <div className={styles.shell}>
        <div className={styles.copy}>
          <h1>
            <span>We’re Here</span>
            <br />
            For You
          </h1>
          <p>Our friendly eye-care team is here to help</p>
        </div>
      </div>
      <div className={styles.doctorWrap}>
        <img
          className={styles.doctorImage}
          src="/assets/contact.jpg"
          alt="Shanti Eye Tech consultation room with eye examination equipment"
        />
      </div>

    </section>
  );
}
