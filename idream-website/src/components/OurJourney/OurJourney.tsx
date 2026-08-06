"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import styles from "./OurJourney.module.css";

const milestones = [
  {
    icon: "/images/journey-1981.png",
    year: "1981",
    label: "Company Incorporation",
    cardTitle: "Our Mission",
    description:
      "To provide cutting-edge infrastructure solutions that empower the film and entertainment industry to create exceptional content and experiences.",
    borderColorClass: styles.borderBlue,
  },
  {
    icon: "/images/journey-bse.png",
    year: "BSE Listed",
    label: "Public Market Success",
    cardTitle: "Our Vision",
    description:
      "To be the most trusted and innovative infrastructure partner for the global entertainment industry, driving growth through strategic excellence.",
    borderColorClass: styles.borderRed,
  },
  {
    icon: "/images/journey-2026.png",
    year: "2026",
    label: "Strategic Realignment",
    cardTitle: "Our Values",
    description:
      "Excellence, innovation, integrity, and stakeholder value creation form the cornerstone of everything we do.",
    borderColorClass: styles.borderDarkBlue,
  },
];

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
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

const cardContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

export default function OurJourney() {
  return (
    <section id="journey" className={styles.section}>
      <div className={styles.container}>
        
        {/* Top Journey Section */}
        <div className={styles.topJourneyWrapper}>
          {/* Animated Heading */}
          <motion.h2
            className={styles.heading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Our Journey
          </motion.h2>

          {/* Timeline Node Items (Staggered Fade-in) */}
          <div className={styles.timelineViewportMobile}>
            <motion.div
              className={styles.timelineRow}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              {milestones.map((item) => (
                <motion.div
                  key={item.label}
                  className={styles.timelineNode}
                  variants={fadeUpVariants}
                >
                  <div className={styles.iconCircle}>
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={32}
                      height={32}
                      className={styles.iconImage}
                    />
                  </div>

                  <div className={styles.year}>{item.year}</div>
                  <div className={styles.label}>{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mission Vision Values Cards Row (Staggered Upward Reveal) */}
        <div className={styles.cardsRowViewport}>
          <motion.div
            className={styles.cardsRow}
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {milestones.map((item) => (
              <motion.div
                key={item.cardTitle}
                className={`${styles.card} ${item.borderColorClass}`}
                variants={fadeUpVariants}
              >
                <h3 className={styles.cardTitle}>{item.cardTitle}</h3>
                <p className={styles.cardText}>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}