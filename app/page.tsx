"use client"

import { Hero } from "@/components/Hero"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  ArrowUpRight,
  Star,
  MessageCircle,
  Trophy,
  Globe,
  Calendar,
  LayoutGrid,
  Smartphone,
  BarChart3,
  Package,
  Users,
  Layers,
  FileText,
  Brain,
  Bell,
  Newspaper,
  Sparkles,
  Heart,
  Zap,
  ExternalLink,
} from "lucide-react"

const VIVA_URL =
  "https://www.viva.com/el-gr/onboarding?utm_source=partners&utm_medium=isv&utm_campaign=grelvalue01212025&utm_content=aml_soft____&rep=true"

// Simple fade-in animation
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
}

// Feature mini-card component
function FeatureCard({
  icon: Icon,
  title,
  desc,
  color,
}: {
  icon: React.ElementType
  title: string
  desc: string
  color: string
}) {
  const colorMap: Record<string, { icon: string; border: string }> = {
    emerald: { icon: "text-emerald-400", border: "border-emerald-500/10" },
    blue: { icon: "text-blue-400", border: "border-blue-500/10" },
    violet: { icon: "text-violet-400", border: "border-violet-500/10" },
  }
  const c = colorMap[color] || colorMap.emerald

  return (
    <div className={`p-4 rounded-xl bg-white/5 border border-white/10 ${c.border} hover:bg-white/[0.07] transition-colors`}>
      <Icon className={`w-5 h-5 ${c.icon} mb-2`} />
      <p className="text-white text-sm font-medium mb-1">{title}</p>
      <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* Meet Our AI Section - Ella & Theo */}
      <section className="py-32 md:py-40 px-8 md:px-16 lg:px-24 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-20">
            <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-4">
              Meet Our AI Team
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
              Intelligence That Works For You
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Two AI assistants, each specialized for different aspects of your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Ella */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 md:p-10 rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-emerald-500/30">
                  <Image
                    src="/images/ella_avatar.png"
                    alt="Ella"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Ella</h3>
                  <p className="text-emerald-400 text-sm">Customer Experience AI</p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                Your customers&apos; personal concierge. Ella remembers preferences,
                suggests personalized offers, handles loyalty rewards, and provides
                24/7 support in Greek, English, and Arabic.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs">EL-Loyal</span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs">RSRV</span>
              </div>
            </motion.div>

            {/* Theo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 md:p-10 rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-blue-500/30">
                  <Image
                    src="/images/theo_avatar_v2.jpg"
                    alt="Theo"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Theo</h3>
                  <p className="text-blue-400 text-sm">Operations AI</p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                Intelligence for managers and owners. Theo handles analytics,
                forecasting, inventory insights, and B2B operations. Your data,
                transformed into actionable decisions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs">EL-OS</span>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs">EL-POS</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EL-Loyal */}
      <section className="py-32 md:py-40 px-8 md:px-16 lg:px-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div {...fadeIn}>
              <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-4">
                EL-Loyal
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                Loyalty That Actually Works
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Forget punch cards. EL-Loyal gamifies the customer experience with
                points, tiers, challenges, and rewards. Ella makes every customer
                feel like a VIP.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-2xl font-bold text-emerald-400">47%</p>
                  <p className="text-white/50 text-sm">Higher return rate</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-2xl font-bold text-emerald-400">+€12</p>
                  <p className="text-white/50 text-sm">Avg. ticket increase</p>
                </div>
              </div>
              <Link
                href="https://el-loyal.com"
                target="_blank"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              >
                Visit EL-Loyal
                <ArrowUpRight size={18} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-3">
                <FeatureCard icon={Star} title="Points & Tiers" desc="Reward loyal customers with levels and exclusive perks" color="emerald" />
                <FeatureCard icon={MessageCircle} title="AI Concierge" desc="Ella greets, recommends, and handles rewards automatically" color="emerald" />
                <FeatureCard icon={Trophy} title="Gamified Challenges" desc="Weekly challenges that drive repeat visits and engagement" color="emerald" />
                <FeatureCard icon={Globe} title="Multi-language" desc="Full support in Greek, English, and Arabic" color="emerald" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RSRV */}
      <section className="py-32 md:py-40 px-8 md:px-16 lg:px-24 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-3">
                <FeatureCard icon={Calendar} title="Online Booking" desc="Embeddable widget for your website and social media" color="blue" />
                <FeatureCard icon={LayoutGrid} title="Table Management" desc="Real-time floor plan with smart seat optimization" color="blue" />
                <FeatureCard icon={Smartphone} title="WhatsApp Alerts" desc="Automatic confirmations and reminders via WhatsApp" color="blue" />
                <FeatureCard icon={BarChart3} title="No-show Analytics" desc="Track patterns and reduce cancellations with data" color="blue" />
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="order-1 lg:order-2">
              <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">
                RSRV
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                Reservations, Reimagined
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Manage your tables like a seasoned maitre d&apos;. Real-time availability,
                smart overbooking prevention, WhatsApp confirmations, and seamless
                guest communication.
              </p>
              <ul className="space-y-3 mb-8">
                {["Online booking widget", "Table management", "WhatsApp & SMS notifications", "No-show tracking"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="https://el-rsrv.com"
                target="_blank"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Visit RSRV
                <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EL-OS */}
      <section className="py-32 md:py-40 px-8 md:px-16 lg:px-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div {...fadeIn}>
              <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-4">
                EL-OS
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                Your B2B Command Center
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Wholesale ordering, vendor management, ERP integration, and fiscal
                reports. Everything backend, unified in one intelligent dashboard.
              </p>
              <ul className="space-y-3 mb-8">
                {["Vendor & supplier management", "ERP integration", "Fiscal compliance", "Real-time analytics"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="https://el-os.cloud"
                target="_blank"
                className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium transition-colors"
              >
                Visit EL-OS
                <ArrowUpRight size={18} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-3">
                <FeatureCard icon={Package} title="Wholesale Ordering" desc="Streamlined B2B ordering from your supplier network" color="violet" />
                <FeatureCard icon={Users} title="Vendor Management" desc="Track suppliers, invoices, and payment terms in one place" color="violet" />
                <FeatureCard icon={Layers} title="ERP Integration" desc="Connect with existing systems for seamless data flow" color="violet" />
                <FeatureCard icon={FileText} title="Fiscal Reports" desc="Auto-generated compliance reports for Greek tax law" color="violet" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ella — Dedicated B2B2C Section */}
      <section className="py-32 md:py-40 px-8 md:px-16 lg:px-24 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="inline-block mb-8">
                <div className="w-28 h-28 rounded-3xl overflow-hidden border-2 border-emerald-500/30 shadow-lg shadow-emerald-500/20 mx-auto lg:mx-0">
                  <Image
                    src="/images/ella_avatar.png"
                    alt="Ella"
                    width={112}
                    height={112}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-4">
                For Your Customers
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                Meet Ella — Your Customers&apos; AI Concierge
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Deploy Ella at your venue and let her handle customer loyalty, personalized
                recommendations, and 24/7 multilingual support. She gets smarter with every
                interaction.
              </p>
              <Link
                href="https://el-loyal.com"
                target="_blank"
                className="btn-primary text-sm py-3 px-6"
              >
                See Ella in Action
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>
            <motion.div {...fadeIn}>
              <div className="space-y-4">
                {[
                  { icon: Heart, title: "Remembers Every Customer", desc: "Names, preferences, allergies, favorite table — Ella never forgets." },
                  { icon: Trophy, title: "Handles Loyalty Automatically", desc: "Points, tiers, rewards, and challenges — all managed without staff effort." },
                  { icon: Globe, title: "Speaks Their Language", desc: "Full conversations in Greek, English, and Arabic — perfect for tourism." },
                  { icon: Bell, title: "Proactive Recommendations", desc: "Suggests dishes, reminds about offers, and follows up after visits." },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 p-4 rounded-xl bg-white/5 border border-emerald-500/10 hover:bg-white/[0.07] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm mb-1">{item.title}</p>
                      <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EveY — Dedicated B2C Section */}
      <section className="py-32 md:py-40 px-8 md:px-16 lg:px-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div {...fadeIn} className="order-2 lg:order-1">
              <div className="space-y-4">
                {[
                  { icon: Brain, title: "Remembers Everything", desc: "Your preferences, routines, contacts — EveY builds a picture of you over time." },
                  { icon: Zap, title: "Proactive Follow-ups", desc: "She doesn't wait to be asked. She reminds, checks in, and closes the loop." },
                  { icon: Newspaper, title: "News & Updates", desc: "Curated news, weather, and trends filtered just for you — no noise." },
                  { icon: Sparkles, title: "Challenges You", desc: "She won't just say yes. If something's off, she'll tell you — honestly." },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 p-4 rounded-xl bg-white/5 border border-fuchsia-500/10 hover:bg-white/[0.07] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-fuchsia-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm mb-1">{item.title}</p>
                      <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left order-1 lg:order-2"
            >
              <div className="inline-block mb-8">
                <div className="w-28 h-28 rounded-3xl overflow-hidden border-2 border-fuchsia-500/30 shadow-lg shadow-fuchsia-500/20 mx-auto lg:mx-0">
                  <Image
                    src="/evey-avatar.png"
                    alt="EveY"
                    width={112}
                    height={112}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-fuchsia-400 text-sm font-medium tracking-widest uppercase mb-4">
                For You, Personally
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                Meet EveY — Your Personal AI
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Not a chatbot. A concierge. EveY is your personal AI assistant that
                remembers everything, manages your day, and grows smarter the more
                you talk to her. Available on Telegram.
              </p>
              <Link
                href="/evey"
                className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-fuchsia-500 hover:bg-fuchsia-400 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                Try EveY Free
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio / Extratzis */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-12">
            <p className="text-white/40 text-sm font-medium tracking-widest uppercase mb-4">
              Our Portfolio
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Projects by EL VALUE
            </h2>
          </motion.div>
          <motion.div {...fadeIn} className="flex flex-wrap justify-center gap-6">
            <a
              href="https://extratzis.gr"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/30 hover:bg-white/[0.07] transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <ExternalLink className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <p className="text-white font-semibold group-hover:text-amber-400 transition-colors">Extratzis.gr</p>
                <p className="text-white/50 text-sm">Digital Menu & Ordering Platform</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-amber-400 transition-colors ml-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-slate-950 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "450+", label: "Venues" },
              { value: "2M+", label: "Transactions" },
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "AI Support" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-white/40 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40 px-8 md:px-16 lg:px-24 bg-slate-950">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Join hundreds of venues already using EL VALUE to streamline operations
              and delight customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>
              <a
                href={VIVA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 hover:border-amber-500/40 text-white font-medium rounded-full transition-all duration-300 hover:text-amber-400"
              >
                Open Viva Account
                <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/30 text-sm">
              <span>GDPR Compliant</span>
              <span>&middot;</span>
              <span>EU Data Centers</span>
              <span>&middot;</span>
              <span>99.9% Uptime SLA</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
