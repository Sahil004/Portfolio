import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Sora, DM_Sans } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
});
export const metadata: Metadata = {
  title: "Sahil Sayyad — Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, React, TypeScript & Node.js. Building scalable fintech, eCommerce, and SaaS platforms.",
  keywords: [
    "Sahil Sayyad",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Pune",
  ],
  authors: [{ name: "Sahil Sayyad" }],
  openGraph: {
    title: "Sahil Sayyad — Full Stack Developer",
    description: "Building scalable, high-performance web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.variable} ${dmSans.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
