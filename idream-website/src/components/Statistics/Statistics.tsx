"use client";

import { motion, Variants } from "framer-motion";
import styles from "./Statistics.module.css";

const stats = [
  { value: "45+", label: "YEARS OF EXCELLENCE" },
  { value: "500+", label: "PROJECTS DELIVERED" },
  { value: "BSE", label: "LISTED COMPANY" },
  { value: "Pan-India", label: "PRESENCE & REACH" },
];

// Animation Variants
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
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Statistics() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={styles.statWrapper}
              variants={fadeUpVariants}
            >
              <motion.div
                className={styles.stat}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
              >
                <span className={styles.value}>{stat.value}</span>
                <span className={styles.label}>{stat.label}</span>
              </motion.div>

              {/* Render structural borders dynamically between items on desktop only */}
              {index < stats.length - 1 && (
                <div className={styles.divider}></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}