import React from 'react';
import styles from './PoliciesCodes.module.css';

interface PolicyItem {
  title: string;
  effectiveDate: string;
  downloadUrl?: string;
}

const policiesData: PolicyItem[] = [
  {
    title: "Code of Conduct",
    effectiveDate: "Effective January 2023",
    downloadUrl: "#"
  },
  {
    title: "Insider Trading Policy",
    effectiveDate: "Effective January 2023",
    downloadUrl: "#"
  },
  {
    title: "Whistle Blower Policy",
    effectiveDate: "Effective March 2021",
    downloadUrl: "#"
  },
  {
    title: "Related Party Transaction Policy",
    effectiveDate: "Effective April 2022",
    downloadUrl: "#"
  },
  {
    title: "Dividend Distribution Policy",
    effectiveDate: "Effective June 2020",
    downloadUrl: "#"
  },
  {
    title: "Risk Management Policy",
    effectiveDate: "Effective September 2023",
    downloadUrl: "#"
  }
];

export default function PoliciesAndCodes() {
  return (
    <section className={styles.policiesSection}>
      {/* Header Block */}
      <div className={styles.headerBox}>
        <span className={styles.tagline}>POLICIES</span>
        <h2 className={styles.heading}>Policies & Codes</h2>
        <p className={styles.subheading}>
          Key governance documents and statutory disclosures available for download.
        </p>
      </div>

      {/* 2-Column Grid Layout */}
      <div className={styles.gridContainer}>
        {policiesData.map((policy, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.textGroup}>
              <h3 className={styles.policyTitle}>{policy.title}</h3>
              <span className={styles.effectiveDate}>{policy.effectiveDate}</span>
            </div>
            
            <a 
              href={policy.downloadUrl || '#'} 
              className={styles.downloadBtn}
              download
            >
              DOWNLOAD
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}