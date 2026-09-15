"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { ArrowRightIcon, ArrowLeftIcon } from "./Icons";
import { reveal } from "./About";
import Lightbox, { useLightbox } from "./Lightbox";

// -------- Home page gallery (2x3 grid + "See All Photos") --------
export default function Gallery() {
  const { active, setActive, close, next, prev, current, normalized: images } =
    useLightbox(siteConfig.gallery);
  // Show the first 6 photos; "See All Photos" opens the lightbox over all of them.
  const visible = images.slice(0, 6);

  return (
    <section id="gallery" className="section">
      <div className="container-warm">
        {/* Heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow justify-center">Gallery</span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl">
            Moments from the valley
          </h2>
          <p className="mt-4 text-ink/70">
            A glimpse of the trails, villages, and people you&apos;ll meet at
            Hmong House.
          </p>
        </motion.div>

        {/* 3-column grid (2 rows) */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
        >
          {visible.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Open image: ${img.alt}`}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-ink/5 shadow-soft"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/55 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="p-4 text-left text-xs font-medium text-cream">
                  {img.alt}
                </span>
              </span>
            </button>
          ))}
        </motion.div>

        {/* "See All Photos" button */}
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setActive(0)}
            className="btn-gold"
          >
            See All Photos
          </button>
        </div>
      </div>

      <Lightbox
        current={current}
        active={active}
        total={images.length}
        close={close}
        next={next}
        prev={prev}
      />
    </section>
  );
}

// -------- Tour page photo gallery (horizontal scroll strip + lightbox) --------
// Exported separately so the server-component tour page can import it (it's a
// Client Component via the "use client" directive at the top of this file).
export function TourPhotoGallery({ images = [], tourName = "" }) {
  const { active, setActive, close, next, prev, current, normalized } =
    useLightbox(images, tourName);
  const stripRef = useRef(null);

  if (!normalized.length) return null;

  // Smoothly scroll the strip by roughly one card width.
  const scrollStrip = (dir) => {
    const el = stripRef.current;
    if (el) el.scrollBy({ left: dir * 312, behavior: "smooth" });
  };

  return (
    <>
      {/* Horizontal scrollable strip */}
      <div className="relative">
        <div
          ref={stripRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {normalized.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Open image: ${img.alt}`}
              className="group relative aspect-[4/3] w-[240px] flex-shrink-0 snap-start overflow-hidden rounded-2xl bg-ink/5 outline-none md:w-[280px]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 55vw, 25vw"
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
          {normalized.length} photos
        </span>
      </div>

      {/* Shared lightbox */}
      <Lightbox
        current={current}
        active={active}
        total={normalized.length}
        close={close}
        next={next}
        prev={prev}
      />
    </>
  );
}