"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Business", href: "#services" },
  { label: "Strategy", href: "#" },
  { label: "Investors", href: "#investor-relations" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="#home" className={styles.logoContainer} onClick={handleNavClick}>
          <Image 
            src="/images/logo.png" 
            alt="IDREAM Logo"
            width={180}     
            height={40}     
            className={styles.logoImage}
            priority
          />
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={styles.navLink}
                  onClick={handleNavClick}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Mobile-only CTA container using your exact existing style class */}
          <div className={styles.mobileCtaWrapper}>
            <Link
              href="#contact"
              className={styles.ctaButton}
              onClick={handleNavClick}
            >
              Investor Login
            </Link>
          </div>
        </nav>

        {/* Desktop-only CTA */}
        <Link
          href="#contact"
          className={styles.ctaButton}
          onClick={handleNavClick}
        >
          Investor Login
        </Link>

        <button
          className={`${styles.menuToggle} ${menuOpen ? styles.menuOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}