import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS } from '@/data/content';
import ThemeToggle from '@/components/ui/ThemeToggle';
import Button from '@/components/ui/Button';

function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label="Arun P Divakaran — home">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient text-white shadow-glow">
        <span className="font-display text-lg font-bold">A</span>
      </span>
      <span className="hidden flex-col leading-none sm:flex">
        <span className="font-display text-[15px] font-bold tracking-tight">Arun P Divakaran</span>
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
          Cloud • AI • Transformation
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled ? 'glass shadow-card' : 'bg-transparent'
        }`}
      >
        <nav className="container-px flex h-16 items-center justify-between lg:h-[72px]">
          <Logo />

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `relative rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-brand-600 ${
                      isActive ? 'text-brand-600' : 'text-[var(--text)]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-brand-gradient"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button to="/contact" size="md" className="hidden md:inline-flex">
              Schedule Consultation
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-xl border border-token lg:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="glass container-px lg:hidden"
          >
            <ul className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block rounded-lg px-4 py-3 text-base font-medium ${
                        isActive ? 'bg-brand-600/10 text-brand-600' : 'text-[var(--text)]'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
              <li className="px-1 pt-2">
                <Button to="/contact" size="lg" className="w-full">
                  Schedule Consultation
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
