import Seo from '@/lib/Seo';
import PageHeader from '@/components/ui/PageHeader';
import Solutions from '@/components/sections/Solutions';
import { CTA } from '@/components/sections/Process';

export default function SolutionsPage() {
  return (
    <>
      <Seo
        path="/solutions"
        title="Solutions"
        description="Enterprise FinTech, AI, Cloud, and ERP solutions for US and European businesses. Proven technology solutions deployed for banks, retailers, and government agencies across the USA and Europe."
        keywords="enterprise solutions USA, FinTech solutions Europe, AI solutions USA, cloud solutions UK, ERP consulting USA, CRM solutions Europe, digital wallet USA, payment gateway Europe, AI chatbot USA, RAG systems Europe, enterprise software consulting USA"
      />
      <PageHeader
        kicker="Solutions"
        title="Enterprise solutions, ready to scale"
        subtitle="Battle-tested building blocks across FinTech, AI, Cloud, and enterprise systems — trusted by organizations across the USA and Europe."
      />
      <Solutions />
      <CTA />
    </>
  );
}
