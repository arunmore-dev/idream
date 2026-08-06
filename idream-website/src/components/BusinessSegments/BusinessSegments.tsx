"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import styles from "./BusinessSegments.module.css";

const segments = [
  {
    title: "Film Production Infrastructure",
    icon: "/images/icon-film.png", 
    image: "/images/studio-infrastructure.png", 
    description: "State-of-the-art studios, post-production facilities, and equipment rental services for filmmakers.",
    features: [
      "Sound Stages",
      "Editing Suites",
      "Equipment Rental",
      "Technical Support",
    ],
  },
  {
    title: "Media Technologies",
    icon: "/images/icon-tv.png", 
    image: "/images/studio-infrastructure.png", 
    description: "Advanced broadcasting solutions, digital media platforms, and content distribution infrastructure.",
    features: [
      "Broadcasting Tech",
      "Digital Platform",
      "Content Delivery",
      "Media Storage",
    ],
  },
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

const cardGridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

export default function BusinessSegments() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        {/* Header Section Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h2 className={styles.heading} variants={fadeUpVariants}>
            Our Business Segments
          </motion.h2>
          <motion.div className={styles.underline} variants={fadeUpVariants} />
          <motion.p className={styles.subHeading} variants={fadeUpVariants}>
            Comprehensive solutions across the entertainment value chain
          </motion.p>
        </motion.div>

        {/* Business Cards Grid */}
        <motion.div
          className={styles.grid}
          variants={cardGridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {segments.map((segment) => (
            <motion.div
              key={segment.title}
              className={styles.card}
              variants={fadeUpVariants}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={segment.image}
                  alt={segment.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.titleRow}>
                  <div className={styles.iconContainer}>
                    <Image 
                      src={segment.icon} 
                      alt="" 
                      width={52} 
                      height={52} 
                      className={styles.icon}
                    />
                  </div>
                  <h3 className={styles.cardTitle}>{segment.title}</h3>
                </div>
                
                <p className={styles.cardDescription}>{segment.description}</p>
                
                <ul className={styles.featureList}>
                  {segment.features.map((feature) => (
                    <li key={feature} className={styles.featureItem}>
                      <span className={styles.dot} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button Animation */}
        <motion.div
          className={styles.ctaWrap}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Link href="#contact" className={styles.ctaButton}>
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}