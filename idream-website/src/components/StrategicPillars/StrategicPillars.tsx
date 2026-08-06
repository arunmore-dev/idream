"use client";

import { motion, Variants } from "framer-motion";
import styles from "./StrategicPillars.module.css";

const pillars = [
  {
    icon: "/images/journey-bse.png", 
    title: "Growth",
    description: "Pursuing sustainable growth through market expansion and new opportunities",
  },
  {
    icon: "/icons/pillar-efficiency.png", 
    title: "Efficiency",
    description: "Streamlining operations and leveraging technology for optimal performance",
  },
  {
    icon: "/icons/pillar-excellence.png", 
    title: "Excellence",
    description: "Maintaining the highest standards in service delivery and stakeholder engagement",
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

export default function StrategicPillars() {
  return (
    <div className={styles.wrapper}>
      {/* Animated Section Heading */}
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Strategic Pillars
      </motion.h2>

      {/* Desktop Grid Layout (Staggered Card Animations) */}
      <motion.div
        className={styles.desktopGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {pillars.map((pillar) => (
          <motion.div
            key={`desktop-${pillar.title}`}
            className={styles.card}
            variants={fadeUpVariants}
          >
            <div className={styles.iconWrap}>
              <img src={pillar.icon} alt={pillar.title} className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>{pillar.title}</h3>
            <p className={styles.cardText}>{pillar.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile Native Swiper View */}
      <motion.div
        className={styles.mobileSliderWrapper}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className={styles.sliderClip}>
          <div className={styles.sliderTrack}>
            {pillars.map((pillar) => (
              <div key={`mobile-${pillar.title}`} className={styles.card}>
                <div className={styles.iconWrap}>
                  <img src={pillar.icon} alt={pillar.title} className={styles.icon} />
                </div>
                <h3 className={styles.cardTitle}>{pillar.title}</h3>
                <p className={styles.cardText}>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}