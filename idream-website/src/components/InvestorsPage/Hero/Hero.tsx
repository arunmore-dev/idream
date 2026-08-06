import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.contentFrame}>
        
        {/* Main Text & Headers */}
        <div className={styles.textGroup}>
          <span className={styles.tag}>Investor Relations</span>
          <h1 className={styles.title}>
            Committed to Transparency <br />& Long-Term Value
          </h1>
          <p className={styles.description}>
            Empowering our stakeholders with timely disclosures, robust governance, and a clear vision for sustainable growth.
          </p>
        </div>

        {/* Dynamic Buttons */}
        <div className={styles.buttonGroup}>
          <button className={styles.btnPrimary} aria-label="Download Annual Report">
            Download Annual Report
          </button>
          <button className={styles.btnSecondary} aria-label="View Financial Results">
            View Financial Results
          </button>
        </div>
      </div>

      {/* Stats Bar */}
      <div className={styles.statsBar}>

        <div className={styles.statBlock}>
          <h3 className={styles.statValue}>BSE Listed</h3>
          <span className={`${styles.statLabel} ${styles.redLabel}`}>Exchange Listed</span>
        </div>

        <div className={styles.statBlock}>
          <h3 className={styles.statValue}>₹480 Cr</h3>
          <span className={`${styles.statLabel} ${styles.greyLabel}`}>FY2025 Revenue</span>
        </div>

        <div className={styles.statBlock}>
          <h3 className={styles.statValue}>22%</h3>
          <span className={`${styles.statLabel} ${styles.greyLabel}`}>EBITDA Margin</span>
        </div>

        <div className={styles.statBlock}>
          <h3 className={styles.statValue}>₹1,200 Cr</h3>
          <span className={`${styles.statLabel} ${styles.greyLabel}`}>Market Cap</span>
        </div>

      </div>
    </section>
  );
}