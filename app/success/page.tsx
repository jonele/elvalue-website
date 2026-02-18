"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { CheckCircle, ArrowRight, Mail } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-card p-12 max-w-lg w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-emerald-400" />
          </div>
        </motion.div>

        <h1 className="text-3xl font-bold text-white mb-4">
          Welcome to <span className="gradient-text">EL VALUE</span>
        </h1>

        <p className="text-white/60 mb-8 leading-relaxed">
          Your payment was successful! We're thrilled to have you on board.
          Our team will reach out within 24 hours to set up your account.
        </p>

        <div className="glass-card p-4 mb-8 bg-white/5">
          <div className="flex items-center gap-3 text-left">
            <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <p className="text-white text-sm font-medium">Check your inbox</p>
              <p className="text-white/50 text-xs">
                We've sent a confirmation email with next steps
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold rounded-full transition-all duration-300"
          >
            Back to Home
            <ArrowRight size={18} />
          </Link>

          <p className="text-white/30 text-xs">
            Questions? Email us at{" "}
            <a href="mailto:hi@elvalue.com" className="text-emerald-400 hover:underline">
              hi@elvalue.com
            </a>
          </p>
        </div>

        {sessionId && (
          <p className="mt-8 text-white/20 text-xs font-mono">
            Reference: {sessionId.slice(0, 8)}...
          </p>
        )}
      </motion.div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-white/40">Loading...</div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  )
}
