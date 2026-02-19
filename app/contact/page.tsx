"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import {
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Building2,
  CreditCard,
  AlertCircle,
} from "lucide-react"
import Image from "next/image"
import { Suspense } from "react"

// Product options
const PRODUCTS = [
  { value: "all", label: "Full Ecosystem" },
  { value: "el-os", label: "EL-OS (B2B Portal)" },
  { value: "el-loyal", label: "EL-Loyal (Loyalty)" },
  { value: "rsrv", label: "RSRV (Reservations)" },
  { value: "el-pos", label: "EL-POS (Point of Sale)" },
  { value: "evey", label: "EvE (AI Assistant)" },
]

function ContactForm() {
  const searchParams = useSearchParams()
  const cancelled = searchParams.get("cancelled")

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    vat_id: "",
    client_name: "",
    contact_name: "",
    email: "",
    mobile: "",
    interest: "all",
    message: "",
  })

  useEffect(() => {
    if (cancelled) {
      setError("Payment was cancelled. You can try again when ready.")
    }
  }, [cancelled])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError(null)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/onboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      // Redirect to Stripe Checkout
      if (data.checkout_url) {
        window.location.href = data.checkout_url
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
      setLoading(false)
    }
  }

  const selectedProduct = PRODUCTS.find((p) => p.value === formData.interest)

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
          <AlertCircle size={18} />
          <span className="text-sm">{error}</span>
        </div>
      )}

      {/* Business Info */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="vat_id" className="block text-sm font-medium text-white mb-2">
            VAT Number (ΑΦΜ) *
          </label>
          <input
            type="text"
            id="vat_id"
            name="vat_id"
            required
            value={formData.vat_id}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/50 transition-colors"
            placeholder="e.g. EL123456789"
          />
        </div>

        <div>
          <label htmlFor="client_name" className="block text-sm font-medium text-white mb-2">
            Business Name *
          </label>
          <input
            type="text"
            id="client_name"
            name="client_name"
            required
            value={formData.client_name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/50 transition-colors"
            placeholder="Your venue or company name"
          />
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact_name" className="block text-sm font-medium text-white mb-2">
            Contact Name
          </label>
          <input
            type="text"
            id="contact_name"
            name="contact_name"
            value={formData.contact_name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/50 transition-colors"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/50 transition-colors"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="mobile" className="block text-sm font-medium text-white mb-2">
          Mobile Phone
        </label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/50 transition-colors"
          placeholder="+30 6XX XXX XXXX"
        />
      </div>

      {/* Product Selection */}
      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-white mb-2">
          I'm interested in
        </label>
        <select
          id="interest"
          name="interest"
          value={formData.interest}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
        >
          {PRODUCTS.map((product) => (
            <option key={product.value} value={product.value} className="bg-slate-900">
              {product.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
          placeholder="Tell us about your venue..."
        />
      </div>

      {/* Interest Summary */}
      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
        <div className="flex items-center gap-3">
          <CreditCard className="w-5 h-5 text-emerald-400" />
          <span className="text-white font-medium">{selectedProduct?.label}</span>
        </div>
        <p className="text-white/40 text-xs mt-2">
          Custom pricing • Tailored to your venue • 0% VAT (Cyprus company)
        </p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <span className="w-5 h-5 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin" />
            Processing...
          </>
        ) : (
          <>
            Get in Touch
            <Send size={18} />
          </>
        )}
      </button>

      <p className="text-center text-white/30 text-xs">
        Secure payment via Stripe • Invoice from EL VALUE CYPRUS LTD
      </p>
    </form>
  )
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 px-8 md:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Get <span className="gradient-text">Started</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Join hundreds of venues using EL VALUE to transform their operations.
          </p>
        </motion.div>
      </section>

      {/* Contact Grid */}
      <section className="px-8 md:px-16 pb-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Contact Form - Wider */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-6 h-6 text-emerald-400" />
                <h2 className="text-xl font-semibold text-white">Business Details</h2>
              </div>

              <Suspense
                fallback={
                  <div className="py-12 text-center text-white/40">Loading form...</div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="glass-card p-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Email</h3>
                  <a
                    href="mailto:hi@elvalue.com"
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    hi@elvalue.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Location</h3>
                  <p className="text-white/50 text-sm">Limassol, Cyprus</p>
                  <p className="text-white/30 text-xs">Operations across Greece & EU</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Quick Response</h3>
                  <p className="text-white/50 text-sm">We respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Viva Wallet</h3>
                  <a
                    href="https://www.viva.com/el-gr/onboarding?utm_source=partners&utm_medium=isv&utm_campaign=grelvalue01212025&utm_content=aml_soft____&rep=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 text-sm hover:underline"
                  >
                    Open a Viva Account →
                  </a>
                </div>
              </div>
            </div>

            {/* Ella Card */}
            <div className="glass-card p-5 border-emerald-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500/30">
                  <Image
                    src="/images/ella_avatar.png"
                    alt="Ella"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-white">Meet Ella</h3>
                  <p className="text-emerald-400 text-xs">AI Assistant</p>
                </div>
              </div>
              <p className="text-white/50 text-sm mb-3">
                "Can't wait to help your customers! Try me on our loyalty platform."
              </p>
              <a
                href="https://el-loyal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 text-sm hover:underline"
              >
                Try Ella on EL-Loyal →
              </a>
            </div>

            {/* Trust Badges */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-white">450+</p>
                  <p className="text-white/40 text-xs">Venues</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">99.9%</p>
                  <p className="text-white/40 text-xs">Uptime</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
