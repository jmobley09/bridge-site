import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
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
    description: "Build. Reflect. Inspire. Gather. Explore",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bridge Homeschool Community",
    description: "Build. Reflect. Inspire. Gather. Explore",
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
          <Link className="brand" href="/" aria-label="Bridge Homeschool Community home">
            <span className="brand-mark" aria-hidden="true">
              B
            </span>
            <span>Bridge Homeschool Community</span>
          </Link>
          <nav aria-label="Main navigation">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <div>
            <Link className="brand" href="/" aria-label="Bridge Homeschool Community home">
              <span className="brand-mark" aria-hidden="true">
                B
              </span>
              <span>Bridge Homeschool Community</span>
            </Link>
            <p>Build. Reflect. Inspire. Gather. Explore</p>
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
