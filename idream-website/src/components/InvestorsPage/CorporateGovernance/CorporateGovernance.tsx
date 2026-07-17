import React from 'react';
import styles from './CorporateGovernance.module.css';

interface GovernanceRow {
  title: string;
  detail: string;
  linkLabel: string;
}

export default function CorporateGovernance() {
  const rowsData: GovernanceRow[] = [
    {
      title: 'Board of Directors',
      detail: '8 Directors | 50% Independent',
      linkLabel: 'View Details',
    },
    {
      title: 'Audit Committee',
      detail: 'Chaired by Independent Director',
      linkLabel: 'View Charter',
    },
    {
      title: 'Nomination & Remuneration',
      detail: 'Policies & Procedures',
      linkLabel: 'View Policy',
    },
    {
      title: 'Codes & Policies',
      detail: 'Code of Conduct | Insider Trading Policy',
      linkLabel: 'View Policies',
    },
  ];

  return (
    <section className={styles.sectionContainer}>
      {/* Title description layout header frame block */}
      <div className={styles.headerGroup}>
        <span className={styles.redTag}>Governance</span>
        <h2 className={styles.title}>Corporate Governance</h2>
        <p className={styles.description}>
          We uphold the highest standards of transparency, accountability, and ethical conduct.
        </p>
      </div>

      {/* Structural full width stack matching Figma design exactly */}
      <div className={styles.cardsStack}>
        {rowsData.map((row, index) => (
          <div key={index} className={styles.cardRow}>
            
            {/* Left aligned header titles block metadata info elements */}
            <div className={styles.leftTextGroup}>
              <h3 className={styles.cardTitle}>{row.title}</h3>
              <p className={styles.cardDetail}>{row.detail}</p>
            </div>

            {/* Far right dynamically labeled actionable pointer elements links */}
            <button className={styles.viewDetailsLink} aria-label={`${row.linkLabel} for ${row.title}`}>
              <span>{row.linkLabel}</span>
              <svg className={styles.arrowIcon} viewBox="0 0 24 24">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

          </div>
        ))}
      </div>
    </section>
  );
}