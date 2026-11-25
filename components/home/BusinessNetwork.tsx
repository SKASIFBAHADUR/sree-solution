import React from "react";
import Link from "next/link";
import { 
  Building2, 
  ExternalLink, 
  Globe, 
  ShoppingBag, 
  Cpu, 
  ShieldCheck, 
  Info,
  CheckCircle2
} from "lucide-react";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { businessNetwork } from "@/data/siteContent";

export function BusinessNetwork() {
  const getIcon = (id: string) => {
    switch (id) {
      case "sree-solutions":
        return Building2;
      case "sree-nexus-global":
        return Globe;
      case "vexton-it":
        return Cpu;
      case "manjucart":
        return ShoppingBag;
      default:
        return Building2;
    }
  };

  return (
    <section id="network" className="py-20 bg-[#F7F7F2] border-b border-[#DDE5DC]">
      <Container>
        {/* Header */}
        <div className="mb-14">
          <SectionHeading
            eyebrow="OUR BUSINESS NETWORK"
            title="A CONNECTED NETWORK. DISTINCT AREAS OF EXPERTISE."
            highlightWords={["DISTINCT AREAS"]}
            description="Four specialized business identities operating across citizen facilitation, international mobility, global IT recruitment, and consumer commerce."
          />
        </div>

        {/* 4 Distinct Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessNetwork.map((entity) => {
            const Icon = getIcon(entity.id);

            return (
              <div
                key={entity.id}
                className={`rounded-2xl p-6 bg-white border flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  entity.isCurrent
                    ? "border-[#07552F] ring-2 ring-[#07552F]/10"
                    : "border-[#DDE5DC]"
                }`}
              >
                <div>
                  {/* Entity Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        entity.isCurrent
                          ? "bg-[#07552F] text-white"
                          : "bg-[#E8EFE7] text-[#07552F]"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    {entity.isCurrent ? (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F28C16] text-white px-2 py-0.5 rounded">
                        Current Platform
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-[#5A655C] px-2 py-0.5 rounded">
                        Affiliated Network
                      </span>
                    )}
                  </div>

                  {/* Name & Tagline */}
                  <h3 className="text-xl font-extrabold text-[#202821]">
                    {entity.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#07552F] mt-0.5">
                    {entity.location}
                  </div>
                  <div className="text-xs italic text-[#F28C16] font-medium mt-1">
                    "{entity.tagline}"
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-[#5A655C] leading-relaxed">
                    {entity.description}
                  </p>

                  {/* Focus Areas */}
                  <div className="mt-4 space-y-1.5">
                    <div className="text-[11px] font-bold text-[#202821] uppercase tracking-wider">
                      Core Operations:
                    </div>
                    {entity.focusAreas.map((f) => (
                      <div key={f} className="flex items-center gap-1.5 text-xs text-[#5A655C]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#07552F] shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-6 mt-6 border-t border-[#E8EFE7]">
                  {entity.externalUrl ? (
                    <a
                      href={entity.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#07552F] hover:text-[#F28C16] transition-colors"
                    >
                      <span>{entity.linkText}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs sm:text-sm font-bold text-[#07552F] flex items-center gap-1">
                      <span>{entity.linkText}</span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mandatory Independence & Distinct Ownership Disclaimer */}
        <div className="mt-10 p-4 rounded-xl bg-white border border-[#DDE5DC] text-xs text-[#5A655C] flex items-start gap-3">
          <Info className="w-4 h-4 text-[#F28C16] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#202821]">Corporate Structure Disclaimer: </strong>
            These are distinct and independently managed business identities with separate operational scopes. Displaying them illustrates a broader ecosystem of professional expertise and does not imply that all entities are legal subsidiaries or legally owned by SREE SOLUTIONS.
          </p>
        </div>
      </Container>
    </section>
  );
}
