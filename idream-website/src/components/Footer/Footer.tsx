import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* TOP SECTION */}
        <div className={styles.top}>
          {/* Brand Info */}
          <div className={styles.brand}>
            <Link href="#home" className={styles.logoWrapper}>
              <Image 
                src="/images/Flogo.png" 
                alt="IDREAM Logo" 
                width={279} 
                height={72} 
                priority
                className={styles.logoImg}
              />
            </Link>
            <p className={styles.description}>
              Leading the transformation of entertainment infrastructure since 1981.
            </p>
          </div>

          {/* Links Grid Sections */}
          <div className={styles.linksGrid}>
            {/* Column 1: Quick Links */}
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Quick Links</h4>
              <ul className={styles.linkList}>
                <li><Link href="#about" className={styles.footerLink}>About Us</Link></li>
                <li><Link href="#business-segments" className={styles.footerLink}>Business Segments</Link></li>
                <li><Link href="#strategy" className={styles.footerLink}>Strategy</Link></li>
                <li><Link href="#investor-relations" className={styles.footerLink}>Investor Relations</Link></li>
              </ul>
            </div>

            {/* Column 2: For Investors */}
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>For Investors</h4>
              <ul className={styles.linkList}>
                <li><Link href="#financial-reports" className={styles.footerLink}>Financial Reports</Link></li>
                <li><Link href="#stock-information" className={styles.footerLink}>Stock Information</Link></li>
                <li><Link href="#corporate-governance" className={styles.footerLink}>Corporate Governance</Link></li>
                <li><Link href="#announcements" className={styles.footerLink}>Announcements</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div className={styles.contactColumn}>
              <h4 className={styles.columnTitle}>Contact</h4>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <Image src="/icons/email.png" alt="Email" width={19} height={20} className={styles.contactIcon} />
                  <a href="mailto:info@idreamfilm.com" className={styles.footerLink}>info@idreamfilm.com</a>
                </li>
                <li className={styles.contactItem}>
                  <Image src="/icons/office.png" alt="Location" width={19} height={20} className={styles.contactIcon} />
                  <span className={styles.contactText}>Mumbai, Maharashtra, India</span>
                </li>
                <li className={styles.contactItem}>
                  <Image src="/icons/phone.png" alt="Phone" width={19} height={20} className={styles.contactIcon} />
                  <a href="tel:+9122XXXXXXXX" className={styles.footerLink}>+91 (22) XXXX XXXX</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className={styles.bottom}>
          <div className={styles.bottomRow}>
            <p className={styles.copyright}>
              &copy; 2026 IDream Film Infrastructure Company Limited. All rights reserved.
            </p>
            <div className={styles.legalLinks}>
              <Link href="/privacy-policy" className={styles.legalLink}>Privacy Policy</Link>
              <Link href="/terms-of-service" className={styles.legalLink}>Terms of Service</Link>
              <Link href="/disclaimer" className={styles.legalLink}>Disclaimer</Link>
            </div>
          </div>
          <p className={styles.bseInfo}>
            BSE Listed Company | Incorporated in 1981 | CIN: LXXXXX MH 1981 PLC XXXXXX
          </p>
        </div>
      </div>
    </footer>
  );
}