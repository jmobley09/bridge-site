import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/board", label: "Board" },
  { href: "/contact", label: "Contact" },
];

export const metadata: Metadata = {
  metadataBase: new URL("https://bridgehomeschoolcoop.org"),
  title: {
    default: "Bridge Homeschool Co-op",
    template: "%s | Bridge Homeschool Co-op",
  },
  description:
    "A parent-led homeschooling co-op for shared learning, community support, and family connection.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Bridge Homeschool Co-op",
    description: "Learning together. Growing in community.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bridge Homeschool Co-op",
    description: "Learning together. Growing in community.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <header className="site-header">
          <a className="brand" href="/" aria-label="Bridge Homeschool Co-op home">
            <span className="brand-mark" aria-hidden="true">
              B
            </span>
            <span>Bridge Homeschool Co-op</span>
          </a>
          <nav aria-label="Main navigation">
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <div>
            <a className="brand" href="/" aria-label="Bridge Homeschool Co-op home">
              <span className="brand-mark" aria-hidden="true">
                B
              </span>
              <span>Bridge Homeschool Co-op</span>
            </a>
            <p>Learning together. Growing in community.</p>
          </div>
          <nav aria-label="Footer navigation">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms and Conditions</a>
            <a href="/contact">Contact</a>
          </nav>
        </footer>
      </body>
    </html>
  );
}
