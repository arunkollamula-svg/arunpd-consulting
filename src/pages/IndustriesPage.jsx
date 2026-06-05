import Seo from '@/lib/Seo';
import PageHeader from '@/components/ui/PageHeader';
import Industries from '@/components/sections/Industries';
import CaseStudies from '@/components/sections/CaseStudies';
import { CTA } from '@/components/sections/Process';

export default function IndustriesPage() {
  return (
    <>
      <Seo
        path="/industries"
        title="Industries"
        description="Technology consulting across banking, government, retail, healthcare, SaaS, and logistics for US and European clients. Regulated-industry expertise with a proven track record in the USA, UK, and Europe."
        keywords="banking technology consultant USA, fintech consultant UK, government IT consultant USA, healthcare technology Europe, retail technology consultant USA, SaaS consultant Europe, logistics technology USA, regulated industry consulting UK, enterprise technology USA"
      />
      <PageHeader
        kicker="Industries"
        title="Domain expertise where it counts"
        subtitle="Deep, regulated-industry experience across banking, government, retail, healthcare, and SaaS — serving clients in the USA, UK, and across Europe."
      />
      <Industries />
      <CaseStudies />
      <CTA />
    </>
  );
}
