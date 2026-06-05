import Seo from '@/lib/Seo';
import AnnouncementBar from '@/components/ui/AnnouncementBar';
import Hero from '@/components/sections/Hero';
import TrustBanner from '@/components/sections/TrustBanner';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import AchievementBanner from '@/components/sections/AchievementBanner';
import Solutions from '@/components/sections/Solutions';
import Industries from '@/components/sections/Industries';
import TechStack from '@/components/sections/TechStack';
import CaseStudies from '@/components/sections/CaseStudies';
import { Process, CTA } from '@/components/sections/Process';
import Blog from '@/components/sections/Blog';

export default function HomePage() {
  return (
    <>
      <Seo
        path="/"
        description="Senior Technology Consultant with 15+ years helping US and European enterprises scale through Cloud, AI, FinTech, and Digital Transformation. Remote consulting for startups, SMBs, and enterprises across the USA, UK, and Europe."
        keywords="cloud consultant USA, AI consultant Europe, digital transformation consultant USA, remote IT consultant USA, cloud consulting services UK, fintech consultant Europe, AWS consultant USA, Azure consultant UK, AI agent development USA, enterprise technology consultant, Arun P Divakaran"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Arun P Divakaran',
          jobTitle: 'Senior Technology Consultant',
          description: 'Cloud, AI & Digital Transformation consultant serving USA and European enterprises.',
          url: 'https://arunpd.com/',
          image: 'https://arunpd.com/profile.jpeg',
          sameAs: ['https://www.linkedin.com/in/arunmca1/'],
          knowsAbout: ['Cloud Computing', 'Artificial Intelligence', 'FinTech', 'DevOps', 'Digital Transformation'],
          areaServed: [
            { '@type': 'Country', name: 'United States' },
            { '@type': 'Country', name: 'United Kingdom' },
            { '@type': 'Continent', name: 'Europe' },
          ],
        }}
      />
      <AnnouncementBar />
      <Hero />
      <TrustBanner />
      <About />
      <Services />
      <AchievementBanner />
      <Solutions />
      <Industries />
      <TechStack />
      <CaseStudies />
      <Process />
      <Blog limit={3} />
      <CTA />
    </>
  );
}
