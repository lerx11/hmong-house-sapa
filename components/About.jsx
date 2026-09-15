"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { ValueIcon } from "./Icons";

// Scroll-reveal wrapper used across sections for consistent animation.
export const reveal = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  const { about } = siteConfig;
  const [expanded, setExpanded] = useState(false);
  // First two paragraphs are always visible on mobile; the rest toggle.
  const firstParagraphs = about.story.slice(0, 2);
  const restParagraphs = about.story.slice(2);

  return (
    <section id="about" className="section">
      <div className="container-warm">
        {/* Two-column: photo + story */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Photo column */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="grid aspect-[4/5] w-full grid-cols-2 grid-rows-3 gap-3 overflow-hidden rounded-3xl shadow-lift">
              {/* Large primary photo — top, spans both columns and two rows */}
              <div className="relative col-span-2 row-span-2 overflow-hidden rounded-tl-3xl rounded-tr-3xl">
                <Image
                  src={about.images[0]}
                  alt="Hmong House hosts — Su sisters"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              {/* Smaller photo — bottom left */}
              <div className="relative overflow-hidden rounded-bl-3xl">
                <Image
                  src={about.images[1]}
                  alt="Hmong House homestay exterior"
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              {/* Smaller photo — bottom right */}
              <div className="relative overflow-hidden rounded-br-3xl">
                <Image
                  src={about.images[2]}
                  alt="Rice terraces near Hmong House"
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            {/* Decorative gold frame accent */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-3xl border border-gold/40 md:h-40 md:w-40" />
            <div className="absolute -left-3 -top-3 -z-10 h-24 w-24 rounded-2xl bg-rice/15 md:h-28 md:w-28" />
          </motion.div>

          {/* Story column */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="eyebrow">{about.eyebrow}</span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl">
              {about.title}
            </h2>
            <p className="mt-4 text-ink/70 md:text-lg">{about.subtitle}</p>

            {/* Story — desktop shows the full text; mobile collapses to 2 paragraphs with Read More */}
            <div className="mt-6 space-y-4 md:hidden">
              {/* First two paragraphs always visible */}
              {firstParagraphs.map((paragraph, i) => (
                <p key={i} className="text-ink/75">
                  {paragraph}
                </p>
              ))}

              {/* Remaining paragraphs animate open/closed */}
              <AnimatePresence initial={false}>
                {restParagraphs.length > 0 && (
                  <motion.div
                    key="mobile-rest"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: expanded ? "auto" : 0, opacity: 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-4">
                      {restParagraphs.map((paragraph, i) => (
                        <p key={i} className="text-ink/75">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {restParagraphs.length > 0 && (
                <button
                  type="button"
                  onClick={() => setExpanded((v) => !v)}
                  className="btn-gold mt-2 w-full sm:w-auto"
                >
                  {expanded ? "Read Less" : "Read More"}
                </button>
              )}
            </div>

            {/* Desktop: full story, no truncation */}
            <div className="mt-6 hidden space-y-4 md:block">
              {about.story.map((paragraph, i) => (
                <p key={i} className="text-ink/75">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Mission callout */}
            <blockquote className="mt-8 border-l-2 border-gold/60 pl-5 italic text-ink/80">
              {about.mission}
            </blockquote>
          </motion.div>
        </div>

        {/* Values row */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-6 md:grid-cols-3 md:mt-20"
        >
          {about.values.map((value, i) => (
            <motion.div
              key={value.title}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-warm p-7 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-rice/10 text-rice">
                <ValueIcon name={value.icon} width={22} height={22} />
              </div>
              <h3 className="mt-5 font-display text-xl text-ink">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-ink/70">{value.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
