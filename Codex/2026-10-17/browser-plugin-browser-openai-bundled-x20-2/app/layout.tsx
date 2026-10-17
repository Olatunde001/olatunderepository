import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader, SiteFooter } from "@/components/site-shell";

export const metadata: Metadata = {
  title: { default: "Federal Training Centre, Enugu", template: "%s | Federal Training Centre, Enugu" },
  description: "Federal Training Centre, Enugu — academic programmes and professional development under the Office of the Head of the Civil Service of the Federation.",
  keywords: ["Federal Training Centre Enugu", "civil service training", "ND", "HND", "Nigeria"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to main content</a><SiteHeader />{children}<SiteFooter /></body></html>;
}
