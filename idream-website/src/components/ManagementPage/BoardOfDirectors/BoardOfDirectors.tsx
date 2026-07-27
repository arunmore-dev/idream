import React from 'react';
import styles from './BoardOfDirectors.module.css';

interface Director {
  initials: string;
  avatarBg: string;
  badgeText: string;
  badgeType: 'executive' | 'independent' | 'nominee';
  name: string;
  role: string;
  description: string;
}

const directorsData: Director[] = [
  {
    initials: "YK",
    avatarBg: "#0F192E",
    badgeText: "EXECUTIVE DIRECTOR",
    badgeType: "executive",
    name: "Mr. Yung Kug Kim",
    role: "Chief Executive Officer",
    description: "30+ years in film production and infrastructure management."
  },
  {
    initials: "JS",
    avatarBg: "#1E6B8A",
    badgeText: "EXECUTIVE DIRECTOR",
    badgeType: "executive",
    name: "Mr. Jaswinder Singh",
    role: "Chief Financial Officer",
    description: "Expert in structured finance, capital markets, and fiscal reporting."
  },
  {
    initials: "BS",
    avatarBg: "#BD1E1E",
    badgeText: "INDEPENDENT",
    badgeType: "independent",
    name: "Mr. Baljit Singh",
    role: "Independent Director",
    description: "Former SEBI Officer, expert in corporate governance and ethics."
  },
  {
    initials: "HS",
    avatarBg: "#9810FA",
    badgeText: "INDEPENDENT",
    badgeType: "independent",
    name: "Ms. Honey Singh",
    role: "Independent Director",
    description: "Veteran entertainment lawyer and media policy specialist."
  },
  {
    initials: "UH",
    avatarBg: "#059669",
    badgeText: "INDEPENDENT",
    badgeType: "independent",
    name: "Ms. Upveen Harpal",
    role: "Independent Director",
    description: "Ex-Managing Director of a leading infrastructure private equity fund."
  },
  {
    initials: "RS",
    avatarBg: "#E60076",
    badgeText: "INDEPENDENT",
    badgeType: "independent",
    name: "Mr. Ross William Brierty",
    role: "Independent Director",
    description: "Former IAS officer with expertise in policy and regulatory frameworks."
  },
  {
    initials: "SN",
    avatarBg: "#016AD2",
    badgeText: "NOMINEE",
    badgeType: "nominee",
    name: "Ms. Santosee Narayan Majhi",
    role: "Company Secretary & Compliance Officer",
    description: "Representing institutional investor interests on the board."
  }
];

export default function BoardOfDirectors() {
  return (
    <section className={styles.boardSection}>
      {/* Header Block */}
      <div className={styles.headerBox}>
        <span className={styles.tagline}>BOARD OF DIRECTORS</span>
        <h2 className={styles.heading}>Board of Directors</h2>
        <p className={styles.subheading}>
          A diverse board combining deep industry expertise with independent governance oversight.
        </p>
      </div>

      {/* Cards Grid Container */}
      <div className={styles.gridContainer}>
        {directorsData.map((director, index) => (
          <div key={index} className={styles.card}>
            {/* Top Row: Avatar Icon & Tag Badge */}
            <div className={styles.cardHeader}>
              <div 
                className={styles.avatar} 
                style={{ backgroundColor: director.avatarBg }}
              >
                {director.initials}
              </div>
              <span className={`${styles.badge} ${styles[director.badgeType]}`}>
                {director.badgeText}
              </span>
            </div>

            {/* Text Info */}
            <div className={styles.cardBody}>
              <h3 className={styles.directorName}>{director.name}</h3>
              <p className={styles.directorRole}>{director.role}</p>
              <p className={styles.directorDesc}>{director.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}