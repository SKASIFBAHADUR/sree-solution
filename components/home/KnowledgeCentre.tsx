import React from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Languages, 
  ArrowRight, 
  Clock, 
  FileText, 
  Sparkles,
  ExternalLink
} from "lucide-react";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { PrimaryButton } from "../common/PrimaryButton";
import { knowledgeArticles } from "@/data/siteContent";

export function KnowledgeCentre() {
  return (
    <section id="knowledge" className="py-20 bg-white border-b border-[#DDE5DC]">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="KNOWLEDGE CENTRE"
            title="KNOW MORE. MAKE INFORMED DECISIONS."
            highlightWords={["INFORMED DECISIONS."]}
            description="Explore useful information, practical guidance, and educational resources in English and Telugu. Clear procedures simplify life."
          />
          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E8EFE7] text-[#07552F] text-xs font-bold">
              <Languages className="w-4 h-4 text-[#F28C16]" />
              Bilingual Resources (English & తెలుగు)
            </span>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {knowledgeArticles.map((article) => (
            <article
              key={article.id}
              className="group rounded-2xl bg-[#F7F7F2] border border-[#DDE5DC] overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Header Banner */}
                <div className="p-6 bg-[#07552F] text-white relative">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="font-extrabold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded text-white">
                      {article.category}
                    </span>
                    <span className="text-white/80 font-medium flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#F28C16]" />
                      {article.readTime}
                    </span>
                  </div>

                  <div className="text-xs text-[#F28C16] font-semibold mb-1">
                    Language: {article.language}
                  </div>

                  <h3 className="text-lg font-black leading-snug line-clamp-2">
                    {article.title}
                  </h3>
                </div>

                {/* Article Body */}
                <div className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-[#5A655C] leading-relaxed">
                    {article.description}
                  </p>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white text-[#07552F] px-2 py-0.5 rounded border border-[#DDE5DC]">
                      {article.tag}
                    </span>
                    <span className="text-[10px] text-amber-800 bg-amber-50 px-2 py-0.5 rounded font-semibold border border-amber-200">
                      Draft Educational Material
                    </span>
                  </div>
                </div>
              </div>

              {/* Read More Link */}
              <div className="p-6 pt-0 border-t border-[#DDE5DC]/70">
                <Link
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#07552F] group-hover:text-[#F28C16] transition-colors"
                >
                  <span>Read Full Advisory</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <PrimaryButton
            href="#contact"
            variant="outline"
            size="md"
            icon={true}
          >
            View All Educational Articles & Resources
          </PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
