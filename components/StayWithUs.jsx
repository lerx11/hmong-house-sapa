"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig, buildWhatsappLink } from "@/data/siteConfig";
import { AmenityIcon, WhatsAppIcon } from "./Icons";
import { reveal } from "./About";

export default function StayWithUs() {
  const { stay } = siteConfig;
  const bookingLink = buildWhatsappLink(
    "Hi! I'd like to book a room at Hmong House Sapa"
  );

  return (
    <section id="stay" className="section">
      <div className="container-warm">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Photos column (left) */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-4"
          >
            {stay.images.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-3xl shadow-card ${
                  // Vary tile spans for a softer collage feel.
                  i === 0 ? "row-span-2 aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
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
    </section>
  );
}
