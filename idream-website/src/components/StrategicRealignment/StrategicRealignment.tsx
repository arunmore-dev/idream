"use client";

import styles from "./StrategicRealignment.module.css";
import StrategicPillars from "../StrategicPillars/StrategicPillars";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const focusItems = [
  {
    icon: "/icons/focus-1.png", 
    title: "Focus Areas",
    description: "Concentrating on high-growth segments with strong market potential and competitive advantages.",
  },
  {
    icon: "/icons/focus-2.png", 
    title: "Innovation",
    description: "Investing in cutting-edge technologies and innovative solutions to stay ahead of industry trends.",
  },
  {
    icon: "/icons/focus-3.png", 
    title: "Partnerships",
    description: "Building strategic alliances to expand capabilities and market reach.",
  },
  {
    icon: "/icons/focus-4.png", 
    title: "Value Creation",
    description: "Optimizing operations and capital allocation to maximize stakeholder returns.",
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

export default function StrategicRealignment() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header Block Animation */}
        <motion.div
          className={styles.headerBlock}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h1 className={styles.mainHeading} variants={fadeUpVariants}>
            Strategic Realignment
          </motion.h1>
          <motion.div className={styles.gradientLine} variants={fadeUpVariants} />
          <motion.p className={styles.subHeading} variants={fadeUpVariants}>
            Transforming our business to unlock long-term stakeholder value
          </motion.p>
        </motion.div>

        {/* Content Row Split */}
        <div className={styles.grid}>
          {/* Left Column Animation */}
          <motion.div
            className={styles.leftCol}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.h2 className={styles.heading} variants={fadeUpVariants}>
              Sharpening Our Business Focus
            </motion.h2>
            <motion.div className={styles.textGroup} variants={fadeUpVariants}>
              <p className={styles.text}>
                IDream is currently undertaking a comprehensive strategic realignment
                initiative aimed at sharpening our business focus and positioning the
                company for sustainable growth in the evolving entertainment landscape.
              </p>
              <p className={styles.text}>
                This transformation is driven by our commitment to creating
                exceptional value for all stakeholders while maintaining our leadership
                position in the film and entertainment infrastructure sector.
              </p>
            </motion.div>
            <motion.div className={styles.quoteBox} variants={fadeUpVariants}>
              <p>
                &ldquo;Our strategic realignment is not just about adaptation—it&apos;s
                about leading the transformation of entertainment infrastructure for the
                digital age.&rdquo;
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column Layout Animation */}
          <div className={styles.rightCol}>
            {/* Desktop View List Container */}
            <motion.div
              className={styles.desktopList}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              {focusItems.map((item, index) => (
                <motion.div
                  key={`desktop-${item.title}`}
                  className={`${styles.item} ${
                    index % 2 === 0 ? styles.itemBlue : styles.itemPink
                  }`}
                  variants={fadeUpVariants}
                >
                  <div className={styles.itemIconWrap}>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                      className={styles.itemIcon}
                    />
                  </div>
                  <div className={styles.itemContent}>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemText}>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile Native Swiper Container */}
            <motion.div
              className={styles.mobileSliderWrapper}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className={styles.sliderClip}>
                <div className={styles.sliderTrack}>
                  {focusItems.map((item, index) => (
                    <div
                      key={`mobile-${item.title}`}
                      className={`${styles.item} ${
                        index % 2 === 0 ? styles.itemBlue : styles.itemPink
                      }`}
                    >
                      <div className={styles.itemIconWrap}>
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={24}
                          height={24}
                          className={styles.itemIcon}
                        />
                      </div>
                      <div className={styles.itemContent}>
                        <h3 className={styles.itemTitle}>{item.title}</h3>
                        <p className={styles.itemText}>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Integrated Pillars Section */}
        <StrategicPillars />
      </div>
    </section>
  );
}