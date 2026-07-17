import React from 'react';
import styles from './ShareholdingPattern.module.css';

interface ShareholdingItem {
  title: string;
  percentage: string;
  color: string;
  // Arc values pre-calculated for precise standard 300px SVG donut rendering
  strokeDasharray: string;
  strokeDashoffset: string;
}

export default function ShareholdingPattern() {
  // Configured to match layout values exactly as verified from Figma tokens
  const shareholdingData: ShareholdingItem[] = [
    {
      title: 'Promoters & Promoter Group',
      percentage: '52.3%',
      color: '#0F192E',
      strokeDasharray: '394.29 753.98',
      strokeDashoffset: '0',
    },
    {
      title: 'Domestic Institutional Investors',
      percentage: '18.7%',
      color: '#FF0000',
      strokeDasharray: '140.99 753.98',
      strokeDashoffset: '-394.29',
    },
    {
      title: 'Foreign Institutional Investors',
      percentage: '11.4%',
      color: '#9810FA',
      strokeDasharray: '85.95 753.98',
      strokeDashoffset: '-535.28',
    },
    {
      title: 'Retail & Others',
      percentage: '17.6%',
      color: '#6A7282',
      strokeDasharray: '132.75 753.98',
      strokeDashoffset: '-621.23',
    },
  ];

  return (
    <section className={styles.sectionContainer}>
      {/* Structural Title Section Blocks */}
      <div className={styles.headerGroup}>
        <span className={styles.redTag}>Shareholding</span>
        <h2 className={styles.title}>Shareholding Pattern</h2>
        <p className={styles.description}>
          Ownership distribution as of Q4 FY2025 (March 2025).
        </p>
      </div>

      {/* Main Structural Layout Split */}
      <div className={styles.contentFlex}>
        
        {/* Left Side: Native 300px x 300px Vector Donut Layout */}
        <div className={styles.chartContainer}>
        <svg
  width="380"
  height="380"
  viewBox="0 0 380 380"
  style={{ transform: "rotate(-90deg)", overflow: "visible" }}
>
  {shareholdingData.map((item, index) => (
    <circle
      key={index}
      cx="190"
      cy="190"
      r="120"
      fill="none"
      stroke={item.color}
      strokeWidth="56"
      strokeLinecap="butt"
      strokeDasharray={item.strokeDasharray}
      strokeDashoffset={item.strokeDashoffset}
    />
  ))}
</svg>
          {/* Inner Absolute Centered Total Readout text block */}
          <div className={styles.centerTextGroup}>
            <span className={styles.centerNumber}>100%</span>
          </div>
        </div>

        {/* Right Side: Data List & Action Download Buttons */}
        <div className={styles.rightDataColumn}>
          <div className={styles.listGroup}>
            {shareholdingData.map((item, index) => (
              <div key={index} className={styles.dataRow}>
                <div className={styles.labelSide}>
                  <div 
                    className={styles.colorIndicator} 
                    style={{ backgroundColor: item.color }} 
                  />
                  <span className={styles.rowTitle}>{item.title}</span>
                </div>
                <span className={styles.rowPercentage}>{item.percentage}</span>
              </div>
            ))}
          </div>

          <button className={styles.downloadButton} aria-label="Download Shareholding Pattern">
            <span className={styles.downloadText}>Download Shareholding Pattern</span>
          </button>
        </div>

      </div>
    </section>
  );
}