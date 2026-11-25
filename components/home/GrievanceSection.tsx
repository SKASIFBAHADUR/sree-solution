import React from "react";
import Link from "next/link";
import { 
  ShieldAlert, 
  FileText, 
  CheckCircle2, 
  Search, 
  Send, 
  RefreshCw, 
  HelpCircle,
  AlertTriangle,
  ArrowRight
} from "lucide-react";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { PrimaryButton } from "../common/PrimaryButton";
import { grievanceSteps } from "@/data/siteContent";

export function GrievanceSection() {
  const stepIcons = [Send, Search, CheckCircle2, RefreshCw, FileText];

  return (
    <section id="grievance" className="py-20 bg-[#07552F] text-white relative overflow-hidden border-b border-[#063D25]">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F28C16]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/30 rounded-full blur-3xl pointer-events-none" />

      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F28C16] text-xs font-bold tracking-widest uppercase mb-3">
            <ShieldAlert className="w-4 h-4" />
            <span>SREE GRIEVANCE SYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-white">
            A COMPLAINT SHOULD NOT <span className="text-[#F28C16]">REMAIN UNHEARD.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
            Every worker deserves to understand their rights and benefits. SREE assists contract and outsourced employees with guidance regarding wage concerns, EPF, ESIC, pension, statutory benefits, and employment records.
          </p>
        </div>

        {/* 5-Step Process Timeline: Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative my-12">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-white/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {grievanceSteps.map((step, index) => {
              const StepIcon = stepIcons[index] || FileText;
              return (
                <div
                  key={step.step}
                  className="bg-[#063D25] rounded-xl p-5 border border-white/15 hover:border-[#F28C16]/60 transition-all duration-300 flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 group-hover:bg-[#F28C16] text-white flex items-center justify-center font-bold text-base transition-colors shadow">
                        <StepIcon className="w-5 h-5 text-[#F28C16] group-hover:text-white" />
                      </div>
                      <span className="text-xs font-black tracking-widest text-[#F28C16] bg-white/10 px-2 py-0.5 rounded">
                        STEP {step.step}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-[#F28C16] transition-colors">
                      {step.title}
                    </h4>

                    <div className="text-xs font-medium text-white/60 mb-2">
                      {step.subtitle}
                    </div>

                    <p className="text-xs text-white/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center text-[11px] font-semibold text-white/50 group-hover:text-white/90 transition-colors">
                    <span>Phase {index + 1} of 5</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-4 pb-8">
          <PrimaryButton
            href="#contact"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto font-bold shadow-lg"
          >
            Register Your Grievance
          </PrimaryButton>

          <PrimaryButton
            href="#about"
            variant="white"
            size="lg"
            className="w-full sm:w-auto font-bold"
          >
            Understand the Process
          </PrimaryButton>
        </div>

        {/* Clear Regulatory Disclaimer Box */}
        <div className="mt-8 p-4 rounded-xl bg-black/20 border border-white/15 text-xs text-white/70 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-[#F28C16] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white">Statutory Facilitation Notice: </strong>
            SREE SOLUTIONS provides facilitation and assistance within its permitted scope. Relevant authorities independently examine and decide grievances. No particular outcome or resolution is guaranteed. We do not act as an administrative government court.
          </p>
        </div>
      </Container>
    </section>
  );
}
