import { motion } from 'framer-motion';

export default function PageHeader({ kicker, title, subtitle }) {
  return (
    <section className="relative overflow-hidden border-b border-token">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[length:42px_42px] bg-grid-light opacity-60 dark:bg-grid-dark [mask-image:radial-gradient(70%_70%_at_50%_0%,black,transparent)]" />
      <div className="container-px relative py-20 text-center lg:py-24">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="kicker glass"
        >
          {kicker}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-bold leading-tight sm:text-5xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mx-auto mt-5 max-w-2xl text-base text-muted sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
