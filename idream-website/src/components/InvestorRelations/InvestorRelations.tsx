"use client";

import { useState } from "react";
import styles from "./InvestorRelations.module.css";
import Image from "next/image";

const tabs = ["Overview", "Financial", "News", "Governance"] as const;

const tabContent: Record<
  (typeof tabs)[number],
  {
    cards: { label: string; mainValue: string; subValue: string }[];
    whyInvestTitle: string;
    highlights: { title: string; subtitle: string }[];
  }
> = {
  Overview: {
    cards: [
      { label: "STOCK EXCHANGE", mainValue: "BSE", subValue: "Bombay Stock Exchange" },
      { label: "INCORPORATED", mainValue: "1981", subValue: "45+ Years of Excellence" },
      { label: "SECTOR", mainValue: "Media", subValue: "Film & Entertainment" },
    ],
    whyInvestTitle: "Why Invest in IDream?",
    highlights: [
      { title: "Established Track Record", subtitle: "Over 45 years of industry leadership and expertise" },
      { title: "Strategic Position", subtitle: "Well-positioned in high-growth entertainment sector" },
      { title: "Transformation Focus", subtitle: "Active strategic realignment for enhanced value" },
      { title: "Strong Governance", subtitle: "Commitment to transparency and best practices" },
    ],
  },
  Financial: {
    cards: [],
    whyInvestTitle: "",
    highlights: [],
  },
  News: {
    cards: [],
    whyInvestTitle: "",
    highlights: [],
  },
  Governance: {
    cards: [],
    whyInvestTitle: "",
    highlights: [],
  },
};

const financialDocuments = [
  "Annual Reports",
  "Quarterly Reports",
  "Financial Statements",
  "Investor Presentations",
];

const governanceDocuments = [
  "Board of Directors",
  "Code of Conduct",
  "Policies & Procedures",
  "Shareholder Information",
];

const newsItems = [
  {
    date: "April 24, 2026",
    title: "Strategic Realignment Initiative Announced",
    description:
      "Company announces comprehensive strategic realignment to enhance stakeholders value.",
  },
  {
    date: "April 24, 2026",
    title: "Strategic Realignment Initiative Announced",
    description:
      "Company announces comprehensive strategic realignment to enhance stakeholders value.",
  },
  {
    date: "April 24, 2026",
    title: "Strategic Realignment Initiative Announced",
    description:
      "Company announces comprehensive strategic realignment to enhance stakeholders value.",
  },
];

export default function InvestorRelations() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Overview");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  
  const content = tabContent[activeTab];

  const handleTabSelect = (tab: (typeof tabs)[number]) => {
    setActiveTab(tab);
    setDropdownOpen(false);
    setCardIndex(0); // Reset index mapping
  };

  return (
    <section id="investor-relations" className={styles.section}>
      <div className={styles.container}>

        {/* Header Section */}
        <div className={styles.headerWrapper}>
          <span className={styles.subTitleText}>INVESTORS</span>
          <h2 className={styles.mainTitleText}>Investor Relations</h2>
          <div className={styles.gradientLineTracker}></div>
          <p className={styles.descriptionText}>
            Committed to transparency and creating long-term stakeholder value
          </p>
        </div>

        {/* Desktop Tab Selector Layout */}
        <div className={styles.tabBarContainer}>
          <div className={styles.tabGrid}>
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`${styles.tabItemButton} ${activeTab === tab ? styles.tabActive : ""}`}
                onClick={() => handleTabSelect(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Dropdown Layout matching image_bef41b.png completely */}
        <div className={styles.mobileDropdownContainer}>
          <button 
            className={styles.dropdownSelectorTrigger}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            type="button"
          >
            <span>{activeTab}</span>
            <div className={`${styles.dropdownArrowIcon} ${dropdownOpen ? styles.arrowRotate : ""}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>

          {dropdownOpen && (
            <div className={styles.dropdownFloatingMenu}>
              {tabs.map((tab) => (
                <button
                  key={`drop-${tab}`}
                  className={`${styles.dropdownOptionRow} ${activeTab === tab ? styles.optionActive : ""}`}
                  onClick={() => handleTabSelect(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Main Content Content Wrapper Panels */}
        <div className={styles.contentBodyWrapper}>

          {activeTab === "Overview" && (
            <>
              {/* Desktop view Grid */}
              <div className={styles.cardsLayoutGrid}>
                {content.cards.map((card, idx) => (
                  <div key={idx} className={styles.metricCard}>
                    <span className={styles.cardExchangeLabel}>{card.label}</span>
                    <span className={styles.cardBseHeading}>{card.mainValue}</span>
                    <span className={styles.cardBombaySubtext}>{card.subValue}</span>
                  </div>
                ))}
              </div>

              {/* Mobile Swipeable Metrics Component rendering */}
              <div className={styles.mobileCardsSlider}>
                <div className={styles.sliderClip}>
                  <div 
                    className={styles.sliderTrack}
                    style={{ transform: `translateX(-${cardIndex * 100}%)` }}
                  >
                    {content.cards.map((card, idx) => (
                      <div key={`slide-${idx}`} className={styles.sliderSlide}>
                        <div className={styles.metricCard}>
                          <span className={styles.cardExchangeLabel}>{card.label}</span>
                          <span className={styles.cardBseHeading}>{card.mainValue}</span>
                          <span className={styles.cardBombaySubtext}>{card.subValue}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.dotsContainer}>
                  {content.cards.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCardIndex(index)}
                      className={`${styles.dot} ${cardIndex === index ? styles.activeDot : ""}`}
                      aria-label={`Go to metric card slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Why Invest Feature Blocks */}
              <div className={styles.whyInvestBlock}>
                <h3 className={styles.whyInvestTitle}>{content.whyInvestTitle}</h3>
                <div className={styles.highlightsGridDisplay}>
                  {content.highlights.map((highlight, index) => (
                    <div key={index} className={styles.highlightRowItem}>
                      <div className={styles.checkboxContainerSquare}>
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 5L4.5 8.5L11 1.5" stroke="#06257E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className={styles.highlightTextDetails}>
                        <h4 className={styles.highlightHeadingTitle}>{highlight.title}</h4>
                        <p className={styles.highlightParagraphDesc}>{highlight.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === "Financial" && (
            <div className={styles.documentSection}>
              <h3 className={styles.documentTitle}>Financial Information</h3>
              {financialDocuments.map((item) => (
                <button className={styles.documentRow} key={item}>
                  <span>{item}</span>
                  <Image
                    src="/icons/Arrow.png"
                    alt="Arrow"
                    width={24}
                    height={24}
                    className={styles.arrowIcon}
                  />
                </button>
              ))}
            </div>
          )}

          {activeTab === "Governance" && (
            <div className={styles.documentSection}>
              <h3 className={styles.documentTitle}>Corporate Governance</h3>
              {governanceDocuments.map((item) => (
                <button className={styles.documentRow} key={item}>
                  <span>{item}</span>
                  <Image
                    src="/icons/Arrow.png"
                    alt="Arrow"
                    width={24}
                    height={24}
                    className={styles.arrowIcon}
                  />
                </button>
              ))}
            </div>
          )}

          {activeTab === "News" && (
            <div className={styles.newsSection}>
              <h2 className={styles.newsHeading}>Latest Announcements</h2>
              {newsItems.map((news, index) => (
                <div className={styles.newsCard} key={index}>
                  <p className={styles.newsDate}>{news.date}</p>
                  <h3 className={styles.newsTitle}>{news.title}</h3>
                  <p className={styles.newsDescription}>{news.description}</p>
                </div>
              ))}
              <button className={styles.allAnnouncementsBtn}>All Announcements</button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}