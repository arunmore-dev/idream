import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bgMedia}>
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          <source src="/videos/hero.webm" type="video/webm" />
        </video>
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <h1 className={styles.heading}>
          Shaping the Future of{" "}
          <span className={styles.highlight}>Film &amp; Entertainment</span>{" "}
          Infrastructure
        </h1>
        <p className={styles.subtext}>
          A pioneer in film, media, entertainment, and allied infrastructure
          segments, strategically realigning for transformative growth and
          long-term stakeholder value.
        </p>
        <div className={styles.buttons}>
          <Link href="#services" className={styles.btnOutline}>
            Explore Our Vision
          </Link>
          <Link href="#investors" className={styles.btnOutline}>
            Investor Relation
            <Image
              src="/images/arrow_icon.png"
              alt=""
              width={18}
              height={18}
              className={styles.arrowIcon}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}