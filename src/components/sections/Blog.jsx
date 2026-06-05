import { motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { BLOG_POSTS } from '@/data/content';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

export default function Blog({ limit }) {
  const posts = limit ? BLOG_POSTS.slice(0, limit) : BLOG_POSTS;
  return (
    <section id="blog" className="container-px py-24 lg:py-28">
      <SectionHeading
        kicker="Insights"
        title="Latest articles & perspectives"
        subtitle="Practical thinking on cloud, AI, and the technology shaping modern business."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {posts.map((post) => (
          <motion.article
            key={post.slug}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-token bg-[var(--bg-elev)] shadow-card transition-shadow hover:shadow-glow"
          >
            {/* gradient header as image placeholder */}
            <div className="relative h-40 overflow-hidden bg-brand-gradient">
              <div className="absolute inset-0 bg-[length:24px_24px] bg-grid-dark opacity-30" />
              <span className="absolute bottom-3 left-4 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                {post.category}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-lg font-bold leading-snug transition-colors group-hover:text-brand-600">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-muted">{post.excerpt}</p>
              <div className="mt-5 flex items-center justify-between border-t border-token pt-4 text-xs text-muted">
                <span className="flex items-center gap-1.5">
                  <Clock size={13} /> {post.readTime}
                </span>
                <span className="flex items-center gap-1 font-semibold text-brand-600">
                  Read <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
