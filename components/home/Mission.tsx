import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  MessageCircle, 
  Compass, 
  Sprout, 
  ShieldCheck, 
  Sparkles,
  Users
} from "lucide-react";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";

export function Mission() {
  const missionCards = [
    {
      number: "01",
      title: "Voice to the Voiceless",
      tagline: "Statutory rights, dignity & grievance representation",
      description: "Helping individuals and contract workers understand how to raise genuine concerns, resolve EPFO discrepancies, and access appropriate institutional assistance without fear.",
      image: "/images/mission-voice.jpg",
      icon: MessageCircle,
      ctaText: "Learn More",
      ctaHref: "#grievance",
      badgeColor: "bg-[#07552F]"
    },
    {
      number: "02",
      title: "Guidance to Youth",
      tagline: "Career clarity, skills & ethical opportunities",
      description: "Encouraging young people through one-on-one career counseling, verified internships, practical digital learning, skill bootcamps, and transparent overseas education pathways.",
      image: "/images/mission-youth.jpg",
      icon: Compass,
      ctaText: "Explore Opportunities",
      ctaHref: "#empowerment",
      badgeColor: "bg-[#F28C16]"
    },
    {
      number: "03",
      title: "Backbone to Farmers",
      tagline: "Kisan welfare, scheme guidance & rural dignity",
      description: "Helping farmers and rural families access essential scheme details, official registrations, subsidy documentation, soil advisory, and crop insurance guidance.",
      image: "/images/mission-farmer.jpg",
      icon: Sprout,
      ctaText: "Farmer Assistance",
      ctaHref: "#empowerment",
      badgeColor: "bg-[#063D25]"
    }
  ];

  return (
    <section id="mission" className="py-20 bg-white border-b border-[#DDE5DC]">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="WHY SREE SOLUTIONS"
            title="MORE THAN A SERVICE. A RESPONSIBILITY."
            highlightWords={["RESPONSIBILITY."]}
            description="Our purpose goes beyond providing services. We want to help people understand their options, find the right guidance, and move forward with confidence."
          />
          <div className="shrink-0">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8EFE7] text-[#07552F] text-xs font-bold tracking-wide">
              <Sparkles className="w-4 h-4 text-[#F28C16]" />
              Three Core Pillars
            </span>
          </div>
        </div>

        {/* 3 Visually Distinct, Image-Led Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missionCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.number}
                className="group relative flex flex-col rounded-2xl overflow-hidden bg-[#F7F7F2] border border-[#DDE5DC] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Image Section with Number Overlay */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Top Bar on Image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-white/95 text-[#202821] shadow-sm">
                      {card.number}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <Icon className="w-5 h-5 text-[#F28C16]" />
                    </div>
                  </div>

                  {/* Title Overlaid on Image Bottom */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs text-white/80 font-medium line-clamp-1 mt-0.5">
                      {card.tagline}
                    </p>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <p className="text-sm text-[#5A655C] leading-relaxed">
                    {card.description}
                  </p>

                  <div className="pt-2 border-t border-[#DDE5DC]">
                    <Link
                      href={card.ctaHref}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#07552F] group-hover:text-[#F28C16] transition-colors"
                    >
                      <span>{card.ctaText}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
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
