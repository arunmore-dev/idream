"use client";

import { motion, Variants } from "framer-motion";
import styles from "./CTABanner.module.css";

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function CTABanner() {
  return (
    <section className={styles.investorContactOuterSection}>
      <motion.div
        className={styles.investorContactMainBox}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h2
          className={styles.investorContactHeading}
          variants={fadeUpVariants}
        >
          Investor Contact
        </motion.h2>

        <motion.p
          className={styles.investorContactSubDescription}
          variants={fadeUpVariants}
        >
          For investor relations inquiries, financial information, or corporate governance questions, please contact our investor relations team.
        </motion.p>

        <motion.div
          className={styles.actionButtonGroup}
          variants={fadeUpVariants}
        >
          {/* Email Box Action Button */}
          <motion.a
            href="mailto:ir@idream.com"
            className={styles.emailRelationsButtonBox}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className={styles.emailTextContent}>Email Investor Relations</span>
          </motion.a>

          {/* Download Box Action Button */}
          <motion.a
            href="/assets/investor-kit.pdf"
            download
            className={styles.downloadKitButtonBox}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className={styles.downloadTextContent}>Download Investor Kit</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}