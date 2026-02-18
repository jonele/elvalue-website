"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Building2,
  Heart,
  CalendarDays,
  Monitor,
  ArrowRight
} from "lucide-react"

const products = [
  {
    id: "el-os",
    name: "EL-OS",
    tagline: "B2B Portal",
    description: "Wholesale ordering, vendor management, and ERP integration for hospitality businesses.",
    icon: Building2,
    color: "#a78bfa", // accent violet
    href: "https://el-os.cloud",
    external: true,
    features: ["Vendor Management", "ERP Integration", "Fiscal Reports"],
  },
  {
    id: "el-loyal",
    name: "EL-Loyal",
    tagline: "Loyalty Platform",
    description: "Gamified rewards, personalized offers, and customer insights powered by Ella AI.",
    icon: Heart,
    color: "#34d399", // ella emerald
    href: "https://el-loyal.com",
    external: true,
    features: ["Points & Rewards", "Ella AI Chat", "QR Redemption"],
    ambassador: "Ella",
  },
  {
    id: "rsrv",
    name: "RSRV",
    tagline: "Reservations",
    description: "Beautiful reservation system with table management, waitlists, and WhatsApp integration.",
    icon: CalendarDays,
    color: "#60a5fa", // theo blue
    href: "https://el-rsrv.com",
    external: true,
    features: ["Online Booking", "Table Management", "WhatsApp Notify"],
    ambassador: "Theo",
  },
  {
    id: "el-pos",
    name: "EL-POS",
    tagline: "POS System",
    description: "Next-generation point of sale with offline resilience, Viva payments, and full ecosystem integration.",
    icon: Monitor,
    color: "#fbbf24", // gold amber
    href: "/products#el-pos",
    external: false,
    features: ["Hybrid Local+Cloud", "Viva Payments", "Kitchen Display"],
    ambassador: "Theo",
    comingSoon: true,
  },
]

export function ProductsSection() {
  return (
    <div id="products" className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link
            href={product.href}
            target={product.external ? "_blank" : undefined}
            className="glass-card p-6 block h-full group relative overflow-hidden"
          >
            {/* Ambassador badge - top right */}
            {product.ambassador && (
              <div
                className="absolute top-0 right-6 px-3 py-1 rounded-b-lg text-xs font-medium"
                style={{
                  backgroundColor: `${product.color}20`,
                  color: product.color,
                  borderTop: 'none'
                }}
              >
                with {product.ambassador}
              </div>
            )}

            {/* Coming Soon badge */}
            {product.comingSoon && (
              <div className="absolute top-0 right-6 px-3 py-1 rounded-b-lg text-xs font-medium bg-[var(--surface)] text-[var(--text-muted)]">
                Coming Soon
              </div>
            )}

            <div className="flex items-start gap-4 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${product.color}15` }}
              >
                <product.icon size={20} style={{ color: product.color }} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-0.5">{product.name}</h3>
                <p style={{ color: product.color }} className="text-sm font-medium">{product.tagline}</p>
              </div>
            </div>

            <p className="text-secondary text-sm mb-4 leading-relaxed">{product.description}</p>

            <div className="flex flex-wrap gap-2 mb-5">
              {product.features.map((feature) => (
                <span
                  key={feature}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium"
                  style={{
                    backgroundColor: 'var(--surface)',
                    color: 'var(--text-muted)'
                  }}
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all pl-0.5" style={{ color: product.color }}>
              <span>Learn more</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
