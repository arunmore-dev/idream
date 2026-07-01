import React from 'react';
import styles from './AboutOverview.module.css';

export default function AboutOverview() {
  return (
    <section className={styles.overviewContainer}>
      <div className={styles.gridContainer}>
        
        {/* Left Side: Big Serif Header */}
        <h1 className={styles.mainHeading}>
          Defining the standard <br className={styles.desktopOnly} />
          of excellence in global enterprise
        </h1>

        {/* Right Side: Description and Stats Stack */}
        <div className={styles.rightContent}>
          <p className={styles.description}>
            Since 2008, we have partnered with forward-thinking organizations to navigate complexity and achieve sustainable growth. We believe that true impact is measured by the legacies we build together.
          </p>

          {/* Our Reach Section */}
          <div className={styles.reachWrapper}>
            <h2 className={styles.reachTitle}>Our Reach</h2>
            
            <div className={styles.statsGrid}>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>24+</span>
                <span className={styles.statLabel}>Countries</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>$2B</span>
                <span className={styles.statLabel}>Under Management</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}