import React from 'react';
import Image from 'next/image';
import styles from './Approach.module.css';

interface ApproachStep {
  title: string;
  description: string;
}

export default function Approach() {
  const steps: ApproachStep[] = [
    {
      title: "Discovery",
      description: "We begin with deep listening — understanding your vision, constraints, and the opportunities hiding in plain sight."
    },
    {
      title: "Strategy",
      description: "We develop a clear roadmap that bridges your ambitions with actionable, measurable milestones tailored to your context."
    },
    {
      title: "Execution",
      description: "Our multidisciplinary team brings strategy to life with precision, craft, and relentless iteration until it is right."
    },
    {
      title: "Impact",
      description: "We measure success by the real-world results you achieve — and we stay engaged to keep building on them over time."
    }
  ];

  return (
    <section className={styles.approachSection}>
      <div className={styles.container}>
        
        {/* Header Block Row */}
        <div className={styles.headerRow}>
          <h2 className={styles.title}>{"// Our Approach"}</h2>
          <p className={styles.mainDescription}>
            {"Our approach is centred around understanding your unique needs and delivering tailored solutions. We combine industry expertise with a personalized touch to ensure the best outcomes. "}
            <strong>{"Our comprehensive process includes:"}</strong>
          </p>
        </div>

        {/* Content Elements Layout Grid */}
        <div className={styles.contentRow}>
          
          {/* Left Column Side: Next.js Image Element */}
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/our-approch.png"
              alt="Our approach workflow graphic"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className={styles.productionImage}
              priority
            />
          </div>

          {/* Right Column Side: Steps Vertical Sequence List */}
          <div className={styles.stepsColumn}>
            {steps.map((step, index) => (
              <div key={index} className={styles.stepRow}>
                <div className={styles.stepTitleWrapper}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                </div>
                <div className={styles.stepDescriptionWrapper}>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}