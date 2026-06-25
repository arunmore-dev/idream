import styles from "./StrategicInterventions.module.css";

const interventions = [
  {
    icon: "/icons/focus.png", 
    title: "Focus Areas",
    description:
      "Concentrating on high-growth segments with strong market potential and competitive advantages.",
  },
  {
    icon: "/icons/innovation.png",
    title: "Innovation",
    description:
      "Investing in cutting-edge technologies and innovative solutions to stay ahead of industry trends.",
  },
  {
    icon: "/icons/partnerships.png",
    title: "Partnerships",
    description:
      "Building strategic alliances to expand capabilities and global market reach.",
  },
  {
    icon: "/icons/value-creation.png",
    title: "Value Creation",
    description:
      "Optimizing operations and capital allocation to maximize long-term stakeholder returns.",
  },
];

export default function StrategicInterventions() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Top Meta Tag */}
        <span className={styles.subheading}>Our Philosophy</span>

        {/* Title and Accent Rule Wrapper */}
        <div className={styles.headerWrapper}>
          <h2 className={styles.heading}>
            Strategic Interventions that <br /> Unlock Long-Term Value
          </h2>
          <div className={styles.accentLine}></div>
        </div>

        {/* Column Grid Grid Wrapper */}
        <div className={styles.grid}>
          {interventions.map((item) => (
            <div key={item.title} className={styles.card}>
              <div className={styles.iconWrapper}>
                <img src={item.icon} alt={item.title} className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Diamond (Rotated Square) */}
        <div className={styles.diamondBadge}></div>
      </div>
    </section>
  );
}