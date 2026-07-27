import React from 'react';
import styles from './BoardCommittees.module.css';

interface CommitteeData {
  title: string;
  chairperson: string;
  members: string;
  role: string;
}

const committeesList: CommitteeData[] = [
  {
    title: "Audit Committee",
    chairperson: "Mr. Arvind Nair (Independent Director)",
    members: "Ms. Sunita Patel | Mr. Vikram Rao",
    role: "Oversees financial reporting, internal audit, and risk management."
  },
  {
    title: "Nomination & Remuneration",
    chairperson: "Ms. Sunita Patel (Independent Director)",
    members: "Mr. Arvind Nair | Ms. Deepa Krishnan",
    role: "Board appointments, performance evaluation, and remuneration policy."
  },
  {
    title: "Stakeholders Relationship",
    chairperson: "Ms. Deepa Krishnan (Independent Director)",
    members: "Mr. Rajesh Mehta | Ms. Priya Sharma",
    role: "Investor grievance redressal and stakeholder communication."
  },
  {
    title: "Risk Management",
    chairperson: "Mr. Vikram Rao (Independent Director)",
    members: "Mr. Suresh Iyer | Mr. Anil Gupta",
    role: "Enterprise risk framework, emerging risks, and mitigation strategies."
  }
];

export default function BoardCommittees() {
  return (
    <section className={styles.committeesSection}>
      {/* Header Block */}
      <div className={styles.headerBox}>
        <span className={styles.tagline}>COMMITTEES</span>
        <h2 className={styles.heading}>Board Committees</h2>
        <p className={styles.subheading}>
          Specialized committees ensuring focused oversight of critical governance areas.
        </p>
      </div>

      {/* 2x2 Grid Layout */}
      <div className={styles.gridContainer}>
        {committeesList.map((item, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>{item.title}</h3>

            <div className={styles.cardBody}>
              {/* Chairperson Group */}
              <div className={styles.infoGroup}>
                <span className={styles.labelRed}>CHAIRPERSON</span>
                <p className={styles.valueWhite}>{item.chairperson}</p>
              </div>

              {/* Members Group */}
              <div className={styles.infoGroup}>
                <span className={styles.labelGrey}>MEMBERS</span>
                <p className={styles.valueMuted}>{item.members}</p>
              </div>

              {/* Divider Line */}
              <div className={styles.divider} />

              {/* Committee Role Group */}
              <div className={styles.infoGroup}>
                <span className={styles.labelGrey}>COMMITTEE ROLE</span>
                <p className={styles.valueRole}>{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}