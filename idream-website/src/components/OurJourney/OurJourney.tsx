"use client";

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
  return (
    <section id="journey" className={styles.section}>
      <div className={styles.container}>
        
        {/* Top Journey Section */}
        <div className={styles.topJourneyWrapper}>
          <h2 className={styles.heading}>Our Journey</h2>

          <div className={styles.timelineViewportMobile}>
            <div className={styles.timelineRow}>
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
        </div>

        {/* Mission Vision Values Section */}
        <div className={styles.cardsRowViewport}>
          <div className={styles.cardsRow}>
            {milestones.map((item) => (
              <div
                key={item.cardTitle}
                className={`${styles.card} ${item.borderColorClass}`}
              >
                <h3 className={styles.cardTitle}>{item.cardTitle}</h3>
                <p className={styles.cardText}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}