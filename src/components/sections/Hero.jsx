import { lazy, Suspense, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Play, Sparkles, ChevronDown, Star } from 'lucide-react';
import Button from '@/components/ui/Button';
import Counter from '@/components/ui/Counter';
import { STATS } from '@/data/content';
import { staggerContainer, fadeUp } from '@/lib/motion';

const HeroScene = lazy(() => import('@/components/three/HeroScene'));

const roles = [
  'AI Development',
  'Fintech Platforms',
  'Cloud Architecture',
  'Custom Software',
  'Digital Transformation',
];

// Aurora orb configs — six layered blobs that drift slowly + follow mouse
const AURORA_ORBS = [
  { cls: 'absolute -top-48 -left-24 h-[700px] w-[700px]', color: '#1d4ed8', opacity: 0.12, blur: 160, animClass: 'animate-aurora' },
  { cls: 'absolute top-1/3 -right-32 h-[600px] w-[600px]',  color: '#06B6D4', opacity: 0.10, blur: 140, animClass: 'animate-aurora-slow' },
  { cls: 'absolute -bottom-24 left-1/4 h-[550px] w-[550px]', color: '#7C3AED', opacity: 0.09, blur: 130, animClass: 'animate-aurora' },
  { cls: 'absolute top-0 right-1/4 h-[400px] w-[400px]',    color: '#06B6D4', opacity: 0.07, blur: 110, animClass: 'animate-aurora-slow' },
  { cls: 'absolute top-1/2 -left-16 h-[380px] w-[380px]',   color: '#2563EB', opacity: 0.08, blur: 100, animClass: 'animate-aurora' },
  { cls: 'absolute bottom-0 right-1/3 h-[340px] w-[340px]', color: '#8B5CF6', opacity: 0.07, blur: 120, animClass: 'animate-aurora-slow' },
];

// Trusted by brand pills
const TRUSTED_BY = ['Fortune 500', 'US Startups', 'UK Enterprises', 'EU Scaleups', 'Government Agencies', 'FinTech Leaders'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  // Mouse parallax
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 55, damping: 22 });
  const springY = useSpring(rawY, { stiffness: 55, damping: 22 });

  useEffect(() => {
    const onMove = (e) => {
      rawX.set((e.clientX / window.innerWidth  - 0.5) * 38);
      rawY.set((e.clientY / window.innerHeight - 0.5) * 26);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [rawX, rawY]);

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816]">

      {/* ── Aurora gradient orbs (mouse-parallax) ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {AURORA_ORBS.map((orb, i) => (
          <motion.div
            key={i}
            className={`${orb.cls} rounded-full ${orb.animClass}`}
            style={{
              background: orb.color,
              opacity: orb.opacity,
              filter: `blur(${orb.blur}px)`,
              x: springX,
              y: springY,
              animationDelay: `${i * 1.8}s`,
            }}
          />
        ))}
      </div>

      {/* ── Subtle dot-grid overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(148,163,184,0.35) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
        }}
      />

      {/* ── Perspective grid floor ── */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 overflow-hidden opacity-30">
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(37,99,235,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.25) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            transform: 'perspective(400px) rotateX(62deg)',
            transformOrigin: 'center top',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 60%)',
          }}
        />
      </div>

      {/* ── Radial top glow ── */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[55%]"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37,99,235,0.22) 0%, transparent 70%)' }}
      />

      {/* ── 3D scene backdrop ── */}
      <div className="absolute inset-0 opacity-95">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      {/* ── Pulse rings ── */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={`ring-${i}`}
          className="pointer-events-none absolute left-1/2 top-[46%] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/[0.15]"
          initial={{ scale: 0.3, opacity: 0.7 }}
          animate={{ scale: 4.5, opacity: 0 }}
          transition={{ duration: 6, delay: i * 1.5, repeat: Infinity, ease: 'easeOut' }}
        />
      ))}

      {/* ── Main content ── */}
      <div className="container-px relative z-10 flex min-h-screen flex-col items-center justify-center py-28 text-center">
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="flex w-full max-w-5xl flex-col items-center">

          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-8 flex items-center gap-2">
            <span className="flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              <Sparkles size={12} />
              AI • Fintech • Cloud • Enterprise
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-balance text-4xl font-bold leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Building{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(120deg, #38bdf8 0%, #2563eb 50%, #8B5CF6 100%)' }}
            >
              AI, Fintech &amp; Enterprise
            </span>
            <br className="hidden sm:block" />
            Software Solutions for{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(120deg, #06B6D4 0%, #2563EB 100%)' }}
            >
              Global Businesses
            </span>
          </motion.h1>

          {/* Role cycling */}
          <motion.div variants={fadeUp} className="mt-6 flex h-9 items-center gap-3 text-base sm:text-lg">
            <span className="text-slate-400">Expert in</span>
            <span className="relative inline-flex h-9 items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIdx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                  className="whitespace-nowrap font-bold"
                  style={{ backgroundImage: 'linear-gradient(120deg, #06B6D4, #2563EB)', WebkitBackgroundClip: 'text', color: 'transparent' }}
                >
                  {roles[roleIdx]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            Helping startups and enterprises across the{' '}
            <span className="font-semibold text-slate-200">USA, UK, and Europe</span>{' '}
            accelerate growth through AI, cloud platforms, fintech innovation, and custom software development.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
            {/* Primary CTA */}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl px-8 py-4 text-sm font-semibold text-white shadow-[0_0_30px_rgba(37,99,235,0.5)]"
              style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 100%)' }}
            >
              <span className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-[0.08]" />
              Schedule Free Consultation
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="/case-studies"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2.5 rounded-xl border border-slate-700/60 bg-slate-900/50 px-8 py-4 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-colors hover:border-slate-600 hover:bg-slate-800/60"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-700 transition-colors group-hover:bg-slate-600">
                <Play size={10} className="ml-0.5 fill-current" />
              </span>
              View Case Studies
            </motion.a>
          </motion.div>

          {/* Social proof strip */}
          <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-xs text-slate-400">5.0 from global enterprise clients</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {TRUSTED_BY.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700/50 bg-slate-900/40 px-3 py-1 text-[11px] font-medium text-slate-400 backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-800/30 backdrop-blur-md sm:grid-cols-4"
        >
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1 bg-slate-900/40 px-4 py-6 hover:bg-slate-800/40 transition-colors">
              <span
                className="font-display text-3xl font-bold sm:text-4xl"
                style={{ backgroundImage: 'linear-gradient(120deg, #38bdf8, #2563eb)', WebkitBackgroundClip: 'text', color: 'transparent' }}
              >
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-slate-500">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
            className="text-slate-600"
          >
            <ChevronDown size={22} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
