import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { TECH_STACK } from '@/data/content';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

const allTech = TECH_STACK.flatMap((g) => g.items);

export default function TechStack() {
  return (
    <section id="tech" className="container-px py-24 lg:py-28">
      <SectionHeading
        kicker="Technology Stack"
        title="Modern tools, chosen for the job"
        subtitle="A pragmatic, vendor-aware stack spanning cloud, frontend, backend, data, AI, and DevOps."
      />

      {/* Marquee */}
      <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-4">
          {[...allTech, ...allTech].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="whitespace-nowrap rounded-xl border border-token bg-[var(--bg-elev)] px-5 py-3 text-sm font-semibold"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Categorized grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {TECH_STACK.map((group) => (
          <motion.div
            key={group.category}
            variants={fadeUp}
            className="rounded-2xl border border-token bg-[var(--bg-elev)] p-6"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-gradient" />
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-muted">
                {group.category}
              </h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((t) => (
                <span
                  key={t}
                  className="rounded-lg bg-brand-600/8 px-3 py-1.5 text-sm font-medium text-[var(--text)] ring-1 ring-token transition-colors hover:text-brand-600"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
