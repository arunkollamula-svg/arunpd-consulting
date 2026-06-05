import { Link } from 'react-router-dom';
import { Linkedin, Github, Twitter, Mail, Phone, MessageCircle } from 'lucide-react';
import { NAV_LINKS, SERVICES, CONTACT } from '@/data/content';

const social = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/arunmca1/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 border-t border-token bg-[var(--bg-elev)]">
      <div className="container-px py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient text-white">
                <span className="font-display text-lg font-bold">A</span>
              </span>
              <span className="font-display text-lg font-bold">Arun P Divakaran</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted">
              Helping startups, enterprises, and governments scale through Cloud, AI, and modern
              technology. 15+ years of enterprise consulting experience.
            </p>
            <div className="mt-6 flex gap-2">
              {social.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-token transition-colors hover:border-cyan-500/60 hover:text-cyan-500"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted transition-colors hover:text-brand-600">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services"
                    className="text-sm text-muted transition-colors hover:text-brand-600"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">Get in touch</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-brand-600">
                  <Mail size={16} className="text-cyan-500" /> {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-brand-600">
                  <Phone size={16} className="text-cyan-500" /> {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-brand-600">
                  <MessageCircle size={16} className="text-cyan-500" /> WhatsApp {CONTACT.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-token pt-8 text-sm text-muted sm:flex-row">
          <p>© {year} Arun P Divakaran. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
            Cloud • AI • Digital Transformation
          </p>
        </div>
      </div>
    </footer>
  );
}
