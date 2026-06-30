import LegalPage from "@/components/LegalPage/LegalPage";

export default function PrivacyPolicy() {
  const sidebarNavTree = [
    { id: "data-collection", label: "What Data We Collect" },
    { id: "data-usage", label: "How We Use It" },
    { id: "third-party", label: "Third-Party Sharing" },
    { id: "retention", label: "Data Retention" },
    { id: "gdpr-rights", label: "Your Rights – GDPR" },
    { id: "dpo-contact", label: "Contact the DPO" },
  ];

  return (
    <LegalPage
      title="Privacy Policy"
      description="How Kayana Ltd collects, uses, and protects personal data in connection with the Fiscal platform."
      introParagraph='Kayana Ltd ("Fiscal", "we", "us") is committed to protecting your personal data. This policy describes what we collect, why we collect it, and how you can exercise your rights under UK GDPR and EU GDPR.'
      sidebarItems={sidebarNavTree}
    >
      {/* SECTION 1 */}
      <section id="data-collection">
        <h2>1. What Data We Collect</h2>
        <p>
          We collect only the data necessary to provide the Fiscal platform and meet our legal
          obligations. Data is gathered in three ways: information you provide directly when
          signing up or using the service, data generated automatically as you interact with the
          platform, and information received from trusted third-party integrations you choose to
          connect.
        </p>
        <p>
          <strong>Identity data</strong> — your full name, date of birth, and national insurance
          number, required to verify your identity for regulatory compliance.
        </p>
        <p>
          <strong>Contact data</strong> — email address, phone number, and postal address, used to
          communicate account activity and service updates.
        </p>
        <p>
          <strong>Financial data</strong> — bank account details, invoices, expense receipts, and
          payroll records you upload or connect. Processed under contract to deliver core platform
          features.
        </p>
        <p>
          <strong>Usage data</strong> — page views, feature interactions, and session duration,
          collected automatically to improve the product under legitimate interest.
        </p>
        <p>
          <strong>Device data</strong> — IP address, browser type, and operating system, used for
          security monitoring and fraud prevention.
        </p>
        <p>
          We do not knowingly collect special category data. If you share such information in a
          support message, we handle it under explicit consent and delete it once the query is
          resolved.
        </p>
      </section>

      {/* SECTION 2 */}
      <section id="data-usage">
        <h2>2. How We Use It</h2>
        <p>
          Personal data is used strictly for the purposes disclosed at the time of collection. We do
          not repurpose data without notifying you and, where required by law, obtaining your prior
          consent.
        </p>
        <p>
          <strong>Service delivery</strong> — provisioning accounts, processing transactions,
          generating reports and tax summaries, and sending account notifications.
        </p>
        <p>
          <strong>Legal compliance</strong> — meeting obligations under the Companies Act 2006, HMRC
          Making Tax Digital requirements, and Anti-Money Laundering regulations.
        </p>
        <p>
          <strong>Product improvement</strong> — analysing aggregated usage patterns to prioritise
          features and resolve bugs, using anonymised data wherever possible.
        </p>
        <p>
          <strong>Security</strong> — detecting fraudulent logins, monitoring for platform abuse,
          and maintaining audit logs for up to 12 months.
        </p>
        <p>
          <strong>Communications</strong> — sending transactional emails, product digests (opt-out
          available), and occasional feedback surveys.
        </p>
        <p>
          We do not use your financial data to train machine learning models or sell derived
          insights to third parties. Automated decision-making with significant legal effects is
          not performed on the Fiscal platform.
        </p>
      </section>

      {/* SECTION 3 */}
      <section id="third-party">
        <h2>3. Third-Party Sharing</h2>
        <p>
          We share personal data with third parties only where necessary to operate the service,
          satisfy a legal obligation, or protect our legitimate interests. We never sell personal
          data.
        </p>
        <p>
          <strong>Amazon Web Services (EU-West-2, London)</strong> — all Fiscal data is hosted on
          AWS under a Data Processing Agreement. Data does not leave the UK/EU region.
        </p>
        <p>
          <strong>Stripe Payments Europe Ltd</strong> — handles subscription billing. Stripe is the
          data controller for payment card data and maintains PCI-DSS certification independently.
        </p>
        <p>
          <strong>Postmark (Wildbit LLC)</strong> — delivers transactional and notification emails.
          Data is processed within the EU under a standard contractual clauses agreement.
        </p>
        <p>
          <strong>Sentry (Functional Software, Inc.)</strong> — captures anonymised error traces for
          debugging. PII scrubbing is enabled and EU data residency is configured.
        </p>
        <p>
          <strong>Plausible Analytics</strong> — cookie-free, privacy-first page analytics hosted in
          the EU. No personal identifiers are collected or stored.
        </p>
        <p>
          All sub-processors are contractually bound to process data only on our documented
          instructions, maintain appropriate security controls, and notify us without undue delay
          of any personal data breach.
        </p>
      </section>

      {/* SECTION 4 */}
      <section id="retention">
        <h2>4. Data Retention</h2>
        <p>
          We keep personal data only for as long as necessary to fulfil the purpose it was
          collected for, or as required by applicable law.
        </p>
        <p>
          <strong>Active account data</strong> is retained for the duration of your subscription and
          deleted or anonymised within 30 days of a verified account closure request.
        </p>
        <p>
          <strong>Financial transaction records</strong> are retained for seven years to comply with
          HMRC requirements and UK tax legislation.
        </p>
        <p>
          <strong>Security and audit logs</strong> are held on a rolling 12-month window, with older
          entries deleted automatically.
        </p>
        <p>
          <strong>Support communications</strong> are retained for three years to help resolve
          future disputes and identify recurring issues.
        </p>
        <p>
          <strong>Encrypted backup snapshots</strong> are rotated on a 90-day cycle.
        </p>
        <p>
          You may request early deletion of your data at any time by emailing{" "}
          <a href="mailto:privacy@kayana.co.uk">privacy@kayana.co.uk</a>. Requests are processed
          within 30 days. Note that certain financial records must be retained regardless of a
          deletion request to satisfy statutory obligations.
        </p>
      </section>

      {/* SECTION 5 */}
      <section id="gdpr-rights">
        <h2>5. Your Rights – GDPR</h2>
        <p>
          If you are based in the UK or European Economic Area, you have the following rights under
          UK GDPR and EU GDPR. All rights are free to exercise and we will respond within one
          calendar month (extendable by two months for complex requests, with prior notice).
        </p>
        <p>
          <strong>Right of access</strong> — request a copy of all personal data we hold about you.
        </p>
        <p>
          <strong>Right to rectification</strong> — ask us to correct inaccurate or incomplete
          data.
        </p>
        <p>
          <strong>Right to erasure</strong> — request deletion where there is no overriding legal
          basis to retain it.
        </p>
        <p>
          <strong>Right to restriction</strong> — ask us to pause processing while a complaint is
          investigated.
        </p>
        <p>
          <strong>Right to portability</strong> — receive your data in a structured,
          machine-readable format.
        </p>
        <p>
          <strong>Right to object</strong> — object to processing based on legitimate interest or
          for direct marketing.
        </p>
        <p>
          To exercise any right, email{" "}
          <a href="mailto:dpo@kayana.co.uk">dpo@kayana.co.uk</a> with the subject &quot;Data Subject Request
          – [Right]&quot;. We may ask you to verify your identity first. If you are unsatisfied with
          our response, you may complain to the Information Commissioner&apos;s Office (ICO) in the UK,
          or the supervisory authority in your EU member state.
        </p>
      </section>

      {/* SECTION 6 */}
      <section id="dpo-contact">
        <h2>6. Contact the DPO</h2>
        <p>
          Kayana Ltd has appointed a Data Protection Officer in accordance with Article 37 of UK
          GDPR. The DPO oversees this policy and our compliance with data protection law.
        </p>
        <p>
          <strong>James Hartley, Data Protection Officer</strong>
          <br />
          <a href="mailto:dpo@kayana.co.uk">dpo@kayana.co.uk</a>
          <br />
          Response time: within 3 business days
        </p>
        <p>
          <strong>Registered address</strong>
          <br />
          Kayana Ltd, 1 Canada Square, Level 27, Canary Wharf, London, E14 5AB, United Kingdom
        </p>
      </section>
    </LegalPage>
  );
}