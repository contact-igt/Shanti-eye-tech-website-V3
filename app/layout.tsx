import type { Metadata } from "next";
import { headers } from "next/headers";
import { QuickActionButtons } from "./site-components";
import { GSAPProvider } from "./components/GSAPProvider";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: {
      default: "Shanti Eye Tech | Advanced Eye Care",
      template: "%s | Shanti Eye Tech",
    },
    description: "Advanced ophthalmology care with cutting-edge technology and compassionate specialists in Indore.",
    icons: { icon: "/assets/logo.png", shortcut: "/assets/logo.png" },
    openGraph: {
      title: "Shanti Eye Tech | GENTLE CARE FOR YOUR PRECIOUS EYES",
      description: "Advanced eye care in Indore with compassionate specialists and modern technology.",
      type: "website",
      url: origin,
      // WhatsApp's link-preview crawler doesn't reliably render .webp
      // og:images — it silently falls back to a small default thumbnail
      // instead of the large image card. A JPEG copy of the same photo
      // fixes that (Facebook/Twitter/LinkedIn handle both fine either way).
      images: [{ url: "/assets/og-image.jpg", width: 1800, height: 1200, alt: "Dr. Amit N. Solanki at Shanti Eye Tech" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Shanti Eye Tech | GENTLE CARE FOR YOUR PRECIOUS EYES",
      description: "Advanced eye care in Indore.",
      images: [{ url: "/assets/og-image.jpg", alt: "Dr. Amit N. Solanki at Shanti Eye Tech" }],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <GSAPProvider>
          {children}
          <QuickActionButtons />
        </GSAPProvider>
      </body>
    </html>
  );
}
