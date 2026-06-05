import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { INDUSTRIES } from '@/data/content';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

export default function Industries() {
  return (
    <section id="industries" className="container-px py-24 lg:py-28">
      <SectionHeading
        kicker="Industries"
        title="Domain expertise where it counts"
        subtitle="Deep, regulated-industry experience — from banking and government to retail, healthcare, and SaaS."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {INDUSTRIES.map(({ name, desc, icon: Icon }) => (
          <motion.div
            key={name}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl border border-token bg-[var(--bg-elev)] p-7 shadow-card"
          >
            <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand-gradient transition-transform duration-300 group-hover:scale-x-100" />
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-600/10 text-brand-600">
              <Icon size={24} />
            </div>
            <h3 className="mt-5 font-display text-lg font-bold">{name}</h3>
            <p className="mt-2 text-sm text-muted">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
