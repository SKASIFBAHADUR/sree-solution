import React from "react";
import Link from "next/link";
import { 
  MessageSquare, 
  ShieldCheck, 
  Star, 
  CheckCircle, 
  AlertCircle, 
  Video,
  FileText
} from "lucide-react";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#F7F7F2] border-b border-[#DDE5DC]">
      <Container>
        {/* Header */}
        <div className="mb-14">
          <SectionHeading
            eyebrow="CITIZEN EXPERIENCES"
            title="TRUST IS BUILT THROUGH PEOPLE."
            highlightWords={["THROUGH PEOPLE."]}
            description="Our service framework is designed to capture verified Google Reviews and customer-approved written & video testimonials."
          />
        </div>

        {/* Testimonials Container adhering strictly to the Anti-Fabrication Rule */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Google Reviews Container Placeholder */}
          <div className="bg-white rounded-2xl p-6 border border-[#DDE5DC] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#07552F] bg-[#E8EFE7] px-2.5 py-1 rounded">
                  Google Reviews
                </span>
                <div className="flex text-[#F28C16]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#F28C16]" />
                  ))}
                </div>
              </div>

              <h4 className="text-base font-bold text-[#202821] mb-2">
                Public Review Architecture
              </h4>

              <div className="my-4 p-4 rounded-xl bg-[#F7F7F2] border border-dashed border-[#DDE5DC] text-center space-y-2">
                <MessageSquare className="w-8 h-8 text-[#5A655C] mx-auto opacity-40" />
                <div className="text-xs font-bold text-amber-800 bg-amber-50 px-2 py-1 rounded inline-block">
                  CONTENT REQUIRED — CUSTOMER APPROVAL NEEDED
                </div>
                <p className="text-[11px] text-[#5A655C] leading-snug">
                  Live Google Business Profile reviews sync will populate here upon verified integration. No fabricated 5-star claims.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8EFE7] text-[11px] text-[#5A655C] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#07552F]" />
              <span>Direct Customer Experience Feed</span>
            </div>
          </div>

          {/* Card 2: Written Testimonial Container Placeholder */}
          <div className="bg-white rounded-2xl p-6 border border-[#DDE5DC] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#07552F] bg-[#E8EFE7] px-2.5 py-1 rounded">
                  Written Feedback
                </span>
                <FileText className="w-4 h-4 text-[#07552F]" />
              </div>

              <h4 className="text-base font-bold text-[#202821] mb-2">
                Citizen Letters & Written Acknowledgments
              </h4>

              <div className="my-4 p-4 rounded-xl bg-[#F7F7F2] border border-dashed border-[#DDE5DC] text-center space-y-2">
                <FileText className="w-8 h-8 text-[#5A655C] mx-auto opacity-40" />
                <div className="text-xs font-bold text-amber-800 bg-amber-50 px-2 py-1 rounded inline-block">
                  CONTENT REQUIRED — CUSTOMER APPROVAL NEEDED
                </div>
                <p className="text-[11px] text-[#5A655C] leading-snug">
                  Written acknowledgments from contract workers, youth, and farmers will be presented with full verifiable consent.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8EFE7] text-[11px] text-[#5A655C] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#07552F]" />
              <span>Signed Consent Records Maintained</span>
            </div>
          </div>

          {/* Card 3: Video Testimonial Placeholder */}
          <div className="bg-white rounded-2xl p-6 border border-[#DDE5DC] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#07552F] bg-[#E8EFE7] px-2.5 py-1 rounded">
                  Video Testimonials
                </span>
                <Video className="w-4 h-4 text-[#F28C16]" />
              </div>

              <h4 className="text-base font-bold text-[#202821] mb-2">
                Citizen Video Recordings
              </h4>

              <div className="my-4 p-4 rounded-xl bg-[#F7F7F2] border border-dashed border-[#DDE5DC] text-center space-y-2">
                <Video className="w-8 h-8 text-[#5A655C] mx-auto opacity-40" />
                <div className="text-xs font-bold text-amber-800 bg-amber-50 px-2 py-1 rounded inline-block">
                  CONTENT REQUIRED — CUSTOMER APPROVAL NEEDED
                </div>
                <p className="text-[11px] text-[#5A655C] leading-snug">
                  Authentic video interviews are uploaded solely upon signed media release authorizations.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8EFE7] text-[11px] text-[#5A655C] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#07552F]" />
              <span>Privacy & Legal Standards Respected</span>
            </div>
          </div>

        </div>

        {/* Ethical Standards Footer */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-[#DDE5DC] text-xs text-[#5A655C] flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-[#F28C16] shrink-0 mt-0.5" />
          <p className="leading-snug">
            <strong>Strict Authenticity Policy: </strong>
            In adherence with high ethical standards, SREE SOLUTIONS does not generate fictional review counts, fake reviewer profiles, or stock testimonial cards.
          </p>
        </div>
      </Container>
    </section>
  );
}
