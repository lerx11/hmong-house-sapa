"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig, buildWhatsappLink } from "@/data/siteConfig";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  // Reveal the floating button after a short scroll so it doesn't fight
  // the hero CTAs at the very top of the page.
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={buildWhatsappLink(
            `Hi ${siteConfig.businessName}! I'd like to ask about a stay or tour.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Hmong House Sapa on WhatsApp"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-whatsapp py-3 pl-3 pr-4 text-white shadow-lift transition-shadow hover:shadow-lift sm:bottom-6 sm:right-6"
        >
          {/* Pulsing ring */}
          <span className="pointer-events-none absolute left-3 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-whatsapp/60 animate-pulse-ring" />

          {/* Icon */}
          <span className="relative grid h-12 w-12 place-items-center rounded-full bg-white/15">
            <WhatsAppIcon width={26} height={26} />
          </span>

          {/* Label (hidden on the smallest screens to stay compact) */}
          <span className="relative hidden text-sm font-medium sm:inline">
            Chat with us
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
