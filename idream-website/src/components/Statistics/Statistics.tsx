import styles from "./Statistics.module.css";

const stats = [
  { value: "45+", label: "YEARS OF EXCELLENCE" },
  { value: "500+", label: "PROJECTS DELIVERED" },
  { value: "BSE", label: "LISTED COMPANY" },
  { value: "Pan-India", label: "PRESENCE & REACH" },
];

export default function Statistics() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div key={stat.label} className={styles.statWrapper}>
              <div className={styles.stat}>
                <span className={styles.value}>{stat.value}</span>
                <span className={styles.label}>{stat.label}</span>
              </div>
              {/* Render structural borders dynamically between items on desktop only */}
              {index < stats.length - 1 && <div className={styles.divider}></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}