import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  UserCheck, 
  Quote, 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";

export function FounderSection() {
  return (
    <section id="about" className="py-20 bg-white border-b border-[#DDE5DC]">
      <Container>
        {/* Header */}
        <div className="mb-14">
          <SectionHeading
            eyebrow="LEADERSHIP & MISSION"
            title="A MISSION BUILT AROUND PEOPLE."
            highlightWords={["AROUND PEOPLE."]}
            description="Founded on the conviction that every human being deserves honest guidance, procedural dignity, and unconditional respect."
          />
        </div>

        {/* Founder Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#F7F7F2] border border-[#DDE5DC] p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Visual Portrait / Verified Avatar Area */}
            <div className="md:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden bg-[#07552F] border-4 border-white shadow-xl flex flex-col items-center justify-center p-4 text-white">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center text-3xl font-extrabold text-[#F28C16] mb-2">
                  MA
                </div>
                <div className="text-base font-black">Murali Aarigi</div>
                <div className="text-xs text-white/80">Founder & CEO</div>
                <div className="mt-2 text-[10px] font-semibold bg-white/20 px-2.5 py-0.5 rounded text-white/90">
                  Vijayawada, AP
                </div>
              </div>

              {/* Portrait Disclosure Notice */}
              <div className="mt-3 text-[11px] text-[#5A655C] max-w-xs text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#07552F]" />
                <span>Verified Executive Profile • SREE SOLUTIONS</span>
              </div>
            </div>

            {/* Founder Message & Credentials */}
            <div className="md:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8EFE7] text-[#07552F] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#F28C16]" />
                <span>Founder's Message</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-black text-[#202821] tracking-tight">
                  Murali Aarigi
                </h3>
                <div className="text-sm font-bold text-[#07552F]">
                  Founder & CEO, SREE SOLUTIONS
                </div>
              </div>

              <blockquote className="border-l-4 border-[#F28C16] pl-4 italic text-sm sm:text-base text-[#202821] font-medium leading-relaxed">
                "In my journey working closely with contract workers, rural families, and young graduates, I saw that the greatest obstacle people face is not lack of desire — it is lack of honest guidance. SREE SOLUTIONS exists to bridge that divide with integrity, transparency, and deep respect."
              </blockquote>

              <p className="text-xs sm:text-sm text-[#5A655C] leading-relaxed">
                Under Murali Aarigi's leadership, SREE SOLUTIONS has focused on grassroots assistance — guiding contract employees on statutory dues, mentoring students for legitimate career paths, and helping farming communities access rightful welfare entitlements.
              </p>

              {/* Verified Principles */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#DDE5DC] text-xs font-semibold text-[#202821]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#07552F]" />
                  <span>Grassroots Empathy</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#07552F]" />
                  <span>Zero Misinformation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#07552F]" />
                  <span>Dignity for All</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#07552F]" />
                  <span>Actionable Guidance</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
