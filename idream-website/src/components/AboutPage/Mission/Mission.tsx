import React from 'react';
import styles from './Mission.module.css';

export default function Mission() {
  return (
    <section className={styles.missionSection}>
      <div className={styles.container}>
        {/* Left Wrapper: Pushes title into optimal right position on desktop */}
        <div className={styles.titleColumn}>
          <h2 className={styles.title}>
            {"// Our Mission"}
          </h2>
        </div>

        {/* Right Side: Paragraph Statement */}
        <div className={styles.statementColumn}>
          <p className={styles.statement}>
            <span className={styles.highlightText}>
              {"Our mission is to ignite strategic growth and remarkable outcomes"}
            </span>
            {" through design thinking, expert partnerships, and fearless execution — ensuring both our clients and the people they serve reach their full potential."}
          </p>
        </div>
      </div>
    </section>
  );
}