"use client"

import { motion } from "framer-motion"
import { Star, Gift, TrendingUp, Sparkles, ChevronRight } from "lucide-react"
import Image from "next/image"

const rewards = [
  { name: "Free Coffee", points: 150, icon: "☕", progress: 85 },
  { name: "10% Off", points: 100, icon: "🎫", progress: 100 },
  { name: "Free Dessert", points: 250, icon: "🍰", progress: 52 },
]

const recentActivity = [
  { action: "Earned", points: 45, venue: "Café Plaka", time: "2h ago" },
  { action: "Redeemed", points: -100, venue: "Free Coffee", time: "1d ago" },
  { action: "Earned", points: 78, venue: "Taverna Meze", time: "3d ago" },
]

export function LoyaltyPreview() {
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
            background: "radial-gradient(circle at center, rgba(167, 139, 250, 0.3), transparent 70%)",
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

            {/* Header with greeting */}
            <div className="px-5 pt-2 pb-4">
              <p className="text-white/60 text-sm">Good morning,</p>
              <p className="text-white text-xl font-semibold">Maria! ✨</p>
            </div>

            {/* Points Card */}
            <div className="mx-4 mb-4">
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="relative overflow-hidden rounded-2xl p-5"
                style={{
                  background: "linear-gradient(135deg, rgba(167, 139, 250, 0.3) 0%, rgba(96, 165, 250, 0.2) 100%)",
                  border: "1px solid rgba(167, 139, 250, 0.3)",
                }}
              >
                {/* Shine effect */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)",
                  }}
                />

                <div className="relative flex justify-between items-start">
                  <div>
                    <p className="text-white/60 text-xs mb-1">Total Points</p>
                    <div className="flex items-baseline gap-2">
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="text-4xl font-bold text-white"
                      >
                        2,847
                      </motion.span>
                      <Star className="w-5 h-5 text-[var(--gold)]" fill="currentColor" />
                    </div>
                    <div className="flex items-center gap-1 mt-2">
                      <TrendingUp className="w-3 h-3 text-[var(--ella)]" />
                      <span className="text-xs text-[var(--ella)]">+245 this month</span>
                    </div>
                  </div>
                  <button className="px-3 py-1.5 bg-white text-[var(--void)] text-xs font-semibold rounded-full flex items-center gap-1">
                    <Gift size={12} />
                    Redeem
                  </button>
                </div>

                {/* Progress to next tier */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-white/60">Gold Member</span>
                    <span className="text-[var(--gold)]">153 to Platinum ⭐</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-gradient-to-r from-[var(--gold)] to-amber-400 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Available Rewards */}
            <div className="px-4 mb-4">
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm font-medium text-white">Available Rewards</p>
                <button className="text-xs text-[var(--accent)] flex items-center gap-0.5">
                  See all <ChevronRight size={12} />
                </button>
              </div>
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                {rewards.map((reward, i) => (
                  <motion.div
                    key={reward.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="flex-shrink-0 w-[100px] p-3 rounded-xl bg-white/5 border border-white/10 text-center"
                  >
                    <span className="text-2xl">{reward.icon}</span>
                    <p className="text-xs text-white mt-1 font-medium">{reward.name}</p>
                    <p className="text-[10px] text-white/50">{reward.points} pts</p>
                    {reward.progress >= 100 && (
                      <span className="inline-block mt-1 px-1.5 py-0.5 bg-[var(--ella)] text-[var(--void)] text-[8px] font-bold rounded-full">
                        READY!
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="px-4 pb-4">
              <p className="text-sm font-medium text-white mb-3">Recent Activity</p>
              <div className="space-y-2">
                {recentActivity.map((activity, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          activity.points > 0 ? "bg-[var(--ella)]/20" : "bg-[var(--accent)]/20"
                        }`}
                      >
                        {activity.points > 0 ? (
                          <TrendingUp size={14} className="text-[var(--ella)]" />
                        ) : (
                          <Gift size={14} className="text-[var(--accent)]" />
                        )}
                      </div>
                      <div>
                        <p className="text-xs text-white">{activity.venue}</p>
                        <p className="text-[10px] text-white/40">{activity.time}</p>
                      </div>
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        activity.points > 0 ? "text-[var(--ella)]" : "text-[var(--accent)]"
                      }`}
                    >
                      {activity.points > 0 ? "+" : ""}
                      {activity.points}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom nav hint */}
            <div className="h-8 flex justify-center">
              <div className="w-32 h-1 bg-white/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Points badge component for other uses
export function PointsBadge({ points }: { points: number }) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[var(--accent)]/20 to-[var(--theo)]/20 border border-[var(--accent)]/30">
      <Star className="w-4 h-4 text-[var(--gold)]" fill="currentColor" />
      <span className="text-sm font-semibold text-white">{points.toLocaleString()}</span>
      <span className="text-xs text-white/60">pts</span>
    </div>
  )
}
