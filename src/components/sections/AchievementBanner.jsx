import { motion } from 'framer-motion';
import { Award, Zap, Users, Star, ArrowRight, TrendingUp } from 'lucide-react';
import Button from '@/components/ui/Button';
import Counter from '@/components/ui/Counter';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

const metrics = [
  {
    value: 120,
    suffix: '+',
    label: 'Projects Delivered',
    icon: Zap,
    gradient: 'from-blue-500 to-cyan-400',
    glow: 'rgba(37,99,235,0.4)',
  },
  {
    value: 40,
    suffix: '+',
    label: 'Enterprise Clients',
    icon: Users,
    gradient: 'from-violet-500 to-purple-400',
    glow: 'rgba(124,58,237,0.4)',
  },
  {
    value: 15,
    suffix: '+',
    label: 'Years Experience',
    icon: Award,
    gradient: 'from-amber-500 to-orange-400',
    glow: 'rgba(245,158,11,0.4)',
  },
  {
    value: 99,
    suffix: '%',
    label: 'Client Satisfaction',
    icon: Star,
    gradient: 'from-emerald-500 to-teal-400',
    glow: 'rgba(16,185,129,0.4)',
  },
];

const testimonials = [
  {
    quote: "Arun's cloud strategy cut our infrastructure costs by 32% while boosting uptime to 99.99%.",
    author: 'CTO, Regional Digital Bank',
  },
  {
    quote: "The AI recommendation engine he built drove a 3.1x increase in our conversion rate.",
    author: 'VP Engineering, National Retail Group',
  },
];

export default function AchievementBanner() {
  return (
    <section className="relative overflow-hidden bg-[#080d1a] py-24 lg:py-28">
      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[length:36px_36px] bg-grid-dark opacity-[0.22]" />

      {/* Ambient orbs */}
      <motion.div
        className="pointer-events-none absolute -left-48 -top-24 h-[600px] w-[600px] rounded-full bg-brand-600 opacity-[0.13] blur-[140px]"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute -right-48 bottom-0 h-[600px] w-[600px] rounded-full bg-cyan-500 opacity-[0.1] blur-[140px]"
        animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/15 blur-3xl" />

      {/* Top edge beam */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-600/50 to-transparent" />

      <div className="container-px relative">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-16 text-center"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            <TrendingUp size={12} />
            Impact By The Numbers
          </span>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Delivering{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400">
              measurable results
            </span>
            <br className="hidden sm:block" />
            at enterprise scale
          </h2>
          <p className="mx-auto mt-4 max-w-md text-slate-400">
            Every engagement is driven by outcomes — tracked, measured, and built to last.
          </p>
        </motion.div>

        {/* Metric cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-14 grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {metrics.map(({ value, suffix, label, icon: Icon, gradient }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] p-8 text-center backdrop-blur-sm"
            >
              {/* Bottom border reveal on hover */}
              <div className={`absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r ${gradient} transition-all duration-500 group-hover:w-full`} />
              {/* Corner glow */}
              <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20`} />

              <div className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg`}>
                <Icon size={22} />
              </div>
              <div className="font-display text-4xl font-extrabold text-white lg:text-5xl">
                <Counter value={value} suffix={suffix} duration={2} />
              </div>
              <p className="mt-2 text-sm font-medium text-slate-400">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial strip */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-12 grid gap-4 sm:grid-cols-2"
        >
          {testimonials.map(({ quote, author }) => (
            <motion.div
              key={author}
              variants={fadeUp}
              className="relative rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm"
            >
              <div className="mb-3 text-3xl font-serif text-cyan-400 leading-none">"</div>
              <p className="text-sm italic text-slate-300">{quote}</p>
              <p className="mt-3 text-xs font-semibold text-cyan-400">— {author}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center"
        >
          <Button to="/case-studies" size="lg" variant="white">
            Explore Case Studies
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>

      {/* Bottom edge beam */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
    </section>
  );
}
