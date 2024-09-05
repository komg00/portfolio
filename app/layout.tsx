import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "고민경 | FE Portfolio",
  description: "프론트엔드 개발자 고민경의 포트폴리오입니다.",
  icons: {
    icon: "/images/profile.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
