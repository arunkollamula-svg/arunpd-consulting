import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Seo from '@/lib/Seo';
import PageHeader from '@/components/ui/PageHeader';
import Button from '@/components/ui/Button';
import { CTA } from '@/components/sections/Process';
import { staggerContainer, fadeUp } from '@/lib/motion';

const services = [
  { title: 'AI Consulting for Europe', desc: 'GDPR-compliant AI systems, LLM integration, and AI agents for European businesses across all sectors.' },
  { title: 'Fintech Development Europe', desc: 'Open banking APIs, PSD2-compliant payment platforms, digital wallets, and lending solutions for the EU market.' },
  { title: 'Custom Software Development', desc: 'Scalable web and mobile applications using ReactJS, Node.js, and PHP — built to EU data standards.' },
  { title: 'Cloud Consulting Europe', desc: 'AWS, Azure, and GCP strategy with EU data residency, GDPR compliance, and cost optimization.' },
  { title: 'Enterprise Software Development', desc: 'ERP, CRM, and SaaS platforms for European enterprises, with multi-language and multi-currency support.' },
  { title: 'Digital Transformation Europe', desc: 'End-to-end digital transformation consulting for European SMEs and enterprises modernizing legacy systems.' },
];

const countries = [
  { name: 'Germany', desc: 'Berlin & Munich fintech, automotive software, Mittelstand digital transformation' },
  { name: 'Netherlands', desc: 'Amsterdam fintech hub, logistics tech, EU headquarters digital solutions' },
  { name: 'France', desc: 'Paris-based enterprise software, e-commerce, AI for French enterprises' },
  { name: 'Sweden', desc: 'Stockholm fintech, SaaS startups, Nordic enterprise development' },
  { name: 'Denmark', desc: 'Copenhagen greentech, fintech, public sector digital solutions' },
  { name: 'Ireland', desc: 'Dublin tech hub, EU digital gateway, multinational software delivery' },
];

const highlights = [
  'GDPR-by-design development practices',
  'EU data residency options (AWS Frankfurt, Azure Netherlands)',
  'Multi-language and multi-currency application support',
  'PSD2 and open banking compliance expertise',
  'Experience across Western and Northern Europe',
  'Transparent pricing in EUR or GBP',
];

const europeSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'IT Consulting Services Europe',
  description: 'IT Consulting, AI Development, Fintech Software Development, and Custom Software Development for businesses across Europe.',
  provider: {
    '@type': 'Person',
    name: 'Arun P Divakaran',
    url: 'https://arunpd.com/',
  },
  areaServed: [
    { '@type': 'Country', name: 'Germany' },
    { '@type': 'Country', name: 'Netherlands' },
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Sweden' },
    { '@type': 'Country', name: 'Denmark' },
    { '@type': 'Country', name: 'Ireland' },
    { '@type': 'Continent', name: 'Europe' },
  ],
  serviceType: ['IT Consulting', 'AI Development', 'Fintech Development', 'Software Development', 'Cloud Consulting'],
  url: 'https://arunpd.com/locations/europe',
};

export default function EuropePage() {
  return (
    <>
      <Seo
        path="/locations/europe"
        title="IT Consulting Services Europe | AI, Fintech & Software Development"
        description="Expert IT Consulting for businesses across Europe. 15+ years delivering GDPR-compliant AI Consulting, Fintech Software, ReactJS, Node.js, Cloud Solutions for enterprises in Germany, Netherlands, France, Sweden, and across the EU."
        keywords="IT Consultant Europe, AI Consultant Europe, Fintech Development Europe, Software Development Company Europe, Cloud Consultant Europe, ReactJS Developer Europe, NodeJS Developer Europe, GDPR compliant software development, open banking solutions Europe, enterprise software development Germany, fintech development Netherlands"
        jsonLd={europeSchema}
      />
      <PageHeader
        kicker="Europe"
        title="IT Consulting Services for Businesses Across Europe"
        subtitle="Helping startups and enterprises in Germany, Netherlands, France, Sweden, Ireland, and across the EU build GDPR-compliant AI, Fintech, and enterprise software solutions."
      />

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container-px">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold sm:text-4xl">
              Services for European Businesses
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-muted">
              Comprehensive IT consulting and software development tailored for the European market — GDPR-compliant by design.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                className="card-surface rounded-2xl p-6 hover:shadow-glow transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 lg:py-24 bg-[var(--bg-elev)]">
        <div className="container-px grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="kicker">Why Work With Us</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Your Trusted IT Partner Across Europe
            </h2>
            <p className="mt-4 text-muted">
              With 15+ years of experience delivering GDPR-compliant AI, Fintech, and software solutions
              to European clients, we understand what European businesses need — regulatory compliance,
              data sovereignty, and reliable delivery. From Berlin fintech startups to Amsterdam enterprises,
              we build technology that meets EU standards and drives real business value.
            </p>
            <ul className="mt-6 space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm">
                  <CheckCircle size={18} className="mt-0.5 shrink-0 text-cyan-500" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button to="/contact" size="lg">
                Request a Proposal <ArrowRight size={16} />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-surface rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold">Countries We Serve in Europe</h3>
            <ul className="mt-6 space-y-4">
              {countries.map(({ name, desc }) => (
                <li key={name} className="border-b border-token pb-4 last:border-0 last:pb-0">
                  <p className="font-medium">{name}</p>
                  <p className="text-sm text-muted">{desc}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}
