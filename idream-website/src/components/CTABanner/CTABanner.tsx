import styles from "./CTABanner.module.css";

export default function CTABanner() {
  return (
    <section className={styles.investorContactOuterSection}>
      <div className={styles.investorContactMainBox}>
        <h2 className={styles.investorContactHeading}>Investor Contact</h2>
        
        <p className={styles.investorContactSubDescription}>
          For investor relations inquiries, financial information, or corporate governance questions, please contact our investor relations team.
        </p>

        <div className={styles.actionButtonGroup}>
          {/* Email Box Action Button */}
          <a href="mailto:ir@idream.com" className={styles.emailRelationsButtonBox}>
            <span className={styles.emailTextContent}>Email Investor Relations</span>
          </a>

          {/* Download Box Action Button */}
          <a href="/assets/investor-kit.pdf" download className={styles.downloadKitButtonBox}>
            <span className={styles.downloadTextContent}>Download Investor Kit</span>
          </a>
        </div>
      </div>
    </section>
  );
}