import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { CASE_STUDIES } from '@/data/content';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative overflow-hidden py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-mesh" />
      <div className="container-px relative">
        <SectionHeading
          kicker="Case Studies"
          title="Outcomes, not just deliverables"
          subtitle="A selection of engagements where the right architecture moved real business metrics."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {CASE_STUDIES.map((cs) => (
            <motion.article
              key={cs.client}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="flex flex-col rounded-2xl border border-token bg-[var(--bg-elev)] p-7 shadow-card"
            >
              <span className="kicker w-fit">{cs.industry}</span>
              <h3 className="mt-4 font-display text-xl font-bold">{cs.client}</h3>
              <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-cyan-500">
                <TrendingUp size={16} /> {cs.result}
              </p>
              <p className="mt-4 flex-1 text-sm text-muted">{cs.summary}</p>

              <div className="mt-6 grid grid-cols-3 gap-2 border-t border-token pt-5">
                {cs.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-display text-lg font-bold text-gradient">{m.value}</div>
                    <div className="text-[10px] uppercase tracking-wide text-muted">{m.label}</div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
