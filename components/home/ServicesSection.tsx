import React from "react";
import Link from "next/link";
import { 
  Briefcase, 
  Landmark, 
  GraduationCap, 
  Plane, 
  Calculator, 
  Wheat, 
  Laptop,
  ArrowRight
} from "lucide-react";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { serviceCategories } from "@/data/siteContent";

export function ServicesSection() {
  const iconMap: Record<string, React.ElementType> = {
    Briefcase,
    Landmark,
    GraduationCap,
    Plane,
    Calculator,
    Wheat,
    Laptop,
  };

  return (
    <section id="services" className="py-20 bg-[#F7F7F2] border-b border-[#DDE5DC]">
      <Container>
        {/* Header */}
        <div className="mb-14">
          <SectionHeading
            eyebrow="HOW WE CAN HELP"
            title="ONE PLACE. MULTIPLE WAYS TO HELP."
            highlightWords={["MULTIPLE WAYS"]}
            description="Explore our areas of assistance and find the guidance that matches your needs. We provide step-by-step facilitation without confusion."
          />
        </div>

        {/* 7 Premium Service-Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {serviceCategories.map((category, index) => {
            const Icon = iconMap[category.icon] || Briefcase;
            const isFeatured = index === 0;

            return (
              <div
                key={category.id}
                className={`group relative rounded-2xl p-6 bg-white border transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 ${
                  isFeatured 
                    ? "border-[#07552F] shadow-sm lg:col-span-2 xl:col-span-1 bg-gradient-to-br from-white to-[#E8EFE7]/40" 
                    : "border-[#DDE5DC]"
                }`}
              >
                <div>
                  {/* Icon & Category Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#E8EFE7] group-hover:bg-[#07552F] text-[#07552F] group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>
                    {isFeatured && (
                      <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-[#F28C16] text-white">
                        High Priority
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-extrabold text-[#202821] group-hover:text-[#07552F] transition-colors leading-snug">
                    {category.title}
                  </h3>

                  {/* One-sentence explanation */}
                  <p className="mt-2.5 text-xs sm:text-sm text-[#5A655C] leading-relaxed">
                    {category.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {category.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold bg-[#F7F7F2] text-[#5A655C] px-2 py-0.5 rounded border border-[#E8EFE7]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Explore Services Link */}
                <div className="pt-6 mt-6 border-t border-[#E8EFE7]">
                  <Link
                    href={category.link}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#07552F] group-hover:text-[#F28C16] transition-colors"
                  >
                    <span>Explore Services</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
