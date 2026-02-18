"use client"

import { Hero } from "@/components/Hero"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
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
import { t, LANG_LABELS, type Lang } from "./translations-home"

const VIVA_URL =
  "https://www.viva.com/el-gr/onboarding?utm_source=partners&utm_medium=isv&utm_campaign=grelvalue01212025&utm_content=aml_soft____&rep=true"

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
}

function LanguageToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="fixed top-24 right-4 sm:right-6 z-40 flex gap-1 p-1 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
      {(Object.keys(LANG_LABELS) as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            lang === l
              ? "bg-emerald-500 text-slate-900"
              : "text-white/60 hover:text-white hover:bg-white/10"
          }`}
        >
          {LANG_LABELS[l]}
        </button>
      ))}
    </div>
  )
}

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
  const [lang, setLang] = useState<Lang>("en")

  useEffect(() => {
    const saved = localStorage.getItem("elvalue-lang") as Lang | null
    if (saved && saved in LANG_LABELS) setLang(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem("elvalue-lang", lang)
  }, [lang])

  const isRtl = lang === "ar"

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className={isRtl ? "font-arabic" : ""}>
      <Hero />
      <LanguageToggle lang={lang} setLang={setLang} />

      {/* AI Team */}
      <section className="py-32 md:py-40 px-8 md:px-16 lg:px-24 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-20">
            <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-4">
              {t.aiTeam.badge[lang]}
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
              {t.aiTeam.title[lang]}
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              {t.aiTeam.subtitle[lang]}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Ella */}
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 md:p-10 rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-emerald-500/30">
                  <Image src="/images/ella_avatar.png" alt="Ella" width={64} height={64} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Ella</h3>
                  <p className="text-emerald-400 text-sm">{t.ella.role[lang]}</p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed mb-6">{t.ella.desc[lang]}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs">EL-Loyal</span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs">RSRV</span>
              </div>
            </motion.div>

            {/* Theo */}
            <motion.div
              initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 md:p-10 rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-blue-500/30">
                  <Image src="/images/theo_avatar_v2.jpg" alt="Theo" width={64} height={64} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Theo</h3>
                  <p className="text-blue-400 text-sm">{t.theo.role[lang]}</p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed mb-6">{t.theo.desc[lang]}</p>
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
                {t.elLoyal.badge[lang]}
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                {t.elLoyal.title[lang]}
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                {t.elLoyal.desc[lang]}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-2xl font-bold text-emerald-400">47%</p>
                  <p className="text-white/50 text-sm">{t.elLoyal.stat1[lang]}</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-2xl font-bold text-emerald-400">+€12</p>
                  <p className="text-white/50 text-sm">{t.elLoyal.stat2[lang]}</p>
                </div>
              </div>
              <Link href="https://el-loyal.com" target="_blank" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
                {t.elLoyal.cta[lang]}
                <ArrowUpRight size={18} />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="grid grid-cols-2 gap-3">
                <FeatureCard icon={Star} title={t.elLoyal.features.pointsTiers.title[lang]} desc={t.elLoyal.features.pointsTiers.desc[lang]} color="emerald" />
                <FeatureCard icon={MessageCircle} title={t.elLoyal.features.aiConcierge.title[lang]} desc={t.elLoyal.features.aiConcierge.desc[lang]} color="emerald" />
                <FeatureCard icon={Trophy} title={t.elLoyal.features.challenges.title[lang]} desc={t.elLoyal.features.challenges.desc[lang]} color="emerald" />
                <FeatureCard icon={Globe} title={t.elLoyal.features.multiLang.title[lang]} desc={t.elLoyal.features.multiLang.desc[lang]} color="emerald" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RSRV */}
      <section className="py-32 md:py-40 px-8 md:px-16 lg:px-24 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-3">
                <FeatureCard icon={Calendar} title={t.rsrv.featureCards.booking.title[lang]} desc={t.rsrv.featureCards.booking.desc[lang]} color="blue" />
                <FeatureCard icon={LayoutGrid} title={t.rsrv.featureCards.tables.title[lang]} desc={t.rsrv.featureCards.tables.desc[lang]} color="blue" />
                <FeatureCard icon={Smartphone} title={t.rsrv.featureCards.whatsapp.title[lang]} desc={t.rsrv.featureCards.whatsapp.desc[lang]} color="blue" />
                <FeatureCard icon={BarChart3} title={t.rsrv.featureCards.analytics.title[lang]} desc={t.rsrv.featureCards.analytics.desc[lang]} color="blue" />
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="order-1 lg:order-2">
              <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">
                {t.rsrv.badge[lang]}
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                {t.rsrv.title[lang]}
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                {t.rsrv.desc[lang]}
              </p>
              <ul className="space-y-3 mb-8">
                {t.rsrv.features.map((item) => (
                  <li key={item.en} className="flex items-center gap-3 text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    {item[lang]}
                  </li>
                ))}
              </ul>
              <Link href="https://el-rsrv.com" target="_blank" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
                {t.rsrv.cta[lang]}
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
                {t.elOs.badge[lang]}
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                {t.elOs.title[lang]}
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                {t.elOs.desc[lang]}
              </p>
              <ul className="space-y-3 mb-8">
                {t.elOs.features.map((item) => (
                  <li key={item.en} className="flex items-center gap-3 text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                    {item[lang]}
                  </li>
                ))}
              </ul>
              <Link href="https://el-os.cloud" target="_blank" className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium transition-colors">
                {t.elOs.cta[lang]}
                <ArrowUpRight size={18} />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="grid grid-cols-2 gap-3">
                <FeatureCard icon={Package} title={t.elOs.featureCards.wholesale.title[lang]} desc={t.elOs.featureCards.wholesale.desc[lang]} color="violet" />
                <FeatureCard icon={Users} title={t.elOs.featureCards.vendors.title[lang]} desc={t.elOs.featureCards.vendors.desc[lang]} color="violet" />
                <FeatureCard icon={Layers} title={t.elOs.featureCards.erp.title[lang]} desc={t.elOs.featureCards.erp.desc[lang]} color="violet" />
                <FeatureCard icon={FileText} title={t.elOs.featureCards.fiscal.title[lang]} desc={t.elOs.featureCards.fiscal.desc[lang]} color="violet" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ella Dedicated */}
      <section className="py-32 md:py-40 px-8 md:px-16 lg:px-24 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-start"
            >
              <div className="inline-block mb-8">
                <div className="w-28 h-28 rounded-3xl overflow-hidden border-2 border-emerald-500/30 shadow-lg shadow-emerald-500/20 mx-auto lg:mx-0">
                  <Image src="/images/ella_avatar.png" alt="Ella" width={112} height={112} className="w-full h-full object-cover" />
                </div>
              </div>
              <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-4">
                {t.ellaDedicated.badge[lang]}
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                {t.ellaDedicated.title[lang]}
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                {t.ellaDedicated.desc[lang]}
              </p>
              <Link href="https://el-loyal.com" target="_blank" className="btn-primary text-sm py-3 px-6">
                {t.ellaDedicated.cta[lang]}
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>
            <motion.div {...fadeIn}>
              <div className="space-y-4">
                {t.ellaDedicated.features.map((item, i) => {
                  const icons = [Heart, Trophy, Globe, Bell]
                  const Icon = icons[i]
                  return (
                    <div key={item.title.en} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-emerald-500/10 hover:bg-white/[0.07] transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm mb-1">{item.title[lang]}</p>
                        <p className="text-white/50 text-xs leading-relaxed">{item.desc[lang]}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EveY Dedicated */}
      <section className="py-32 md:py-40 px-8 md:px-16 lg:px-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div {...fadeIn} className="order-2 lg:order-1">
              <div className="space-y-4">
                {t.eveyDedicated.features.map((item, i) => {
                  const icons = [Brain, Zap, Newspaper, Sparkles]
                  const Icon = icons[i]
                  return (
                    <div key={item.title.en} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-fuchsia-500/10 hover:bg-white/[0.07] transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-fuchsia-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm mb-1">{item.title[lang]}</p>
                        <p className="text-white/50 text-xs leading-relaxed">{item.desc[lang]}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-start order-1 lg:order-2"
            >
              <div className="inline-block mb-8">
                <div className="w-28 h-28 rounded-3xl overflow-hidden border-2 border-fuchsia-500/30 shadow-lg shadow-fuchsia-500/20 mx-auto lg:mx-0">
                  <Image src="/evey-avatar.png" alt="EveY" width={112} height={112} className="w-full h-full object-cover" />
                </div>
              </div>
              <p className="text-fuchsia-400 text-sm font-medium tracking-widest uppercase mb-4">
                {t.eveyDedicated.badge[lang]}
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                {t.eveyDedicated.title[lang]}
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                {t.eveyDedicated.desc[lang]}
              </p>
              <Link href="/evey" className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-fuchsia-500 hover:bg-fuchsia-400 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105">
                {t.eveyDedicated.cta[lang]}
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-12">
            <p className="text-white/40 text-sm font-medium tracking-widest uppercase mb-4">
              {t.portfolio.badge[lang]}
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              {t.portfolio.title[lang]}
            </h2>
          </motion.div>
          <motion.div {...fadeIn} className="flex flex-wrap justify-center gap-6">
            <a href="https://extratzis.gr" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/30 hover:bg-white/[0.07] transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <ExternalLink className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <p className="text-white font-semibold group-hover:text-amber-400 transition-colors">Extratzis.gr</p>
                <p className="text-white/50 text-sm">{t.portfolio.extratzis[lang]}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-amber-400 transition-colors ms-4" />
            </a>
            <a href="https://nextgencalls.gr" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/[0.07] transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <ExternalLink className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-semibold group-hover:text-blue-400 transition-colors">NextGenCalls.gr</p>
                <p className="text-white/50 text-sm">{t.portfolio.nextgencalls[lang]}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-blue-400 transition-colors ms-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-slate-950 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "450+", label: t.stats.venues[lang] },
              { value: "2M+", label: t.stats.transactions[lang] },
              { value: "99.9%", label: t.stats.uptime[lang] },
              { value: "24/7", label: t.stats.aiSupport[lang] },
            ].map((stat) => (
              <div key={stat.value} className="text-center">
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
              {t.cta.title[lang]}
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              {t.cta.subtitle[lang]}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold rounded-full transition-all duration-300 hover:scale-105">
                {t.cta.button[lang]}
                <ArrowRight size={18} />
              </Link>
              <a href={VIVA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 hover:border-amber-500/40 text-white font-medium rounded-full transition-all duration-300 hover:text-amber-400">
                {t.cta.viva[lang]}
                <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/30 text-sm">
              <span>{t.cta.badges.gdpr[lang]}</span>
              <span>&middot;</span>
              <span>{t.cta.badges.eu[lang]}</span>
              <span>&middot;</span>
              <span>{t.cta.badges.sla[lang]}</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
