"use client";

import styles from "./StrategicRealignment.module.css";
import StrategicPillars from "../StrategicPillars/StrategicPillars";
import Image from "next/image";

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

export default function StrategicRealignment() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <h1 className={styles.mainHeading}>Strategic Realignment</h1>
          <div className={styles.gradientLine}></div>
          <p className={styles.subHeading}>
            Transforming our business to unlock long-term stakeholder value
          </p>
        </div>

        {/* Content Row Split */}
        <div className={styles.grid}>
          <div className={styles.leftCol}>
            <h2 className={styles.heading}>Sharpening Our Business Focus</h2>
            <div className={styles.textGroup}>
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
            </div>
            <div className={styles.quoteBox}>
              <p>
                &ldquo;Our strategic realignment is not just about adaptation—it&apos;s
                about leading the transformation of entertainment infrastructure for the
                digital age.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column Layout */}
          <div className={styles.rightCol}>
            {/* Desktop View List Container */}
            <div className={styles.desktopList}>
              {focusItems.map((item, index) => (
                <div
                  key={`desktop-${item.title}`}
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

            {/* Mobile Native Swiper Container */}
            <div className={styles.mobileSliderWrapper}>
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
            </div>
          </div>
        </div>

        {/* Integrated Pillars Section */}
        <StrategicPillars />
      </div>
    </section>
  );
}