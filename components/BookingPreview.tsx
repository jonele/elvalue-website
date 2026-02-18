"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Calendar, Clock, Users, MapPin, Check, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import Image from "next/image"

const timeSlots = [
  { time: "18:00", available: true },
  { time: "18:30", available: true },
  { time: "19:00", available: false },
  { time: "19:30", available: true },
  { time: "20:00", available: true },
  { time: "20:30", available: false },
  { time: "21:00", available: true },
]

const calendarDays = [
  { day: "Mon", date: 27, available: true },
  { day: "Tue", date: 28, available: true, selected: true },
  { day: "Wed", date: 29, available: true },
  { day: "Thu", date: 30, available: false },
  { day: "Fri", date: 31, available: true },
  { day: "Sat", date: 1, available: true },
  { day: "Sun", date: 2, available: true },
]

export function BookingPreview() {
  const [selectedTime, setSelectedTime] = useState("19:30")
  const [guests, setGuests] = useState(4)
  const [step, setStep] = useState(1)

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
            background: "radial-gradient(circle at center, rgba(96, 165, 250, 0.3), transparent 70%)",
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

            {/* Header */}
            <div className="px-5 pt-2 pb-4 flex items-center justify-between">
              <div>
                <p className="text-white text-lg font-semibold">Book a Table</p>
                <p className="text-white/50 text-xs">Taverna Psara • Greek Cuisine</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--theo)] to-blue-600 flex items-center justify-center">
                <span className="text-lg">🍽️</span>
              </div>
            </div>

            {/* Calendar Strip */}
            <div className="px-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <button className="p-1 rounded-full hover:bg-white/10">
                  <ChevronLeft size={16} className="text-white/60" />
                </button>
                <p className="text-sm font-medium text-white">January 2026</p>
                <button className="p-1 rounded-full hover:bg-white/10">
                  <ChevronRight size={16} className="text-white/60" />
                </button>
              </div>
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                {calendarDays.map((day, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    disabled={!day.available}
                    className={`flex-shrink-0 w-12 py-2 rounded-xl text-center transition-all ${
                      day.selected
                        ? "bg-[var(--theo)] text-white"
                        : day.available
                        ? "bg-white/5 text-white hover:bg-white/10"
                        : "bg-white/5 text-white/30 cursor-not-allowed"
                    }`}
                  >
                    <p className="text-[10px] opacity-70">{day.day}</p>
                    <p className="text-sm font-semibold">{day.date}</p>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Time slots */}
            <div className="px-4 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={14} className="text-[var(--theo)]" />
                <p className="text-sm font-medium text-white">Select Time</p>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((slot, i) => (
                  <motion.button
                    key={slot.time}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.03 }}
                    disabled={!slot.available}
                    onClick={() => slot.available && setSelectedTime(slot.time)}
                    className={`py-2 rounded-lg text-xs font-medium transition-all ${
                      selectedTime === slot.time
                        ? "bg-[var(--theo)] text-white"
                        : slot.available
                        ? "bg-white/5 text-white hover:bg-white/10"
                        : "bg-white/5 text-white/30 line-through cursor-not-allowed"
                    }`}
                  >
                    {slot.time}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Guest selector */}
            <div className="px-4 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <Users size={14} className="text-[var(--theo)]" />
                <p className="text-sm font-medium text-white">Number of Guests</p>
              </div>
              <div className="flex items-center gap-3 justify-center py-2 bg-white/5 rounded-xl">
                <button
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white text-lg hover:bg-white/20 transition-colors"
                >
                  -
                </button>
                <div className="w-16 text-center">
                  <motion.span
                    key={guests}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-2xl font-bold text-white"
                  >
                    {guests}
                  </motion.span>
                  <p className="text-[10px] text-white/50">guests</p>
                </div>
                <button
                  onClick={() => setGuests(Math.min(12, guests + 1))}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white text-lg hover:bg-white/20 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Theo AI suggestion */}
            <div className="mx-4 mb-4 p-3 rounded-xl bg-[var(--theo)]/10 border border-[var(--theo)]/20">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--theo)] to-blue-600 flex items-center justify-center flex-shrink-0">
                  <Sparkles size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-[var(--theo)] font-medium mb-0.5">Theo suggests</p>
                  <p className="text-xs text-white/70">
                    Table by the window has a beautiful sunset view at 19:30. Perfect for {guests} guests!
                  </p>
                </div>
              </div>
            </div>

            {/* Summary & CTA */}
            <div className="px-4 pb-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-3">
                <div className="flex items-center gap-4 text-xs text-white/60 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>Jan 28</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{selectedTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={12} />
                    <span>{guests} guests</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={12} className="text-white/40" />
                  <span className="text-xs text-white/40">Plaka, Athens</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 bg-gradient-to-r from-[var(--theo)] to-blue-600 text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2"
              >
                <Check size={16} />
                Confirm Booking
              </motion.button>
            </div>

            {/* Bottom nav hint */}
            <div className="h-6 flex justify-center">
              <div className="w-32 h-1 bg-white/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
