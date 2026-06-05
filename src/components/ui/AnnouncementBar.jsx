import { useState, useEffect } from 'react';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const messages = [
  { text: 'Now accepting clients from USA & Europe — Remote consulting available', cta: 'Book a Call', to: '/contact' },
  { text: 'Helped 40+ enterprises in USA & Europe scale through Cloud & AI', cta: 'View Work', to: '/case-studies' },
  { text: '15+ years delivering enterprise-grade solutions for US & EU businesses', cta: 'Learn More', to: '/about' },
];

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % messages.length), 4500);
    return () => clearInterval(id);
  }, []);

  if (!visible) return null;

  const { text, cta, to } = messages[idx];

  return (
    <div className="relative overflow-hidden bg-brand-gradient">
      <div className="pointer-events-none absolute inset-0 bg-[length:24px_24px] bg-grid-dark opacity-20" />
      <div className="pointer-events-none absolute left-1/4 top-0 h-full w-56 bg-white/10 blur-3xl" />
      <div className="relative px-10 py-2.5">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-3 text-white"
          >
            <Sparkles size={13} className="shrink-0 opacity-75" />
            <span className="text-sm font-medium">{text}</span>
            <Link
              to={to}
              className="inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-0.5 text-xs font-bold transition-colors hover:bg-white/35"
            >
              {cta}
              <ArrowRight size={11} />
            </Link>
          </motion.div>
        </AnimatePresence>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
          aria-label="Dismiss announcement"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
