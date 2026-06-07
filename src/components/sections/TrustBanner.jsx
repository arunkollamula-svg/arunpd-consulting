import { motion } from 'framer-motion';
import Counter from '@/components/ui/Counter';
import { fadeUp, viewportOnce } from '@/lib/motion';

const STATS = [
  { value: 15, suffix: '+', label: 'Years of Experience', sub: 'Building enterprise systems' },
  { value: 120, suffix: '+', label: 'Projects Delivered', sub: 'Across 6 industries' },
  { value: 20, suffix: '+', label: 'Technologies', sub: 'Modern & proven stack' },
  { value: 40, suffix: '+', label: 'Global Clients', sub: 'USA · UK · EU · ME' },
];

const MARQUEE_ITEMS = [
  'AWS Partner',  'Azure Certified', 'GCP Solutions', 'OpenAI Integration',
  'Kubernetes',   'FinTech Specialist', 'LangChain',  'CrewAI',
  'Docker',       'Terraform', 'GDPR Ready',    'PCI-DSS',
  'React / Next.js', 'FastAPI', 'Enterprise Grade', 'ISO 27001',
];

export default function TrustBanner() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-slate-950/80 py-20">
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2">
        <div className="mx-auto h-[300px] w-[600px] rounded-full bg-brand-600/8 blur-[100px]" />
      </div>

      <div className="container-px relative">
        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-8 lg:grid-cols-4"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <span
                className="font-display text-5xl font-bold lg:text-6xl"
                style={{ backgroundImage: 'linear-gradient(135deg, #38bdf8 0%, #2563eb 100%)', WebkitBackgroundClip: 'text', color: 'transparent' }}
              >
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <span className="mt-2 text-sm font-semibold text-white">{s.label}</span>
              <span className="mt-1 text-xs text-slate-500">{s.sub}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="my-14 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        {/* Tech marquee */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.22em] text-slate-500"
        >
          Trusted technologies &amp; certifications
        </motion.p>

        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-3">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="whitespace-nowrap rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-400 transition-colors hover:border-cyan-500/30 hover:text-cyan-400"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-600/40 to-transparent" />
    </section>
  );
}
