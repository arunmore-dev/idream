import React from 'react';
import styles from './StockExchange.module.css';

interface StockInfoItem {
  label: string;
  value: string;
}

export default function StockExchange() {
  // Column 1 Data List
  const leftColumnData: StockInfoItem[] = [
    { label: 'Stock Exchange', value: 'BSE' },
    { label: 'BSE Scrip Code', value: '504375' },
    { label: 'NSE Symbol', value: 'IDREAM' },
    { label: 'ISIN', value: 'INE459E01012' },
  ];

  // Column 2 Data List
  const rightColumnData: StockInfoItem[] = [
    { label: 'Face Value', value: '₹10' },
    { label: 'Market Lot', value: '50 share' },
    { label: 'Listing Date', value: '25 February 1982' },
    { label: 'Registrar', value: 'Bigshare Services Pvt. Limited' },
  ];

  return (
    <section className={styles.sectionContainer}>
      {/* Title Header Block Area */}
      <div className={styles.headerGroup}>
        <span className={styles.redTag}>Stock Info</span>
        <h2 className={styles.title}>Stock Exchange Information</h2>
      </div>

      {/* Structural Data Distribution Grid Flexboard */}
      <div className={styles.gridContainer}>
        
        {/* Left Column Stack Component */}
        <div className={styles.infoColumn}>
          {leftColumnData.map((item, index) => (
            <div key={index} className={styles.infoBlock}>
              <span className={styles.label}>{item.label}</span>
              <p className={styles.value}>{item.value}</p>
            </div>
          ))}
        </div>

        {/* Right Column Stack Component */}
        <div className={styles.infoColumn}>
          {rightColumnData.map((item, index) => (
            <div key={index} className={styles.infoBlock}>
              <span className={styles.label}>{item.label}</span>
              <p className={styles.value}>{item.value}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}