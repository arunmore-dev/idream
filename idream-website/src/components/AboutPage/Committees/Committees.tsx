"use client";
import React from 'react';
import styles from './Committees.module.css';

interface CommitteeMember {
  name: string;
  designation: string;
  role: 'Chairperson' | 'Member';
}

interface Committee {
  title: string;
  members: CommitteeMember[];
}

export default function Committees() {
  const committeesData: Committee[] = [
    {
      title: "AUDIT COMMITTEE",
      members: [
        {
          name: "Mr. Baljit Singh",
          designation: "Non-Executive Director",
          role: "Chairperson"
        },
        {
          name: "Ms. Prerana S Bokil",
          designation: "Independent Director",
          role: "Member"
        },
        {
          name: "Mr. Ross William Brierty",
          designation: "Independent Director",
          role: "Member"
        }
      ]
    },
    {
      title: "NOMINATION AND REMUNERATION",
      members: [
        {
          name: "Ms. Honey Baljit Singh",
          designation: "Non-Executive Director",
          role: "Chairperson"
        },
        {
          name: "Mr. Baljit Singh",
          designation: "Non-Executive Director",
          role: "Member"
        },
        {
          name: "Ms. Prerana S Bokil",
          designation: "Independent Director",
          role: "Member"
        },
        {
          name: "Mr. Ross William Brierty",
          designation: "Independent Director",
          role: "Member"
        }
      ]
    },
    {
      title: "STAKEHOLDERS' RELATIONSHIP",
      members: [
        {
          name: "Ms. Upveen Harpal",
          designation: "Non-Executive Director",
          role: "Chairperson"
        },
        {
          name: "Mr. Baljit Singh",
          designation: "Non-Executive Director",
          role: "Member"
        },
        {
          name: "Ms. Honey Baljit Singh",
          designation: "Non-Executive Director",
          role: "Member"
        },
        {
          name: "Ms. Prerana S Bokil",
          designation: "Independent Director",
          role: "Member"
        }
      ]
    }
  ];

  return (
    <section className={styles.committeesSection}>
      <div className={styles.container}>
        
        {/* Header Block Row */}
        <div className={styles.headerBlock}>
          <div className={styles.titleColumn}>
            <h2 className={styles.title}>{"// OUR COMMITTEES"}</h2>
          </div>
          <p className={styles.description}>
            {"Our governance is strengthened through dedicated committees that ensure transparency, accountability, and strategic oversight across all operations."}
          </p>
        </div>

        {/* Committees Grid Matrix */}
        <div className={styles.committeesGrid}>
          {committeesData.map((committee, idx) => (
            <div key={idx} className={styles.committeeCard}>
              <h3 className={styles.committeeTitle}>{committee.title}</h3>
              
              <div className={styles.membersList}>
                {committee.members.map((member, mIdx) => (
                  <div key={mIdx} className={styles.memberRow}>
                    <div className={styles.memberInfo}>
                      <span className={styles.memberName}>{member.name}</span>
                      <span className={styles.memberDesignation}>{member.designation}</span>
                    </div>
                    <span 
                      className={`${styles.roleBadge} ${
                        member.role === 'Chairperson' ? styles.chairpersonBadge : styles.memberBadge
                      }`}
                    >
                      {member.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}