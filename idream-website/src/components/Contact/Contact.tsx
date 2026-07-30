"use client";

import { FormEvent, useState } from "react";
import styles from "./Contact.module.css";

const contactInfo = [
  {
    icon: "/icons/office.png",
    title: "Corporate Office",
    details: [
      "IDream Film Infrastructure Company Limited",
      "Mumbai, Maharashtra, India",
    ],
  },
  {
    icon: "/icons/email.png",
    title: "Email",
    details: [
      "General: info@idreamfilm.com",
      "Investor Relations: investors@idreamfilm.com",
    ],
  },
  {
    icon: "/icons/phone.png",
    title: "Phone",
    details: [
      "Main: +91 (22) XXXX XXXX",
      "Investor Relations: +91 (22) XXXX XXXX",
    ],
  },
  {
    icon: "/icons/hours.png",
    title: "Business Hours",
    details: [
      "Monday - Friday: 9:00 AM - 6:00 PM IST",
      "Saturday - Sunday: Closed",
    ],
  },
];

const socialLinks = [
  { label: "LinkedIn", icon: "/icons/linkedin.png" },
  { label: "Twitter", icon: "/icons/twitter.png" },
  { label: "Facebook", icon: "/icons/facebook.png" },
  { label: "YouTube", icon: "/icons/youtube.png" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Validation functions
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    if (!phone) return true; // Optional field, but if provided must be valid
    return /^\+?[0-9\s-]{7,15}$/.test(phone);
  };

  // Prevent non-numeric characters on keypress for phone
  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "+", " "];
    if (!allowedKeys.includes(e.key) && !/^[0-9]$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const subject = (formData.get("subject") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    // Frontend Validations
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    if (phone && !validatePhone(phone)) {
      setErrorMessage("Please enter a valid phone number (digits only).");
      setLoading(false);
      return;
    }

    const data = { name, email, phone, subject, message };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        formElement.reset();

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        const resData = await response.json();
        setErrorMessage(resData.error || "Something went wrong.");
      }
    } catch (err) {
      setErrorMessage("Unable to send request. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.topTag}>CONTACT US</span>
          <h2 className={styles.heading}>Get In Touch</h2>
          <div className={styles.gradientLineTracker}></div>
          <p className={styles.subHeading}>
            We&apos;d love to hear from you. Reach out for partnerships, inquiries, or more information.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left Column: Form Card */}
          <form className={styles.formCard} onSubmit={handleSubmit}>
            <h3 className={styles.formTitle}>Send Us a Message</h3>
            
            <div className={styles.field}>
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+91 98765 43210"
                onKeyDown={handlePhoneKeyDown}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="How can we help you?"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us more about your inquiry..."
                required
              />
            </div>

            {errorMessage && (
              <p style={{ color: "#bd1e1e", margin: "0", fontWeight: "500" }}>
                {errorMessage}
              </p>
            )}

            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? "Sending..." : submitted ? "Message Sent!" : "Send Message"}
            </button>
          </form>

          {/* Right Column: Info Deck */}
          <div className={styles.infoCol}>
            {contactInfo.map((info, idx) => (
              <div key={idx} className={styles.infoCard}>
                <div className={styles.iconContainer}>
                  <img src={info.icon} alt={info.title} className={styles.infoIcon} />
                </div>
                <div className={styles.infoTextWrapper}>
                  <h4 className={styles.infoTitle}>{info.title}</h4>
                  {info.details.map((line, lIdx) => (
                    <p key={lIdx} className={styles.infoDetail}>{line}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social Media Card */}
            <div className={styles.socialCard}>
              <h4 className={styles.socialTitle}>Connect With Us</h4>
              <div className={styles.socialIconsRow}>
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className={styles.socialIconCircle}
                    aria-label={social.label}
                  >
                    <img src={social.icon} alt={social.label} className={styles.innerIcon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}