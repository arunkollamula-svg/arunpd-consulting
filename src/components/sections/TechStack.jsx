import { motion } from 'framer-motion';
import { viewportOnce } from '@/lib/motion';

const ROW_1 = ['React', 'Next.js', 'Node.js', 'Python', 'FastAPI', 'AWS', 'Google Cloud', 'Azure'];
const ROW_2 = ['Docker', 'Kubernetes', 'PostgreSQL', 'MySQL', 'MongoDB', 'Terraform', 'TypeScript', 'PHP'];

const TECH_COLORS = {
  'React':        '#61DAFB',
  'Next.js':      '#ffffff',
  'Node.js':      '#68A063',
  'Python':       '#3776AB',
  'FastAPI':      '#009688',
  'AWS':          '#FF9900',
  'Google Cloud': '#4285F4',
  'Azure':        '#0078D4',
  'Docker':       '#2496ED',
  'Kubernetes':   '#326CE5',
  'PostgreSQL':   '#4169E1',
  'MySQL':        '#4479A1',
  'MongoDB':      '#47A248',
  'Terraform':    '#7B42BC',
  'TypeScript':   '#3178C6',
  'PHP':          '#777BB4',
};

function TechPill({ name }) {
  const color = TECH_COLORS[name] || '#94a3b8';
  return (
    <span className="group flex items-center gap-2.5 whitespace-nowrap rounded-xl border border-white/[0.07] bg-white/[0.03] px-5 py-3 text-sm font-medium text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.06] hover:text-white">
      <span className="h-2 w-2 rounded-full transition-all group-hover:scale-125" style={{ background: color, boxShadow: `0 0 8px ${color}` }} />
      {name}
    </span>
  );
}

export default function TechStack() {
  return (
    <section id="tech" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2">
        <div className="mx-auto h-[400px] w-[800px] rounded-full bg-violet-600/5 blur-[130px]" />
      </div>

      <div className="container-px relative mb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
        >
          <span className="kicker">Technology Stack</span>
          <h2 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-bold sm:text-4xl">
            Built with the world's{' '}
            <span className="text-gradient">most powerful tools</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-slate-400">
            A pragmatic, vendor-aware stack spanning cloud, frontend, backend, data, AI, and DevOps.
          </p>
        </motion.div>
      </div>

      {/* Dual marquee — Row 1 forward, Row 2 reverse */}
      <div className="space-y-4">
        {/* Row 1 — left to right */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee gap-4">
            {[...ROW_1, ...ROW_1].map((t, i) => (
              <TechPill key={`r1-${t}-${i}`} name={t} />
            ))}
          </div>
        </div>

        {/* Row 2 — right to left */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee-reverse gap-4">
            {[...ROW_2, ...ROW_2].map((t, i) => (
              <TechPill key={`r2-${t}-${i}`} name={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
