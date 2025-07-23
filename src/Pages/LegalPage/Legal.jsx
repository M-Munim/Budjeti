import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Legal = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Smooth scroll
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Scroll to top if no hash
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);
  return (
    <section className="py-10 lg:py20 px-6 " id="privacy-policy">
      <div className="w-9/12 mx-auto text-gray-800">
        {/* <h1 className="text-[24px] md:text-[48px] font-bold mb-4 lg:mb-12 text-center text-gray-900">
          Legal Information
        </h1> */}

        <div className="mb-4 lg:mb-12 mt-10">
          <h2 className="text-[18px] lg:text-[28px] font-semibold mb-2 lg:mb-4 text-gray-900">
            Privacy Policy
          </h2>

          <p className="text-[17px] mb-4">
            At Budjeti, we value your privacy and are committed to protecting your personal and business information. This Privacy Policy outlines how we collect, use, store, and share your data when you use our platform and services.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Information We Collect</h3>
          <p className="text-[17px] mb-4">
            We collect personal details such as your name, email, phone number, and company information when you register. Additionally, we collect financial data like transaction history and wallet usage, along with technical data such as browser type, IP address, and usage logs.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">2. How We Use Your Information</h3>
          <p className="text-[17px] mb-4">
            Your information is used to manage your account, process payments, provide customer support, analyze platform usage, and enhance user experience through AI-driven insights. We may also send you service updates and marketing communications, which you can opt out of at any time.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Sharing of Data</h3>
          <p className="text-[17px] mb-4">
            We do not sell your data. It may be shared with trusted service providers like KYC verification services, cloud hosting platforms, and payment processors under strict confidentiality agreements. We may also share data when legally required.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Data Security</h3>
          <p className="text-[17px] mb-4">
            We implement strong security measures including encryption of data in transit and at rest, secure server infrastructure, strict access control, and regular third-party audits. Only authorized personnel can access your information.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Your Rights</h3>
          <p className="text-[17px] mb-4">
            You have the right to access, update, or delete your data at any time. You may also unsubscribe from marketing communications using the links provided in our emails. To exercise your rights or raise concerns, contact us at <span className="text-blue-700 underline">support@budjeti.com</span>.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">6. Data Retention</h3>
          <p className="text-[17px] mb-4">
            We retain your personal and transactional data only as long as necessary to meet legal, regulatory, and operational requirements.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">7. International Data Transfers</h3>
          <p className="text-[17px] mb-4">
            If your data is transferred outside the UK/EU, we ensure that appropriate safeguards are in place to protect your information.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">8. Cookies</h3>
          <p className="text-[17px] mb-4">
            We use cookies to enhance your browsing experience, track site performance, and personalize content. You can manage cookie settings through your browser preferences.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">9. Policy Updates</h3>
          <p className="text-[17px] mb-4">
            This policy may be updated periodically. Any significant changes will be communicated via email or notices within the platform.
          </p>

          <p className="text-[17px] mb-2">
            <strong>Effective Date:</strong> June 2025
          </p>
          <p className="text-[17px]">
            <strong>Contact Us:</strong> If you have any questions about this Privacy Policy, please email us at <span className="text-blue-700 underline">support@budjeti.com</span>.
          </p>
        </div>
        <div className="mb-12 scroll-mt-24" id="terms-of-service">
          <h2 className="text-[18px] lg:text-[28px] font-semibold mb-2 lg:mb-4 text-gray-900">
            Terms of Service
          </h2>

          <p className="text-[17px] mb-4">
            These Terms of Service (“Terms”) govern your access to and use of Budjeti’s platform, including our website, app, digital wallet, and related services. By registering an account or using any part of the Budjeti platform, you agree to be bound by these Terms.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Account Registration & Eligibility</h3>
          <p className="text-[17px] mb-4">
            You must be at least 18 years old and authorized to act on behalf of a registered business. You agree to provide accurate, complete, and updated information during registration and to keep your credentials secure.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Wallet Usage</h3>
          <p className="text-[17px] mb-4">
            Budjeti provides a virtual wallet for business transactions. You can top up funds, issue prepaid cards, send/receive payments, and view transaction history. Wallet balances are held in safeguarded accounts in compliance with financial regulations. You are responsible for all activity under your wallet account, including transactions by authorized team members.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Fees & Billing</h3>
          <p className="text-[17px] mb-4">
            Budjeti may charge service fees for certain features or account tiers, disclosed transparently in your pricing plan. Transaction fees, card issuance fees, and payout processing costs (if applicable) will be displayed prior to confirmation.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Acceptable Use</h3>
          <p className="text-[17px] mb-4">
            You agree not to use the platform for illegal or unauthorized purposes, including money laundering, terrorist financing, or fraud. Budjeti reserves the right to suspend or terminate accounts engaged in suspicious or prohibited activities.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Dispute Policy</h3>
          <p className="text-[17px] mb-4">
            If you believe a transaction is incorrect or unauthorized, notify us within 14 days of the transaction date. We will investigate disputes promptly and may request supporting documentation. Our decision will be communicated clearly in writing. Chargebacks initiated outside our platform may result in service suspension.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">6. Platform Availability & Service Limitations</h3>
          <p className="text-[17px] mb-4">
            We strive for 24/7 uptime but may schedule maintenance or experience outages. Budjeti is not liable for losses due to system downtime, external service provider issues, or internet disruptions.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">7. Data Use & Privacy</h3>
          <p className="text-[17px] mb-4">
            Your data is governed by our Privacy Policy. You grant us permission to process and store data as necessary to deliver our services.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">8. Termination</h3>
          <p className="text-[17px] mb-4">
            You may close your account at any time. We reserve the right to terminate accounts that violate our Terms or applicable laws.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">9. Changes to These Terms</h3>
          <p className="text-[17px] mb-4">
            Budjeti may update these Terms periodically. We will notify users of material changes.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">10. Governing Law</h3>
          <p className="text-[17px] mb-4">
            These Terms are governed by the laws of Ireland.
          </p>

          <p className="text-[17px]">
            <strong>Contact Us:</strong> If you have questions about these Terms, contact <span className="text-blue-700 underline">legal@budjeti.com</span>.
          </p>
        </div>


        <div>
          <h2 className="text-[18px] lg:text-[28px] font-semibold mb-2 lg:mb-4 text-gray-900">Cookie Policy</h2>
          <p className="text-[17px]">
            We use cookies to enhance your browsing experience, analyze traffic, and serve targeted ads. By continuing to use our website, you consent to the use of cookies in accordance with our policy. Transparent tracking and consent options are provided in your browser or via cookie pop-ups on our site.
          </p>
        </div>
        <div className="mt-4 text-center border-t pt-2 text-gray-500 text-sm">
          Built with integrity. Powered by technology. Trusted by businesses.
        </div>
      </div>
    </section>
  )
}

export default Legal
