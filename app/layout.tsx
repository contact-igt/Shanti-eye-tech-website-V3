import type { Metadata } from "next";
import { headers } from "next/headers";
import { QuickActionButtons } from "./site-components";
import { GSAPProvider } from "./components/GSAPProvider";
import "./globals.css";


export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: {
      default: "Shanthi EyeTech | Advanced Eye Care",
      template: "%s | Shanthi EyeTech",
    },
    description: "World-class ophthalmology care with advanced technology and compassionate specialists in Indore.",
    icons: { icon: "/assets/logo.png", shortcut: "/assets/logo.png" },
    openGraph: {
      title: "Shanthi EyeTech | Your Vision, Our Precision",
      description: "Advanced eye care in Indore with compassionate specialists and modern technology.",
      type: "website",
      url: origin,
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630, alt: "Shanthi EyeTech - Your Vision, Our Precision" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Shanthi EyeTech | Your Vision, Our Precision",
      description: "Advanced eye care in Indore.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <GSAPProvider>
          {children}
          <QuickActionButtons />
        </GSAPProvider>
      </body>
    </html>
  );
}
