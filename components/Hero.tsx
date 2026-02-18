"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"

export function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background - Full screen, cinematic */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src="/videos/ella_welcomes.mp4"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: videoLoaded ? 1 : 0,
            transition: "opacity 1.5s ease-out"
          }}
        />
        {/* Cinematic gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(180deg,
                rgba(5,8,15,0.4) 0%,
                rgba(5,8,15,0.2) 30%,
                rgba(5,8,15,0.1) 50%,
                rgba(5,8,15,0.3) 70%,
                rgba(5,8,15,0.85) 100%
              )
            `
          }}
        />
      </div>

      {/* Content - Minimal, bottom-aligned */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Simple badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-sm font-medium tracking-wide">
                450+ venues across Greece & Cyprus
              </span>
            </div>

            {/* Headline - Large, cinematic */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] mb-6 tracking-tight">
              The Future of
              <br />
              <span className="text-emerald-400">Hospitality</span>
            </h1>

            {/* Subtitle - Understated */}
            <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed">
              AI-powered ecosystem for restaurants, cafes, and venues.
              POS, loyalty, reservations — seamlessly connected.
            </p>

            {/* CTA - Single, prominent */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                Book a Demo
                <ArrowRight size={18} />
              </Link>
              <span className="text-white/40 text-sm">
                Free consultation • No commitment
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
