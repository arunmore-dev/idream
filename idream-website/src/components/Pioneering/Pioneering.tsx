"use client";

import Image from "next/image";
import styles from "./Pioneering.module.css";

export default function Pioneering() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>

        {/* Top Intro Section */}
        <div className={styles.intro}>
          <div className={styles.introLeft}>
            <span className={styles.eyebrow}>About Us</span>
            <h2 className={styles.heading}>
              Pioneering the Future of Entertainment Infrastructure
            </h2>
          </div>
          <div className={styles.introRight}>
            <p className={styles.description}>
              IDream Film Infrastructure Company Limited provides world-class
              facilities and innovative solutions for the global film, media, and
              entertainment industry. We bridge the gap between creative vision
              and technical excellence.
            </p>
          </div>
        </div>

        {/* 1. DESKTOP VIEW: Shows full grid side-by-side */}
        <div className={styles.grid}>
          {/* COLUMN 1 */}
          <div className={styles.column}>
            <div className={styles.textCard}>
              <div>
                <span className={styles.cardLabel}>Who We Are</span>
              </div>
              <p className={styles.cardText}>
                Leading Provider of Film &amp; Entertainment Infrastructure
              </p>
            </div>
            <div className={styles.standaloneImageWrap}>
              <Image
                src="/images/about-building.jpg"
                alt="IDream building"
                fill
                className={styles.cardImage}
                sizes="33vw"
              />
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className={styles.cardCenter}>
            <Image
              src="/images/about-filmset.jpg"
              alt="Film production set"
              fill
              className={styles.cardImage}
              sizes="34vw"
            />
            <div className={styles.cardOverlay}>
              <div className={styles.overlayContent}>
                <span className={styles.overlayLabel}>Recognition</span>
                <p className={styles.overlayText}>
                  IDream Recognized as Industry Pioneer
                </p>
              </div>
              <button className={styles.overlayArrow} aria-label="Read more">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="#06257E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* COLUMN 3 */}
          <div className={styles.column}>
            <div className={styles.textCard}>
              <div className={styles.reportHeader}>
                <span className={styles.cardLabel}>Report</span>
                <button className={styles.arrowBtn} aria-label="Open report">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12L12 4M12 4H6M12 4V10" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <p className={styles.cardText}>
                2026 Strategic Realignment Report
              </p>
            </div>
            <div className={styles.standaloneImageWrap}>
              <Image
                src="/images/about-studio.jpg"
                alt="IDream studio"
                fill
                className={styles.cardImage}
                sizes="33vw"
              />
            </div>
          </div>
        </div>

        {/* 2. MOBILE & TABLET SWIPABLE VIEW */}
        <div className={styles.carouselViewport}>
          <div className={styles.carouselTrack}>
            {/* SLIDE 1: Who We Are */}
            <div className={styles.slideItem}>
              <div className={styles.textCard}>
                <div>
                  <span className={styles.cardLabel}>Who We Are</span>
                </div>
                <p className={styles.cardText}>
                  Leading Provider of Film &amp; Entertainment Infrastructure
                </p>
              </div>
              <div className={styles.standaloneImageWrap}>
                <Image
                  src="/images/about-building.jpg"
                  alt="IDream building"
                  fill
                  className={styles.cardImage}
                  sizes="100vw"
                />
              </div>
            </div>

            {/* SLIDE 2: Recognition */}
            <div className={styles.slideItem}>
              <div className={styles.cardCenterMobileWrapper}>
                <div className={styles.cardCenter}>
                  <Image
                    src="/images/about-filmset.jpg"
                    alt="Film production set"
                    fill
                    className={styles.cardImage}
                    sizes="100vw"
                  />
                  <div className={styles.cardOverlay}>
                    <div className={styles.overlayContent}>
                      <span className={styles.overlayLabel}>Recognition</span>
                      <p className={styles.overlayText}>
                        IDream Recognized as Industry Pioneer
                      </p>
                    </div>
                    <button className={styles.overlayArrow} aria-label="Read more">
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="#06257E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* SLIDE 3: Report */}
            <div className={styles.slideItem}>
              <div className={styles.textCard}>
                <div className={styles.reportHeader}>
                  <span className={styles.cardLabel}>Report</span>
                  <button className={styles.arrowBtn} aria-label="Open report">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 12L12 4M12 4H6M12 4V10" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                <p className={styles.cardText}>
                  2026 Strategic Realignment Report
                </p>
              </div>
              <div className={styles.standaloneImageWrap}>
                <Image
                  src="/images/about-studio.jpg"
                  alt="IDream studio"
                  fill
                  className={styles.cardImage}
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}