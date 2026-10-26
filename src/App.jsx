import { BrowserRouter, Link, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

const termsSections = [
  {
    title: '1. Introduction and Acceptance of Terms',
    text: 'Welcome to Om Maruti Mart. These Terms & Conditions govern purchases and customer interactions at our physical retail store. By purchasing products or using our services, you agree to these terms, subject to applicable Indian laws and consumer protection rights.'
  },
  {
    title: '2. Products and Availability',
    text: 'Om Maruti Mart offers a range of products, including groceries, household essentials, personal care items, and other retail goods. Product availability may vary depending on stock and store location. Product packaging, descriptions, and images, where displayed, are for general reference. We reserve the right to update product selections and availability.'
  },
  {
    title: '3. Product Prices and Offers',
    text: 'Product prices, discounts, and promotional offers are displayed in the store or communicated through authorized promotional materials. Prices and offers may change from time to time. Promotional offers are subject to their stated terms, validity periods, and product availability. Any applicable taxes will be handled in accordance with Indian law.'
  },
  {
    title: '4. Billing and Payments',
    text: 'Customers are responsible for checking their bills at the time of purchase and bringing any billing discrepancies to the attention of store staff. Payments may be made using the payment methods accepted by Om Maruti Mart, as displayed at the store. Payment processing may be handled by third-party banks or payment service providers where applicable.'
  },
  {
    title: '5. Returns, Exchanges, and Refunds',
    text: 'Returns, exchanges, and refunds are subject to the applicable store return policy, product category, proof of purchase, and relevant legal requirements. Certain products may be subject to specific return conditions for hygiene, safety, perishability, or other legitimate reasons. Nothing in this policy limits any mandatory rights available to consumers under applicable law. Please contact store staff for the current return and refund policy.'
  },
  {
    title: '6. Damaged, Defective, or Incorrect Products',
    text: 'If you purchase a damaged, defective, expired, or incorrect product, please contact our store staff and provide the bill or other relevant purchase details where available. We will review the issue and provide an appropriate resolution in accordance with our applicable policies and consumer protection laws.'
  },
  {
    title: '7. Customer Responsibilities',
    text: 'Customers are expected to behave respectfully toward staff and other customers, follow store rules, and use store facilities responsibly. Theft, fraud, harassment, deliberate damage to property, or other unlawful conduct may result in appropriate action under applicable law.'
  },
  {
    title: '8. Store Safety and Security',
    text: 'Customers must follow reasonable safety instructions displayed within the store. Where security cameras or other security measures are used, they are intended to support the safety of customers, employees, and store property, subject to applicable laws and the store’s Privacy Policy.'
  },
  {
    title: '9. Promotional Offers and Loyalty Programs',
    text: 'If Om Maruti Mart offers promotional schemes, membership benefits, coupons, or loyalty programs, participation will be subject to the specific terms communicated for those programs. Offers cannot be assumed to be available on every product or at all times.'
  },
  {
    title: '10. Limitation of Liability',
    text: 'Om Maruti Mart will address customer concerns in accordance with applicable law. Nothing in these Terms excludes or limits liability or consumer rights that cannot legally be excluded or limited under Indian law.'
  },
  {
    title: '11. Changes to These Terms',
    text: 'Om Maruti Mart may update these Terms & Conditions when necessary to reflect changes in store operations, policies, or applicable laws. Updated terms will be made available through appropriate store notices or other relevant communication channels.'
  },
  {
    title: '12. Governing Law',
    text: 'These Terms & Conditions are governed by the laws of India. Any dispute will be handled by the competent authorities or courts having jurisdiction, subject to applicable consumer protection laws.'
  },
  {
    title: '13. Contact and Customer Complaints',
    text: 'For questions, billing issues, product concerns, or complaints, please contact Om Maruti Mart at Etapalli,chhattisgarh ; CUSTOMER SUPPORT : 827578839 ; or CUSTOMER SUPPORT EMAIL : adityarajkondawar9@gmail.com. If applicable, grievance contact details will be provided in accordance with legal requirements.'
  },
  {
    title: '14. Account Deletion',
    text: 'Users may delete their accounts at any time through the available account settings or by contacting our support team. Certain information may be retained where required by applicable law, as described in our Privacy Policy.'
  }
];

const privacySections = [
  {
    title: '1. Introduction',
    text: 'Om Maruti Mart respects customer privacy and is committed to handling personal information responsibly. This Privacy Policy explains how personal information may be collected, used, stored, and shared in connection with visits to our physical retail store and related customer services, in accordance with applicable Indian laws.'
  },
  {
    title: '2. Information We May Collect',
    text: 'Depending on your interaction with Om Maruti Mart, we may collect information such as your name, contact details, billing information, and transaction records where required for a purchase, invoice, customer complaint, or other legitimate business purpose. The information collected depends on the services used and the applicable legal requirements.'
  },
  {
    title: '3. Billing and Transaction Information',
    text: 'We may maintain bills, invoices, purchase details, and transaction records for billing, accounting, tax compliance, returns, refunds, and dispute resolution. Where digital payments are accepted, relevant transaction details may be processed by the applicable bank or payment service provider. The handling of payment credentials depends on the payment method and provider used.'
  },
  {
    title: '4. CCTV and Store Security',
    text: 'If CCTV cameras are installed at our premises, recordings may be used for customer and staff safety, security, incident investigation, and protection of store property. Access to recordings will be restricted as appropriate and handled in accordance with applicable law. CCTV-related practices should be confirmed against the actual security arrangements at the store.'
  },
  {
    title: '5. How We Use Personal Information',
    text: 'Where personal information is collected, it may be used to process transactions, issue invoices, respond to customer queries, handle returns or complaints, maintain business records, protect store security, and comply with legal obligations. We will not describe a purpose as an actual practice unless it applies to our operations.'
  },
  {
    title: '6. Sharing of Information',
    text: 'Personal information may be shared with relevant service providers, banks, payment processors, professional advisers, or government authorities where necessary for an applicable business purpose or legal obligation. Information will be disclosed where required or permitted by applicable law. The actual recipients depend on the services and systems used by Om Maruti Mart.'
  },
  {
    title: '7. Data Storage and Security',
    text: 'Om Maruti Mart takes reasonable steps, appropriate to its operations, to protect personal information against unauthorized access, disclosure, or misuse. Information may be maintained in physical records or digital systems, depending on the relevant business process. No method of storing or transmitting information can be guaranteed to be completely secure.'
  },
  {
    title: '8. Data Retention',
    text: 'Personal information and business records will be retained for as long as necessary for the relevant business purpose or as required or permitted by applicable law, including accounting, taxation, dispute resolution, and other lawful record-keeping requirements.'
  },
  {
    title: '9. Customer Privacy Rights',
    text: 'Customers may contact Om Maruti Mart to ask questions about their personal information or submit requests available to them under applicable law. We may need to verify the identity of the person making a request before responding. Certain information may need to be retained where required by law.'
  },
  {
    title: '10. Third-Party Services',
    text: 'Certain services used in our operations, such as digital payment systems or business software, may be provided by third parties. Those providers may process information in accordance with their own applicable terms and privacy notices. Customers should review the relevant notices when using those services.'
  },
  {
    title: '11. Changes to This Privacy Policy',
    text: 'Om Maruti Mart may update this Privacy Policy to reflect changes in business operations or applicable laws. The latest version and its effective date will be made available through the appropriate communication channel.'
  },
  {
    title: '12. Contact Information',
    text: 'For privacy-related questions or requests, please contact Om Maruti Mart at Etapalli,chhattisgarh ; CUSTOMER SUPPORT : 827578839 ; or CUSTOMER SUPPORT EMAIL : adityarajkondawar9@gmail.com . Any required grievance officer or designated privacy contact details should be added here where applicable.'
  }
];

function PageShell({ pageTitle, subtitle, children }) {
  return (
    <div className="legal-page">
      <header className="page-hero">
        <p className="eyebrow">Legal Information</p>
        <h1>{pageTitle}</h1>
        <p className="page-subtitle">{subtitle}</p>
        <div className="page-meta">
          {/* <span>Effective date: [Insert date]</span>
          <span>Last updated: [Insert date]</span> */}
        </div>
      </header>
      {children}
    </div>
  )
}

function SectionBlock({ title, text }) {
  return (
    <section className="legal-section">
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  )
}

function TermsPage() {
  return (
    <PageShell
      pageTitle="Terms & Conditions"
      subtitle="Please review the terms that apply to purchases, billing, product returns, and customer interactions at Om Maruti Mart."
    >
      <div className="content-grid">
        <div className="page-content">
          {termsSections.map((section) => (
            <SectionBlock key={section.title} title={section.title} text={section.text} />
          ))}
        </div>
      </div>
    </PageShell>
  )
}

function PrivacyPage() {
  return (
    <PageShell
      pageTitle="Privacy Policy"
      subtitle="Learn how Om Maruti Mart handles customer information in connection with store visits, purchases, billing, and customer support."
    >
      <div className="content-grid">
        <div className="page-content">
          {privacySections.map((section) => (
            <SectionBlock key={section.title} title={section.title} text={section.text} />
          ))}
        </div>
      </div>
    </PageShell>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="topbar">
          <div className="brand-block">
            <img className="brand-logo" src="/store-logo.jpg" alt="Maruti Mart" />
          </div>
          <nav className="main-nav" aria-label="Main navigation">
            <NavLink to="/terms-and-conditions">Terms & Conditions</NavLink>
            <NavLink to="/privacy-policy">Privacy Policy</NavLink>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/terms-and-conditions" replace />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
          </Routes>
        </main>

        <footer className="site-footer">
          <div>
             <strong>Om Maruti Mart</strong>
            <span>Customer support: adityarajkondawar9@gmail.com | 827578839</span>
          </div>
          <div className="footer-links">
            <Link to="/terms-and-conditions">Terms</Link>
            <Link to="/privacy-policy">Privacy</Link>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
