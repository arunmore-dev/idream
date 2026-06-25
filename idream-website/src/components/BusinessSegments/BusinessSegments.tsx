import Image from "next/image";
import Link from "next/link";
import styles from "./BusinessSegments.module.css";

const segments = [
  {
    title: "Film Production Infrastructure",
    icon: "/images/icon-film.png", 
    image: "/images/studio-infrastructure.png", 
    description: "State-of-the-art studios, post-production facilities, and equipment rental services for filmmakers.",
    features: [
      "Sound Stages",
      "Editing Suites",
      "Equipment Rental",
      "Technical Support",
    ],
  },
  {
    title: "Media Technologies",
    icon: "/images/icon-tv.png", 
    image: "/images/studio-infrastructure.png", 
    description: "Advanced broadcasting solutions, digital media platforms, and content distribution infrastructure.",
    features: [
      "Broadcasting Tech",
      "Digital Platform",
      "Content Delivery",
      "Media Storage",
    ],
  },
];

export default function BusinessSegments() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Business Segments</h2>
        <div className={styles.underline} />
        <p className={styles.subHeading}>
          Comprehensive solutions across the entertainment value chain
        </p>

        <div className={styles.grid}>
          {segments.map((segment) => (
            <div key={segment.title} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={segment.image}
                  alt={segment.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.titleRow}>
                  <div className={styles.iconContainer}>
                    <Image 
                      src={segment.icon} 
                      alt="" 
                      width={52} 
                      height={52} 
                      className={styles.icon}
                    />
                  </div>
                  <h3 className={styles.cardTitle}>{segment.title}</h3>
                </div>
                
                <p className={styles.cardDescription}>{segment.description}</p>
                
                <ul className={styles.featureList}>
                  {segment.features.map((feature) => (
                    <li key={feature} className={styles.featureItem}>
                      <span className={styles.dot} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrap}>
          <Link href="#contact" className={styles.ctaButton}>
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}