import React from 'react';
import styles from './FinancialResults.module.css';

interface FinancialRecord {
  period: string;
  type: string;
  boardDate: string;
  status: string;
}

export default function FinancialResults() {
  const data: FinancialRecord[] = [
    {
      period: 'Q4 FY2025',
      type: 'Audited Annual Results',
      boardDate: '20 May 2025',
      status: 'Published',
    },
    {
      period: 'Q3 FY2025',
      type: 'Unaudited Quarterly Results',
      boardDate: '10 Feb 2025',
      status: 'Published',
    },
    {
      period: 'Q2 FY2025',
      type: 'Unaudited Quarterly Results',
      boardDate: '12 Nov 2024',
      status: 'Published',
    },
    {
      period: 'Q1 FY2025',
      type: 'Unaudited Quarterly Results',
      boardDate: '8 Aug 2024',
      status: 'Published',
    },
    {
      period: 'FY2024',
      type: 'Audited Annual Results',
      boardDate: '22 May 2024',
      status: 'Published',
    },
  ];

  return (
    <section className={styles.sectionContainer}>
      {/* Title Header text layout block */}
      <div className={styles.headerGroup}>
        <span className={styles.redTag}>Quarterly Results</span>
        <h2 className={styles.title}>Financial Results</h2>
        <p className={styles.description}>
          Quarterly and annual unaudited/audited financial statements.
        </p>
      </div>

      {/* Structural Data Layout Table grid array mapping */}
      <table className={styles.tableContainer}>
        <thead>
          <tr className={styles.tableHeaderRow}>
            <th className={styles.th}>Period</th>
            <th className={styles.th}>Type</th>
            <th className={styles.th}>Board Date</th>
            <th className={styles.th}>Status</th>
            <th className={styles.th}>Download</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className={styles.tableBodyRow}>

              <td className={styles.td} data-label="Period">
                <p className={styles.periodText}>{row.period}</p>
              </td>

              <td className={styles.td} data-label="Type">
                <p className={styles.typeText}>{row.type}</p>
              </td>

              <td className={styles.td} data-label="Board Date">
                <p className={styles.dateText}>{row.boardDate}</p>
              </td>

              <td className={styles.td} data-label="Status">
                <span className={styles.statusBadge}>{row.status}</span>
              </td>

              <td className={styles.td} data-label="Download">
                <button
  className={styles.downloadBtn}
  aria-label={`Download ${row.period}`}
>
  <svg
    className={styles.downloadIcon}
    viewBox="0 0 24 24"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>

  {/* <span className={styles.downloadText}>
    Download PDF
  </span> */}
</button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}