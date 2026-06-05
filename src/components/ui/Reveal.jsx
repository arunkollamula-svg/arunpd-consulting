import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '@/lib/motion';

/**
 * Wraps children in a scroll-triggered reveal animation.
 * `as` lets you choose the rendered element; `delay` staggers manually.
 */
export default function Reveal({ children, className = '', delay = 0, variants = fadeUp, as = 'div' }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
