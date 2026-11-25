import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "white" | "dark";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  className?: string;
  external?: boolean;
}

export function PrimaryButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon = false,
  className = "",
  external = false,
}: PrimaryButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]";

  const variantClasses = {
    primary:
      "bg-[#F28C16] hover:bg-[#D97706] text-white shadow-sm hover:shadow-md focus-visible:ring-[#F28C16]",
    secondary:
      "bg-[#07552F] hover:bg-[#063D25] text-white shadow-sm hover:shadow-md focus-visible:ring-[#07552F]",
    outline:
      "border-2 border-[#07552F] text-[#07552F] hover:bg-[#07552F] hover:text-white focus-visible:ring-[#07552F]",
    white:
      "bg-white text-[#07552F] hover:bg-[#F7F7F2] shadow-sm hover:shadow-md focus-visible:ring-white",
    dark:
      "bg-[#202821] hover:bg-black text-white focus-visible:ring-[#202821]",
  };

  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs sm:text-sm gap-1.5",
    md: "px-5 py-2.5 text-sm sm:text-base gap-2",
    lg: "px-7 py-3.5 text-base sm:text-lg gap-2.5",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
          {icon && <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
        {icon && <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} type="button">
      {children}
      {icon && <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />}
    </button>
  );
}
