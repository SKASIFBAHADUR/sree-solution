import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  GraduationCap, 
  Briefcase, 
  Wheat, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles 
} from "lucide-react";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { PrimaryButton } from "../common/PrimaryButton";

export function EmpowermentSection() {
  const blocks = [
    {
      id: "youth",
      eyebrow: "YOUTH EMPOWERMENT",
      title: "The Next Generation Deserves More Than Advice.",
      description: "Equipping young minds from regional towns and rural backgrounds with genuine industry interaction, hands-on digital skills, certified bootcamps, and career clarity.",
      features: [
        "1-on-1 Career pathing & realistic industry roadmaps",
        "Digital literacy, software skills & office productivity",
        "Internship placement guidance (where opportunities exist)",
        "Resume refinement & mock interview readiness"
      ],
      ctaText: "Explore Youth Opportunities",
      ctaHref: "#contact",
      image: "/images/empowerment-youth.jpg"
    },
    {
      id: "employee",
      eyebrow: "EMPLOYEE AWARENESS",
      title: "Know Your Rights. Understand Your Benefits.",
      description: "Millions of contract, daily-wage, and outsourced employees miss out on statutory EPF accumulations, medical ESIC care, and gratuity due to lack of transparent awareness.",
      features: [
        "Universal Account Number (UAN) passbook verification",
        "ESIC medical card generation & family dispensary access",
        "Statutory pension (EPS 95) eligibility clarification",
        "Legal guidance on contract terms & statutory wage records"
      ],
      ctaText: "Get Employee Guidance",
      ctaHref: "#grievance",
      image: "/images/empowerment-worker.jpg"
    },
    {
      id: "kisan",
      eyebrow: "KISAN DOST INITIATIVE",
      title: "Helping Farmers Access the Right Information.",
      description: "Our dedicated agricultural desk assists farming families with government scheme registrations, soil health advisories, input subsidies, and accurate revenue documentation.",
      features: [
        "PM-Kisan & state agricultural welfare scheme guidance",
        "e-Crop booking dispute facilitation & land record sync",
        "Crop insurance (PMFBY) claim documentation assistance",
        "Organic cultivation awareness & local mandi linkages"
      ],
      ctaText: "Explore Kisan Dost",
      ctaHref: "#contact",
      image: "/images/empowerment-kisan.jpg"
    }
  ];

  return (
    <section id="empowerment" className="py-20 bg-[#F7F7F2] border-b border-[#DDE5DC]">
      <Container>
        {/* Header */}
        <div className="mb-16">
          <SectionHeading
            eyebrow="EMPOWERING PEOPLE"
            title="EMPOWERING PEOPLE. STRENGTHENING COMMUNITIES."
            highlightWords={["STRENGTHENING COMMUNITIES."]}
            description="Empowerment begins with actionable clarity. SREE SOLUTIONS builds structured community initiatives tailored for youth, working citizens, and farmers."
          />
        </div>

        {/* 3 Distinct Content Blocks */}
        <div className="space-y-16">
          {blocks.map((block, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={block.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#DDE5DC] shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Content Side */}
                <div
                  className={`lg:col-span-7 space-y-6 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8EFE7] text-[#07552F] text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-[#F28C16]" />
                    <span>{block.eyebrow}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-[#202821] tracking-tight leading-tight">
                    {block.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#5A655C] leading-relaxed">
                    {block.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {block.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs sm:text-sm text-[#202821] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#07552F] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <PrimaryButton
                      href={block.ctaHref}
                      variant="secondary"
                      size="md"
                      icon={true}
                    >
                      {block.ctaText}
                    </PrimaryButton>
                  </div>
                </div>

                {/* Image Side */}
                <div
                  className={`lg:col-span-5 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative h-72 sm:h-80 lg:h-96 w-full rounded-2xl overflow-hidden shadow-inner border border-[#DDE5DC]">
                    <Image
                      src={block.image}
                      alt={block.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 450px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
