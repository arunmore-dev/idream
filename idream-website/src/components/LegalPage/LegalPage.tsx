"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./LegalPage.module.css";

interface SidebarItem {
  id: string;
  label: string;
}

interface LegalPageProps {
  title: string;
  description: string;
  introParagraph: string;
  sidebarItems: SidebarItem[];
  children: React.ReactNode;
}

export default function LegalPage({
  title,
  description,
  introParagraph,
  sidebarItems,
  children,
}: LegalPageProps) {
  const [activeSection, setActiveSection] = useState(sidebarItems[0]?.id || "");
  const isClickScrolling = useRef(false);
  const scrollContainerRef = useRef<HTMLUListElement>(null);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      isClickScrolling.current = true;
      setActiveSection(id);
      
      const isMobile = window.innerWidth <= 1200;
      const offset = isMobile ? 120 : 100;
      
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Clear lock after smooth scrolling completes
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 800);
    }
  };

  // Safe horizontal menu tracking without triggering window jumps
  useEffect(() => {
    if (window.innerWidth <= 1200 && scrollContainerRef.current) {
      const activeEl = scrollContainerRef.current.querySelector(`.${styles.navActive}`) as HTMLElement;
      const container = scrollContainerRef.current;

      if (activeEl) {
        const containerWidth = container.offsetWidth;
        const itemLeft = activeEl.offsetLeft;
        const itemWidth = activeEl.offsetWidth;

        // Position active category tab directly in the middle of the overflow menu row
        container.scrollTo({
          left: itemLeft - containerWidth / 2 + itemWidth / 2,
          behavior: "smooth",
        });
      }
    }
  }, [activeSection]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      // Focus box tracking logic targeting upper center screen space
      rootMargin: "-15% 0px -75% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      // Completely skip tracking updates if page is reacting to a user click action
      if (isClickScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sidebarItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sidebarItems]);

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </header>

        <div className={styles.splitBody}>
          <aside className={styles.sidebar}>
            <h3 className={styles.sidebarTitle}>Contents</h3>
            <ul ref={scrollContainerRef} className={styles.navigationList}>
              {sidebarItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleScrollTo(item.id)}
                    className={`${styles.navButton} ${
                      activeSection === item.id ? styles.navActive : styles.navInactive
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <article className={styles.contentSection}>
            <p className={styles.introText}>{introParagraph}</p>
            <div className={styles.richText}>{children}</div>
          </article>
        </div>
      </div>
    </section>
  );
}