import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Globe2, 
  MapPin, 
  FileCheck, 
  ShieldCheck, 
  ArrowRight,
  PlaneTakeoff,
  AlertCircle
} from "lucide-react";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { globalServicesCountries } from "@/data/siteContent";

export function GlobalServices() {
  return (
    <section id="global-services" className="py-20 bg-white border-b border-[#DDE5DC] relative overflow-hidden">
      <Container>
        {/* Header */}
        <div className="mb-14">
          <SectionHeading
            eyebrow="GLOBAL SERVICES"
            title="YOUR LOCATION SHOULD NEVER BE A BARRIER."
            highlightWords={["NEVER BE A BARRIER."]}
            description="We help eligible overseas customers access guidance and assistance for India-related documentation, EPFO, passport, and other relevant statutory matters."
          />
        </div>

        {/* Global Visual Treatment & Map Composition */}
        <div className="relative rounded-3xl overflow-hidden bg-[#063D25] text-white p-8 sm:p-10 mb-12 shadow-xl border border-[#07552F]">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F28C16] text-xs font-bold uppercase tracking-wider">
                <Globe2 className="w-4 h-4" />
                <span>International Liaison & NRI Guidance</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Connecting Global Indian Citizens with Reliable Native Assistance.
              </h3>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
                Living abroad should not make resolving documentation in India an uphill struggle. From ancestral property records to dormant PF withdrawals, our Vijayawada desk provides trustworthy facilitation.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold bg-white/10 px-3.5 py-2 rounded-lg border border-white/15">
                  <FileCheck className="w-4 h-4 text-[#F28C16]" />
                  <span>Indian EPFO & Pension Claims</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold bg-white/10 px-3.5 py-2 rounded-lg border border-white/15">
                  <ShieldCheck className="w-4 h-4 text-[#F28C16]" />
                  <span>Passport & Consular Guidance</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <Image
                  src="/images/global-map.jpg"
                  alt="Global international connectivity and connection lines"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#063D25]/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-xs text-white/90 font-medium">
                  Assisting overseas citizens across 5 key substantiated corridors.
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 5 Substantiated Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {globalServicesCountries.map((c) => (
            <div
              key={c.name}
              className="p-5 rounded-2xl bg-[#F7F7F2] border border-[#DDE5DC] hover:border-[#07552F] transition-all hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black text-white bg-[#07552F] px-2 py-0.5 rounded">
                    {c.code}
                  </span>
                  <MapPin className="w-4 h-4 text-[#F28C16]" />
                </div>

                <h4 className="text-lg font-extrabold text-[#202821]">
                  {c.name}
                </h4>

                <div className="text-[11px] font-bold text-[#07552F] mt-0.5 mb-2">
                  {c.highlight}
                </div>

                <p className="text-xs text-[#5A655C] leading-relaxed">
                  {c.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#DDE5DC]">
                <Link
                  href="#contact"
                  className="text-xs font-bold text-[#07552F] hover:text-[#F28C16] inline-flex items-center gap-1"
                >
                  <span>Request Support</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Verification & Compliance Note */}
        <div className="mt-8 p-4 rounded-xl bg-[#E8EFE7] border border-[#07552F]/20 text-xs text-[#07552F] flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-[#F28C16] shrink-0 mt-0.5" />
          <p className="leading-snug">
            <strong>Substantiated Geographic Scope: </strong>
            Countries listed reflect substantiated service and liaison inquiries handled for Indian diaspora. SREE SOLUTIONS does not claim physical branch offices or guaranteed outcomes in foreign jurisdictions without independent statutory authorization.
          </p>
        </div>
      </Container>
    </section>
  );
}
