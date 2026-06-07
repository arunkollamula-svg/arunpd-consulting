import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Seo from '@/lib/Seo';
import PageHeader from '@/components/ui/PageHeader';
import Button from '@/components/ui/Button';
import { CTA } from '@/components/sections/Process';
import { staggerContainer, fadeUp } from '@/lib/motion';

const services = [
  { title: 'AI Development Services', desc: 'Custom AI solutions, LLM integration, and AI agent development for US startups and enterprises.' },
  { title: 'Fintech Software Development', desc: 'Digital wallets, payment gateways, open banking APIs, and lending platforms built for the US market.' },
  { title: 'Custom Software Development', desc: 'Scalable, secure web and mobile applications using ReactJS, Node.js, and PHP tailored to your business.' },
  { title: 'Cloud Migration & Consulting', desc: 'AWS, Azure, and GCP migration, cost optimization, and DevOps automation for US businesses of all sizes.' },
  { title: 'Enterprise Application Development', desc: 'End-to-end ERP, CRM, and SaaS platform development for US enterprises and Fortune-class companies.' },
  { title: 'ReactJS & Node.js Development', desc: 'Fast, modern web applications using React and Node.js — built to scale for US market demands.' },
];

const highlights = [
  'Remote-first engagement — no time-zone friction',
  'US business hours availability',
  'HIPAA, SOC 2 & PCI-DSS compliant delivery',
  'Startup to enterprise experience across all US states',
  'Transparent pricing in USD',
  'Fixed-price or time-and-material contracts',
];

const usaSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'IT Consulting Services USA',
  description: 'IT Consulting, AI Development, Fintech Software Development, and Custom Software Development for businesses across the United States.',
  provider: {
    '@type': 'Person',
    name: 'Arun P Divakaran',
    url: 'https://arunpd.com/',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType: ['IT Consulting', 'AI Development', 'Fintech Development', 'Software Development', 'Cloud Consulting'],
  url: 'https://arunpd.com/locations/usa',
};

export default function UsaPage() {
  return (
    <>
      <Seo
        path="/locations/usa"
        title="IT Consulting Services USA | AI, Fintech & Software Development"
        description="Expert IT Consulting for businesses across the USA. 15+ years delivering AI Development, Fintech Software, ReactJS, Node.js, Cloud Solutions, and Custom Software for US startups and enterprises."
        keywords="IT Consultant USA, AI Development Services USA, Fintech Software Development USA, Custom Software Development USA, ReactJS Developer USA, NodeJS Developer USA, Cloud Consultant USA, Software Development Company USA, Enterprise Software Development USA, remote IT consultant USA"
        jsonLd={usaSchema}
      />
      <PageHeader
        kicker="USA"
        title="IT Consulting Services for Businesses Across the USA"
        subtitle="Helping startups and enterprises in New York, California, Texas, Florida, and across the United States build AI, Fintech, and enterprise software solutions."
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
              Services for US Businesses
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-muted">
              Comprehensive IT consulting and software development tailored for the US market.
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
              Your Trusted IT Partner in the United States
            </h2>
            <p className="mt-4 text-muted">
              With 15+ years of experience delivering AI, Fintech, and software solutions to US clients,
              we understand what American businesses need — speed, reliability, and measurable results.
              Whether you're a startup in Silicon Valley or an enterprise in New York, we deliver
              technology that drives real growth.
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
            <h3 className="text-xl font-semibold">Industries We Serve in the USA</h3>
            <ul className="mt-6 space-y-4">
              {[
                ['Banking & Financial Services', 'Digital banking, lending platforms, payment processing'],
                ['Healthcare & Insurtech', 'HIPAA-compliant patient portals, claims automation'],
                ['Retail & E-Commerce', 'AI-powered storefronts, inventory systems, D2C platforms'],
                ['Government & Public Sector', 'Secure citizen portals, identity verification, compliance'],
                ['Startups & SaaS', 'MVP to scale — full-stack, cloud-native, investor-ready'],
                ['Logistics & Supply Chain', 'Real-time tracking, route optimization, predictive ops'],
              ].map(([name, detail]) => (
                <li key={name} className="border-b border-token pb-4 last:border-0 last:pb-0">
                  <p className="font-medium">{name}</p>
                  <p className="text-sm text-muted">{detail}</p>
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
