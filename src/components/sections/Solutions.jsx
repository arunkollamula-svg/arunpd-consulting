import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { SOLUTIONS } from '@/data/content';
import { staggerContainer, viewportOnce } from '@/lib/motion';

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Solutions() {
  return (
    <section id="solutions" className="relative overflow-hidden py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-mesh" />
      <div className="container-px relative">
        <SectionHeading
          kicker="Solutions"
          title="Enterprise solutions, ready to scale"
          subtitle="Battle-tested building blocks across FinTech, AI, Cloud, and core enterprise systems."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SOLUTIONS.map(({ icon: Icon, title, items }) => (
            <motion.div
              key={title}
              variants={item}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col rounded-2xl border border-token bg-[var(--bg-elev)] p-6 shadow-card transition-all hover:border-cyan-500/50"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-500/10 text-cyan-500">
                  <Icon size={22} />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-muted opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{title}</h3>
              <ul className="mt-3 space-y-1.5">
                {items.map((i) => (
                  <li key={i} className="text-sm text-muted">
                    {i}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
