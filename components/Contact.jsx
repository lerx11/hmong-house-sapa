"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig, buildWhatsappLink } from "@/data/siteConfig";
import {
  WhatsAppIcon,
  InstagramIcon,
  FacebookIcon,
  TiktokIcon,
  MapPinIcon,
} from "./Icons";
import { reveal } from "./About";

const socialItems = [
  { key: "instagram", href: siteConfig.socialLinks.instagram, Icon: InstagramIcon, label: "Instagram" },
  { key: "facebook", href: siteConfig.socialLinks.facebook, Icon: FacebookIcon, label: "Facebook" },
  { key: "tiktok", href: siteConfig.socialLinks.tiktok, Icon: TiktokIcon, label: "TikTok" },
];

export default function Contact() {
  // Form state — builds a pre-filled WhatsApp message on submit.
  const [form, setForm] = useState({
    name: "",
    tour: siteConfig.tours[0]?.name || "General enquiry",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  // Compose the WhatsApp message and open the chat.
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = [
      `Hi ${siteConfig.businessName}! I'd like to book.`,
      ``,
      `Name: ${form.name || "—"}`,
      `Tour: ${form.tour}`,
      form.date ? `Preferred date: ${form.date}` : null,
      form.message ? `Message: ${form.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(buildWhatsappLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="section">
      <div className="container-warm">
        {/* Heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow justify-center">Contact</span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl">
            Plan your stay with us
          </h2>
          <p className="mt-4 text-ink/70">
            Tell us what you&apos;re dreaming of and we&apos;ll reply on
            WhatsApp — usually within an hour.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact info + WhatsApp CTA */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col"
          >
            <div className="card-warm flex flex-1 flex-col p-7 md:p-9">
              <h3 className="font-display text-2xl text-ink">
                {siteConfig.businessName}
              </h3>
              <p className="mt-1 text-sm text-rice">{siteConfig.tagline}</p>

              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-ink/50">
                    Address
                  </dt>
                  <dd className="mt-1 text-ink/80">{siteConfig.address}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-ink/50">
                    WhatsApp
                  </dt>
                  <dd className="mt-1 text-ink/80">
                    {siteConfig.whatsappNumber} ·{" "}
                    <span className="text-ink/50">primary contact</span>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-ink/50">
                    Rooms
                  </dt>
                  <dd className="mt-1 text-ink/80">
                    {siteConfig.rooms.count} rooms · {siteConfig.rooms.priceRange}
                  </dd>
                </div>
              </dl>

              {/* Google Maps embed + Get Directions */}
              <div className="mt-7">
                <div className="overflow-hidden rounded-2xl border border-ink/10 bg-rice/10">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.46151840622!2d103.89562699999999!3d22.2983789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36cd470db32c8e35%3A0x762527ed105c3275!2sHmong%20house%20Sapa!5e0!3m2!1sru!2s!4v1787077070665!5m2!1sru!2s"
                    width="600"
                    height="450"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Hmong House Sapa on Google Maps"
                    className="block h-[250px] w-full border-0 sm:h-[320px] md:h-[400px]"
                  />
                </div>
                <a
                  href={siteConfig.maps.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline mt-3 w-full sm:w-auto"
                >
                  <MapPinIcon width={16} height={16} />
                  {siteConfig.maps.displayText}
                </a>
              </div>

              <a
                href={buildWhatsappLink(
                  `Hi ${siteConfig.businessName}! I'd like to ask about a stay.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mt-7 w-full sm:w-auto"
              >
                <WhatsAppIcon width={16} height={16} />
                Chat on WhatsApp
              </a>

              {/* Social links */}
              <div className="mt-7 flex items-center gap-3">
                <span className="text-xs uppercase tracking-wider text-ink/50">
                  Follow
                </span>
                <div className="flex items-center gap-2">
                  {socialItems.map(({ key, href, Icon, label }) => (
                    <a
                      key={key}
                      href={href || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="grid h-10 w-10 place-items-center rounded-full bg-rice/10 text-rice transition-colors hover:bg-rice hover:text-cream"
                    >
                      <Icon width={18} height={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* WhatsApp message form */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <form onSubmit={handleSubmit} className="card-warm p-7 md:p-9">
              <h3 className="font-display text-2xl text-ink">
                Send us a message
              </h3>
              <p className="mt-1 text-sm text-ink/60">
                We&apos;ll open WhatsApp with your details pre-filled.
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink/80">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Anna Smith"
                    className="mt-2 w-full rounded-2xl border border-ink/10 bg-cream/40 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-rice focus:bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="tour" className="block text-sm font-medium text-ink/80">
                    Tour of interest
                  </label>
                  <select
                    id="tour"
                    name="tour"
                    value={form.tour}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-ink/10 bg-cream/40 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-rice focus:bg-white"
                  >
                    {siteConfig.tours.map((t) => (
                      <option key={t.slug} value={t.name}>
                        {t.name} — {t.price}
                      </option>
                    ))}
                    <option value="General enquiry">General enquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-ink/80">
                    Preferred date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-ink/10 bg-cream/40 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-rice focus:bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How many people, any special requests…"
                    className="mt-2 w-full resize-none rounded-2xl border border-ink/10 bg-cream/40 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-rice focus:bg-white"
                  />
                </div>
              </div>

              <button type="submit" className="btn-green mt-6 w-full">
                <WhatsAppIcon width={16} height={16} />
                Send via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
