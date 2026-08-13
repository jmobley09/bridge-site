import type { Metadata } from "next";
import Link from "next/link";
import { NavLinks } from "./nav-links";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bridgehsc.com"),
  title: {
    default: "Bridge Homeschool Community",
    template: "%s | Bridge Homeschool Community",
  },
  description:
    "A parent-led homeschooling co-op for shared learning, community support, and family connection.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Bridge Homeschool Community",
    description: "Build. Reflect. Inspire. Dream. Gather. Explore",
    images: [{ url: "/bridge-logo.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bridge Homeschool Community",
    description: "Build. Reflect. Inspire. Dream. Gather. Explore",
    images: ["/bridge-log.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <header className="site-header">
          <Link className="brand" href="/" aria-label="Bridge Homeschool Community home">
            <span className="brand-mark" aria-hidden="true">
              <span className="brand-sun" />
              <span className="brand-rainbow" />
              <span className="brand-letter">B</span>
            </span>
            <span className="brand-wordmark">
              <span className="brand-initials">B.R.I.D.G.E</span>
              <span className="brand-name">Homeschool Community</span>
            </span>
          </Link>
          <NavLinks />
        </header>
        {children}
        <footer className="site-footer">
          <div>
            <Link className="brand" href="/" aria-label="Bridge Homeschool Community home">
              <span className="brand-mark" aria-hidden="true">
                <span className="brand-sun" />
                <span className="brand-rainbow" />
                <span className="brand-letter">B</span>
              </span>
              <span className="brand-wordmark">
                <span className="brand-initials">B.R.I.D.G.E</span>
                <span className="brand-name">Homeschool Community</span>
              </span>
            </Link>
            <p>Build. Reflect. Inspire. Dream. Gather. Explore</p>
          </div>
          <nav aria-label="Footer navigation">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms and Conditions</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </footer>
      </body>
    </html>
  );
}
