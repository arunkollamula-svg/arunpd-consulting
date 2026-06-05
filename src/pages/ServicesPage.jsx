import Seo from '@/lib/Seo';
import PageHeader from '@/components/ui/PageHeader';
import Services from '@/components/sections/Services';
import TechStack from '@/components/sections/TechStack';
import { CTA } from '@/components/sections/Process';

export default function ServicesPage() {
  return (
    <>
      <Seo
        path="/services"
        title="Services"
        description="Cloud, AI, DevOps, FinTech, and Digital Transformation consulting services for US and European enterprises. Remote IT consulting for startups, SMBs, and Fortune-class companies across the USA, UK, and Europe."
        keywords="cloud consulting services USA, AI consulting services Europe, DevOps consultant USA, FinTech consulting UK, digital transformation services USA, AWS consulting USA, Azure consulting Europe, remote cloud architect USA, AI agent development Europe, enterprise IT consulting USA"
      />
      <PageHeader
        kicker="Services"
        title="Consulting services that move the needle"
        subtitle="From cloud strategy and AI agents to commerce, mobile, and DevOps automation — delivered with enterprise rigor to clients across the USA and Europe."
      />
      <Services compact={false} />
      <TechStack />
      <CTA />
    </>
  );
}
