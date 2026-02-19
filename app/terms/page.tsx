"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: `By accessing or using any services provided by EL VALUE CYPRUS LTD ("Company", "we", "us", or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not access or use our services. We reserve the right to update these Terms at any time. Continued use of our services following any changes constitutes acceptance of those changes.`,
  },
  {
    id: "services",
    title: "2. Services",
    content: `EL VALUE CYPRUS LTD provides a suite of hospitality technology products and services, including but not limited to:`,
    list: [
      "EL-Loyal — A loyalty and customer engagement platform with AI-powered personalization",
      "RSRV — A reservation and table management system",
      "EL-OS — A B2B procurement and supplier portal for hospitality businesses",
      "EL-POS — A point-of-sale system with kitchen display and cashier functionality",
      "EvE — An AI personal assistant for hospitality business owners and managers",
    ],
    after:
      "We reserve the right to modify, suspend, or discontinue any part of our services at any time, with reasonable notice where practicable. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of services.",
  },
  {
    id: "registration",
    title: "3. Account Registration",
    content: `To access certain features of our services, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account or any other breach of security. We reserve the right to suspend or terminate accounts that contain inaccurate information or that violate these Terms.`,
  },
  {
    id: "payment",
    title: "4. Payment Terms",
    content: `Certain services require payment of fees. All fees are quoted in Euros (EUR) unless otherwise stated. Payments are processed securely through our authorized payment processors:`,
    list: [
      "Stripe — For international and EU-based card payments",
      "Viva Wallet — For customers in Greece and select European markets",
    ],
    after: `You agree to pay all applicable fees in accordance with the pricing and payment terms presented to you at the time of purchase. All fees are non-refundable unless otherwise stated or required by applicable law. We reserve the right to change our pricing with 30 days' notice. If you are a business accepting payments through our platform, you may need a Viva Wallet merchant account.`,
    vivaLink: true,
  },
  {
    id: "ip",
    title: "5. Intellectual Property",
    content: `All content, features, and functionality of our services — including but not limited to text, graphics, logos, icons, images, audio clips, software, and the compilation thereof — are the exclusive property of EL VALUE CYPRUS LTD or its licensors and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the materials on our services without our prior written consent.`,
  },
  {
    id: "liability",
    title: "6. Limitation of Liability",
    content: `To the maximum extent permitted by applicable law, EL VALUE CYPRUS LTD and its directors, employees, partners, agents, suppliers, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation loss of profits, data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the services; (b) any conduct or content of any third party on the services; (c) any content obtained from the services; or (d) unauthorized access, use, or alteration of your transmissions or content. In no event shall our total aggregate liability exceed the amount you have paid us in the twelve (12) months preceding the claim.`,
  },
  {
    id: "termination",
    title: "7. Termination",
    content: `Either party may terminate these Terms at any time. You may terminate your account by contacting us at hi@elvalue.com. We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms. Upon termination, your right to use the services will cease immediately. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability. We will make commercially reasonable efforts to allow you to export your data prior to termination.`,
  },
  {
    id: "data",
    title: "8. Data Protection",
    content: `We are committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR) and applicable data protection laws of the Republic of Cyprus and the European Union. We collect, process, and store personal data only as necessary to provide our services, and we implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk. For detailed information about how we collect, use, and protect your personal data, please refer to our Privacy Policy.`,
    privacyLink: true,
  },
  {
    id: "law",
    title: "9. Governing Law",
    content: `These Terms shall be governed by and construed in accordance with the laws of the Republic of Cyprus, without regard to its conflict of law provisions. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Limassol, Republic of Cyprus. Notwithstanding the foregoing, we reserve the right to seek injunctive or other equitable relief in any court of competent jurisdiction.`,
  },
  {
    id: "contact",
    title: "10. Contact",
    content: `If you have any questions about these Terms of Service, please contact us:`,
    contactInfo: true,
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto text-lg">
            Please read these terms carefully before using our services.
          </p>
          <p className="text-[var(--text-subtle)] mt-4 text-sm">
            Last updated: February 2026
          </p>
        </motion.div>
      </section>

      {/* Terms Content */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-card p-8"
              id={section.id}
            >
              <h2 className="text-xl font-semibold text-white mb-4">
                {section.title}
              </h2>

              <p className="text-[var(--text-secondary)] leading-relaxed">
                {section.content}
              </p>

              {section.list && (
                <ul className="mt-4 space-y-2">
                  {section.list.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[var(--text-muted)]"
                    >
                      <span className="text-[var(--ella)] mt-1.5 text-xs">&#9679;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.after && (
                <p className="text-[var(--text-secondary)] leading-relaxed mt-4">
                  {section.after}
                </p>
              )}

              {section.vivaLink && (
                <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-[var(--text-muted)] text-sm mb-2">
                    Need a Viva Wallet merchant account for payment processing?
                  </p>
                  <a
                    href="https://www.viva.com/el-gr/onboarding?utm_source=partners&utm_medium=isv&utm_campaign=grelvalue01212025&utm_content=aml_soft____&rep=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--ella)] text-sm font-medium hover:underline"
                  >
                    Open a Viva Account &rarr;
                  </a>
                </div>
              )}

              {section.privacyLink && (
                <div className="mt-4">
                  <Link
                    href="/privacy"
                    className="text-[var(--ella)] text-sm font-medium hover:underline"
                  >
                    Read our Privacy Policy &rarr;
                  </Link>
                </div>
              )}

              {section.contactInfo && (
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-3 text-[var(--text-muted)]">
                    <span className="text-[var(--ella)]">Company:</span>
                    <span>EL VALUE CYPRUS LTD</span>
                  </div>
                  <div className="flex items-center gap-3 text-[var(--text-muted)]">
                    <span className="text-[var(--ella)]">Location:</span>
                    <span>Limassol, Cyprus</span>
                  </div>
                  <div className="flex items-center gap-3 text-[var(--text-muted)]">
                    <span className="text-[var(--ella)]">Email:</span>
                    <a
                      href="mailto:hi@elvalue.com"
                      className="hover:text-white transition-colors"
                    >
                      hi@elvalue.com
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          ))}

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center pt-8"
          >
            <div className="divider mb-8" />
            <p className="text-[var(--text-subtle)] text-sm">
              EL VALUE CYPRUS LTD &middot; Limassol, Cyprus &middot; All rights reserved &copy; 2026
            </p>
            <div className="flex justify-center gap-6 mt-4">
              <Link
                href="/privacy"
                className="text-[var(--text-muted)] text-sm hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/contact"
                className="text-[var(--text-muted)] text-sm hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
