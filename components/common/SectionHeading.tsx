import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightWords?: string[];
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  highlightWords = [],
  description,
  align = "left",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  // Format title with highlighted words if provided
  const renderTitle = () => {
    if (!highlightWords.length) {
      return title;
    }

    const regex = new RegExp(`(${highlightWords.join("|")})`, "gi");
    const parts = title.split(regex);

    return parts.map((part, index) => {
      const isMatch = highlightWords.some(
        (word) => word.toLowerCase() === part.toLowerCase()
      );
      return isMatch ? (
        <span key={index} className="text-[#F28C16] font-extrabold">
          {part}
        </span>
      ) : (
        part
      );
    });
  };

  const isDark = theme === "dark";

  return (
    <div
      className={`space-y-3 ${
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"
      } ${className}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${
              isDark ? "bg-[#F28C16]" : "bg-[#07552F]"
            }`}
          />
          <span
            className={`text-xs md:text-sm font-bold tracking-widest uppercase ${
              isDark ? "text-[#F28C16]" : "text-[#07552F]"
            }`}
          >
            {eyebrow}
          </span>
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] ${
          isDark ? "text-white" : "text-[#202821]"
        }`}
      >
        {renderTitle()}
      </h2>

      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            isDark ? "text-white/80" : "text-[#5A655C]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
