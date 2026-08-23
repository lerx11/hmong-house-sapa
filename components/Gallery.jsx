"use client";

import { useState, useEffect, useCallback } from "react";
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

// -------- Tour page photo gallery (featured + grid, with lightbox) --------
// Exported separately so the server-component tour page can import it (it's a
// Client Component via the "use client" directive at the top of this file).
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

  if (!normalized.length) return null;

  const featured = normalized[0];
  const rest = normalized.slice(1);

  return (
    <>
      <div className="w-full space-y-4">
        {/* Featured image — first one, full width */}
        {featured && (
          <button
            type="button"
            onClick={() => setActive(0)}
            aria-label={`Open image: ${featured.alt}`}
            className="group relative block w-full overflow-hidden rounded-3xl shadow-soft aspect-[16/9] bg-ink/5"
          >
            <Image
              src={featured.src}
              alt={featured.alt}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        )}

        {/* Thumbnails: 2 cols on mobile, 3 cols on desktop */}
        {rest.length > 0 && (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {rest.map((img, idx) => {
              // The real index in the full normalized array is idx + 1
              const realIndex = idx + 1;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActive(realIndex)}
                  aria-label={`Open image: ${img.alt}`}
                  className="group relative block w-full overflow-hidden rounded-2xl shadow-soft aspect-[4/3] bg-ink/5"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </button>
              );
            })}
          </div>
        )}
      </div>

      <Lightbox
        current={current}
        active={active}
        close={close}
        next={next}
        prev={prev}
      />
    </>
  );
}
