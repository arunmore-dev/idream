"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import styles from "./Footer.module.css";

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* TOP SECTION */}
        <div className={styles.top}>
          {/* Brand Info */}
          <motion.div className={styles.brand} variants={fadeUpVariants}>
            <Link href="/" className={styles.logoWrapper}>
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
          </motion.div>

          {/* Links Grid Sections */}
          <div className={styles.linksGrid}>
            {/* Column 1: Quick Links */}
            <motion.div className={styles.linkColumn} variants={fadeUpVariants}>
              <h4 className={styles.columnTitle}>Quick Links</h4>
              <ul className={styles.linkList}>
                <motion.li whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link href="/about" className={styles.footerLink}>About Us</Link>
                </motion.li>
                <motion.li whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link href="#business-segments" className={styles.footerLink}>Business Segments</Link>
                </motion.li>
                <motion.li whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link href="#strategy" className={styles.footerLink}>Strategy</Link>
                </motion.li>
                <motion.li whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link href="/management" className={styles.footerLink}>Management</Link>
                </motion.li>
                <motion.li whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link href="/investors" className={styles.footerLink}>Investor Relations</Link>
                </motion.li>
              </ul>
            </motion.div>

            {/* Column 2: For Investors */}
            <motion.div className={styles.linkColumn} variants={fadeUpVariants}>
              <h4 className={styles.columnTitle}>For Investors</h4>
              <ul className={styles.linkList}>
                <motion.li whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link href="#financial-reports" className={styles.footerLink}>Financial Reports</Link>
                </motion.li>
                <motion.li whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link href="#stock-information" className={styles.footerLink}>Stock Information</Link>
                </motion.li>
                <motion.li whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link href="#corporate-governance" className={styles.footerLink}>Corporate Governance</Link>
                </motion.li>
                <motion.li whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link href="#announcements" className={styles.footerLink}>Announcements</Link>
                </motion.li>
              </ul>
            </motion.div>

            {/* Column 3: Contact */} 
            <motion.div className={styles.contactColumn} variants={fadeUpVariants}>
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
            </motion.div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <motion.div className={styles.bottom} variants={fadeUpVariants}>
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
        </motion.div>
      </motion.div>
    </footer>
  );
}