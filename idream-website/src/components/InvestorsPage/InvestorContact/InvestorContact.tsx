import React from 'react';
import styles from './InvestorContact.module.css';

interface ContactBlock {
  roleTag: string;
  name: string;
  subDetail: string;
  email: string;
  phone: string;
}

export default function InvestorContact() {
  const contactData: ContactBlock[] = [
    {
      roleTag: 'Compliance Officer',
      name: 'Ms. Santosee Narayan Majhi',
      subDetail: 'Company Secretary & Compliance Officer',
      email: 'investor.relations@idreamifcl.com',
      phone: '+91 22 4890 5600',
    },
    {
      roleTag: 'Registrar & Transfer Agent',
      name: 'Bigshare Services Pvt. Limited',
      subDetail: 'Unit: IDream Film Infrastructure Co. Ltd',
      email: 'info@bigshareonline.com',
      phone: '022 - 40430200',
    },
  ];

  return (
    <section className={styles.sectionContainer}>
      {/* Structural Title Header block */}
      <div className={styles.headerGroup}>
        <span className={styles.redTag}>Contact</span>
        <h2 className={styles.title}>Investor Contact</h2>
      </div>
    
      {/* Grid wrapper containing contact block cards */}
      <div className={styles.gridContainer}>
        {contactData.map((item, index) => (
          <div key={index} className={styles.contactCard}>
            <h3 className={styles.cardRoleTag}>{item.roleTag}</h3>
            <h4 className={styles.nameHeading}>{item.name}</h4>
            <p className={styles.roleDetail}>{item.subDetail}</p>
            
            <div className={styles.divider} />

            <div className={styles.detailsGroup}>
              {/* Email Entry Line */}
              <div className={styles.infoLine}>
                <svg className={styles.icon} viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href={`mailto:${item.email}`} className={styles.infoLink}>
                  {item.email}
                </a>
              </div>

              {/* Phone Entry Line */}
              <div className={styles.infoLine}>
                <svg className={styles.icon} viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className={styles.infoText}>{item.phone}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Grievance Redressal Inline Notice Footprint */}
      <p className={styles.grievanceNote}>
        For grievance redressal, please write to our Investor Grievance email:{' '}
        <a href="mailto:investor.relations@idreamfilminfra.in" className={styles.grievanceLink}>
          investor.relations@idreamfilminfra.in
        </a>
      </p>
    </section>
  );
}