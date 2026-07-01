import React from 'react';
import styles from './OurValues.module.css';

export default function OurValues() {
  const valuesData = [
    {
      title: "Innovation",
      description: "We challenge conventional thinking — constantly exploring new approaches to solve complex problems with imaginative, lasting solutions.",
      isFeatured: false
    },
    {
      title: "Excellence",
      description: "We hold ourselves to the highest standard in every engagement, from strategy to execution. Nothing leaves our hands without pride.",
      isFeatured: true
    },
    {
      title: "Collaboration",
      description: "We believe the best outcomes emerge from genuine partnership — with our clients, our team, and the communities we serve.",
      isFeatured: false
    }
  ];

  return (
    <section className={styles.valuesSection}>
      <div className={styles.wrapper}>
        
        {/* Content Container shifted towards the right side of the screen */}
        <div className={styles.contentLayout}>
          
          {/* Header Block */}
          <div className={styles.headerBlock}>
            <h2 className={styles.sectionTitle}>{"// Our Values"}</h2>
            <p className={styles.subTitle}>{"Our core values guide everything we do."}</p>
          </div>

          {/* Parallel Cards Deck Grid */}
          <div className={styles.cardsGrid}>
            {valuesData.map((val, idx) => (
              <div 
                key={idx} 
                className={`${styles.card} ${val.isFeatured ? styles.featuredCard : styles.normalCard}`}
              >
                <span className={styles.plusSign}>+</span>
                <h3 className={styles.cardTitle}>{val.title}</h3>
                <p className={styles.cardDesc}>{val.description}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}