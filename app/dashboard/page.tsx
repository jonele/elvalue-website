"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Building2,
  CreditCard,
  TrendingUp,
  TrendingDown,
  Receipt,
  Wallet,
  Calendar,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  Banknote,
  PiggyBank,
  BarChart3,
  Clock,
} from "lucide-react"

// Mock venue data
const VENUES = [
  { id: "all", name: "All Venues", icon: "🏢" },
  { id: "santanna", name: "Santanna Mykonos", icon: "🏖️" },
  { id: "frankie", name: "Frankie Athens", icon: "🍸" },
  { id: "amorous-ath", name: "Amorous Athens", icon: "🌹" },
  { id: "amorous-ibz", name: "Amorous Ibiza", icon: "🌴" },
  { id: "niceneasy-pyrgos", name: "Niceneasy Pyrgos", icon: "🗼" },
  { id: "niceneasy-ath", name: "Niceneasy Athens", icon: "🏛️" },
  { id: "niceneasy-myk", name: "Niceneasy Mykonos", icon: "☀️" },
]

// Payment providers with colors
const PAYMENT_PROVIDERS = {
  optima: { name: "Optima Bank", color: "#1e40af", icon: "🏦" },
  viva: { name: "Viva Wallet", color: "#f97316", icon: "💳" },
  piraeus: { name: "Piraeus Bank", color: "#059669", icon: "🏛️" },
  stripe: { name: "Stripe", color: "#6366f1", icon: "⚡" },
  cash: { name: "Cash", color: "#71717a", icon: "💵" },
}

// Mock data per venue
const VENUE_DATA: Record<string, {
  revenue: { optima: number; viva: number; piraeus: number; stripe: number; cash: number };
  transactions: number;
  preBookings: number;
  preBookingsValue: number;
  zReport: number;
  cashDeclared: number;
}> = {
  santanna: {
    revenue: { optima: 45200, viva: 38500, piraeus: 22800, stripe: 67500, cash: 12400 },
    transactions: 342,
    preBookings: 28,
    preBookingsValue: 142000,
    zReport: 186400,
    cashDeclared: 12400,
  },
  frankie: {
    revenue: { optima: 12300, viva: 18200, piraeus: 8900, stripe: 15600, cash: 8200 },
    transactions: 187,
    preBookings: 5,
    preBookingsValue: 4500,
    zReport: 63200,
    cashDeclared: 8150,
  },
  "amorous-ath": {
    revenue: { optima: 8700, viva: 12400, piraeus: 5600, stripe: 9800, cash: 4300 },
    transactions: 134,
    preBookings: 3,
    preBookingsValue: 2400,
    zReport: 40800,
    cashDeclared: 4300,
  },
  "amorous-ibz": {
    revenue: { optima: 28900, viva: 35200, piraeus: 18700, stripe: 52400, cash: 9800 },
    transactions: 256,
    preBookings: 15,
    preBookingsValue: 78500,
    zReport: 145000,
    cashDeclared: 9750,
  },
  "niceneasy-pyrgos": {
    revenue: { optima: 6200, viva: 9800, piraeus: 4100, stripe: 7200, cash: 5600 },
    transactions: 98,
    preBookings: 2,
    preBookingsValue: 1200,
    zReport: 32900,
    cashDeclared: 5600,
  },
  "niceneasy-ath": {
    revenue: { optima: 9400, viva: 14200, piraeus: 6800, stripe: 11500, cash: 6100 },
    transactions: 145,
    preBookings: 4,
    preBookingsValue: 3200,
    zReport: 48000,
    cashDeclared: 6050,
  },
  "niceneasy-myk": {
    revenue: { optima: 18600, viva: 24300, piraeus: 12100, stripe: 31200, cash: 7800 },
    transactions: 198,
    preBookings: 8,
    preBookingsValue: 24000,
    zReport: 94000,
    cashDeclared: 7800,
  },
}

// Calculate totals for "all venues"
function calculateTotals() {
  const totals = {
    revenue: { optima: 0, viva: 0, piraeus: 0, stripe: 0, cash: 0 },
    transactions: 0,
    preBookings: 0,
    preBookingsValue: 0,
    zReport: 0,
    cashDeclared: 0,
  }

  Object.values(VENUE_DATA).forEach(venue => {
    totals.revenue.optima += venue.revenue.optima
    totals.revenue.viva += venue.revenue.viva
    totals.revenue.piraeus += venue.revenue.piraeus
    totals.revenue.stripe += venue.revenue.stripe
    totals.revenue.cash += venue.revenue.cash
    totals.transactions += venue.transactions
    totals.preBookings += venue.preBookings
    totals.preBookingsValue += venue.preBookingsValue
    totals.zReport += venue.zReport
    totals.cashDeclared += venue.cashDeclared
  })

  return totals
}

// Mock transactions
const RECENT_TRANSACTIONS = [
  { id: 1, venue: "Santanna Mykonos", amount: 5200, provider: "stripe", type: "Pre-booking", table: "VIP 01", date: "2026-02-02 14:32", status: "completed" },
  { id: 2, venue: "Santanna Mykonos", amount: 5000, provider: "stripe", type: "Pre-booking", table: "VIP 03", date: "2026-02-02 13:45", status: "completed" },
  { id: 3, venue: "Frankie Athens", amount: 342, provider: "viva", type: "Sale", table: "T12", date: "2026-02-02 13:22", status: "completed" },
  { id: 4, venue: "Amorous Ibiza", amount: 4800, provider: "stripe", type: "Pre-booking", table: "Beach 05", date: "2026-02-02 12:58", status: "pending" },
  { id: 5, venue: "Niceneasy Mykonos", amount: 187, provider: "optima", type: "Sale", table: "B4", date: "2026-02-02 12:41", status: "completed" },
  { id: 6, venue: "Santanna Mykonos", amount: 5500, provider: "piraeus", type: "Pre-booking", table: "VIP 07", date: "2026-02-02 12:15", status: "completed" },
  { id: 7, venue: "Niceneasy Athens", amount: 95, provider: "viva", type: "Sale", table: "A2", date: "2026-02-02 11:58", status: "completed" },
  { id: 8, venue: "Amorous Athens", amount: 156, provider: "optima", type: "Sale", table: "T8", date: "2026-02-02 11:32", status: "completed" },
]

// Pre-bookings for August
const UPCOMING_PREBOOKINGS = [
  { id: 1, venue: "Santanna Mykonos", guest: "M. Papadopoulos", table: "VIP 01", date: "2026-08-15", event: "Black Coffee", amount: 5200, paid: true },
  { id: 2, venue: "Santanna Mykonos", guest: "A. Konstantinou", table: "VIP 03", date: "2026-08-15", event: "Black Coffee", amount: 5000, paid: true },
  { id: 3, venue: "Santanna Mykonos", guest: "N. Georgiou", table: "VIP 07", date: "2026-08-15", event: "Black Coffee", amount: 5500, paid: true },
  { id: 4, venue: "Santanna Mykonos", guest: "K. Dimitriou", table: "Beach 12", date: "2026-08-16", event: "Weekend Party", amount: 3500, paid: true },
  { id: 5, venue: "Amorous Ibiza", guest: "J. Martinez", table: "Beach 05", date: "2026-08-20", event: "Sunset Session", amount: 4800, paid: false },
  { id: 6, venue: "Santanna Mykonos", guest: "S. Nikolaou", table: "VIP 02", date: "2026-08-22", event: "Keinemusik", amount: 6000, paid: true },
]

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("el-GR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

function formatNumber(num: number) {
  return new Intl.NumberFormat("el-GR").format(num)
}

export default function DashboardPage() {
  const [selectedVenue, setSelectedVenue] = useState("all")
  const [venueDropdownOpen, setVenueDropdownOpen] = useState(false)

  const currentVenue = VENUES.find(v => v.id === selectedVenue)
  const data = selectedVenue === "all" ? calculateTotals() : VENUE_DATA[selectedVenue]

  const totalRevenue = data.revenue.optima + data.revenue.viva + data.revenue.piraeus + data.revenue.stripe + data.revenue.cash
  const digitalRevenue = data.revenue.optima + data.revenue.viva + data.revenue.piraeus + data.revenue.stripe
  const cashVariance = data.cashDeclared - data.revenue.cash

  return (
    <div className="min-h-screen bg-[#0a0a12] pt-20">
      {/* Header */}
      <div className="border-b border-white/5 bg-[#0a0a12]/80 backdrop-blur-xl sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-white">Financial Dashboard</h1>
                <p className="text-white/40 text-sm">Real-time reconciliation & analytics</p>
              </div>
            </div>

            {/* Venue Selector */}
            <div className="relative">
              <button
                onClick={() => setVenueDropdownOpen(!venueDropdownOpen)}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
              >
                <span className="text-xl">{currentVenue?.icon}</span>
                <span className="text-white font-medium">{currentVenue?.name}</span>
                <ChevronDown className={`w-4 h-4 text-white/50 transition-transform ${venueDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {venueDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-64 rounded-xl bg-[#16161f] border border-white/10 shadow-2xl overflow-hidden z-50"
                >
                  {VENUES.map(venue => (
                    <button
                      key={venue.id}
                      onClick={() => {
                        setSelectedVenue(venue.id)
                        setVenueDropdownOpen(false)
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors ${
                        selectedVenue === venue.id ? "bg-emerald-500/10 text-emerald-400" : "text-white"
                      }`}
                    >
                      <span className="text-xl">{venue.icon}</span>
                      <span className="font-medium">{venue.name}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Revenue Overview Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {/* Total Revenue */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-2 p-5 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/20"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-emerald-400 text-sm font-medium">Total Revenue</span>
              <div className="flex items-center gap-1 text-emerald-400 text-xs">
                <ArrowUpRight className="w-3 h-3" />
                +12.4%
              </div>
            </div>
            <p className="text-3xl font-bold text-white">{formatCurrency(totalRevenue)}</p>
            <p className="text-white/40 text-sm mt-1">{formatNumber(data.transactions)} transactions</p>
          </motion.div>

          {/* Payment Provider Cards */}
          {(Object.entries(PAYMENT_PROVIDERS) as [string, { name: string; color: string; icon: string }][])
            .filter(([key]) => key !== "cash")
            .map(([key, provider], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{provider.icon}</span>
                  <span className="text-white/60 text-xs font-medium truncate">{provider.name}</span>
                </div>
                <p className="text-xl font-bold text-white">{formatCurrency(data.revenue[key as keyof typeof data.revenue])}</p>
                <div
                  className="mt-2 h-1 rounded-full bg-white/10"
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${(data.revenue[key as keyof typeof data.revenue] / digitalRevenue) * 100}%`,
                      backgroundColor: provider.color,
                    }}
                  />
                </div>
              </motion.div>
            ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Transactions & Reconciliation */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cash Reconciliation Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <Banknote className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-white">Cash Reconciliation</h2>
                    <p className="text-white/40 text-sm">Z Report vs Declared Cash</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium">
                  Today
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white/5">
                  <p className="text-white/50 text-sm mb-1">Z Report Total</p>
                  <p className="text-2xl font-bold text-white">{formatCurrency(data.zReport)}</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5">
                  <p className="text-white/50 text-sm mb-1">Cash Declared</p>
                  <p className="text-2xl font-bold text-white">{formatCurrency(data.cashDeclared)}</p>
                </div>
                <div className={`p-4 rounded-xl ${cashVariance === 0 ? "bg-emerald-500/10" : cashVariance > 0 ? "bg-emerald-500/10" : "bg-red-500/10"}`}>
                  <p className="text-white/50 text-sm mb-1">Variance</p>
                  <div className="flex items-center gap-2">
                    {cashVariance === 0 ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : cashVariance < 0 ? (
                      <AlertCircle className="w-5 h-5 text-red-400" />
                    ) : (
                      <ArrowUpRight className="w-5 h-5 text-emerald-400" />
                    )}
                    <p className={`text-2xl font-bold ${cashVariance === 0 ? "text-emerald-400" : cashVariance > 0 ? "text-emerald-400" : "text-red-400"}`}>
                      {cashVariance === 0 ? "OK" : formatCurrency(Math.abs(cashVariance))}
                    </p>
                  </div>
                </div>
              </div>

              {/* Digital Payments Breakdown */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-white/50 text-sm mb-4">Digital Payments (Auto-Reconciled)</p>
                <div className="grid grid-cols-4 gap-3">
                  {(Object.entries(PAYMENT_PROVIDERS) as [string, { name: string; color: string; icon: string }][])
                    .filter(([key]) => key !== "cash")
                    .map(([key, provider]) => (
                      <div key={key} className="flex items-center gap-2 p-2 rounded-lg bg-white/5">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: provider.color }} />
                        <span className="text-white/70 text-xs">{formatCurrency(data.revenue[key as keyof typeof data.revenue])}</span>
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 ml-auto" />
                      </div>
                    ))}
                </div>
              </div>
            </motion.div>

            {/* Recent Transactions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Receipt className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-white">Recent Transactions</h2>
                    <p className="text-white/40 text-sm">All payment methods</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {RECENT_TRANSACTIONS.filter(tx => selectedVenue === "all" || tx.venue.toLowerCase().includes(selectedVenue.replace("-", " "))).slice(0, 6).map((tx) => (
                  <div
                    key={tx.id}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${PAYMENT_PROVIDERS[tx.provider as keyof typeof PAYMENT_PROVIDERS].color}20` }}
                      >
                        <span>{PAYMENT_PROVIDERS[tx.provider as keyof typeof PAYMENT_PROVIDERS].icon}</span>
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{tx.venue}</p>
                        <p className="text-white/40 text-xs">{tx.type} • {tx.table} • {tx.date.split(" ")[1]}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold">{formatCurrency(tx.amount)}</p>
                      <p className={`text-xs ${tx.status === "completed" ? "text-emerald-400" : "text-amber-400"}`}>
                        {tx.status === "completed" ? "✓ Completed" : "⏳ Pending"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Pre-bookings */}
          <div className="space-y-6">
            {/* Pre-bookings Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/20 to-violet-500/5 border border-violet-500/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white">Pre-Bookings</h2>
                  <p className="text-white/40 text-sm">Already paid reservations</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 rounded-xl bg-white/5">
                  <p className="text-white/50 text-xs mb-1">Total Bookings</p>
                  <p className="text-2xl font-bold text-white">{data.preBookings}</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5">
                  <p className="text-white/50 text-xs mb-1">Pre-Paid Value</p>
                  <p className="text-2xl font-bold text-violet-400">{formatCurrency(data.preBookingsValue)}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10">
                <PiggyBank className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-medium">Secured revenue for August</span>
              </div>
            </motion.div>

            {/* Upcoming Pre-bookings List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">August Events</h3>
                <span className="text-white/40 text-xs">VIP Tables</span>
              </div>

              <div className="space-y-3">
                {UPCOMING_PREBOOKINGS.filter(pb => selectedVenue === "all" || pb.venue.toLowerCase().includes(selectedVenue.replace("-", " "))).slice(0, 5).map((booking) => (
                  <div
                    key={booking.id}
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium text-sm">{booking.guest}</span>
                      <span className="text-violet-400 font-semibold">{formatCurrency(booking.amount)}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/40">{booking.table} • {booking.event}</span>
                      {booking.paid ? (
                        <span className="flex items-center gap-1 text-emerald-400">
                          <CheckCircle2 className="w-3 h-3" /> Paid
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-amber-400">
                          <Clock className="w-3 h-3" /> Pending
                        </span>
                      )}
                    </div>
                    <div className="mt-2 text-xs text-white/30">{booking.venue} • {booking.date}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <h3 className="text-white font-semibold mb-4">Payment Mix</h3>
              <div className="space-y-3">
                {(Object.entries(PAYMENT_PROVIDERS) as [string, { name: string; color: string; icon: string }][]).map(([key, provider]) => {
                  const amount = data.revenue[key as keyof typeof data.revenue]
                  const percentage = ((amount / totalRevenue) * 100).toFixed(1)
                  return (
                    <div key={key} className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${provider.color}20` }}
                      >
                        <span className="text-sm">{provider.icon}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-white/70 text-sm">{provider.name}</span>
                          <span className="text-white text-sm font-medium">{percentage}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: `${percentage}%`,
                              backgroundColor: provider.color,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
