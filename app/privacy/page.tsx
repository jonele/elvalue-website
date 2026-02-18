"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const fadeInView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

function Section({
  title,
  children,
  delay = 0,
}: {
  title: string
  children: React.ReactNode
  delay?: number
}) {
  return (
    <motion.div
      {...fadeInView}
      transition={{ duration: 0.5, delay }}
      className="mb-12"
    >
      <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
        {title}
      </h2>
      <div className="text-[var(--text-secondary)] leading-relaxed space-y-4">
        {children}
      </div>
    </motion.div>
  )
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 px-8 md:px-16 text-center">
        <motion.div {...fadeIn}>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            How EL VALUE CYPRUS LTD collects, uses, and protects your data.
          </p>
          <p className="text-white/30 text-sm mt-4">
            Last updated: February 2026
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="px-8 md:px-16 pb-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            {...fadeInView}
            className="glass-card p-8 md:p-12"
          >
            {/* 1. Data Controller */}
            <Section title="1. Data Controller">
              <p>
                The data controller responsible for your personal data is:
              </p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-white font-medium">EL VALUE CYPRUS LTD</p>
                <p>Limassol, Cyprus</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:hi@elvalue.com"
                    className="text-[var(--ella)] hover:underline"
                  >
                    hi@elvalue.com
                  </a>
                </p>
              </div>
            </Section>

            {/* 2. Data We Collect */}
            <Section title="2. Data We Collect" delay={0.05}>
              <p>We collect the following categories of personal data:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <span className="text-white font-medium">Account information</span>{" "}
                  — name, email address, phone number, VAT number
                </li>
                <li>
                  <span className="text-white font-medium">Usage data</span>{" "}
                  — how you interact with our services, features used, pages visited
                </li>
                <li>
                  <span className="text-white font-medium">Device information</span>{" "}
                  — browser type, operating system, IP address, device identifiers
                </li>
                <li>
                  <span className="text-white font-medium">AI conversation data</span>{" "}
                  — messages exchanged with EveY, our AI assistant, to improve service quality
                </li>
              </ul>
            </Section>

            {/* 3. How We Use Data */}
            <Section title="3. How We Use Your Data" delay={0.1}>
              <p>We process your personal data for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <span className="text-white font-medium">Service delivery</span>{" "}
                  — providing, maintaining, and improving our products
                </li>
                <li>
                  <span className="text-white font-medium">Personalization</span>{" "}
                  — tailoring the experience to your preferences and usage patterns
                </li>
                <li>
                  <span className="text-white font-medium">Analytics</span>{" "}
                  — understanding how our services are used to make improvements
                </li>
                <li>
                  <span className="text-white font-medium">Communication</span>{" "}
                  — sending service updates, support responses, and (with consent) marketing
                </li>
                <li>
                  <span className="text-white font-medium">Legal compliance</span>{" "}
                  — fulfilling our legal and regulatory obligations
                </li>
              </ul>
            </Section>

            {/* 4. Legal Basis */}
            <Section title="4. Legal Basis for Processing" delay={0.15}>
              <p>We process your data under the following legal bases as defined by the GDPR:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <span className="text-white font-medium">Contract performance</span>{" "}
                  — processing necessary to deliver the services you have subscribed to
                </li>
                <li>
                  <span className="text-white font-medium">Legitimate interests</span>{" "}
                  — improving our services, preventing fraud, and ensuring security
                </li>
                <li>
                  <span className="text-white font-medium">Consent</span>{" "}
                  — for marketing communications, which you can withdraw at any time
                </li>
              </ul>
            </Section>

            {/* 5. Third-Party Services */}
            <Section title="5. Third-Party Services" delay={0.2}>
              <p>
                We share data with the following trusted third-party providers, each operating
                under their own privacy policies:
              </p>
              <div className="space-y-3 mt-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-white font-medium">Supabase</p>
                  <p className="text-sm">Database hosting and authentication. Data stored on EU servers.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-white font-medium">Stripe</p>
                  <p className="text-sm">Payment processing. PCI DSS Level 1 certified.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-white font-medium">Viva Wallet</p>
                  <p className="text-sm">
                    Payment processing for in-venue transactions.{" "}
                    <a
                      href="https://www.viva.com/el-gr/onboarding?utm_source=partners&utm_medium=isv&utm_campaign=grelvalue01212025&utm_content=aml_soft____&rep=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--ella)] hover:underline"
                    >
                      Learn more
                    </a>
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-white font-medium">Telegram</p>
                  <p className="text-sm">Messaging platform used for EveY AI assistant interactions.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-white font-medium">Vercel</p>
                  <p className="text-sm">Website and application hosting infrastructure.</p>
                </div>
              </div>
            </Section>

            {/* 6. Data Storage */}
            <Section title="6. Data Storage & Security" delay={0.25}>
              <p>
                Your data is stored on servers located within the European Union. We implement
                appropriate technical and organizational measures to protect your personal data,
                including:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Encryption at rest and in transit (TLS 1.2+)</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and authentication requirements</li>
                <li>Secure backup procedures</li>
              </ul>
            </Section>

            {/* 7. Data Retention */}
            <Section title="7. Data Retention" delay={0.3}>
              <p>We retain your personal data for the following periods:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <span className="text-white font-medium">Account data</span>{" "}
                  — for the duration of your active account plus 3 years after closure
                </li>
                <li>
                  <span className="text-white font-medium">Financial records</span>{" "}
                  — 7 years as required by applicable tax and accounting regulations
                </li>
                <li>
                  <span className="text-white font-medium">AI conversation data</span>{" "}
                  — retained for service improvement and deleted upon account closure
                </li>
              </ul>
            </Section>

            {/* 8. Your Rights */}
            <Section title="8. Your Rights Under GDPR" delay={0.35}>
              <p>
                As a data subject, you have the following rights under the General Data Protection
                Regulation (GDPR):
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <span className="text-white font-medium">Right of access</span>{" "}
                  — obtain a copy of your personal data
                </li>
                <li>
                  <span className="text-white font-medium">Right to rectification</span>{" "}
                  — correct inaccurate or incomplete data
                </li>
                <li>
                  <span className="text-white font-medium">Right to erasure</span>{" "}
                  — request deletion of your personal data
                </li>
                <li>
                  <span className="text-white font-medium">Right to data portability</span>{" "}
                  — receive your data in a structured, machine-readable format
                </li>
                <li>
                  <span className="text-white font-medium">Right to restriction</span>{" "}
                  — restrict the processing of your data
                </li>
                <li>
                  <span className="text-white font-medium">Right to object</span>{" "}
                  — object to processing based on legitimate interests
                </li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{" "}
                <a
                  href="mailto:hi@elvalue.com"
                  className="text-[var(--ella)] hover:underline"
                >
                  hi@elvalue.com
                </a>
                . We will respond within 30 days.
              </p>
            </Section>

            {/* 9. Cookies */}
            <Section title="9. Cookies" delay={0.4}>
              <p>
                We use minimal, functional cookies only. These are essential for the operation
                of our services (e.g., session management, authentication). We do not use
                tracking cookies, advertising cookies, or third-party analytics cookies.
              </p>
            </Section>

            {/* 10. Children */}
            <Section title="10. Children's Privacy" delay={0.45}>
              <p>
                Our services are not directed to individuals under the age of 16. We do not
                knowingly collect personal data from children. If we become aware that we have
                collected data from a child under 16, we will take steps to delete such
                information promptly.
              </p>
            </Section>

            {/* 11. Changes */}
            <Section title="11. Changes to This Policy" delay={0.5}>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our
                practices or applicable laws. We will notify you of any material changes by
                posting the updated policy on this page with a revised &quot;Last updated&quot;
                date. We encourage you to review this page periodically.
              </p>
            </Section>

            {/* 12. Contact */}
            <Section title="12. Contact Us" delay={0.55}>
              <p>
                If you have any questions about this Privacy Policy or our data practices,
                please contact us:
              </p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-white font-medium">EL VALUE CYPRUS LTD</p>
                <p>Limassol, Cyprus</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:hi@elvalue.com"
                    className="text-[var(--ella)] hover:underline"
                  >
                    hi@elvalue.com
                  </a>
                </p>
              </div>
              <p className="text-sm text-[var(--text-muted)] mt-4">
                You also have the right to lodge a complaint with the Office of the Commissioner
                for Personal Data Protection in Cyprus or the relevant supervisory authority in
                your country of residence.
              </p>
            </Section>

            {/* Footer Links */}
            <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
              <p>EL VALUE CYPRUS LTD</p>
              <div className="flex gap-6">
                <Link
                  href="/terms"
                  className="text-[var(--ella)] hover:underline"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/contact"
                  className="text-[var(--ella)] hover:underline"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
