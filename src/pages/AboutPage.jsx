import Seo from '@/lib/Seo';
import PageHeader from '@/components/ui/PageHeader';
import About from '@/components/sections/About';
import { Process, CTA } from '@/components/sections/Process';
import TechStack from '@/components/sections/TechStack';

export default function AboutPage() {
  return (
    <>
      <Seo
        path="/about"
        title="About"
        description="Arun P Divakaran — Senior Technology Consultant with 15+ years delivering Cloud, AI, and FinTech solutions for US and European enterprises. Available for remote consulting engagements across the USA, UK, Germany, Netherlands, and beyond."
        keywords="senior technology consultant USA, cloud architect Europe, AI consultant USA, remote IT consultant UK, enterprise solutions architect USA, FinTech expert Europe, digital transformation leader, cloud expert USA, technology advisor Europe, Arun P Divakaran consultant"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Arun P Divakaran',
          jobTitle: 'Senior Technology Consultant',
          description: '15+ years delivering Cloud, AI, and FinTech solutions for US and European enterprises.',
          url: 'https://arunpd.com/about',
          image: 'https://arunpd.com/profile.jpeg',
          sameAs: ['https://www.linkedin.com/in/arunmca1/'],
          areaServed: [
            { '@type': 'Country', name: 'United States' },
            { '@type': 'Country', name: 'United Kingdom' },
            { '@type': 'Continent', name: 'Europe' },
          ],
        }}
      />
      <PageHeader
        kicker="About"
        title="A trusted partner for cloud, AI & modern technology"
        subtitle="15+ years designing, building, and scaling resilient digital platforms for organizations across the USA, Europe, and beyond."
      />
      <About />
      <Process />
      <TechStack />
      <CTA />
    </>
  );
}
