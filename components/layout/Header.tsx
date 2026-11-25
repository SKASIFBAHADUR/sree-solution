"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronDown, 
  Menu, 
  X, 
  PhoneCall, 
  ShieldAlert, 
  Languages, 
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { navigationItems, contactDetails } from "@/data/siteContent";
import { Container } from "../common/Container";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "te">("en");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Alert & Mission Bar */}
      <div className="bg-[#063D25] text-white py-1.5 px-4 text-xs font-medium border-b border-[#07552F]/40">
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[#F28C16] font-semibold tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F28C16] animate-pulse" />
              PEOPLE-FIRST INITIATIVE
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="hidden sm:inline text-white/80 italic font-serif">
              Educate. Encourage. Empower My Country.
            </span>
          </div>

          <div className="flex items-center gap-4 text-white/90">
            <a 
              href={`tel:${contactDetails.phoneRaw}`} 
              className="flex items-center gap-1.5 hover:text-[#F28C16] transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#F28C16]" />
              <span className="hidden md:inline">Helpline:</span>
              <span className="font-semibold">{contactDetails.phone}</span>
            </a>
            <span className="text-white/40">|</span>
            <button
              onClick={() => setLanguage(l => l === "en" ? "te" : "en")}
              className="flex items-center gap-1 hover:text-[#F28C16] transition-colors bg-white/10 px-2 py-0.5 rounded text-xs font-semibold"
              title="Toggle Language"
            >
              <Languages className="w-3 h-3 text-[#F28C16]" />
              <span>{language === "en" ? "తెలుగు" : "English"}</span>
            </button>
          </div>
        </Container>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`bg-white transition-all duration-300 border-b ${
          isScrolled 
            ? "shadow-md py-2.5 border-[#DDE5DC]" 
            : "py-3.5 border-transparent"
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Logo & Identity */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo.png"
              alt="SREE SOLUTIONS Logo"
              width={180}
              height={56}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation — Home only */}
          <div className="hidden xl:flex items-center gap-1">
            <Link
              href="#hero"
              className="px-3 py-2 text-sm font-semibold rounded-md transition-colors text-[#202821] hover:text-[#07552F] hover:bg-[#F7F7F2]"
            >
              Home
            </Link>
          </div>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold rounded-lg bg-[#F28C16] text-white hover:bg-[#D97706] shadow-sm hover:shadow transition-all duration-200 active:scale-95 gap-1.5"
            >
              <span>Talk to SREE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <Link
              href="#contact"
              className="px-3 py-1.5 text-xs font-bold rounded-md bg-[#F28C16] text-white hover:bg-[#D97706]"
            >
              Talk to SREE
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#202821] hover:bg-[#E8EFE7] focus:outline-none focus:ring-2 focus:ring-[#07552F]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[90px] bg-black/40 backdrop-blur-sm z-40 animate-in fade-in">
          <div className="bg-white h-full max-h-[calc(100vh-90px)] overflow-y-auto p-5 shadow-2xl flex flex-col justify-between max-w-md ml-auto border-l border-[#DDE5DC]">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E8EFE7]">
                <span className="text-xs font-bold tracking-widest text-[#5A655C] uppercase">
                  Navigation Menu
                </span>
                <span className="text-xs text-[#07552F] font-bold">Vijayawada, AP</span>
              </div>

              <div className="space-y-1">
                {navigationItems.map((item) => (
                  <div key={item.name} className="py-1">
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-2 text-base font-semibold text-[#202821] hover:text-[#07552F] border-b border-gray-100"
                    >
                      <span className="flex items-center gap-2">
                        {item.name === "SREE Grievance System" && (
                          <ShieldAlert className="w-4 h-4 text-[#F28C16]" />
                        )}
                        {item.name}
                      </span>
                      {item.badge && (
                        <span className="text-[10px] bg-[#F28C16] text-white px-2 py-0.5 rounded-full font-bold">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                    {item.children && (
                      <div className="pl-4 py-2 space-y-1 bg-[#F7F7F2] rounded-lg mt-1 max-h-48 overflow-y-auto">
                        <span className="text-[11px] font-bold text-[#5A655C] uppercase block mb-1">
                          All 17 Services
                        </span>
                        {item.children.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-xs text-[#202821] hover:text-[#07552F]"
                          >
                            • {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E8EFE7] space-y-3 mt-6">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-lg bg-[#F28C16] text-white font-bold text-center block shadow hover:bg-[#D97706]"
              >
                Talk to SREE Helpline
              </Link>
              <div className="text-center text-xs text-[#5A655C]">
                Phone: <span className="font-bold text-[#202821]">{contactDetails.phone}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
