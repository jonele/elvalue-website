"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight, Brain, RefreshCw, Newspaper, Sparkles, MessageCircle,
  Shield, Send, Smartphone, Download, UserPlus, Check, X as XIcon, Crown, Zap
} from "lucide-react"
import { t, type Lang } from "./translations"

const CTA_URL = "/evey/start"

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
}

const featureIcons = {
  brain: Brain,
  refresh: RefreshCw,
  newspaper: Newspaper,
  sparkles: Sparkles,
} as const

function AuroraCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })
  const targetRef = useRef({ x: 0.5, y: 0.5 })
  const animRef = useRef<number>(0)

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    mouseRef.current.x += (targetRef.current.x - mouseRef.current.x) * 0.03
    mouseRef.current.y += (targetRef.current.y - mouseRef.current.y) * 0.03

    const w = canvas.width
    const h = canvas.height
    const mx = mouseRef.current.x
    const time = Date.now() * 0.0008

    ctx.clearRect(0, 0, w, h)
    ctx.fillStyle = "#06061a"
    ctx.fillRect(0, 0, w, h)

    const horizonY = h * 0.82
    const horizonX = w * 0.5 + (mx - 0.5) * w * 0.3

    const coreGrad = ctx.createRadialGradient(horizonX, horizonY, 0, horizonX, horizonY, w * 0.45)
    coreGrad.addColorStop(0, "rgba(255, 255, 255, 0.95)")
    coreGrad.addColorStop(0.08, "rgba(255, 200, 255, 0.7)")
    coreGrad.addColorStop(0.2, "rgba(192, 38, 211, 0.4)")
    coreGrad.addColorStop(0.45, "rgba(139, 92, 246, 0.12)")
    coreGrad.addColorStop(1, "transparent")
    ctx.fillStyle = coreGrad
    ctx.fillRect(0, 0, w, h)

    ctx.save()
    ctx.globalCompositeOperation = "screen"
    const rayCount = 12
    for (let i = 0; i < rayCount; i++) {
      const angle = (i / rayCount) * Math.PI - Math.PI / 2
      const wobble = Math.sin(time * 2 + i * 1.3) * 0.04
      const rayAngle = angle * 0.6 + wobble
      const rayLen = h * (0.5 + Math.sin(time + i) * 0.15)
      const opacity = 0.04 + Math.sin(time * 1.5 + i * 0.8) * 0.02

      ctx.beginPath()
      ctx.moveTo(horizonX - 2, horizonY)
      ctx.lineTo(horizonX + Math.cos(rayAngle) * rayLen * 0.6, horizonY + Math.sin(rayAngle) * rayLen)
      ctx.lineTo(horizonX + Math.cos(rayAngle + 0.08) * rayLen * 0.6, horizonY + Math.sin(rayAngle + 0.08) * rayLen)
      ctx.closePath()

      const rayGrad = ctx.createLinearGradient(horizonX, horizonY, horizonX + Math.cos(rayAngle) * rayLen * 0.5, horizonY + Math.sin(rayAngle) * rayLen * 0.5)
      rayGrad.addColorStop(0, `rgba(200, 120, 255, ${opacity * 3})`)
      rayGrad.addColorStop(0.5, `rgba(139, 92, 246, ${opacity})`)
      rayGrad.addColorStop(1, "transparent")
      ctx.fillStyle = rayGrad
      ctx.fill()
    }
    ctx.restore()

    ctx.save()
    ctx.beginPath()
    ctx.moveTo(0, horizonY + 20)
    ctx.quadraticCurveTo(w * 0.5, horizonY - 15, w, horizonY + 20)
    ctx.lineTo(w, h)
    ctx.lineTo(0, h)
    ctx.closePath()
    ctx.fillStyle = "#06061a"
    ctx.fill()
    ctx.restore()

    ctx.save()
    ctx.beginPath()
    ctx.moveTo(0, horizonY + 20)
    ctx.quadraticCurveTo(w * 0.5, horizonY - 15, w, horizonY + 20)
    ctx.strokeStyle = "rgba(192, 38, 211, 0.3)"
    ctx.lineWidth = 1.5
    ctx.shadowColor = "rgba(192, 38, 211, 0.6)"
    ctx.shadowBlur = 20
    ctx.stroke()
    ctx.restore()

    const ambientGrad = ctx.createRadialGradient(horizonX, horizonY - h * 0.15, 0, horizonX, horizonY - h * 0.15, w * 0.5)
    ambientGrad.addColorStop(0, "rgba(139, 92, 246, 0.06)")
    ambientGrad.addColorStop(0.5, "rgba(88, 28, 135, 0.03)")
    ambientGrad.addColorStop(1, "transparent")
    ctx.fillStyle = ambientGrad
    ctx.fillRect(0, 0, w, h)

    animRef.current = requestAnimationFrame(draw)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener("resize", resize)
    const handleMouse = (e: MouseEvent) => { targetRef.current.x = e.clientX / window.innerWidth; targetRef.current.y = e.clientY / window.innerHeight }
    window.addEventListener("mousemove", handleMouse)
    const handleTouch = (e: TouchEvent) => { if (e.touches[0]) { targetRef.current.x = e.touches[0].clientX / window.innerWidth; targetRef.current.y = e.touches[0].clientY / window.innerHeight } }
    window.addEventListener("touchmove", handleTouch)
    animRef.current = requestAnimationFrame(draw)
    return () => { window.removeEventListener("resize", resize); window.removeEventListener("mousemove", handleMouse); window.removeEventListener("touchmove", handleTouch); cancelAnimationFrame(animRef.current) }
  }, [draw])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

/* ── Reusable container: always centered, always padded ── */
function Container({ children, className = "", wide = false }: { children: React.ReactNode; className?: string; wide?: boolean }) {
  return (
    <div className={`w-full mx-auto px-6 sm:px-8 lg:px-12 ${wide ? "max-w-6xl" : "max-w-5xl"} ${className}`}>
      {children}
    </div>
  )
}

export default function EveyPage() {
  const [lang, setLang] = useState<Lang>("el")

  useEffect(() => {
    const saved = localStorage.getItem("evey-lang") as Lang | null
    if (saved === "el" || saved === "en") setLang(saved)
  }, [])

  const toggleLang = () => {
    const next = lang === "el" ? "en" : "el"
    setLang(next)
    localStorage.setItem("evey-lang", next)
  }

  return (
    <div className="w-full overflow-x-hidden">
      {/* Language Toggle */}
      <button
        onClick={toggleLang}
        className="fixed top-6 right-6 z-50 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-colors"
      >
        {lang === "el" ? "EN" : "GR"}
      </button>

      {/* ═══ Hero ═══ */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <AuroraCanvas />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
            <div className="relative w-28 h-28 md:w-36 md:h-36 mx-auto mb-8">
              <Image
                src="/evey-avatar.png"
                alt="EvE"
                fill
                className="rounded-full object-cover ring-2 ring-fuchsia-500/50 shadow-[0_0_40px_rgba(192,38,211,0.3)]"
                priority
              />
              <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-400 border-2 border-slate-950 animate-pulse" />
            </div>

            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse" />
              <span className="text-fuchsia-400 text-sm font-medium tracking-wide">{t.hero.badge[lang]}</span>
            </div>

            <p className="text-white/40 text-2xl md:text-3xl font-semibold tracking-[0.35em] uppercase mb-8">
              EL VALUE
            </p>

            <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-bold text-white leading-[0.95] mb-6 tracking-tight">
              EvE
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto mb-14 leading-relaxed">
              {t.hero.subtitle[lang]}
            </p>

            <Link
              href={CTA_URL}
              className="glow-btn inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-fuchsia-500 to-violet-500 hover:from-fuchsia-400 hover:to-violet-400 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 text-lg"
            >
              <Send size={20} />
              {t.hero.cta[lang]}
            </Link>
            <p className="mt-4 text-white/30 text-sm">
              {lang === "el" ? "Χωρίς κάρτα. 2 λεπτά setup." : "No credit card. 2 minute setup."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ Features ═══ */}
      <section className="py-28 md:py-40 bg-slate-950">
        <Container wide>
          <motion.div {...fadeIn} className="text-center mb-16 md:mb-20">
            <p className="text-fuchsia-400 text-sm font-medium tracking-widest uppercase mb-4">EvE AI</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">{t.features.title[lang]}</h2>
            <p className="text-white/50 text-lg">{t.features.subtitle[lang]}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.features.items.map((item, i) => {
              const Icon = featureIcons[item.icon as keyof typeof featureIcons]
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="min-w-0 p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 flex items-center justify-center mb-5">
                    <Icon size={24} className="text-fuchsia-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title[lang]}</h3>
                  <p className="text-white/50 leading-relaxed">{item.desc[lang]}</p>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ═══ Comparison — Why EvE ═══ */}
      <section className="py-28 md:py-40 bg-slate-900/50">
        <Container wide>
          <motion.div {...fadeIn} className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">{t.comparison.title[lang]}</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">{t.comparison.subtitle[lang]}</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Other AI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="min-w-0 p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02]"
            >
              <h3 className="text-lg font-semibold text-white/60 mb-2">{t.comparison.others.title[lang]}</h3>
              <p className="text-white/30 text-sm mb-6">{t.comparison.others.price[lang]}</p>
              <ul className="space-y-3">
                {t.comparison.others.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/40 text-sm">
                    <XIcon size={16} className="text-red-400/60 mt-0.5 shrink-0" />
                    <span>{item[lang]}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* EvE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="min-w-0 p-6 sm:p-8 rounded-2xl border-2 border-fuchsia-500/40 bg-fuchsia-500/[0.04] relative"
            >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                <Image src="/evey-avatar.png" alt="EvE" width={40} height={40} className="rounded-full ring-2 ring-fuchsia-500 shadow-[0_0_20px_rgba(192,38,211,0.4)]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 mt-4">{t.comparison.evey.title[lang]}</h3>
              <p className="text-fuchsia-400 text-sm mb-6">
                {lang === "el" ? "από €0/μήνα" : "from €0/month"}
              </p>
              <ul className="space-y-3">
                {t.comparison.evey.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                    <Check size={16} className="text-fuchsia-400 mt-0.5 shrink-0" />
                    <span>{item[lang]}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Human PA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="min-w-0 p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02]"
            >
              <h3 className="text-lg font-semibold text-white/60 mb-2">{t.comparison.humanPa.title[lang]}</h3>
              <p className="text-white/30 text-sm mb-6">{t.comparison.humanPa.price[lang]}</p>
              <ul className="space-y-3">
                {t.comparison.humanPa.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/40 text-sm">
                    <XIcon size={16} className="text-red-400/60 mt-0.5 shrink-0" />
                    <span>{item[lang]}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.p {...fadeIn} className="text-center text-white/40 text-sm mt-12 max-w-xl mx-auto">
            {t.comparison.eveyAdvantage[lang]}
          </motion.p>
        </Container>
      </section>

      {/* ═══ Numbers ═══ */}
      <section className="py-28 md:py-40 bg-slate-950">
        <Container wide>
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold text-white">{t.numbers.title[lang]}</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {t.numbers.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="min-w-0 text-center py-8"
              >
                <p className="text-4xl md:text-5xl font-bold text-fuchsia-400 mb-2">{item.value}</p>
                <p className="text-white font-medium text-sm mb-1">{item.label[lang]}</p>
                <p className="text-white/40 text-xs leading-relaxed">{item.desc[lang]}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══ How It Works ═══ */}
      <section className="py-28 md:py-40 bg-slate-900/50">
        <Container>
          <motion.div {...fadeIn} className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">{t.howItWorks.title[lang]}</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {t.howItWorks.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="min-w-0 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-violet-500/20 border border-fuchsia-500/30 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-fuchsia-400">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title[lang]}</h3>
                <p className="text-white/50 leading-relaxed">{step.desc[lang]}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══ Add to Phone ═══ */}
      <section className="py-28 md:py-40 bg-slate-950">
        <Container>
          <motion.div {...fadeIn} className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 mb-4">
              <Smartphone size={20} className="text-fuchsia-400" />
              <span className="text-fuchsia-400 text-sm font-medium tracking-widest uppercase">
                {lang === "el" ? "Εγκατάσταση" : "Setup"}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">{t.addToPhone.title[lang]}</h2>
            <p className="text-white/50 text-lg">{t.addToPhone.subtitle[lang]}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {t.addToPhone.steps.map((step, i) => {
              const icons = { download: Download, smartphone: Smartphone, user: UserPlus }
              const StepIcon = icons[step.icon as keyof typeof icons]
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="min-w-0 relative p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02]"
                >
                  <div className="absolute -top-3.5 left-6 w-7 h-7 rounded-full bg-fuchsia-500 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-fuchsia-500/30">
                    {i + 1}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 flex items-center justify-center mb-5 mt-1">
                    <StepIcon size={24} className="text-fuchsia-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{step.title[lang]}</h3>
                  <p className="text-white/50 leading-relaxed text-sm">{step.desc[lang]}</p>
                </motion.div>
              )
            })}
          </div>

          <motion.div {...fadeIn} className="text-center">
            <Link
              href={CTA_URL}
              className="glow-btn inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-fuchsia-500 to-violet-500 hover:from-fuchsia-400 hover:to-violet-400 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 text-lg"
            >
              <Send size={20} />
              {t.hero.cta[lang]}
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* ═══ Pricing ═══ */}
      <section id="pricing" className="py-28 md:py-40 bg-slate-900/50">
        <Container wide>
          <motion.div {...fadeIn} className="text-center mb-16 md:mb-20">
            <p className="text-fuchsia-400 text-sm font-medium tracking-widest uppercase mb-4">
              {lang === "el" ? "Τιμοκατάλογος" : "Pricing"}
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">{t.pricing.title[lang]}</h2>
            <p className="text-white/50 text-lg">{t.pricing.subtitle[lang]}</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {t.pricing.tiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`min-w-0 relative p-6 sm:p-8 rounded-2xl border transition-colors ${
                  tier.highlighted
                    ? "border-2 border-fuchsia-500/50 bg-fuchsia-500/[0.06]"
                    : "border-white/10 bg-white/[0.02] hover:bg-white/[0.04]"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
                    <Image src="/evey-avatar.png" alt="EvE" width={32} height={32} className="rounded-full ring-2 ring-fuchsia-500 shadow-[0_0_16px_rgba(192,38,211,0.4)]" />
                    <span className="px-3 py-1 bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-full text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap">
                      <Crown size={12} />
                      {lang === "el" ? "Δημοφιλές" : "Popular"}
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-semibold text-white mb-2 mt-1">{tier.name[lang]}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-white">{tier.price[lang]}</span>
                  <span className="text-white/40 text-sm">{tier.period[lang]}</span>
                </div>
                <p className="text-white/50 text-sm mb-6">{tier.desc[lang]}</p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-2.5 text-sm">
                      <Check size={16} className={`mt-0.5 shrink-0 ${tier.highlighted ? "text-fuchsia-400" : "text-white/40"}`} />
                      <span className={tier.highlighted ? "text-white/80" : "text-white/50"}>{feature[lang]}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={CTA_URL}
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold transition-all duration-300 text-sm ${
                    tier.highlighted
                      ? "glow-btn bg-gradient-to-r from-fuchsia-500 to-violet-500 hover:from-fuchsia-400 hover:to-violet-400 text-white hover:scale-105"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40"
                  }`}
                >
                  {tier.highlighted && <Zap size={16} />}
                  {tier.cta[lang]}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeIn} className="text-center text-white/40 text-sm max-w-xl mx-auto">
            {t.pricing.savings[lang]}
          </motion.p>
        </Container>
      </section>

      {/* ═══ Final CTA ═══ */}
      <section className="py-28 md:py-40 bg-slate-950">
        <Container>
          <div className="text-center">
            <motion.div {...fadeIn}>
              <div className="relative w-20 h-20 mx-auto mb-8">
                <Image src="/evey-avatar.png" alt="EvE" fill className="rounded-full object-cover ring-2 ring-fuchsia-500/50 shadow-[0_0_30px_rgba(192,38,211,0.3)]" />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-slate-950 animate-pulse" />
              </div>
              <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">{t.finalCta.title[lang]}</h2>
              <p className="text-white/50 text-lg mb-10">{t.finalCta.subtitle[lang]}</p>
              <Link
                href={CTA_URL}
                className="glow-btn inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-fuchsia-500 to-violet-500 hover:from-fuchsia-400 hover:to-violet-400 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 text-lg"
              >
                {t.finalCta.cta[lang]}
                <ArrowRight size={18} />
              </Link>

              <div className="mt-12 flex items-center justify-center gap-2 text-white/30 text-sm">
                <Shield size={14} />
                <span>{t.footer.privacy[lang]}</span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  )
}
