import React from 'react';
import Image from 'next/image';
import styles from './AboutHero.module.css';

export default function AboutHero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/about-hero-banner.png"
          alt="IDREAM studio space"
          fill
          priority
          sizes="100vw"
          className={styles.bannerImg}
        />
      </div>
    </section>
  );
}