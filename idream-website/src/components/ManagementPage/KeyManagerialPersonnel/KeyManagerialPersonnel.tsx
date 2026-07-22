import React from 'react';
import styles from './KeyManagerialPersonnel.module.css';

interface KmpMember {
  initials: string;
  avatarBg: string;
  name: string;
  role: string;
  description: string;
  appointedDate: string;
  metaId: string; // DIN, PAN, or Membership No.
}

const kmpData: KmpMember[] = [
  {
    initials: "RM",
    avatarBg: "#0F192E",
    name: "Mr. Rajesh Mehta",
    role: "Managing Director",
    description: "Responsible for overall management, strategy, and operations of the company.",
    appointedDate: "18 March 2020",
    metaId: "DIN: 00123456"
  },
  {
    initials: "PS",
    avatarBg: "#1E6B8A",
    name: "Ms. Priya Sharma",
    role: "Chief Financial Officer",
    description: "Oversees financial planning, reporting, treasury, and investor relations.",
    appointedDate: "1 April 2021",
    metaId: "PAN: ABCPS1234D"
  },
  {
    initials: "AN",
    avatarBg: "#BD1E1E",
    name: "Ms. Ananya Nair",
    role: "Company Secretary & Compliance Officer",
    description: "Responsible for statutory compliance, board governance, and SEBI filings.",
    appointedDate: "15 June 2022",
    metaId: "Membership No: F12345"
  }
];

export default function KeyManagerialPersonnel() {
  return (
    <section className={styles.kmpSection}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.headerBox}>
          <span className={styles.tagline}>KMP</span>
          <h2 className={styles.heading}>Key Managerial Personnel</h2>
          <p className={styles.subheading}>
            Statutory officers of the company as required under the Companies Act, 2013.
          </p>
        </div>

        {/* List Cards Container */}
        <div className={styles.listContainer}>
          {kmpData.map((member, index) => (
            <div key={index} className={styles.card}>
              {/* Left Side: Avatar Icon */}
              <div 
                className={styles.avatar} 
                style={{ backgroundColor: member.avatarBg }}
              >
                {member.initials}
              </div>

              {/* Right Side: Detailed Info Content */}
              <div className={styles.cardContent}>
                {/* Top Row: Name/Role & Appointment Info */}
                <div className={styles.topRow}>
                  <div className={styles.nameRoleBox}>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <p className={styles.memberRole}>{member.role}</p>
                  </div>
                  <div className={styles.appointedBox}>
                    <span className={styles.appointedLabel}>APPOINTED</span>
                    <span className={styles.appointedDate}>{member.appointedDate}</span>
                  </div>
                </div>

                {/* Bottom Row: Description & Meta ID (DIN/PAN/Membership) */}
                <div className={styles.bottomRow}>
                  <p className={styles.description}>{member.description}</p>
                  <span className={styles.metaId}>{member.metaId}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}