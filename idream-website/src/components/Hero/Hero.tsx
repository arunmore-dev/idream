"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion"; // <-- 1. Import Variants
import styles from "./Hero.module.css";

// 2. Add the Variants type here
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// 3. Add the Variants type here as well
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Background Media */}
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

      {/* Animated Content Section */}
      <div className={styles.contentWrapper}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // Re-animates smoothly when scrolling into view
        >
          {/* Animated Heading */}
          <motion.h1 className={styles.heading} variants={fadeUpVariants}>
            Shaping the Future of <br className={styles.desktopOnly} />
            <span className={styles.highlight}>Film &amp; Entertainment</span>{" "}
            <br className={styles.desktopOnly} />
            Infrastructure
          </motion.h1>

          {/* Animated Subtext */}
          <motion.p className={styles.subtext} variants={fadeUpVariants}>
            A pioneer in film, media, entertainment, and allied infrastructure
            segments, strategically realigning for transformative growth and
            long-term stakeholder value.
          </motion.p>

          {/* Animated CTA Buttons */}
          <motion.div className={styles.buttons} variants={fadeUpVariants}>
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
                <path
                  d="M7.90792 6.77812H21.4642V20.3343M20.5227 7.71952L6.77823 21.464"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}