"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Leadership.module.css';

interface TeamMember {
  name: string;
  role: string;
  badge: string;
  tags: string[];
  bio: string;
  image: string;
}

export default function Leadership() {
  const [activeTab, setActiveTab] = useState<'board' | 'management'>('board');
  const [openCardIndex, setOpenCardIndex] = useState<number | null>(null);

  const boardMembers: TeamMember[] = [
    {
      name: "Maya Chen",
      role: "Founder & CEO",
      badge: "PARTNER",
      tags: ["Founder", "CEO", "Partner"],
      bio: "Maya leads IDREAM's design practice with a belief that great design is first an act of listening. Her work spans identity systems, digital products, and spatial experiences for clients across fintech, healthcare, and culture.",
      image: "/images/team1.png"
    },
    {
      name: "Julian Rev",
      role: "Chief Financial Officer",
      badge: "PARTNER",
      tags: ["Founder", "CFO", "Partner"],
      bio: "Julian oversees economic strategies and long-term financial health, structuring growth initiatives for global market operations across all practice areas.",
      image: "/images/team2.png"
    },
    {
      name: "Emily Harper",
      role: "Creative Lead",
      badge: "PARTNER",
      tags: ["Creative", "Design", "Partner"],
      bio: "Emily leads visual systems and experience design projects, turning strategic principles into tangible identity programs for high-growth enterprises.",
      image: "/images/team3.png"
    },
    {
      name: "Roman Hoff",
      role: "Purchase Head",
      badge: "PARTNER",
      tags: ["Procurement", "Operations", "Partner"],
      bio: "Roman manages strategic purchasing, vendor alignments, and material procurement pipelines to ensure efficient operational performance.",
      image: "/images/team4.png"
    }
  ];

  const managementMembers: TeamMember[] = [
    {
      name: "Alex Patel",
      role: "Operations Director",
      badge: "EXECUTIVE",
      tags: ["Operations", "Management"],
      bio: "Alex anchors product delivery and internal engineering operations methodologies, verifying benchmark outputs across teams.",
      image: "/images/team5.png"
    }
  ];

  const currentMembers = activeTab === 'board' ? boardMembers : managementMembers;

  const toggleCardOverlay = (index: number) => {
    setOpenCardIndex(openCardIndex === index ? null : index);
  };

  return (
    <section className={styles.leadershipSection}>
      <div className={styles.container}>
        
        {/* Header Block Row */}
        <div className={styles.headerBlock}>
          <div className={styles.titleColumn}>
            <h2 className={styles.title}>{"// OUR LEADERSHIP"}</h2>
          </div>
          <p className={styles.description}>
            {"Our team comprises seasoned professionals with deep expertise in design, strategy, and innovation. Meet the people committed to delivering exceptional results for every client we serve."}
          </p>
        </div>

        {/* Tab Selection Filter Controls */}
        <div className={styles.tabToggleRow}>
          <button 
            onClick={() => { setActiveTab('board'); setOpenCardIndex(null); }}
            className={`${styles.tabBtn} ${activeTab === 'board' ? styles.activeTab : styles.inactiveTab}`}
          >
            {"Board of Director"}
          </button>
          <button 
            onClick={() => { setActiveTab('management'); setOpenCardIndex(null); }}
            className={`${styles.tabBtn} ${activeTab === 'management' ? styles.activeTab : styles.inactiveTab}`}
          >
            {"Management Team"}
          </button>
        </div>

        {/* Dynamic Personnel Grid Matrix */}
        <div className={styles.teamGrid}>
          {currentMembers.map((member, index) => {
            const isOverlayOpen = openCardIndex === index;
            
            return (
              <div key={index} className={styles.cardContainer}>
                
                {/* Standard Team Display View */}
                <div className={styles.mainCardContent}>
                  <div className={styles.imageFrame}>
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill
                      sizes="(max-width: 1024px) 100vw, 351px"
                      className={styles.avatar} 
                      priority
                    />
                  </div>
                  
                  {/* Footer area matching Figma Specs: 20px padding & space-between layout */}
                  <div className={styles.cardFooter}>
                    <div className={styles.metaTexts}>
                      <span className={styles.badgeLabel}>
                        {"● " + member.badge}
                      </span>
                      <h4 className={styles.memberName}>{member.name}</h4>
                      <span className={styles.memberRole}>{member.role}</span>
                    </div>
                    
                    <button 
                      onClick={() => toggleCardOverlay(index)}
                      className={styles.actionBtn}
                      aria-label="Open profile overview"
                    >
                      {"+"}
                    </button>
                  </div>
                </div>

                {/* Sliding Information Card Sheet Overlay */}
                <div className={`${styles.slidingOverlay} ${isOverlayOpen ? styles.overlayOpened : ''}`}>
                  <div className={styles.overlayTop}>
                    <span className={styles.overlayPartnerBadge}>
                      <span className={styles.dot}>●</span> {member.badge}
                    </span>
                    <button onClick={() => setOpenCardIndex(null)} className={styles.closeBtn}>
                      {"×"}
                    </button>
                  </div>

                  <div className={styles.overlayBody}>
                    <h3 className={styles.overlayName}>{member.name}</h3>
                    
                    <div className={styles.roleBadgeWrapper}>
                      <span className={styles.overlayRoleBadge}>{member.role}</span>
                    </div>
                    
                    <p className={styles.overlayBioText}>{member.bio}</p>
                  </div>

                  {/* Horizontal Listed Tags Row */}
                  <div className={styles.overlayFooterTags}>
                    {member.tags.map((tag, tIdx) => (
                      <span key={tIdx} className={styles.footerTagItem}>{tag}</span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  ); 
}