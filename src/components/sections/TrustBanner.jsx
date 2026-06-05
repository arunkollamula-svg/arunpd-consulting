import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { fadeUp, viewportOnce } from '@/lib/motion';

const MARQUEE_ITEMS = [
  'AWS Partner', 'Azure Certified', 'GCP Solutions', 'OpenAI Integration',
  'Kubernetes Expert', 'FinTech Specialist', 'LangChain', 'CrewAI',
  'Docker', 'Terraform', 'ISO Compliant', 'SOC2 Aware', 'GDPR Ready',
  'React / Next.js', 'FastAPI', 'Enterprise Grade',
];

const TRUST_STATS = [
  { value: '40+', label: 'Enterprise Clients' },
  { value: 'USA', label: '& Europe' },
  { value: '15+', label: 'Years Experience' },
  { value: '120+', label: 'Projects Delivered' },
];

export default function TrustBanner() {
  return (
    <section className="relative overflow-hidden border-y border-token bg-[var(--bg-elev)]">
      {/* Subtle top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-600/40 to-transparent" />

      <div className="py-10">
        {/* Label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="container-px mb-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between"
        >
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            <ShieldCheck size={13} className="text-cyan-500" />
            Trusted by enterprises across USA &amp; Europe
          </p>
          {/* Inline stat pills */}
          <div className="flex flex-wrap gap-3">
            {TRUST_STATS.map(({ value, label }) => (
              <span
                key={label}
                className="rounded-full border border-token bg-[var(--bg)] px-3 py-1 text-xs font-semibold"
              >
                <span className="text-gradient">{value}</span>
                <span className="ml-1 text-muted">{label}</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Marquee strip */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-4">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="whitespace-nowrap rounded-full border border-token bg-[var(--bg)] px-4 py-2 text-xs font-semibold text-muted transition-colors hover:border-cyan-500/50 hover:text-cyan-500"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </section>
  );
}
