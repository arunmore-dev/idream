// import Image from "next/image";
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
            <svg
  xmlns="http://www.w3.org/2000/svg"
  width="29"
  height="29"
  viewBox="0 0 29 29"
  fill="none"
  className={styles.arrowIcon}
>
  <g clipPath="url(#clip0_41_565)">
    <path
      d="M7.90792 6.77812H21.4642V20.3343M20.5227 7.71952L6.77823 21.464"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </g>
  <defs>
    <clipPath id="clip0_41_565">
      <rect width="28.2421" height="28.2421" rx="14.1211" fill="white" />
    </clipPath>
  </defs>
</svg>
          </Link>
        </div>
      </div>
    </section>
  );
}