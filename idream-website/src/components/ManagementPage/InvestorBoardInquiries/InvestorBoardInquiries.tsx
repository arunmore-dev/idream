import React from 'react';
import styles from './InvestorBoardInquiries.module.css';

export default function InvestorInquiries() {
  return (
    <section className={styles.inquiriesSection}>
      <div className={styles.container}>
        {/* Left Box: Text + CTA Button */}
        <div className={styles.leftBox}>
          <div className={styles.headerGroup}>
            <span className={styles.tagline}>GET IN TOUCH</span>
            <h2 className={styles.heading}>Investor & Board Inquiries</h2>
            <p className={styles.subheading}>
              For board-related communications, director appointments, or governance queries, reach out to our Company Secretary.
            </p>
          </div>

          <a href="#contact" className={styles.contactBtn}>
            Contact Us
          </a>
        </div>

        {/* Right Card: Officer Details */}
        <div className={styles.card}>
          <span className={styles.officerTag}>Compliance Officer</span>

          <div className={styles.personDetails}>
            <h3 className={styles.personName}>Ms. Ananya Nair</h3>
            <p className={styles.personRole}>Company Secretary & Compliance Officer</p>
          </div>

          <div className={styles.contactList}>
            {/* Email item */}
            <a href="mailto:investor.relations@idreamifcl.com" className={styles.contactItem}>
              <svg 
                className={styles.icon} 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>investor.relations@idreamifcl.com</span>
            </a>

            {/* Phone item */}
            <a href="tel:+912248905600" className={styles.contactItem}>
              <svg 
                className={styles.icon} 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+91 22 4890 5600</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}