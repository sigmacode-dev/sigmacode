import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "sigmacode — Claude Code Without Permission Prompts",
  description:
    "Run Claude Code without permission prompts. Install sigmacode and let Claude work autonomously. Open source CLI tool that adds --dangerously-skip-permissions by default.",
  keywords: [
    "claude code",
    "cli tool",
    "ai coding",
    "developer tools",
    "claude ai",
    "sigmacode",
    "dangerously skip permissions",
  ],
  openGraph: {
    title: "sigmacode — Claude Code, Unchained",
    description:
      "Install once, run anywhere. Zero permission prompts. Just run sigmacode and let Claude cook.",
    url: "https://sigmacode.dev",
    siteName: "sigmacode",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "sigmacode — Claude Code without permission prompts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "sigmacode — Claude Code, Unchained",
    description:
      "Install once, run anywhere. Zero permission prompts. Just run sigmacode and let Claude cook.",
    images: ["/og.png"],
  },
  metadataBase: new URL("https://sigmacode.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "sigmacode",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "macOS, Linux, Windows",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
              description:
                "CLI tool that runs Claude Code with --dangerously-skip-permissions enabled by default.",
              license: "https://opensource.org/licenses/MIT",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What does sigmacode do?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It runs claude --dangerously-skip-permissions. This enables Claude Code to work autonomously — editing files, running commands, and completing tasks without asking for confirmation at each step.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is it safe to skip permissions?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The --dangerously-skip-permissions flag gives Claude full access to your system. Use it in projects where you trust Claude's actions. We recommend using it in sandboxed environments or personal projects.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why not just use an alias?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You absolutely can. sigmacode is a convenience wrapper that works via npx — no shell configuration needed. Run it on any machine, any environment, instantly.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do I need Claude Code installed?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. sigmacode requires Claude Code (claude CLI) to be installed and authenticated on your system.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is this an official Anthropic product?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. sigmacode is an independent open-source project. It's a thin wrapper around the official Claude Code CLI.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
