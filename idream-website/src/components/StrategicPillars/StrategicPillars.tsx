"use client";

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

export default function StrategicPillars() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Strategic Pillars</h2>

      {/* Desktop Grid Layout (Visible on Larger Screens) */}
      <div className={styles.desktopGrid}>
        {pillars.map((pillar) => (
          <div key={`desktop-${pillar.title}`} className={styles.card}>
            <div className={styles.iconWrap}>
              <img src={pillar.icon} alt={pillar.title} className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>{pillar.title}</h3>
            <p className={styles.cardText}>{pillar.description}</p>
          </div>
        ))}
      </div>

      {/* Mobile Native Swiper View (No Joint Cards / Zero Border Clipping) */}
      <div className={styles.mobileSliderWrapper}>
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
      </div>
    </div>
  );
}