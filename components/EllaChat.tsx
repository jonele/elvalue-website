"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Send, Sparkles, Coffee, Gift, Clock } from "lucide-react"

const quickActions = [
  { icon: Coffee, label: "Order again", color: "var(--ella)" },
  { icon: Gift, label: "My rewards", color: "var(--accent)" },
  { icon: Clock, label: "Past orders", color: "var(--theo)" },
]

const demoMessages = [
  { type: "ella", text: "Welcome back, Maria! ☕", delay: 0 },
  { type: "ella", text: "You've been our morning regular for 23 visits this month!", delay: 800 },
  { type: "ella", text: "Ready for your usual? Espresso + Croissant?", delay: 1600 },
  { type: "user", text: "Yes please! 🙌", delay: 2800 },
  { type: "ella", text: "Perfect! I've applied your 15% loyalty discount. Total: €4.25", delay: 3600 },
]

export function EllaChatPreview() {
  const [messages, setMessages] = useState<typeof demoMessages>([])
  const [isTyping, setIsTyping] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex >= demoMessages.length) return

    const message = demoMessages[currentIndex]

    if (message.type === "ella") {
      setIsTyping(true)
      const typingTimer = setTimeout(() => {
        setIsTyping(false)
        setMessages((prev) => [...prev, message])
        setCurrentIndex((prev) => prev + 1)
      }, 1200)
      return () => clearTimeout(typingTimer)
    } else {
      const timer = setTimeout(() => {
        setMessages((prev) => [...prev, message])
        setCurrentIndex((prev) => prev + 1)
      }, message.delay - (demoMessages[currentIndex - 1]?.delay || 0))
      return () => clearTimeout(timer)
    }
  }, [currentIndex])

  // Auto-restart demo
  useEffect(() => {
    if (currentIndex >= demoMessages.length) {
      const resetTimer = setTimeout(() => {
        setMessages([])
        setCurrentIndex(0)
      }, 5000)
      return () => clearTimeout(resetTimer)
    }
  }, [currentIndex])

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Phone Frame */}
      <div className="relative mx-auto w-[320px] md:w-[360px]">
        {/* Glow effect */}
        <div
          className="absolute -inset-4 rounded-[48px] opacity-40"
          style={{
            background: "radial-gradient(circle at center, rgba(52, 211, 153, 0.3), transparent 70%)",
            filter: "blur(30px)",
          }}
        />

        {/* Phone body */}
        <div className="relative bg-[#0a0a12] rounded-[40px] p-2 shadow-2xl border border-white/10">
          {/* Screen */}
          <div className="bg-gradient-to-b from-[#0f0f18] to-[#080810] rounded-[32px] overflow-hidden">
            {/* Status bar */}
            <div className="h-8 px-6 flex items-center justify-between text-[10px] text-white/60">
              <span>9:41</span>
              <div className="flex gap-1">
                <div className="w-4 h-2 rounded-sm bg-white/40" />
                <div className="w-1 h-2 rounded-sm bg-white/40" />
              </div>
            </div>

            {/* Chat header */}
            <div className="px-4 py-3 border-b border-white/5 flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--ella)] to-emerald-600 overflow-hidden">
                  <Image
                    src="/images/ella_avatar.png"
                    alt="Ella"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0f0f18]" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Ella</p>
                <p className="text-xs text-[var(--ella)]">Your AI Assistant</p>
              </div>
              <Sparkles className="w-4 h-4 text-[var(--ella)] ml-auto" />
            </div>

            {/* Messages area */}
            <div className="h-[280px] px-4 py-3 space-y-3 overflow-hidden">
              <AnimatePresence>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                        msg.type === "user"
                          ? "bg-[var(--ella)] text-[var(--void)] rounded-br-md"
                          : "bg-white/10 text-white rounded-bl-md"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/10 px-4 py-3 rounded-2xl rounded-bl-md flex gap-1">
                      <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        className="w-2 h-2 bg-[var(--ella)] rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }}
                        className="w-2 h-2 bg-[var(--ella)] rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
                        className="w-2 h-2 bg-[var(--ella)] rounded-full"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick actions */}
            <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar">
              {quickActions.map((action, i) => (
                <motion.button
                  key={action.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/70 whitespace-nowrap hover:bg-white/10 transition-colors"
                >
                  <action.icon size={12} style={{ color: action.color }} />
                  {action.label}
                </motion.button>
              ))}
            </div>

            {/* Input area */}
            <div className="p-3 border-t border-white/5">
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2.5">
                <input
                  type="text"
                  placeholder="Ask Ella anything..."
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-white/30 outline-none"
                  readOnly
                />
                <button className="w-8 h-8 rounded-full bg-[var(--ella)] flex items-center justify-center">
                  <Send size={14} className="text-[var(--void)]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Compact chat widget for other pages
export function EllaChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-16 right-0 w-[320px] glass-card glow-ella overflow-hidden"
          >
            <div className="p-4 border-b border-white/10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--ella)] to-emerald-600 overflow-hidden">
                <Image
                  src="/images/ella_avatar.png"
                  alt="Ella"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Chat with Ella</p>
                <p className="text-xs text-[var(--ella)]">Online now</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-white/70">
                Hi! I'm Ella, your AI assistant. How can I help you today?
              </p>
            </div>
            <div className="p-3 border-t border-white/10">
              <a
                href="https://el-loyal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 bg-[var(--ella)] text-[var(--void)] text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Try Ella on EL-Loyal →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--ella)] to-emerald-600 shadow-lg shadow-[var(--ella)]/30 flex items-center justify-center overflow-hidden border-2 border-white/20"
      >
        <Image
          src="/images/ella_avatar.png"
          alt="Ella"
          width={56}
          height={56}
          className="w-full h-full object-cover"
        />
      </motion.button>
    </div>
  )
}
