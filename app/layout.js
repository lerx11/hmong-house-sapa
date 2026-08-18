import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// Google Fonts: Playfair Display for headings, Inter for body text.
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata = {
  metadataBase: new URL("https://hmong-house-sapa.example.com"), // TODO: replace with real domain
  title: {
    default: "Hmong House Sapa — Nature, Guides & Cultural Tours",
    template: "%s · Hmong House Sapa",
  },
  description:
    "Hmong House Sapa offers authentic trekking, herbal walks, and cultural tours in Ta Van Village, Sapa, Vietnam. Stay in our 20-room homestay and explore rice terraces with local Hmong and Red Dao guides.",
  keywords: [
    "Sapa tours",
    "Hmong House Sapa",
    "Sapa trekking",
    "Red Dao herbal trek",
    "Ta Van Village",
    "Vietnam cultural tours",
    "Sapa homestay",
  ],
  openGraph: {
    title: "Hmong House Sapa — Nature, Guides & Cultural Tours",
    description:
      "Authentic trekking and cultural tours in Ta Van Village, Sapa, Vietnam.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport = {
  themeColor: "#FFF8F0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-cream text-ink font-body antialiased">{children}</body>
    </html>
  );
}
