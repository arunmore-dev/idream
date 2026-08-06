"use client";

import { motion, Variants, Easing } from "framer-motion";
import styles from "./StrategicInterventions.module.css";

const interventions = [
  {
    icon: "/icons/focus.png",
    title: "Focus Areas",
    description:
      "Concentrating on high-growth segments with strong market potential and competitive advantages.",
  },
  {
    icon: "/icons/innovation.png",
    title: "Innovation",
    description:
      "Investing in cutting-edge technologies and innovative solutions to stay ahead of industry trends.",
  },
  {
    icon: "/icons/partnerships.png",
    title: "Partnerships",
    description:
      "Building strategic alliances to expand capabilities and global market reach.",
  },
  {
    icon: "/icons/value-creation.png",
    title: "Value Creation",
    description:
      "Optimizing operations and capital allocation to maximize long-term stakeholder returns.",
  },
];

// Added 'as const' to fix the TypeScript tuple type error
const enterpriseEasing: Easing = [0.16, 1, 0.3, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: enterpriseEasing,
    },
  },
};

// Preserves the 45-degree diamond rotation without type errors
const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: 45 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 45,
    transition: {
      duration: 0.6,
      ease: enterpriseEasing,
    },
  },
};

export default function StrategicInterventions() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header Block Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Top Meta Tag */}
          <motion.span className={styles.subheading} variants={fadeUpVariants}>
            Our Philosophy
          </motion.span>

          {/* Title and Accent Rule Wrapper */}
          <div className={styles.headerWrapper}>
            <motion.h2 className={styles.heading} variants={fadeUpVariants}>
              Strategic Interventions that <br /> Unlock Long-Term Value
            </motion.h2>
            <motion.div className={styles.accentLine} variants={fadeUpVariants} />
          </div>
        </motion.div>

        {/* Column Grid Wrapper */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {interventions.map((item) => (
            <motion.div
              key={item.title}
              className={styles.card}
              variants={fadeUpVariants}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: enterpriseEasing } }}
            >
              <div className={styles.iconWrapper}>
                <img src={item.icon} alt={item.title} className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decorative Diamond with explicit 45 deg rotation */}
        <motion.div
          className={styles.diamondBadge}
          variants={badgeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        />
      </div>
    </section>
  );
}