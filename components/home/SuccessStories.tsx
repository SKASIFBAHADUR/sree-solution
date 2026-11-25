import React from "react";
import Link from "next/link";
import { 
  Quote, 
  FileCheck2, 
  PlayCircle, 
  ShieldCheck, 
  Users, 
  ArrowRight,
  Info
} from "lucide-react";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";

export function SuccessStories() {
  return (
    <section id="stories" className="py-20 bg-white border-b border-[#DDE5DC]">
      <Container>
        {/* Header */}
        <div className="mb-14">
          <SectionHeading
            eyebrow="REAL PEOPLE. REAL EXPERIENCES."
            title="STORIES OF PEOPLE WE HAVE HELPED."
            highlightWords={["REAL EXPERIENCES."]}
            description="Editorial perspectives on how structured guidance resolves procedural roadblocks for citizens, employees, and rural producers."
          />
        </div>

        {/* Section Content with Strict Adherence to Accuracy Guidelines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Prominent Video/Story Feature Block */}
          <div className="lg:col-span-7 bg-[#F7F7F2] rounded-2xl border border-[#DDE5DC] p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded bg-[#E8EFE7] text-[#07552F]">
                  Documentary Case Study
                </span>
                <span className="text-xs text-[#5A655C] font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-[#07552F]" />
                  Verified Case Flow
                </span>
              </div>

              {/* Video Story Feature Placeholder */}
              <div className="relative rounded-xl overflow-hidden bg-[#202821] text-white aspect-video flex flex-col items-center justify-center p-6 text-center shadow-inner border border-black/20">
                <PlayCircle className="w-14 h-14 text-[#F28C16] mb-3 opacity-90 hover:opacity-100 transition-opacity cursor-pointer" />
                <div className="text-sm font-bold tracking-wide">
                  MEDIA ARCHIVE & CITIZEN VOICE
                </div>
                <div className="mt-2 text-xs font-semibold px-3 py-1 rounded bg-white/10 text-white/80 border border-white/20">
                  CONTENT REQUIRED — CUSTOMER APPROVAL NEEDED
                </div>
                <p className="text-[11px] text-white/50 mt-2 max-w-sm">
                  Documentary video segments are published exclusively following written consent and legal privacy clearance from citizen participants.
                </p>
              </div>

              <div className="mt-6 space-y-2">
                <h3 className="text-xl font-black text-[#202821]">
                  Systematic Resolution of Unclaimed Contract PF & Statutory Benefits
                </h3>
                <p className="text-sm text-[#5A655C] leading-relaxed">
                  How a group of outsourced municipal support workers in Vijayawada accessed missing PF accumulations after 4 years of procedural non-responsiveness through structured UAN linkage.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#DDE5DC] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#5A655C]">
                Subject Matter: EPF & Outsourced Labour Rights
              </span>
              <Link
                href="#grievance"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#07552F] hover:text-[#F28C16] transition-colors"
              >
                <span>Read Facilitation Approach</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Smaller Case Study & Compliance Blocks */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Story Card 1 */}
            <div className="bg-[#F7F7F2] rounded-2xl border border-[#DDE5DC] p-6 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#07552F] uppercase">Youth Guidance</span>
                <span className="font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded text-[10px]">
                  CONTENT REQUIRED — CUSTOMER APPROVAL NEEDED
                </span>
              </div>
              <h4 className="text-base font-bold text-[#202821]">
                First-Generation College Graduate Secures Legitimate Industry Apprenticeship
              </h4>
              <p className="text-xs text-[#5A655C] leading-relaxed">
                Overcoming misinformation and fraudulent placement schemes through SREE Career Guru verification and structured resume mentoring.
              </p>
              <div className="pt-2 text-xs font-bold text-[#07552F]">
                Status: Verified Case File (Identity Protected)
              </div>
            </div>

            {/* Story Card 2 */}
            <div className="bg-[#F7F7F2] rounded-2xl border border-[#DDE5DC] p-6 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#07552F] uppercase">Kisan Dost Advisory</span>
                <span className="font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded text-[10px]">
                  CONTENT REQUIRED — CUSTOMER APPROVAL NEEDED
                </span>
              </div>
              <h4 className="text-base font-bold text-[#202821]">
                Rectification of Revenue Land Records for Tenant Farmer Subsidy Linkage
              </h4>
              <p className="text-xs text-[#5A655C] leading-relaxed">
                Step-by-step assistance in correcting Aadhaar-Patta misalignments on Meebhoomi portal enabling legitimate seasonal assistance receipt.
              </p>
              <div className="pt-2 text-xs font-bold text-[#07552F]">
                Status: Procedural Documentation Assisted
              </div>
            </div>

            {/* Transparency Note */}
            <div className="p-4 rounded-xl bg-[#E8EFE7]/60 border border-[#07552F]/20 text-xs text-[#07552F] flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#F28C16] shrink-0 mt-0.5" />
              <p className="leading-snug">
                <strong>Ethical Disclosure: </strong>
                SREE SOLUTIONS does not fabricate customer stories, display paid actor testimonials, or inflate resolution metrics. Full case studies are displayed only upon verified citizen consent.
              </p>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
