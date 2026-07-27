import React from 'react';
import styles from './Hero.module.css';

const stats = [
  { value: "15+", label: "YEARS AVG EXPERIENCE" },
  { value: "8", label: "BOARD MEMBERS" },
  { value: "50%", label: "INDEPENDENT DIRECTORS" }
];

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* Content Frame */}
      <div className={styles.contentBox}>
        <span className={styles.tagline}>KEY MANAGEMENT</span>
        <h1 className={styles.heading}>
          Leadership Driving the Future of Entertainment
        </h1>
        <p className={styles.description}>
          Our experienced leadership team brings decades of expertise across film, media, finance, and infrastructure to guide IDream's strategic vision.
        </p>
      </div>

      {/* Stats Section */}
      <div className={styles.statsContainer}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statCard}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}