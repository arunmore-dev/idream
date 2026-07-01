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
      badge: "Partner",
      tags: ["Founder", "CEO", "Partner"],
      bio: "Maya leads IDREAM's design practice with a belief that great design is first an act of listening. His work spans identity systems, digital products, and spatial experiences for clients across fintech, healthcare, and culture. Previously Creative Director at Pentagram London, James brings a rare synthesis of conceptual clarity and meticulous craft.",
      image: "/images/team1.png"
    },
    {
      name: "Julian Rev",
      role: "Chief Financial Officer",
      badge: "Partner",
      tags: ["Finance", "Strategy", "Partner"],
      bio: "Julian oversees financial strategies and corporate development frameworks. With over fifteen years managing technology portfolios, he bridges business architectures and sustainable fiscal growth elegantly.",
      image: "/images/team2.png"
    },
    {
      name: "Emily Harper",
      role: "Creative Lead",
      badge: "Partner",
      tags: ["Creative", "Design", "Partner"],
      bio: "Emily directs cross-functional creative teams, setting experience paradigms for global digital architectures. Her continuous target lies inside pioneering boundary-pushing client solutions.",
      image: "/images/team3.png"
    },
    {
      name: "Roman Hoff",
      role: "Purchase Head",
      badge: "Partner",
      tags: ["Logistics", "Operations", "Partner"],
      bio: "Roman designs modern logistics models and strategic alliance networks globally. His structural methodology scales enterprise efficiency objectives seamlessly from infrastructure levels up.",
      image: "/images/team4.png"
    }
  ];

  const managementMembers: TeamMember[] = [
    {
      name: "Alex Patel",
      role: "Operations Director",
      badge: "Executive",
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
            <h2 className={styles.title}>{"// Our Leadership"}</h2>
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
                
                {/* Standard Team Display view state */}
                <div className={styles.mainCardContent}>
                  <div className={styles.imageFrame}>
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill
                      sizes="(max-width: 1024px) 100vw, 363px"
                      className={styles.avatar} 
                    />
                  </div>
                  
                  <div className={styles.cardFooter}>
                    <div className={styles.metaTexts}>
                      <span className={styles.badgeLabel}>{"● " + member.badge}</span>
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

                {/* Sliding Intro Overlay Panel (Matches Original Image 1 perfectly) */}
                <div className={`${styles.slidingOverlay} ${isOverlayOpen ? styles.overlayOpened : ''}`}>
                  <div className={styles.overlayTop}>
                    {/* The Figma styled Partner Capsule Badge */}
                    <span className={styles.overlayPartnerBadge}>
                      {"● " + member.badge}
                    </span>
                    <button onClick={() => setOpenCardIndex(null)} className={styles.closeBtn}>
                      {"×"}
                    </button>
                  </div>

                  <div className={styles.overlayBody}>
                    <h3 className={styles.overlayName}>{member.name}</h3>
                    <h4 className={styles.overlayRole}>{member.role}</h4>
                    <p className={styles.overlayBioText}>{member.bio}</p>
                  </div>

                  {/* Vertically Listed Role tags container like original */}
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