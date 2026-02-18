"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { useRef } from "react"
import {
  Zap,
  Shield,
  Wifi,
  Globe,
  Clock,
  TrendingUp,
  Users,
  CreditCard,
  BarChart3,
  MessageSquare,
  type LucideIcon,
} from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  color: string
  index: number
}

// Border beam animation component
function BorderBeam({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[200%] h-[2px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          top: 0,
          left: "-100%",
        }}
        animate={{
          left: ["0%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute w-[2px] h-[200%]"
        style={{
          background: `linear-gradient(180deg, transparent, ${color}, transparent)`,
          right: 0,
          top: "-100%",
        }}
        animate={{
          top: ["0%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          delay: 0.75,
        }}
      />
      <motion.div
        className="absolute w-[200%] h-[2px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          bottom: 0,
          right: "-100%",
        }}
        animate={{
          right: ["0%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          delay: 1.5,
        }}
      />
      <motion.div
        className="absolute w-[2px] h-[200%]"
        style={{
          background: `linear-gradient(180deg, transparent, ${color}, transparent)`,
          left: 0,
          bottom: "-100%",
        }}
        animate={{
          bottom: ["0%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          delay: 2.25,
        }}
      />
    </div>
  )
}

function FeatureCard({ icon: Icon, title, description, color, index }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], [5, -5])
  const rotateY = useTransform(x, [-100, 100], [-5, 5])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group perspective-1000"
    >
      <div className="relative p-5 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)] overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-xl">
        {/* Border beam on hover */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <BorderBeam color={color} />
        </div>

        {/* Gradient background on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${color}15 0%, transparent 70%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${color}20` }}
          >
            <Icon size={18} style={{ color }} />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-sm text-white/60 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

const features = [
  {
    icon: Wifi,
    title: "Offline First",
    description: "Keep running even without internet. Data syncs automatically when you're back online.",
    color: "var(--ella)",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-second response times. Your staff won't wait, your customers won't either.",
    color: "var(--theo)",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption, GDPR compliant, with data stored in EU datacenters.",
    color: "var(--accent)",
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description: "Greek, English, Arabic, and more. Serve international guests effortlessly.",
    color: "var(--gold)",
  },
  {
    icon: TrendingUp,
    title: "AI Analytics",
    description: "Ella and Theo analyze your data to find opportunities and predict trends.",
    color: "var(--ella)",
  },
  {
    icon: CreditCard,
    title: "Integrated Payments",
    description: "Viva Wallet, Stripe, cash — all unified. Real-time reconciliation.",
    color: "var(--theo)",
  },
]

export function FeatureShowcase() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 -left-32 w-64 h-64 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(52, 211, 153, 0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-caption text-[var(--ella)] mb-4">Why Choose EL VALUE</p>
          <h2 className="text-display mb-4">
            Built for <span className="gradient-text">Real Hospitality</span>
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Not just another SaaS. We understand the chaos of a busy Friday night,
            and we built technology that thrives in it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Compact feature list for product pages
export function FeatureList({
  features,
}: {
  features: Array<{ icon: LucideIcon; text: string }>
}) {
  return (
    <ul className="space-y-3">
      {features.map((feature, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-3"
        >
          <div className="w-8 h-8 rounded-lg bg-[var(--ella)]/10 flex items-center justify-center">
            <feature.icon size={16} className="text-[var(--ella)]" />
          </div>
          <span className="text-sm text-white/80">{feature.text}</span>
        </motion.li>
      ))}
    </ul>
  )
}
