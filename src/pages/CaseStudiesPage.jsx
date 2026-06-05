import Seo from '@/lib/Seo';
import PageHeader from '@/components/ui/PageHeader';
import CaseStudies from '@/components/sections/CaseStudies';
import { CTA } from '@/components/sections/Process';

export default function CaseStudiesPage() {
  return (
    <>
      <Seo
        path="/case-studies"
        title="Case Studies"
        description="Real consulting outcomes for FinTech, e-commerce, and government clients across the USA and Europe. See how Arun P Divakaran delivered 40% faster processing, 3x conversions, and 99.99% uptime for enterprise clients."
        keywords="cloud consulting case studies USA, AI consulting results Europe, digital transformation success stories, FinTech consulting outcomes UK, enterprise IT case studies USA, cloud migration success Europe, technology consulting ROI USA, Arun P Divakaran portfolio"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Technology Consulting Case Studies — USA & Europe',
          description: 'Real outcomes from Cloud, AI, and FinTech consulting engagements for US and European enterprises.',
          url: 'https://arunpd.com/case-studies',
          author: {
            '@type': 'Person',
            name: 'Arun P Divakaran',
            sameAs: ['https://www.linkedin.com/in/arunmca1/'],
          },
        }}
      />
      <PageHeader
        kicker="Case Studies"
        title="Outcomes, not just deliverables"
        subtitle="A selection of engagements across the USA and Europe where the right architecture moved real business metrics."
      />
      <CaseStudies />
      <CTA />
    </>
  );
}
