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
          <p>Our friendly eyecare team is here to help</p>
        </div>
      </div>
      <div className={styles.doctorWrap}>
        <img className={styles.clinicImage} src="/assets/contact-clinic.png" alt="" />
        <img
          className={styles.doctorImage}
          src="/assets/contact-doctor.png"
          alt="Shanthi EyeTech doctor beside eye examination equipment"
        />
      </div>
    </section>
  );
}
