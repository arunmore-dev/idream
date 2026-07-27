import React from 'react';
import styles from './SeniorLeadership.module.css';

interface LeaderMember {
  name: string;
  role: string;
  description: string;
}

const leadersData: LeaderMember[] = [
  {
    name: "Mr. Karan Bhatia",
    role: "HEAD — STUDIO INFRASTRUCTURE",
    description: "18 years in large-scale real estate and studio development."
  },
  {
    name: "Ms. Ritu Verma",
    role: "HEAD — CONTENT & LICENSING",
    description: "Former EVP at major OTT platform, 15 years in acquisitions."
  },
  {
    name: "Mr. Aditya Joshi",
    role: "CHIEF TECHNOLOGY OFFICER",
    description: "Pioneer in post-production technology and digital workflow."
  },
  {
    name: "Ms. Meena Pillai",
    role: "HEAD — LEGAL & COMPLIANCE",
    description: "20 years corporate law experience, M&A specialist."
  },
  {
    name: "Mr. Rohit Desai",
    role: "HEAD — BUSINESS DEVELOPMENT",
    description: "Led 10+ strategic partnerships across entertainment chain."
  },
  {
    name: "Ms. Kavita Shetty",
    role: "HEAD — HUMAN RESOURCES",
    description: "HR leadership across 500+ employee organizations."
  }
];

export default function SeniorLeadership() {
  return (
    <section className={styles.leadershipSection}>
      {/* Header Block */}
      <div className={styles.headerBox}>
        <span className={styles.tagline}>LEADERSHIP TEAM</span>
        <h2 className={styles.heading}>Senior Leadership</h2>
        <p className={styles.subheading}>
          Functional heads driving excellence across all business verticals.
        </p>
      </div>

      {/* 3-Column Grid Container */}
      <div className={styles.gridContainer}>
        {leadersData.map((leader, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.leaderName}>{leader.name}</h3>
            <p className={styles.leaderRole}>{leader.role}</p>
            <p className={styles.leaderDesc}>{leader.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}