"use client"

import { motion } from "framer-motion"
import { MapPin, Building, Target } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
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
            About <span className="gradient-text">EL VALUE</span>
          </h1>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto text-lg">
            We're building the future of hospitality technology from Cyprus,
            serving restaurants, cafes, and venues across Europe.
          </p>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary)]/20 flex items-center justify-center">
                <Target className="w-6 h-6 text-[var(--accent-primary)]" />
              </div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-[var(--text-muted)] text-lg leading-relaxed">
              To empower hospitality businesses with intelligent, connected technology
              that just works. We believe that restaurant owners should focus on what
              they do best — creating amazing experiences — while our AI handles the rest.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Info */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-secondary)]/20 flex items-center justify-center">
                <Building className="w-5 h-5 text-[var(--accent-secondary)]" />
              </div>
              <h3 className="text-lg font-semibold">Company</h3>
            </div>
            <p className="text-white font-medium">EL VALUE CYPRUS LTD</p>
            <p className="text-[var(--text-muted)] text-sm mt-1">
              Registered in Cyprus
            </p>
            <a
              href="https://efiling.drcor.mcit.gov.cy/DrcorPublic/SearchResults.aspx?name=el+value+ltd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent-secondary)] text-sm mt-2 inline-block hover:underline"
            >
              View Company Registry →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-tertiary)]/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[var(--accent-tertiary)]" />
              </div>
              <h3 className="text-lg font-semibold">Location</h3>
            </div>
            <p className="text-white font-medium">Limassol, Cyprus</p>
            <p className="text-[var(--text-muted)] text-sm mt-1">
              Operations across Greece & EU
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Team */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our AI Team</h2>
            <p className="text-[var(--text-muted)]">
              The intelligent assistants that power the EL VALUE experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Ella */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 glow-ella"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--ella)] to-emerald-700 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/ella_avatar.png"
                    alt="Ella"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Ella</h3>
                  <p className="text-[var(--ella)]">Customer AI</p>
                </div>
              </div>
              <p className="text-[var(--text-muted)] mb-4">
                Ella is your customers' personal concierge. She remembers their preferences,
                suggests dishes they'll love, and creates personalized offers that keep them coming back.
              </p>
              <div className="text-sm text-[var(--text-subtle)]">
                <p>Powered by: Local LLM (Meltemi + Llama)</p>
                <p>Available in: EL-Loyal</p>
              </div>
            </motion.div>

            {/* Theo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 glow-theo"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--theo)] to-blue-700 flex items-center justify-center">
                  {/* TODO: Replace with real Theo avatar when created */}
                  <span className="text-3xl">🙋‍♂️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Theo</h3>
                  <p className="text-[var(--theo)]">Operations AI</p>
                </div>
              </div>
              <p className="text-[var(--text-muted)] mb-4">
                Theo is your staff's right hand. He optimizes table assignments,
                coordinates between front-of-house and kitchen, and ensures smooth operations.
              </p>
              <div className="text-sm text-[var(--text-subtle)]">
                <p>Powered by: Local LLM (Meltemi + Llama)</p>
                <p>Available in: RSRV, EL-POS</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 pb-20 border-t border-[var(--glass-border)] pt-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">What We Believe</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 text-center"
            >
              <h3 className="font-semibold text-white mb-2">Offline First</h3>
              <p className="text-[var(--text-muted)] text-sm">
                Your business shouldn't stop when the internet does. Our hybrid architecture ensures you never lose a sale.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6 text-center"
            >
              <h3 className="font-semibold text-white mb-2">AI That Helps</h3>
              <p className="text-[var(--text-muted)] text-sm">
                Not AI for the sake of AI. Our assistants solve real problems and create real value for you and your customers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 text-center"
            >
              <h3 className="font-semibold text-white mb-2">Real Value</h3>
              <p className="text-[var(--text-muted)] text-sm">
                We charge for value delivered, not for data sync. Our products make you money, not just cost you money.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
