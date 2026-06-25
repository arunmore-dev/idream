"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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

export default function OurJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check window width securely without destroying desktop styling server side
  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  // Returns stack values exclusively for Mobile Viewports
  const getCardStyle = (index: number) => {
    if (!isMobile) return {};

    const position = (index - activeStep + milestones.length) % milestones.length;

    if (position === 0) {
      return {
        zIndex: 3,
        transform: "translateY(0px) scale(1)",
        opacity: 1,
      };
    } else if (position === 1) {
      return {
        zIndex: 2,
        transform: "translateY(24px) scale(0.94)",
        opacity: 0.9,
      };
    } else {
      return {
        zIndex: 1,
        transform: "translateY(48px) scale(0.88)",
        opacity: 0.6,
      };
    }
  };

  return (
    <section id="journey" className={styles.section}>
      <div className={styles.container}>
        
        {/* Top Journey Section */}
        <div className={styles.topJourneyWrapper}>
          <h2 className={styles.heading}>Our Journey</h2>

          <div className={styles.timelineContainer}>
            <div 
              className={styles.timelineRow}
              style={isMobile ? { transform: `translateX(-${activeStep * 100}%)` } : undefined}
            >
              {milestones.map((item) => (
                <div key={item.label} className={styles.timelineNode}>
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
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Controls */}
          <div className={styles.paginationDots}>
            {milestones.map((_, index) => (
              <button
                key={index}
                aria-label={`Go to slide ${index + 1}`}
                className={`${styles.dot} ${activeStep === index ? styles.dotActive : ""}`}
                onClick={() => setActiveStep(index)}
              />
            ))}
          </div>
        </div>

        {/* Mission Vision Values Section */}
        <div className={styles.cardsRow}>
          {milestones.map((item, index) => (
            <div
              key={item.cardTitle}
              className={`${styles.card} ${item.borderColorClass}`}
              style={getCardStyle(index)}
            >
              <h3 className={styles.cardTitle}>{item.cardTitle}</h3>
              <p className={styles.cardText}>{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}