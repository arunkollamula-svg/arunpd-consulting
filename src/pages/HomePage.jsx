import Seo from '@/lib/Seo';
import AnnouncementBar from '@/components/ui/AnnouncementBar';
import Hero from '@/components/sections/Hero';
import TrustBanner from '@/components/sections/TrustBanner';
import Services from '@/components/sections/Services';
import TechStack from '@/components/sections/TechStack';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import { Process, CTA } from '@/components/sections/Process';
import Blog from '@/components/sections/Blog';

export default function HomePage() {
  return (
    <>
      <Seo
        path="/"
        title="IT Consulting Services for USA, UK & Europe | AI, Fintech & Software Development"
        description="Experienced IT Consultant with 15+ years in AI, Fintech, Web Development, Cloud Solutions, ReactJS, Node.js, PHP, and Digital Transformation. Serving clients across the USA, UK, Europe, and Middle East."
        keywords="IT Consultant USA, Software Development Company UK, AI Consultant Europe, Fintech Development, ReactJS Developer, NodeJS Developer, Cloud Consultant, Web Application Development, custom software development USA, enterprise software development UK, AI development services, offshore development team, digital transformation consultant"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Arun P Divakaran',
          jobTitle: 'Senior IT Consultant',
          description: 'IT Consultant with 15+ years in AI, Fintech, Cloud, ReactJS, Node.js, and PHP, serving businesses in the USA, UK, and Europe.',
          url: 'https://arunpd.com/',
          image: 'https://arunpd.com/profile.jpeg',
          sameAs: ['https://www.linkedin.com/in/arunmca1/', 'https://github.com/arunmca1'],
          knowsAbout: ['Cloud Computing', 'Artificial Intelligence', 'FinTech', 'DevOps', 'Digital Transformation', 'ReactJS', 'Node.js', 'PHP', 'Custom Software Development', 'SaaS Development'],
          areaServed: [
            { '@type': 'Country', name: 'United States' },
            { '@type': 'Country', name: 'United Kingdom' },
            { '@type': 'Country', name: 'Germany' },
            { '@type': 'Country', name: 'France' },
            { '@type': 'Country', name: 'Netherlands' },
            { '@type': 'Continent', name: 'Europe' },
          ],
        }}
      />
      <AnnouncementBar />
      <Hero />
      <TrustBanner />
      <Services />
      <TechStack />
      <WhyChooseUs />
      <Process />
      <Blog limit={3} />
      <CTA />
    </>
  );
}
