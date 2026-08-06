"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import styles from "./Pioneering.module.css";

// Animation Variants Definition
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Pioneering() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>

        {/* Top Intro Section */}
        <motion.div
          className={styles.intro}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className={styles.introLeft}>
            <motion.span className={styles.eyebrow} variants={fadeUpVariants}>
              About Us
            </motion.span>
            <motion.h2 className={styles.heading} variants={fadeUpVariants}>
              Pioneering the Future of Entertainment Infrastructure
            </motion.h2>
          </div>
          <div className={styles.introRight}>
            <motion.p className={styles.description} variants={fadeUpVariants}>
              IDream Film Infrastructure Company Limited provides world-class
              facilities and innovative solutions for the global film, media, and
              entertainment industry. We bridge the gap between creative vision
              and technical excellence.
            </motion.p>
          </div>
        </motion.div>

        {/* 1. DESKTOP VIEW: Shows full grid side-by-side with staggered reveals */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* COLUMN 1 */}
          <motion.div className={styles.column} variants={fadeUpVariants}>
            <div className={styles.textCard}>
              <div>
                <span className={styles.cardLabel}>Who We Are</span>
              </div>
              <p className={styles.cardText}>
                Leading Provider of Film &amp; Entertainment Infrastructure
              </p>
            </div>
            <div className={styles.standaloneImageWrap}>
              <Image
                src="/images/about-building.jpg"
                alt="IDream building"
                fill
                className={styles.cardImage}
                sizes="33vw"
              />
            </div>
          </motion.div>

          {/* COLUMN 2 */}
          <motion.div className={styles.cardCenter} variants={fadeUpVariants}>
            <Image
              src="/images/about-filmset.jpg"
              alt="Film production set"
              fill
              className={styles.cardImage}
              sizes="34vw"
            />
            <div className={styles.cardOverlay}>
              <div className={styles.overlayContent}>
                <span className={styles.overlayLabel}>Recognition</span>
                <p className={styles.overlayText}>
                  IDream Recognized as Industry Pioneer
                </p>
              </div>
              <button className={styles.overlayArrow} aria-label="Read more">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="#06257E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </motion.div>

          {/* COLUMN 3 */}
          <motion.div className={styles.column} variants={fadeUpVariants}>
            <div className={styles.textCard}>
              <div className={styles.reportHeader}>
                <span className={styles.cardLabel}>Report</span>
                <button className={styles.arrowBtn} aria-label="Open report">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12L12 4M12 4H6M12 4V10" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <p className={styles.cardText}>
                2026 Strategic Realignment Report
              </p>
            </div>
            <div className={styles.standaloneImageWrap}>
              <Image
                src="/images/about-studio.jpg"
                alt="IDream studio"
                fill
                className={styles.cardImage}
                sizes="33vw"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* 2. MOBILE & TABLET SWIPABLE VIEW */}
        <motion.div
          className={styles.carouselViewport}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className={styles.carouselTrack}>
            {/* SLIDE 1: Who We Are */}
            <div className={styles.slideItem}>
              <div className={styles.textCard}>
                <div>
                  <span className={styles.cardLabel}>Who We Are</span>
                </div>
                <p className={styles.cardText}>
                  Leading Provider of Film &amp; Entertainment Infrastructure
                </p>
              </div>
              <div className={styles.standaloneImageWrap}>
                <Image
                  src="/images/about-building.jpg"
                  alt="IDream building"
                  fill
                  className={styles.cardImage}
                  sizes="100vw"
                />
              </div>
            </div>

            {/* SLIDE 2: Recognition */}
            <div className={styles.slideItem}>
              <div className={styles.cardCenterMobileWrapper}>
                <div className={styles.cardCenter}>
                  <Image
                    src="/images/about-filmset.jpg"
                    alt="Film production set"
                    fill
                    className={styles.cardImage}
                    sizes="100vw"
                  />
                  <div className={styles.cardOverlay}>
                    <div className={styles.overlayContent}>
                      <span className={styles.overlayLabel}>Recognition</span>
                      <p className={styles.overlayText}>
                        IDream Recognized as Industry Pioneer
                      </p>
                    </div>
                    <button className={styles.overlayArrow} aria-label="Read more">
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="#06257E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* SLIDE 3: Report */}
            <div className={styles.slideItem}>
              <div className={styles.textCard}>
                <div className={styles.reportHeader}>
                  <span className={styles.cardLabel}>Report</span>
                  <button className={styles.arrowBtn} aria-label="Open report">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 12L12 4M12 4H6M12 4V10" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                <p className={styles.cardText}>
                  2026 Strategic Realignment Report
                </p>
              </div>
              <div className={styles.standaloneImageWrap}>
                <Image
                  src="/images/about-studio.jpg"
                  alt="IDream studio"
                  fill
                  className={styles.cardImage}
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}