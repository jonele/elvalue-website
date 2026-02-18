"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"

const products = [
  {
    name: "EL-OS",
    tagline: "B2B Portal",
    color: "#8b5cf6",
    tiers: [
      {
        name: "Starter",
        price: "Free",
        description: "For small venues getting started",
        features: [
          "Up to 3 vendors",
          "Basic ordering",
          "Email support",
        ],
      },
      {
        name: "Professional",
        price: "€49",
        period: "/month",
        description: "For growing businesses",
        features: [
          "Unlimited vendors",
          "ERP integration",
          "Fiscal reports",
          "Priority support",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "For multi-location chains",
        features: [
          "Everything in Pro",
          "Custom integrations",
          "Dedicated support",
          "SLA guarantee",
        ],
      },
    ],
  },
  {
    name: "EL-Loyal",
    tagline: "Loyalty Platform",
    color: "#10b981",
    tiers: [
      {
        name: "Starter",
        price: "Free",
        description: "Basic loyalty features",
        features: [
          "Points system",
          "QR redemption",
          "Basic analytics",
        ],
      },
      {
        name: "Growth",
        price: "€39",
        period: "/month",
        description: "Full AI-powered loyalty",
        features: [
          "Ella AI assistant",
          "Personalized offers",
          "Meal plan vouchers",
          "Advanced analytics",
        ],
        popular: true,
      },
      {
        name: "Scale",
        price: "€79",
        period: "/month",
        description: "For high-volume venues",
        features: [
          "Everything in Growth",
          "Multi-location",
          "API access",
          "White-label option",
        ],
      },
    ],
  },
  {
    name: "RSRV",
    tagline: "Reservations",
    color: "#3b82f6",
    tiers: [
      {
        name: "Basic",
        price: "Free",
        description: "Simple booking",
        features: [
          "Online booking widget",
          "Email confirmations",
          "Basic calendar",
        ],
      },
      {
        name: "Standard",
        price: "€29",
        period: "/month",
        description: "Professional reservations",
        features: [
          "WhatsApp notifications",
          "Table management",
          "Waitlist",
          "No-show tracking",
        ],
        popular: true,
      },
      {
        name: "Premium",
        price: "€59",
        period: "/month",
        description: "Full integration",
        features: [
          "Everything in Standard",
          "POS integration",
          "Theo AI assistant",
          "Multi-location",
        ],
      },
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto text-lg">
            Start free, upgrade when you need more. All products work together seamlessly.
          </p>
        </motion.div>
      </section>

      {/* Pricing Tables */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto space-y-20">
          {products.map((product, productIndex) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: productIndex * 0.1 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-1">{product.name}</h2>
                <p style={{ color: product.color }}>{product.tagline}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {product.tiers.map((tier, tierIndex) => (
                  <motion.div
                    key={tier.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: tierIndex * 0.1 }}
                    className={`glass-card p-6 relative ${
                      tier.popular ? "border-2" : ""
                    }`}
                    style={{
                      borderColor: tier.popular ? product.color : undefined,
                    }}
                  >
                    {tier.popular && (
                      <div
                        className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: product.color }}
                      >
                        Most Popular
                      </div>
                    )}

                    <h3 className="text-lg font-semibold text-white mb-1">
                      {tier.name}
                    </h3>
                    <p className="text-[var(--text-subtle)] text-sm mb-4">
                      {tier.description}
                    </p>

                    <div className="mb-6">
                      <span className="text-3xl font-bold text-white">
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className="text-[var(--text-muted)]">
                          {tier.period}
                        </span>
                      )}
                    </div>

                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm"
                        >
                          <Check
                            size={16}
                            style={{ color: product.color }}
                          />
                          <span className="text-[var(--text-muted)]">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className={`w-full py-2 rounded-lg text-center block text-sm font-medium transition-colors ${
                        tier.popular
                          ? "text-white"
                          : "text-[var(--text-muted)] border border-[var(--glass-border)] hover:border-[var(--glass-border-hover)]"
                      }`}
                      style={{
                        backgroundColor: tier.popular ? product.color : undefined,
                      }}
                    >
                      {tier.price === "Free" ? "Get Started" : tier.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bundle CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Want the Full Ecosystem?
            </h2>
            <p className="text-[var(--text-muted)] mb-6 max-w-xl mx-auto">
              Bundle all products together and save. Get EL-OS, EL-Loyal, RSRV, and early access to EL-POS
              at a special price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 rounded-full bg-[var(--accent-primary)] text-white font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
              >
                Contact for Bundle Pricing
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-20 border-t border-[var(--glass-border)] pt-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="font-semibold text-white mb-2">
                Can I start with one product and add more later?
              </h3>
              <p className="text-[var(--text-muted)] text-sm">
                Absolutely! All our products are designed to work independently or together.
                Start with what you need and add more as your business grows.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-semibold text-white mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-[var(--text-muted)] text-sm">
                We accept credit cards via Stripe (for EU customers) and Viva Wallet (for Greek customers).
                Both options include secure, PCI-compliant payment processing.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-semibold text-white mb-2">
                Is there a contract or commitment?
              </h3>
              <p className="text-[var(--text-muted)] text-sm">
                No long-term contracts. All plans are month-to-month and you can cancel anytime.
                Enterprise plans may have custom terms.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-semibold text-white mb-2">
                Do I need technical knowledge to set this up?
              </h3>
              <p className="text-[var(--text-muted)] text-sm">
                Not at all! Our team handles all setup and integration. We'll have you up and running
                in no time, and Ella and Theo are always there to help.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
