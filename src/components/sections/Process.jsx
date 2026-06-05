import { motion } from 'framer-motion';
import { ArrowRight, Search, Layers, Code2, Rocket } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { PROCESS } from '@/data/content';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

const STEP_ICONS = [Search, Layers, Code2, Rocket];

const STEP_COLORS = [
  { ring: 'ring-blue-500/30', icon: 'from-blue-600 to-blue-400', num: 'text-blue-500/20' },
  { ring: 'ring-violet-500/30', icon: 'from-violet-600 to-purple-400', num: 'text-violet-500/20' },
  { ring: 'ring-cyan-500/30', icon: 'from-cyan-600 to-teal-400', num: 'text-cyan-500/20' },
  { ring: 'ring-emerald-500/30', icon: 'from-emerald-600 to-green-400', num: 'text-emerald-500/20' },
];

export function Process() {
  return (
    <section className="container-px py-24 lg:py-28">
      <SectionHeading
        kicker="How I Work"
        title="A clear path from idea to impact"
        subtitle="A proven, low-risk engagement model that keeps you in control at every step."
      />

      <div className="relative mt-14">
        {/* Horizontal connector line — desktop only */}
        <div className="pointer-events-none absolute left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] top-[1.875rem] hidden h-px lg:block">
          <div className="h-full bg-gradient-to-r from-blue-500/40 via-cyan-400/40 to-emerald-500/40" />
          {/* Animated travelling dot */}
          <motion.div
            className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(6,182,212,0.6)]"
            animate={{ left: ['0%', '100%'] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'linear', repeatDelay: 1.5 }}
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {PROCESS.map((p, i) => {
            const Icon = STEP_ICONS[i];
            const color = STEP_COLORS[i];
            return (
              <motion.div
                key={p.step}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className={`group relative rounded-2xl border border-token bg-[var(--bg-elev)] p-7 ring-1 ${color.ring} ring-transparent transition-all duration-300 hover:ring-1 hover:shadow-glow`}
              >
                {/* Hover gradient fill */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-brand-gradient opacity-0 transition-opacity duration-500 group-hover:opacity-[0.04]" />

                {/* Icon circle + step number side by side */}
                <div className="relative mb-5 flex items-center gap-3">
                  <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${color.icon} text-white shadow-lg`}>
                    <Icon size={20} />
                  </div>
                  <span className={`font-display text-5xl font-extrabold ${color.num} group-hover:opacity-40 transition-opacity`}>
                    {p.step}
                  </span>
                </div>

                <h3 className="relative font-display text-lg font-bold">{p.title}</h3>
                <p className="relative mt-2 text-sm text-muted leading-relaxed">{p.desc}</p>

                {/* Bottom color bar */}
                <div className={`absolute bottom-0 left-0 h-0.5 w-0 rounded-b-2xl bg-gradient-to-r ${color.icon} transition-all duration-500 group-hover:w-full`} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="container-px pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-[#080d1a] px-8 py-16 text-center sm:px-16">
        {/* Grid */}
        <div className="pointer-events-none absolute inset-0 bg-[length:32px_32px] bg-grid-dark opacity-35" />

        {/* Orbs */}
        <motion.div
          className="pointer-events-none absolute -left-24 -top-16 h-80 w-80 rounded-full bg-brand-600 opacity-[0.28] blur-[90px]"
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-500 opacity-[0.22] blur-[90px]"
          animate={{ x: [0, -18, 0], y: [0, 15, 0] }}
          transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-indigo-500 opacity-[0.15] blur-[60px]" />

        {/* Edge beams */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-600/60 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

        <div className="relative">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready to scale through{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Cloud &amp; AI?
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Book a free consultation and let&apos;s map the highest-leverage opportunities for your
              business.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button to="/contact" size="lg" variant="white">
                Book a Free Consultation
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                to="/case-studies"
                size="lg"
                variant="secondary"
                className="border-white/20 text-white hover:border-cyan-400/50 hover:text-cyan-400"
              >
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
