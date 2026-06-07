import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/content';
import { staggerContainer, viewportOnce } from '@/lib/motion';

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function TestimonialCard({ t }) {
  return (
    <motion.article
      variants={cardVariant}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.04]"
    >
      {/* Accent gradient on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(ellipse at top left, ${t.accent}12 0%, transparent 60%)` }}
      />

      {/* Top bar accent */}
      <div
        className="absolute inset-x-0 top-0 h-px opacity-60"
        style={{ background: `linear-gradient(to right, transparent, ${t.accent}, transparent)` }}
      />

      {/* Quote icon */}
      <div
        className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08]"
        style={{ background: `${t.accent}14` }}
      >
        <Quote size={18} style={{ color: t.accent }} />
      </div>

      {/* Stars */}
      <div className="mb-4 flex gap-0.5">
        {[...Array(t.rating)].map((_, i) => (
          <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Review text */}
      <p className="relative flex-1 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
        "{t.text}"
      </p>

      {/* Author */}
      <div className="mt-7 flex items-center gap-4 border-t border-white/[0.06] pt-5">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
          style={{ background: `linear-gradient(135deg, ${t.accent}cc, ${t.accent}66)` }}
        >
          {t.avatar}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white">{t.name}</p>
          <p className="truncate text-xs text-slate-500">
            {t.role}, <span className="text-slate-400">{t.company}</span>
          </p>
          <p className="truncate text-[11px] text-slate-600">{t.location}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-24 lg:py-32">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-600/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-violet-600/5 blur-[100px]" />

      <div className="container-px relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="kicker">Client Results</span>
          <h2 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-bold sm:text-4xl lg:text-5xl">
            Trusted by teams across{' '}
            <span className="text-gradient">USA, UK &amp; Europe</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-slate-400">
            Real outcomes from real clients. Every engagement is measured by the value delivered.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
