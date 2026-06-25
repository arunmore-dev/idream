import Link from "next/link";
import styles from "./Careers.module.css";

export default function Careers() {
  return (
    <section id="careers" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Careers at Idream</h2>
        <p className={styles.text}>
          Join a team that&apos;s shaping the future of film and entertainment
          infrastructure. We&apos;re always looking for passionate individuals
          to grow with us.
        </p>
        <Link href="#contact" className={styles.btn}>
          View Open Positions
        </Link>
      </div>
    </section>
  );
}
