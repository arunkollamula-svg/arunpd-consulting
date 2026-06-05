import { lazy, Suspense, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Cloud, Cpu, ShieldCheck, ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import Counter from '@/components/ui/Counter';
import { STATS } from '@/data/content';
import { staggerContainer, fadeUp } from '@/lib/motion';

const HeroScene = lazy(() => import('@/components/three/HeroScene'));

const featurePills = [
  { icon: Cloud, label: 'Cloud Infrastructure' },
  { icon: Cpu, label: 'AI & Agents' },
  { icon: ShieldCheck, label: 'Enterprise Grade' },
];

const roles = [
  'Cloud Architecture',
  'AI & LLM Solutions',
  'FinTech Platforms',
  'Digital Transformation',
  'DevOps Automation',
];

// Ambient orb definitions (pointer-events-none, purely decorative)
const ORB_CONFIGS = [
  {
    className: 'absolute -top-40 left-[8%] h-[420px] w-[420px]',
    color: 'bg-brand-600',
    opacity: 'opacity-[0.16]',
    blur: 'blur-[110px]',
    anim: { x: [0, 28, -18, 0], y: [0, -22, 28, 0] },
    dur: 18,
  },
  {
    className: 'absolute top-1/4 right-[4%] h-[360px] w-[360px]',
    color: 'bg-cyan-500',
    opacity: 'opacity-[0.12]',
    blur: 'blur-[90px]',
    anim: { x: [0, -24, 16, 0], y: [0, 28, -18, 0] },
    dur: 23,
  },
  {
    className: 'absolute bottom-10 left-1/3 h-[480px] w-[480px]',
    color: 'bg-indigo-600',
    opacity: 'opacity-[0.09]',
    blur: 'blur-[130px]',
    anim: { x: [0, 18, -28, 0], y: [0, -12, 22, 0] },
    dur: 28,
  },
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Static layered backgrounds */}
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
      <div className="pointer-events-none absolute inset-0 bg-[length:42px_42px] bg-grid-light opacity-70 dark:bg-grid-dark [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />

      {/* Animated ambient orbs */}
      {ORB_CONFIGS.map((orb, i) => (
        <motion.div
          key={i}
          className={`pointer-events-none ${orb.className} rounded-full ${orb.color} ${orb.opacity} ${orb.blur}`}
          animate={orb.anim}
          transition={{ duration: orb.dur, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* 3D canvas */}
      <div className="absolute inset-0 -z-0 opacity-90">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      <div className="container-px relative z-10 flex min-h-[88vh] flex-col items-center justify-center py-24 text-center">
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="flex flex-col items-center">
          {/* Badge */}
          <motion.span variants={fadeUp} className="kicker glass">
            <Sparkles size={14} /> Cloud • AI • Digital Transformation
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="mt-6 max-w-4xl text-balance text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            Transform Your Business{' '}
            <br className="hidden sm:block" />
            with <span className="text-gradient">Cloud &amp; AI</span>
          </motion.h1>

          {/* Cycling role text */}
          <motion.div
            variants={fadeUp}
            className="mt-5 flex h-8 items-center justify-center gap-2 text-base sm:text-lg"
          >
            <span className="font-medium text-muted">Expert in</span>
            <span className="relative inline-flex h-8 items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIdx}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  className="whitespace-nowrap font-bold text-gradient"
                >
                  {roles[roleIdx]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          {/* Body copy */}
          <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
            Helping startups, enterprises, and government organizations across{' '}
            <span className="font-semibold text-[var(--text)]">USA &amp; Europe</span> leverage Cloud
            Computing, Artificial Intelligence, and modern web technologies to accelerate growth and
            innovation. Available for remote engagements worldwide.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact" size="lg">
              Schedule Consultation
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button to="/services" size="lg" variant="secondary">
              View Services
            </Button>
          </motion.div>

          {/* Feature pills */}
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {featurePills.map(({ icon: Icon, label }, i) => (
              <span
                key={label}
                className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium animate-float"
                style={{ animationDelay: `${i * 0.8}s` }}
              >
                <Icon size={16} className="text-cyan-500" />
                {label}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="glass mt-16 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl sm:grid-cols-4"
        >
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1 px-4 py-6">
              <span className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-muted">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1"
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="text-muted/40"
          >
            <ChevronDown size={22} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
