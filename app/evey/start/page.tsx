"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Send, Download, ArrowRight, Check, Crown, Zap,
  MessageCircle, Smartphone, Shield, ArrowLeft
} from "lucide-react"

type Lang = "el" | "en"

const t = {
  back: { el: "Πίσω", en: "Back" },
  title: { el: "Ξεκίνα με την EvE", en: "Get Started with EvE" },
  subtitle: {
    el: "Διάλεξε πώς θέλεις να χρησιμοποιήσεις την EvE.",
    en: "Choose how you want to use EvE.",
  },

  free: {
    badge: { el: "Δωρεάν", en: "Free" },
    title: { el: "Telegram", en: "Telegram" },
    subtitle: {
      el: "Ξεκίνα αμέσως στο Telegram — χωρίς εγκατάσταση, χωρίς κάρτα.",
      en: "Start instantly on Telegram — no install, no card.",
    },
    steps: [
      {
        icon: "download" as const,
        title: {
          el: "1. Κατέβασε το Telegram",
          en: "1. Download Telegram",
        },
        desc: {
          el: "Δωρεάν από App Store ή Google Play. Αν το έχεις ήδη, πήγαινε στο βήμα 2.",
          en: "Free from App Store or Google Play. Already have it? Skip to step 2.",
        },
      },
      {
        icon: "search" as const,
        title: {
          el: "2. Ψάξε \"EvE\" στο Telegram",
          en: "2. Search \"EvE\" on Telegram",
        },
        desc: {
          el: "Ψάξε @EvE_elvalue_bot ή πάτα το κουμπί παρακάτω όταν γίνει διαθέσιμο.",
          en: "Search @EvE_elvalue_bot or tap the button below when available.",
        },
      },
      {
        icon: "message" as const,
        title: {
          el: "3. Πες της «Γεια»",
          en: "3. Say «Hi»",
        },
        desc: {
          el: "Στείλε ένα μήνυμα και η EvE θα σε γνωρίσει. 30 μηνύματα/μέρα δωρεάν.",
          en: "Send a message and EvE will get to know you. 30 messages/day free.",
        },
      },
    ],
    features: [
      { el: "30 μηνύματα/μέρα", en: "30 messages/day" },
      { el: "Θυμάται τα πάντα", en: "Remembers everything" },
      { el: "Νέα & ενημερώσεις", en: "News & updates" },
      { el: "Χωρίς κάρτα", en: "No credit card" },
    ],
    cta: { el: "Σύντομα Διαθέσιμο", en: "Coming Soon" },
    ctaNote: {
      el: "Θα ενημερωθείς μόλις η EvE γίνει διαθέσιμη στο Telegram.",
      en: "You'll be notified when EvE is available on Telegram.",
    },
  },

  paid: {
    badge: { el: "Pro", en: "Pro" },
    title: { el: "PWA App", en: "PWA App" },
    subtitle: {
      el: "Κατέβασε την EvE ως εφαρμογή στο κινητό σου — πλήρης πρόσβαση.",
      en: "Download EvE as an app on your phone — full access.",
    },
    price: { el: "€29", en: "€29" },
    period: { el: "/μήνα", en: "/month" },
    features: [
      { el: "Απεριόριστα μηνύματα", en: "Unlimited messages" },
      { el: "Πιο έξυπνο AI (Claude Sonnet)", en: "Smarter AI (Claude Sonnet)" },
      { el: "Διαβάζει & απαντάει email", en: "Reads & replies to email" },
      { el: "Διαχειρίζεται ημερολόγιο", en: "Manages your calendar" },
      { el: "PWA εφαρμογή (κινητό & desktop)", en: "PWA app (mobile & desktop)" },
      { el: "Χωρίς διαφημίσεις", en: "No ads" },
      { el: "Προτεραιότητα στις απαντήσεις", en: "Priority responses" },
    ],
    cta: { el: "Εγγραφή Pro", en: "Subscribe Pro" },
    ctaNote: {
      el: "Μετά την πληρωμή θα λάβεις link για να κατεβάσεις την εφαρμογή.",
      en: "After payment you'll receive a link to download the app.",
    },
  },

  footer: {
    el: "Κάθε συνομιλία είναι κρυπτογραφημένη και 100% ιδιωτική.",
    en: "Every conversation is encrypted and 100% private.",
  },
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function EvEStartPage() {
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
    <div className="min-h-screen bg-slate-950 pt-28 pb-20 px-6">
      {/* Language Toggle */}
      <button
        onClick={toggleLang}
        className="fixed top-6 right-6 z-50 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-colors"
      >
        {lang === "el" ? "EN" : "GR"}
      </button>

      <div className="max-w-5xl mx-auto">
        {/* Back link */}
        <Link
          href="/evey"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm mb-10 transition-colors"
        >
          <ArrowLeft size={16} />
          {t.back[lang]}
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="relative w-20 h-20 mx-auto mb-6">
            <Image
              src="/evey-avatar.png"
              alt="EvE"
              fill
              className="rounded-full object-cover ring-2 ring-fuchsia-500/50 shadow-[0_0_30px_rgba(192,38,211,0.3)]"
              priority
            />
            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-slate-950 animate-pulse" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t.title[lang]}
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            {t.subtitle[lang]}
          </p>
        </motion.div>

        {/* Two-path grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {/* ── FREE: Telegram ── */}
          <motion.div
            {...fadeIn}
            className="relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <Send size={20} className="text-emerald-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-semibold text-white">{t.free.title[lang]}</h2>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                    {t.free.badge[lang]}
                  </span>
                </div>
                <p className="text-white/40 text-sm">{t.free.subtitle[lang]}</p>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-4 mb-8">
              {t.free.steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                    {step.icon === "download" && <Download size={16} className="text-emerald-400" />}
                    {step.icon === "search" && <MessageCircle size={16} className="text-emerald-400" />}
                    {step.icon === "message" && <Smartphone size={16} className="text-emerald-400" />}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{step.title[lang]}</p>
                    <p className="text-white/40 text-sm">{step.desc[lang]}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-2 mb-8">
              {t.free.features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <Check size={14} className="text-emerald-400 shrink-0" />
                  <span className="text-white/60">{f[lang]}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              disabled
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold text-sm bg-white/10 text-white/40 border border-white/10 cursor-not-allowed"
            >
              <Send size={16} />
              {t.free.cta[lang]}
            </button>
            <p className="text-center text-white/30 text-xs mt-3">
              {t.free.ctaNote[lang]}
            </p>
          </motion.div>

          {/* ── PAID: PWA App ── */}
          <motion.div
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative p-8 rounded-2xl border-2 border-fuchsia-500/40 bg-fuchsia-500/[0.04]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 flex items-center justify-center">
                <Download size={20} className="text-fuchsia-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-semibold text-white">{t.paid.title[lang]}</h2>
                  <span className="px-2 py-0.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-xs font-medium flex items-center gap-1">
                    <Crown size={10} />
                    {t.paid.badge[lang]}
                  </span>
                </div>
                <p className="text-white/40 text-sm">{t.paid.subtitle[lang]}</p>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-1 mb-6 px-4 py-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-4xl font-bold text-white">{t.paid.price[lang]}</span>
              <span className="text-white/40 text-sm">{t.paid.period[lang]}</span>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {t.paid.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm">
                  <Check size={14} className="text-fuchsia-400 mt-0.5 shrink-0" />
                  <span className="text-white/70">{f[lang]}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              disabled
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold text-sm bg-gradient-to-r from-fuchsia-500/50 to-violet-500/50 text-white/60 cursor-not-allowed"
            >
              <Zap size={16} />
              {t.paid.cta[lang]}
            </button>
            <p className="text-center text-white/30 text-xs mt-3">
              {t.paid.ctaNote[lang]}
            </p>
          </motion.div>
        </div>

        {/* Footer note */}
        <div className="flex items-center justify-center gap-2 text-white/30 text-sm">
          <Shield size={14} />
          <span>{t.footer[lang]}</span>
        </div>
      </div>
    </div>
  )
}
