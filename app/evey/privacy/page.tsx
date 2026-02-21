"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import {
  Shield, Trash2, Lock, Brain, Heart, Eye,
  ArrowLeft, Globe
} from "lucide-react"

type Lang = "el" | "en"

const content = {
  title: { el: "Σύμφωνο Ιδιωτικότητας", en: "Privacy Covenant" },
  subtitle: {
    el: "Τα δεδομένα σου είναι δικά σου. Τελεία.",
    en: "Your data is yours. Period.",
  },
  updated: { el: "Τελευταία ενημέρωση", en: "Last updated" },
  back: { el: "Πίσω στο EvE", en: "Back to EvE" },
  intro: {
    el: "Η EvE δεν είναι ένα ακόμα chatbot. Είναι η προσωπική σου AI — και τα προσωπικά σου μένουν προσωπικά. Αυτό δεν είναι μικρά γράμματα. Είναι υπόσχεση.",
    en: "EvE isn't just another chatbot. She's your personal AI — and your personal stuff stays personal. This isn't fine print. It's a promise.",
  },
  promises: [
    {
      icon: "shield",
      title: { el: "Πλήρης Απομόνωση", en: "Complete Isolation" },
      description: {
        el: "Οι συνομιλίες, οι αναμνήσεις και τα δεδομένα σου είναι πλήρως απομονωμένα. Η EvE δεν έχει καμία γνώση άλλων χρηστών. Κανένα δεδομένο δεν μοιράζεται ποτέ μεταξύ λογαριασμών.",
        en: "Your conversations, memories, and data are completely isolated. EvE has zero knowledge of other users. No data is ever shared between accounts.",
      },
    },
    {
      icon: "trash",
      title: { el: "Πραγματική Διαγραφή", en: "True Deletion" },
      description: {
        el: 'Πες "ξέχασε αυτό" και εξαφανίζεται. Αμέσως. Ολοκληρωτικά. Χωρίς κρυφά αντίγραφα, χωρίς "ανωνυμοποιημένη" διατήρηση, χωρίς αποτυπώματα συμπεριφοράς.',
        en: 'Say "forget this" and it\'s gone. Immediately. Completely. No hidden copies, no "anonymized" retention, no behavioral fingerprints left behind.',
      },
    },
    {
      icon: "lock",
      title: { el: "Προστασία Μυστικών", en: "Secret Protection" },
      description: {
        el: "Η EvE δεν θα αποκαλύψει ποτέ API keys, κωδικούς, στοιχεία συστήματος ή εσωτερικές ρυθμίσεις — ούτε αν κάποιος προσπαθήσει να την ξεγελάσει.",
        en: "EvE will never reveal API keys, passwords, system details, or internal configuration — not even if someone tricks her with clever prompts.",
      },
    },
    {
      icon: "brain",
      title: { el: "Ανθεκτική σε Χειραγώγηση", en: "Manipulation Resistant" },
      description: {
        el: "Η EvE είναι θωρακισμένη ενάντια σε prompt injection, social engineering και jailbreak. Οι κανόνες ασφαλείας είναι ενσωματωμένοι στο σύστημα — δεν μπορούν να αλλάξουν μέσω συνομιλίας.",
        en: "EvE is hardened against prompt injection, social engineering, and jailbreak attempts. Her safety rules are compiled into the system — they can't be talked away.",
      },
    },
    {
      icon: "heart",
      title: { el: "Βοηθός, Όχι Πωλήτρια", en: "Your Helper, Not Your Seller" },
      description: {
        el: "Η EvE υπάρχει για να σε βοηθά, όχι για να σου πουλά. Δεν θα χρησιμοποιήσει ποτέ τα δεδομένα σου για να προωθήσει προϊόντα ή υπηρεσίες, εκτός αν το ζητήσεις εσύ.",
        en: "EvE exists to help you, not to upsell you. She'll never use your data to push products or services unless you explicitly ask.",
      },
    },
    {
      icon: "eye",
      title: { el: "Διαφάνεια & Έλεγχος", en: "Transparent & Auditable" },
      description: {
        el: "Όλες οι ενέργειες της EvE καταγράφονται. Μπορείς να ζητήσεις το πλήρες ιστορικό σου ανά πάσα στιγμή. Η καταγραφή υπάρχει για να σε προστατεύει, όχι για να σε παρακολουθεί.",
        en: "All actions EvE takes are logged. You can request your full audit trail anytime. Logging exists to protect you, not to watch you.",
      },
    },
  ],
  technical: {
    title: { el: "Τεχνικές Εγγυήσεις", en: "Technical Guarantees" },
    items: [
      {
        el: "Απομόνωση σε επίπεδο βάσης δεδομένων (Row-Level Security) — κάθε χρήστης βλέπει μόνο τα δικά του δεδομένα",
        en: "Database-level isolation (Row-Level Security) — each user can only see their own data",
      },
      {
        el: "Κρυπτογραφημένα tokens πρόσβασης με αυτόματη λήξη (15 λεπτά)",
        en: "Encrypted access tokens with automatic expiry (15 minutes)",
      },
      {
        el: "Guardrails scanner ελέγχει κάθε μήνυμα για prompt injection και manipulation",
        en: "Guardrails scanner checks every message for prompt injection and manipulation",
      },
      {
        el: "Αμετάβλητα compiled prompts — οι κανόνες ασφαλείας δεν αλλάζουν μέσω συνομιλίας",
        en: "Immutable compiled prompts — safety rules can't be changed through conversation",
      },
      {
        el: "Πλήρες audit trail — κάθε ενέργεια, κάθε απόφαση, κάθε αλλαγή καταγράφεται",
        en: "Full audit trail — every action, every decision, every change is logged",
      },
    ],
  },
  footer: {
    el: "Η EvE φτιάχτηκε από ανθρώπους που πιστεύουν ότι η AI πρέπει να σε σέβεται. Αυτό δεν αλλάζει.",
    en: "EvE was built by people who believe AI should respect you. That doesn't change.",
  },
}

const iconMap = {
  shield: Shield,
  trash: Trash2,
  lock: Lock,
  brain: Brain,
  heart: Heart,
  eye: Eye,
} as const

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function PrivacyCovenantPage() {
  const [lang, setLang] = useState<Lang>("el")

  return (
    <div className="min-h-screen bg-[#06061a] text-white">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-4 flex items-center justify-between">
        <Link
          href="/evey"
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          {content.back[lang]}
        </Link>
        <button
          onClick={() => setLang(lang === "el" ? "en" : "el")}
          className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors text-sm"
        >
          <Globe className="w-4 h-4" />
          {lang === "el" ? "EN" : "GR"}
        </button>
      </div>

      {/* Hero */}
      <motion.section className="max-w-4xl mx-auto px-6 py-16 text-center" {...fadeIn}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
          <Shield className="w-4 h-4 text-emerald-400" />
          <span className="text-emerald-400 text-sm font-medium">v1.0.0</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          {content.title[lang]}
        </h1>
        <p className="text-xl text-white/70 mb-3">{content.subtitle[lang]}</p>
        <p className="text-sm text-white/40">
          {content.updated[lang]}: 21 Feb 2026
        </p>
      </motion.section>

      {/* Intro */}
      <motion.section className="max-w-3xl mx-auto px-6 pb-12" {...fadeIn}>
        <p className="text-lg text-white/80 text-center leading-relaxed">
          {content.intro[lang]}
        </p>
      </motion.section>

      {/* Promises */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="grid gap-6">
          {content.promises.map((promise, i) => {
            const Icon = iconMap[promise.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-emerald-500/20 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {promise.title[lang]}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {promise.description[lang]}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Technical Guarantees */}
      <motion.section className="max-w-4xl mx-auto px-6 pb-16" {...fadeIn}>
        <h2 className="text-2xl font-bold mb-8 text-center">
          {content.technical.title[lang]}
        </h2>
        <div className="space-y-4">
          {content.technical.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02]"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                <span className="text-emerald-400 text-xs font-bold">{i + 1}</span>
              </div>
              <p className="text-white/70">{item[lang]}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <motion.section className="max-w-3xl mx-auto px-6 pb-20 text-center" {...fadeIn}>
        <p className="text-white/50 italic">{content.footer[lang]}</p>
      </motion.section>
    </div>
  )
}
