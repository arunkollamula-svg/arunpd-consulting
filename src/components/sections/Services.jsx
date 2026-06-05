import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { SERVICES } from '@/data/content';
import { staggerContainer, viewportOnce } from '@/lib/motion';

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function ServiceCard({ service }) {
  const { icon: Icon, title, tagline, items, tech } = service;
  return (
    <motion.article
      variants={cardVariant}
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-token bg-[var(--bg-elev)] p-7 shadow-card transition-shadow hover:shadow-glow"
    >
      {/* hover glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-gradient opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />

      <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-brand-600/10 text-brand-600 transition-colors group-hover:bg-brand-gradient group-hover:text-white">
        <Icon size={24} />
      </div>

      <h3 className="relative mt-5 font-display text-xl font-bold">{title}</h3>
      <p className="relative mt-2 text-sm text-muted">{tagline}</p>

      <ul className="relative mt-5 grid gap-2">
        {items.map((it) => (
          <li key={it} className="flex items-center gap-2 text-sm">
            <Check size={15} className="shrink-0 text-cyan-500" />
            <span className="text-muted">{it}</span>
          </li>
        ))}
      </ul>

      {tech && (
        <div className="relative mt-5 flex flex-wrap gap-1.5 border-t border-token pt-4">
          {tech.map((t) => (
            <span key={t} className="rounded-md bg-brand-600/10 px-2 py-1 text-[11px] font-semibold text-brand-600">
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
    <section id="services" className="container-px py-24 lg:py-28">
      {!compact && (
        <SectionHeading
          kicker="Services"
          title="End-to-end consulting across the modern stack"
          subtitle="From cloud strategy and AI agents to commerce, mobile, and DevOps automation — delivered with enterprise rigor."
        />
      )}

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${compact ? '' : 'mt-14'}`}
      >
        {SERVICES.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </motion.div>
    </section>
  );
}
