"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { siteConfig, buildWhatsappLink } from "@/data/siteConfig";
import { AmenityIcon, WhatsAppIcon, ArrowLeftIcon, ArrowRightIcon } from "./Icons";
import { reveal } from "./About";
import Lightbox, { useLightbox } from "./Lightbox";

export default function StayWithUs() {
  const { stay } = siteConfig;
  const bookingLink = buildWhatsappLink(
    "Hi! I'd like to book a room at Hmong House Sapa"
  );
  const { active, setActive, close, next, prev, current, normalized: roomImages } =
    useLightbox(stay.images);
  const stripRef = useRef(null);

  // Smoothly scroll the strip by roughly one card width.
  const scrollStrip = (dir) => {
    const el = stripRef.current;
    if (el) el.scrollBy({ left: dir * 240, behavior: "smooth" });
  };

  return (
    <section id="stay" className="section">
      <div className="container-warm">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Photos column (left) — horizontal scroll strip */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              <div
                ref={stripRef}
                className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {roomImages.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Open image: ${img.alt}`}
                    className="group relative aspect-[4/3] w-[200px] flex-shrink-0 snap-start overflow-hidden rounded-2xl bg-ink/5 outline-none md:w-[260px]"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 55vw, 30vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-cream/0 transition-colors duration-300 group-hover:bg-cream/5" />
                  </button>
                ))}
              </div>

              {/* Desktop scroll arrows (hidden on mobile) */}
              <button
                type="button"
                onClick={() => scrollStrip(-1)}
                aria-label="Scroll photos left"
                className="absolute left-2 top-1/2 hidden h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-cream/90 text-ink shadow-soft backdrop-blur-sm transition-colors hover:bg-gold hover:text-cream md:grid"
              >
                <ArrowLeftIcon width={18} height={18} />
              </button>
              <button
                type="button"
                onClick={() => scrollStrip(1)}
                aria-label="Scroll photos right"
                className="absolute right-2 top-1/2 hidden h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-cream/90 text-ink shadow-soft backdrop-blur-sm transition-colors hover:bg-gold hover:text-cream md:grid"
              >
                <ArrowRightIcon width={18} height={18} />
              </button>

              {/* Counter indicator */}
              <span className="pointer-events-none absolute bottom-4 right-3 rounded-full bg-cream/90 px-3 py-1 text-xs font-medium text-ink backdrop-blur-sm">
                {roomImages.length} photos
              </span>
            </div>
          </motion.div>

          {/* Content column (right) */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="eyebrow">{stay.eyebrow}</span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl">
              {stay.title}
            </h2>
            <p className="mt-2 text-ink/60 md:text-lg">{stay.subtitle}</p>

            <p className="mt-5 text-ink/75 leading-relaxed">{stay.description}</p>

            {/* Price range */}
            <p className="mt-5 font-display text-xl font-semibold text-rice">
              {stay.priceRange}
            </p>

            {/* Amenities grid */}
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-2">
              {stay.amenities.map((a) => (
                <li
                  key={a.label}
                  className="flex items-center gap-3 text-sm text-ink/75"
                >
                  <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl bg-rice/10 text-rice">
                    <AmenityIcon name={a.icon} width={18} height={18} />
                  </span>
                  {a.label}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green mt-8 w-full sm:w-auto"
            >
              <WhatsAppIcon width={16} height={16} />
              Book Your Stay via WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      <Lightbox
        current={current}
        active={active}
        total={roomImages.length}
        close={close}
        next={next}
        prev={prev}
      />
    </section>
  );
}
