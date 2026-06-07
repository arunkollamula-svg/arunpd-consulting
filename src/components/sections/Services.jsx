import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/data/content';
import { staggerContainer, viewportOnce } from '@/lib/motion';

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function ServiceCard({ service }) {
  const { icon: Icon, title, tagline, items, tech, accent } = service;
  return (
    <motion.article
      variants={cardVariant}
      whileHover={{ y: -6, transition: { duration: 0.22 } }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-[#0c111d] p-6 transition-all duration-300 hover:border-slate-700 hover:bg-[#0f1525]"
    >
      {/* Top accent line — appears on hover in the card's accent colour */}
      <div
        className="absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `linear-gradient(to right, transparent, ${accent}, transparent)` }}
      />

      {/* Corner arrow */}
      <ArrowUpRight
        size={15}
        className="absolute right-5 top-5 opacity-0 transition-all duration-300 group-hover:opacity-60"
        style={{ color: accent }}
      />

      {/* Icon container — uniform background, accent-coloured icon */}
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80">
        <Icon size={20} style={{ color: accent }} />
      </div>

      {/* Title */}
      <h3 className="font-display text-[15px] font-bold leading-snug text-white">{title}</h3>

      {/* Tagline */}
      <p className="mt-2 text-sm leading-relaxed text-slate-500">{tagline}</p>

      {/* Feature list */}
      <ul className="mt-4 flex-1 space-y-2">
        {items.map((it) => (
          <li key={it} className="flex items-center gap-2.5 text-sm text-slate-400">
            <span className="h-1 w-1 shrink-0 rounded-full bg-slate-600" />
            {it}
          </li>
        ))}
      </ul>

      {/* Tech badges — uniform neutral style */}
      {tech && (
        <div className="mt-5 flex flex-wrap gap-1.5 border-t border-slate-800 pt-4">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-slate-700 bg-slate-800 px-2 py-0.5 text-[11px] font-medium text-slate-400"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </motion.article>
  );
}

export default function Services({ compact = false }) {
  return (
    <section id="services" className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/4 blur-[120px]" />

      <div className="container-px relative">
        {!compact && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <span className="kicker">What We Build</span>
            <h2 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-bold sm:text-4xl lg:text-5xl">
              End-to-end solutions across the{' '}
              <span className="text-gradient">modern technology stack</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-slate-400">
              From AI and fintech to cloud and cybersecurity — delivered with enterprise rigour to clients across the USA, UK, and Europe.
            </p>
          </motion.div>
        )}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
