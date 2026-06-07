import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Seo from '@/lib/Seo';
import PageHeader from '@/components/ui/PageHeader';
import Button from '@/components/ui/Button';
import { CTA } from '@/components/sections/Process';
import { staggerContainer, fadeUp } from '@/lib/motion';

const services = [
  { title: 'Software Development Consultant UK', desc: 'End-to-end software delivery for UK businesses — from discovery and architecture to build and handover.' },
  { title: 'AI Consulting for UK Businesses', desc: 'LLM strategy, generative AI, AI agents, and document intelligence tailored for UK startups and enterprises.' },
  { title: 'Fintech Development UK', desc: 'FCA-aware digital banking, open banking APIs, payment platforms, and lending solutions for the UK market.' },
  { title: 'ReactJS Development Services UK', desc: 'High-performance web applications built with ReactJS and TypeScript for UK companies that need speed and reliability.' },
  { title: 'Cloud Consulting UK', desc: 'AWS, Azure, and GCP cloud strategy, migration, and cost optimization for UK businesses and public sector.' },
  { title: 'Enterprise Software Development UK', desc: 'Scalable ERP, CRM, and SaaS platform development for UK enterprises, with full project management.' },
];

const highlights = [
  'Deep understanding of UK regulatory landscape (FCA, GDPR, ICO)',
  'GMT / BST hours availability for seamless collaboration',
  'Experience with UK public sector and NHS procurement',
  'Fixed-price contracts with milestone-based billing',
  'Transparent pricing in GBP',
  'UK-based client references available on request',
];

const ukSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'IT Consulting Services United Kingdom',
  description: 'IT Consulting, AI Development, Fintech Software Development, and Custom Software Development for businesses across the United Kingdom.',
  provider: {
    '@type': 'Person',
    name: 'Arun P Divakaran',
    url: 'https://arunpd.com/',
  },
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  serviceType: ['IT Consulting', 'AI Development', 'Fintech Development', 'Software Development', 'Cloud Consulting'],
  url: 'https://arunpd.com/locations/united-kingdom',
};

export default function UkPage() {
  return (
    <>
      <Seo
        path="/locations/united-kingdom"
        title="IT Consulting Services UK | Software Development Consultant United Kingdom"
        description="Expert IT Consulting for businesses across the UK. 15+ years delivering AI Consulting, Fintech Software Development, ReactJS, Node.js, Cloud Solutions, and Custom Software for UK startups and enterprises."
        keywords="Software Development Consultant UK, IT Consultant UK, AI Consulting UK, Fintech Development UK, ReactJS Developer UK, Cloud Consultant UK, Enterprise Software Development UK, NodeJS Developer UK, Software Development Company UK, remote IT consultant United Kingdom"
        jsonLd={ukSchema}
      />
      <PageHeader
        kicker="United Kingdom"
        title="IT Consulting Services for Businesses Across the UK"
        subtitle="Helping startups and enterprises in London, Manchester, Edinburgh, Birmingham, and across the United Kingdom build AI, Fintech, and enterprise software solutions."
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
              Services for UK Businesses
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-muted">
              Comprehensive IT consulting and software development tailored for the United Kingdom market.
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
              Your Trusted IT Partner in the United Kingdom
            </h2>
            <p className="mt-4 text-muted">
              With 15+ years of experience delivering AI, Fintech, and software solutions to UK clients,
              we understand the UK business environment — from FCA compliance in fintech to GDPR requirements
              across all digital products. Whether you're a London-based fintech startup or an established
              enterprise in Manchester, we deliver technology that moves the needle.
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
            <h3 className="text-xl font-semibold">Industries We Serve in the UK</h3>
            <ul className="mt-6 space-y-4">
              {[
                ['Banking & Fintech', 'FCA-compliant digital banking, open banking, payment platforms'],
                ['Healthcare & NHS', 'GDPR-compliant patient systems, NHS Digital integration'],
                ['Retail & E-Commerce', 'Omnichannel platforms, AI recommendations, POS integration'],
                ['Government & Public Sector', 'GDS-aligned citizen portals, G-Cloud compatible solutions'],
                ['Startups & Scale-ups', 'Seed to Series B — architecture, delivery, and technical leadership'],
                ['Insurance & Insurtech', 'Claims automation, underwriting AI, policy management systems'],
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
