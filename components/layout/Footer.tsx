import React from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  ShieldCheck, 
  Heart,
  ArrowUpRight,
  MessageSquare
} from "lucide-react";
import { contactDetails, navigationItems, serviceCategories } from "@/data/siteContent";
import { Container } from "../common/Container";

export function Footer() {
  return (
    <footer className="bg-[#063D25] text-white pt-16 pb-12 border-t-4 border-[#F28C16]">
      <Container>
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#07552F] border border-white/20 flex items-center justify-center text-white font-extrabold text-xl shadow-sm">
                <span>S</span>
                <span className="text-[#F28C16] text-sm ml-0.5">✦</span>
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                SREE <span className="text-[#F28C16]">SOLUTIONS</span>
              </span>
            </div>

            <p className="text-sm text-white/80 leading-relaxed max-w-sm">
              We serve people, not their status. A dedicated citizen-support, statutory facilitation, and empowerment initiative headquartered in Vijayawada, Andhra Pradesh.
            </p>

            <div className="p-3.5 bg-white/5 rounded-lg border border-white/10 text-xs text-white/70 space-y-1">
              <div className="text-[#F28C16] font-bold tracking-wide uppercase">
                Founder & CEO: Murali Aarigi
              </div>
              <div>Educate. Encourage. Empower My Country.</div>
            </div>

            <div className="pt-2">
              <a
                href={contactDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp Official</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold tracking-wider uppercase text-[#F28C16]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#F28C16] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="text-white/40 group-hover:text-[#F28C16]">›</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold tracking-wider uppercase text-[#F28C16]">
              Key Service Areas
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              {serviceCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={cat.link}
                    className="hover:text-[#F28C16] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="text-white/40 group-hover:text-[#F28C16]">›</span>
                    <span className="line-clamp-1">{cat.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold tracking-wider uppercase text-[#F28C16]">
              Vijayawada Head Office
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F28C16] shrink-0 mt-1" />
                <span>{contactDetails.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F28C16] shrink-0" />
                <a href={`tel:${contactDetails.phoneRaw}`} className="hover:text-white font-semibold">
                  {contactDetails.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F28C16] shrink-0" />
                <a href={`mailto:${contactDetails.email}`} className="hover:text-white">
                  {contactDetails.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#F28C16] shrink-0" />
                <span>{contactDetails.website}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Institutional Clarification Disclaimer */}
        <div className="py-6 border-b border-white/10 text-[11px] sm:text-xs text-white/60 leading-relaxed space-y-2">
          <div className="flex items-center gap-1.5 font-bold text-white/80 uppercase tracking-wide">
            <ShieldCheck className="w-4 h-4 text-[#F28C16]" />
            <span>Important Institutional Notice & Scope Disclaimer</span>
          </div>
          <p>
            SREE SOLUTIONS operates strictly as an independent citizen-support, guidance, and statutory facilitation initiative. SREE SOLUTIONS is <strong>not a government agency, department, authority, or statutory tribunal</strong>. All grievances, welfare claims, passport applications, and social security matters are submitted to and independently decided by the appropriate competent statutory authorities under law. SREE SOLUTIONS provides procedural guidance and documentation facilitation within its permitted scope; no particular official outcome, timeline, or decision is guaranteed.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <div className="flex items-center gap-1">
            <span>© 2026 SREE SOLUTIONS. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="#contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#grievance" className="hover:text-white transition-colors">Grievance Charter</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact Office</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
