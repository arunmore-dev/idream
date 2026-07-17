import React from 'react';
import styles from './FinancialPerformance.module.css';

interface MetricData {
  metric: string;
  label: string;
  trend: string;
  isPositive: boolean;
}

export default function FinancialPerformance() {
  // Array matching exactly the metrics inside figma designs
  const metrics: MetricData[] = [
    {
      metric: '₹480 Cr',
      label: 'Total Revenue FY2025',
      trend: '↑ 28% YoY',
      isPositive: true,
    },
    {
      metric: '₹105 Cr',
      label: 'EBITDA FY2025',
      trend: '22% Margin',
      isPositive: false, // will render as neutral grey text
    },
    {
      metric: '₹62 Cr',
      label: 'PAT FY2025',
      trend: '↑ 34% YoY',
      isPositive: true,
    },
    {
      metric: '₹1,200 Cr',
      label: 'Market Cap',
      trend: 'As of March 2025',
      isPositive: false, // will render as neutral grey text
    },
  ];

  return (
    <section className={styles.financialSection}>
      {/* Header Info Block */}
      <div className={styles.headerGroup}>
        <span className={styles.redTag}>Financials</span>
        <h2 className={styles.title}>Financial Performance</h2>
        <p className={styles.description}>
          Consistent growth driven by strategic expansion and operational excellence.
        </p>
      </div>

      {/* Responsive Metrics Cards container */}
      <div className={styles.cardsGrid}>
        {metrics.map((item, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardMetric}>{item.metric}</h3>
            <span className={styles.cardLabel}>{item.label}</span>
            <span 
              className={`${styles.trend} ${
                item.isPositive ? styles.trendPositive : styles.trendNeutral
              }`}
            >
              {item.trend}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}