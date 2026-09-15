"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { CloseIcon, ArrowRightIcon, ArrowLeftIcon } from "./Icons";
import { reveal } from "./About";

// Generic lightbox used by both the home Gallery and tour photo galleries.
// Accepts `images` as [{ src, alt }] or plain string array (auto-generates alt).
function useLightbox(images, tourName) {
  const normalized = images.map((img) =>
    typeof img === "string"
      ? { src: img, alt: `${tourName || "Photo"}` }
      : img
  );
  const [active, setActive] = useState(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () =>
      setActive((i) => (i === null ? i : (i + 1) % normalized.length)),
    [normalized.length]
  );
  const prev = useCallback(
    () =>
      setActive((i) =>
        i === null ? i : (i - 1 + normalized.length) % normalized.length
      ),
    [normalized.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  const current = active === null ? null : normalized[active];
  return { active, setActive, close, next, prev, current, normalized };
}

// Reusable lightbox modal (kept DRY across gallery + tour page).
function Lightbox({ current, active, close, next, prev }) {
  return (
    <AnimatePresence>
      {current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close lightbox"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
          >
            <CloseIcon />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-2 grid h-11 w-11 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:left-4"
          >
            <ArrowLeftIcon />
          </button>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[85vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={current.src}
                alt={current.alt}
                width={1200}
                height={900}
                className="max-h-[85vh] w-auto rounded-2xl object-contain"
              />
              <p className="mt-3 text-center text-sm text-cream/80">
                {current.alt}
              </p>
            </motion.div>
          </AnimatePresence>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-2 grid h-11 w-11 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:right-4"
          >
            <ArrowRightIcon />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// -------- Home page masonry gallery --------
export default function Gallery() {
  const {
    active,
    setActive,
    close,
    next,
    prev,
    current,
    normalized: images,
  } = useLightbox(siteConfig.gallery);

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

        {/* Masonry grid via CSS columns */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4"
        >
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Open image: ${img.alt}`}
              className="group relative block w-full overflow-hidden rounded-2xl bg-ink/5 shadow-soft break-inside-avoid"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={(i % 3 === 0 ? 1100 : i % 3 === 1 ? 600 : 900)}
                sizes="(max-width: 768px) 50vw, 25vw"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
      </div>

      <Lightbox
        current={current}
        active={active}
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
// The keyframe/state logic from useLightbox is reused (keyboard nav is React-side,
// so it also works here without touching page.js).
export function TourPhotoGallery({ images = [], tourName = "" }) {
  const {
    active,
    setActive,
    close,
    next,
    prev,
    current,
    normalized,
  } = useLightbox(images, tourName);
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

      {/* Lightbox with counter, touch swipe and click-outside close */}
      <TourLightbox
        active={active}
        current={current}
        total={normalized.length}
        close={close}
        next={next}
        prev={prev}
      />
    </>
  );
}

// Fullscreen lightbox for the tour gallery. Keyboard navigation (Esc / arrows)
// is handled by useLightbox's keydown listener and applies to this modal too.
function TourLightbox({ active, current, total, close, next, prev }) {
  // Track the horizontal swipe distance for touch support.
  const touchStartX = useRef(null);

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
          onClick={close}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={close}
            aria-label="Close lightbox"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
          >
            <CloseIcon />
          </button>

          {/* Prev (desktop) */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:left-4"
          >
            <ArrowLeftIcon />
          </button>

          {/* Image (captures touch for swipe) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[85vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={(e) => {
                touchStartX.current = e.touches[0].clientX;
              }}
              onTouchEnd={(e) => {
                if (touchStartX.current === null) return;
                const dx = e.changedTouches[0].clientX - touchStartX.current;
                touchStartX.current = null;
                if (dx < -50) next();
                if (dx > 50) prev();
              }}
            >
              <Image
                src={current.src}
                alt={current.alt}
                width={1200}
                height={900}
                className="max-h-[85vh] w-auto rounded-2xl object-contain"
              />
              <p className="mt-3 text-center text-sm text-cream/80">
                {current.alt}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Next (desktop) */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:right-4"
          >
            <ArrowRightIcon />
          </button>

          {/* Counter 1 / N */}
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-cream/15 px-3 py-1 text-xs font-medium text-cream backdrop-blur-sm">
            {active + 1} / {total}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
