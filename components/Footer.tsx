import Link from "next/link"
import Image from "next/image"
import { MapPin, Mail } from "lucide-react"

const products = [
  { name: "EL-OS", href: "https://el-os.cloud", description: "B2B Portal" },
  { name: "EL-Loyal", href: "https://el-loyal.com", description: "Loyalty Platform" },
  { name: "RSRV", href: "https://el-rsrv.com", description: "Reservations" },
  { name: "EL-POS", href: "/products#el-pos", description: "POS System" },
  { name: "EveY", href: "/evey", description: "Personal AI" },
  { name: "Extratzis", href: "https://extratzis.gr", description: "Digital Menu" },
]

const company = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Pricing", href: "/pricing" },
  { name: "Careers", href: "/contact" },
  { name: "Open Viva Account", href: "https://www.viva.com/el-gr/onboarding?utm_source=partners&utm_medium=isv&utm_campaign=grelvalue01212025&utm_content=aml_soft____&rep=true" },
]

export function Footer() {
  return (
    <footer className="border-t border-[var(--glass-border)]">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-xl font-bold text-white">
              EL <span className="gradient-text">VALUE</span>
            </span>
            <p className="mt-4 text-small leading-relaxed">
              The Future of Hospitality, Powered by AI.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-small">
                <MapPin size={16} className="text-[var(--text-subtle)] flex-shrink-0" />
                <span>Limassol, Cyprus</span>
              </div>
              <div className="flex items-center gap-3 text-small">
                <Mail size={16} className="text-[var(--text-subtle)] flex-shrink-0" />
                <a href="mailto:hi@elvalue.com" className="hover:text-white transition-colors">
                  hi@elvalue.com
                </a>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-caption mb-5">Products</h4>
            <ul className="space-y-3">
              {products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group text-small hover:text-white transition-colors flex items-baseline gap-2"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                  >
                    <span className="font-medium text-[var(--text-secondary)] group-hover:text-white">
                      {item.name}
                    </span>
                    <span className="text-[var(--text-subtle)] text-xs">
                      {item.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-caption mb-5">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    className="text-small hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Team */}
          <div>
            <h4 className="text-caption mb-5">Meet Our AI Team</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--ella)] to-emerald-600 flex items-center justify-center overflow-hidden shadow-lg shadow-[var(--ella)]/10">
                  <Image
                    src="/images/ella_avatar.png"
                    alt="Ella"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Ella</p>
                  <p className="text-xs text-[var(--text-subtle)]">Customer Loyalty AI</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--theo)] to-blue-600 flex items-center justify-center shadow-lg shadow-[var(--theo)]/10">
                  <span className="text-lg">🙋‍♂️</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Theo</p>
                  <p className="text-xs text-[var(--text-subtle)]">Staff Operations AI</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[var(--glass-border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--text-subtle)]">
            &copy; {new Date().getFullYear()} EL VALUE CYPRUS LTD. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-[var(--text-muted)]">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
