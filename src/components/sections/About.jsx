import { motion } from 'framer-motion';
import { CheckCircle2, BadgeCheck } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { EXPERTISE, HIGHLIGHTS } from '@/data/content';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

export default function About() {
  return (
    <section id="about" className="container-px py-24 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Visual profile card */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-brand-gradient opacity-20 blur-2xl" />
            <div className="card-surface relative overflow-hidden rounded-3xl p-8 shadow-card">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 shrink-0">
                  <img
                    src="/profile.jpeg"
                    alt="Arun P Divakaran"
                    className="h-20 w-20 rounded-2xl object-cover shadow-glow ring-2 ring-brand-600/30"
                  />
                  <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500 ring-2 ring-[var(--bg-elev)]">
                    <BadgeCheck size={12} className="text-white" />
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">Arun P Divakaran</h3>
                  <p className="text-sm text-muted">Senior Technology Consultant</p>
                  <p className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-cyan-500">
                    <BadgeCheck size={14} /> 15+ Years Experience
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {HIGHLIGHTS.map((h) => (
                  <span
                    key={h}
                    className="rounded-full border border-token px-3 py-1.5 text-xs font-medium text-muted"
                  >
                    {h}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-token pt-6 text-center">
                {[
                  ['120+', 'Projects'],
                  ['40+', 'Clients'],
                  ['6+', 'Industries'],
                ].map(([v, l]) => (
                  <div key={l}>
                    <div className="font-display text-2xl font-bold text-gradient">{v}</div>
                    <div className="text-[11px] uppercase tracking-wider text-muted">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            kicker="About"
            title="A trusted partner for cloud, AI & modern technology"
            subtitle="Experienced technology consultant helping organizations design, build, and scale resilient digital platforms — from strategy through production."
          />

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-8 grid gap-3 sm:grid-cols-2"
          >
            {EXPERTISE.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="flex items-center gap-3 rounded-xl border border-token bg-[var(--bg-elev)] px-4 py-3"
              >
                <CheckCircle2 size={18} className="shrink-0 text-cyan-500" />
                <span className="text-sm font-medium">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
