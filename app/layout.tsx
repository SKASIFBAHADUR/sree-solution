import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SREE SOLUTIONS | We Serve People. Not Their Status.",
  description:
    "A people-first citizen-support and empowerment organisation based in Vijayawada, Andhra Pradesh, India. Educate. Encourage. Empower My Country.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-[#F7F7F2] text-[#202821] selection:bg-[#F28C16]/20 selection:text-[#07552F]">
        {children}
      </body>
    </html>
  );
}


