import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  ShieldAlert, 
  CheckCircle2, 
  Users, 
  Sparkles,
} from "lucide-react";
import { Container } from "../common/Container";
import { PrimaryButton } from "../common/PrimaryButton";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-[#E8EFE7]/50 via-[#F7F7F2] to-[#F7F7F2] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#DDE5DC]">
      {/* Subtle tricolour curve aesthetic - sophisticated & human */}
      <div className="absolute top-0 right-0 w-1/2 h-96 bg-gradient-to-bl from-[#F28C16]/10 via-transparent to-transparent pointer-events-none rounded-bl-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-80 bg-gradient-to-tr from-[#07552F]/10 via-transparent to-transparent pointer-events-none rounded-tr-full blur-3xl" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Message & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8EFE7] border border-[#07552F]/20 text-[#07552F]">
              <span className="w-2 h-2 rounded-full bg-[#F28C16] animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase">
                A People-First Initiative • Vijayawada, AP
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-black tracking-tight text-[#202821] leading-[1.08]">
                WE SERVE <span className="text-[#07552F]">PEOPLE.</span><br />
                <span className="text-[#F28C16] underline decoration-4 decoration-[#F28C16]/40 underline-offset-8">
                  NOT THEIR STATUS.
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl font-bold text-[#07552F] pt-2">
                Your Problem Matters. Your Voice Matters. We Are Here to Help.
              </p>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#5A655C] leading-relaxed max-w-2xl font-normal">
              We believe every person deserves the right guidance, respect, and opportunity. SREE SOLUTIONS works to connect individuals, employees, youth, and farmers with the support and verified information they need.
            </p>

            {/* Mission Statement Pill */}
            <div className="p-4 rounded-xl bg-white border border-[#DDE5DC] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#07552F]/10 flex items-center justify-center text-[#07552F] shrink-0">
                  <Sparkles className="w-4 h-4 text-[#F28C16]" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#5A655C] uppercase tracking-wider">
                    Our Unwavering Creed
                  </div>
                  <div className="text-sm font-extrabold text-[#07552F] tracking-wide">
                    EDUCATE. ENCOURAGE. EMPOWER MY COUNTRY.
                  </div>
                </div>
              </div>

              <div className="text-xs font-medium text-[#202821] bg-[#F7F7F2] px-3 py-1.5 rounded-lg border border-[#E8EFE7]">
                Founder & CEO: <span className="font-bold">Murali Aarigi</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <PrimaryButton
                href="#services"
                variant="primary"
                size="lg"
                icon={true}
                className="shadow-md hover:shadow-lg"
              >
                Explore Our Services
              </PrimaryButton>

              <PrimaryButton
                href="#grievance"
                variant="outline"
                size="lg"
                className="bg-white/80 hover:bg-white"
              >
                <ShieldAlert className="w-5 h-5 text-[#F28C16] mr-1.5" />
                <span>Submit a Grievance</span>
              </PrimaryButton>
            </div>

            {/* Pillars micro-bar */}
            <div className="pt-4 border-t border-[#DDE5DC]/70 grid grid-cols-3 gap-2 text-xs font-medium text-[#5A655C]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#07552F] shrink-0" />
                <span>Voice to Voiceless</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#07552F] shrink-0" />
                <span>Guidance to Youth</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#07552F] shrink-0" />
                <span>Backbone to Farmers</span>
              </div>
            </div>

          </div>

          {/* Right Column: Logo Display */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none flex items-center justify-center">
              {/* Outer decorative halo */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-[#07552F]/20 via-[#E8EFE7]/30 to-[#F28C16]/20 blur-3xl pointer-events-none" />

              {/* Logo Container */}
              <div className="relative z-10 p-6 sm:p-10 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/80 shadow-xl">
                <Image
                  src="/images/logo.png"
                  alt="SREE SOLUTIONS — Educate. Encourage. Empower My Country."
                  width={420}
                  height={280}
                  priority
                  className="w-full h-auto object-contain max-w-xs sm:max-w-sm lg:max-w-md"
                />

                {/* Tagline below logo */}
                <div className="mt-5 text-center">
                  <p className="text-[#07552F] font-black text-sm sm:text-base tracking-widest uppercase">
                    Educate. Encourage. Empower My Country.
                  </p>
                  <div className="mt-2 flex items-center justify-center gap-2 text-xs text-[#5A655C]">
                    <span className="w-8 h-px bg-[#DDE5DC]" />
                    <span>Vijayawada, Andhra Pradesh, India</span>
                    <span className="w-8 h-px bg-[#DDE5DC]" />
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-3 -right-3 sm:-right-4 bg-white py-2 px-3.5 rounded-xl shadow-lg border border-[#DDE5DC] flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#07552F] flex items-center justify-center text-white font-bold text-xs">
                  AP
                </div>
                <div>
                  <div className="text-[10px] text-[#5A655C] uppercase font-bold">HQ</div>
                  <div className="text-xs font-black text-[#07552F]">Vijayawada</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
