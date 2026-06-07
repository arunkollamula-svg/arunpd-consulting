import { motion } from 'framer-motion';
import { WHY_CHOOSE } from '@/data/content';
import { staggerContainer, viewportOnce } from '@/lib/motion';

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-full opacity-[0.35]"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(37,99,235,0.07) 0%, transparent 70%)' }}
      />

      <div className="container-px relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="kicker">Why Partner With Us</span>
          <h2 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-bold sm:text-4xl lg:text-5xl">
            The difference that keeps clients{' '}
            <span className="text-gradient">coming back</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-slate-400">
            Beyond technical expertise, we bring commercial awareness, clear communication, and a genuine partnership approach.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {WHY_CHOOSE.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariant}
                whileHover={{ y: -5, transition: { duration: 0.22 } }}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]"
              >
                {/* Corner glow on hover */}
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: item.color }}
                />

                {/* Icon */}
                <div
                  className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] transition-all duration-300"
                  style={{ background: `${item.color}18` }}
                >
                  <Icon size={22} style={{ color: item.color }} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-display text-base font-bold text-white group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom accent line on hover */}
                <div
                  className="absolute inset-x-0 bottom-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                  style={{ background: `linear-gradient(to right, transparent, ${item.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
