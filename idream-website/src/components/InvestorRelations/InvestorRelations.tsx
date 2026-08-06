"use client";

import { useState } from "react";
import styles from "./InvestorRelations.module.css";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

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

// Modern Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const enterpriseRevealVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function InvestorRelations() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Overview");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const content = tabContent[activeTab];

  const handleTabSelect = (tab: (typeof tabs)[number]) => {
    setActiveTab(tab);
    setDropdownOpen(false);
  };

  return (
    <section id="investor-relations" className={styles.section}>
      <div className={styles.container}>

        {/* Header Section */}
        <motion.div
          className={styles.headerWrapper}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.span className={styles.subTitleText} variants={enterpriseRevealVariants}>
            INVESTORS
          </motion.span>
          <motion.h2 className={styles.mainTitleText} variants={enterpriseRevealVariants}>
            Investor Relations
          </motion.h2>
          <motion.div className={styles.gradientLineTracker} variants={enterpriseRevealVariants} />
          <motion.p className={styles.descriptionText} variants={enterpriseRevealVariants}>
            Committed to transparency and creating long-term stakeholder value
          </motion.p>
        </motion.div>

        {/* Desktop Tab Selector Layout */}
        <motion.div
          className={styles.tabBarContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className={styles.tabGrid}>
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                className={`${styles.tabItemButton} ${activeTab === tab ? styles.tabActive : ""}`}
                onClick={() => handleTabSelect(tab)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Mobile Dropdown Layout */}
        <motion.div
          className={styles.mobileDropdownContainer}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
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

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                className={styles.dropdownFloatingMenu}
                initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {tabs.map((tab) => (
                  <button
                    key={`drop-${tab}`}
                    className={`${styles.dropdownOptionRow} ${activeTab === tab ? styles.optionActive : ""}`}
                    onClick={() => handleTabSelect(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Main Content Wrapper Panels - ORIGINAL STRUCTURE RESTORED */}
        <div className={styles.contentBodyWrapper}>

          {activeTab === "Overview" && (
            <>
              {/* Desktop view Grid */}
              <motion.div
                className={styles.cardsLayoutGrid}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {content.cards.map((card, idx) => (
                  <motion.div
                    key={idx}
                    className={styles.metricCard}
                    variants={enterpriseRevealVariants}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  >
                    <span className={styles.cardExchangeLabel}>{card.label}</span>
                    <span className={styles.cardBseHeading}>{card.mainValue}</span>
                    <span className={styles.cardBombaySubtext}>{card.subValue}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Mobile Native Swipeable Metrics View */}
              <div className={styles.mobileCardsSlider}>
                <div className={styles.sliderClip}>
                  <div className={styles.sliderTrack}>
                    {content.cards.map((card, idx) => (
                      <div key={`slide-${idx}`} className={styles.metricCard}>
                        <span className={styles.cardExchangeLabel}>{card.label}</span>
                        <span className={styles.cardBseHeading}>{card.mainValue}</span>
                        <span className={styles.cardBombaySubtext}>{card.subValue}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Why Invest Feature Blocks */}
              <motion.div
                className={styles.whyInvestBlock}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h3 className={styles.whyInvestTitle} variants={enterpriseRevealVariants}>
                  {content.whyInvestTitle}
                </motion.h3>
                <div className={styles.highlightsGridDisplay}>
                  {content.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      className={styles.highlightRowItem}
                      variants={enterpriseRevealVariants}
                      whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    >
                      <div className={styles.checkboxContainerSquare}>
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 5L4.5 8.5L11 1.5" stroke="#06257E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className={styles.highlightTextDetails}>
                        <h4 className={styles.highlightHeadingTitle}>{highlight.title}</h4>
                        <p className={styles.highlightParagraphDesc}>{highlight.subtitle}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </>
          )}

          {activeTab === "Financial" && (
            <motion.div
              className={styles.documentSection}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h3 className={styles.documentTitle}>Financial Information</h3>
              {financialDocuments.map((item) => (
                <motion.button
                  className={styles.documentRow}
                  key={item}
                  variants={enterpriseRevealVariants}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                >
                  <span>{item}</span>
                  <Image
                    src="/icons/Arrow.png"
                    alt="Arrow"
                    width={24}
                    height={24}
                    className={styles.arrowIcon}
                  />
                </motion.button>
              ))}
            </motion.div>
          )}

          {activeTab === "Governance" && (
            <motion.div
              className={styles.documentSection}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h3 className={styles.documentTitle}>Corporate Governance</h3>
              {governanceDocuments.map((item) => (
                <motion.button
                  className={styles.documentRow}
                  key={item}
                  variants={enterpriseRevealVariants}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                >
                  <span>{item}</span>
                  <Image
                    src="/icons/Arrow.png"
                    alt="Arrow"
                    width={24}
                    height={24}
                    className={styles.arrowIcon}
                  />
                </motion.button>
              ))}
            </motion.div>
          )}

          {activeTab === "News" && (
            <motion.div
              className={styles.newsSection}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className={styles.newsHeading}>Latest Announcements</h2>
              {newsItems.map((news, index) => (
                <motion.div
                  className={styles.newsCard}
                  key={index}
                  variants={enterpriseRevealVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <p className={styles.newsDate}>{news.date}</p>
                  <h3 className={styles.newsTitle}>{news.title}</h3>
                  <p className={styles.newsDescription}>{news.description}</p>
                </motion.div>
              ))}
              <motion.button
                className={styles.allAnnouncementsBtn}
                variants={enterpriseRevealVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                All Announcements
              </motion.button>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}