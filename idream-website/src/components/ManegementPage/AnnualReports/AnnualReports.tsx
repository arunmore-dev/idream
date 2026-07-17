import React from 'react';
import styles from './AnnualReports.module.css';

interface ReportItem {
  year: string;
  name: string;
  meta: string;
}

export default function AnnualReports() {
  // Array of annual reports matching the sequence schema
  const reports: ReportItem[] = [
    {
      year: 'FY2025',
      name: 'Annual Report 2024-25',
      meta: 'Full Year Report | PDF, 8.4 MB',
    },
    {
      year: 'FY2024',
      name: 'Annual Report 2023-24',
      meta: 'Full Year Report | PDF, 7.9 MB',
    },
    {
      year: 'FY2023',
      name: 'Annual Report 2022-23',
      meta: 'Full Year Report | PDF, 6.2 MB',
    },
  ];

  return (
    <section className={styles.sectionContainer}>
      {/* Structural Header block */}
      <div className={styles.headerGroup}>
        <span className={styles.redTag}>Downloads</span>
        <h2 className={styles.title}>Annual Reports</h2>
        <p className={styles.description}>
          Comprehensive financial and operational overviews for each fiscal year.
        </p>
      </div>

      {/* Responsive Download Cards Grid Wrapper */}
      <div className={styles.cardsGrid}>
        {reports.map((report, idx) => (
          <div key={idx} className={styles.card}>
            <span className={styles.yearTag}>{report.year}</span>
            
            <div className={styles.infoGroup}>
              <h3 className={styles.reportName}>{report.name}</h3>
              <p className={styles.fileMeta}>{report.meta}</p>
            </div>

            <button
  className={styles.downloadBtn}
  aria-label={`Download ${report.name}`}
>
  <svg
    className={styles.downloadIcon}
    viewBox="0 0 24 24"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>

  <span className={styles.downloadText}>
    Download PDF
  </span>
</button>
          </div>
        ))}
      </div>
    </section>
  );
}