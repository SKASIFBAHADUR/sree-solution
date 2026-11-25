import React from "react";
import Link from "next/link";
import { 
  PhoneCall, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Mail, 
  ShieldCheck,
  ArrowRight,
  Send
} from "lucide-react";
import { Container } from "../common/Container";
import { PrimaryButton } from "../common/PrimaryButton";
import { contactDetails } from "@/data/siteContent";

export function FinalCTA() {
  return (
    <section id="contact" className="py-20 bg-[#07552F] text-white relative overflow-hidden border-b-2 border-[#F28C16]">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F28C16]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/40 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#F28C16] text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#F28C16] animate-pulse" />
            <span>WE ARE HERE TO HELP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
            TELL US WHAT YOU <span className="text-[#F28C16]">NEED HELP WITH.</span>
          </h2>

          <p className="text-base sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Whatever your concern or requirement, start by telling us what you need. Our team in Vijayawada can guide you towards the appropriate next step.
          </p>

          {/* Action Conversion Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <PrimaryButton
              href={`tel:${contactDetails.phoneRaw}`}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto font-bold shadow-xl text-base"
            >
              <PhoneCall className="w-5 h-5 mr-2" />
              <span>Contact SREE ({contactDetails.phone})</span>
            </PrimaryButton>

            <PrimaryButton
              href={contactDetails.whatsappUrl}
              external={true}
              variant="white"
              size="lg"
              className="w-full sm:w-auto font-bold text-base"
            >
              <MessageSquare className="w-5 h-5 mr-2 text-[#25D366]" />
              <span>WhatsApp Us Directly</span>
            </PrimaryButton>
          </div>

          {/* Office Quick Card */}
          <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-[#F28C16] uppercase">
                <MapPin className="w-4 h-4" />
                <span>Vijayawada Centre</span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed">
                {contactDetails.address}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-[#F28C16] uppercase">
                <Clock className="w-4 h-4" />
                <span>Working Hours</span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed">
                {contactDetails.operatingHours}
              </p>
              <div className="text-[11px] text-[#F28C16]">
                Walk-ins & Assisted Sessions Available
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-[#F28C16] uppercase">
                <Mail className="w-4 h-4" />
                <span>Official Channels</span>
              </div>
              <div className="text-xs text-white/80">
                Email: <a href={`mailto:${contactDetails.email}`} className="underline hover:text-white">{contactDetails.email}</a>
              </div>
              <div className="text-xs text-white/80">
                Web: <span className="font-semibold">{contactDetails.website}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 text-xs text-white/60">
            Educate. Encourage. Empower My Country. • Vijayawada, Andhra Pradesh, India
          </div>

        </div>
      </Container>
    </section>
  );
}
