import Seo from '@/lib/Seo';
import PageHeader from '@/components/ui/PageHeader';
import Contact from '@/components/sections/Contact';

export default function ContactPage() {
  return (
    <>
      <Seo
        path="/contact"
        title="Contact"
        description="Book a free consultation with Arun P Divakaran — Cloud, AI & Digital Transformation consultant serving USA and European enterprises. Available for remote engagements across the USA, UK, Germany, Netherlands, Ireland, and more."
        keywords="hire cloud consultant USA, hire AI consultant Europe, book technology consultant USA, remote IT consulting USA, cloud consultant for hire UK, AI consultant for hire Europe, digital transformation consultant contact, free cloud consultation USA"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Arun P Divakaran — Cloud & AI Consultant',
          description: 'Book a free consultation for Cloud, AI, and Digital Transformation consulting — serving clients across the USA, UK, and Europe.',
          url: 'https://arunpd.com/contact',
          mainEntity: {
            '@type': 'Person',
            name: 'Arun P Divakaran',
            email: 'arupdivakar@gmail.com',
            telephone: '+965-66564873',
            sameAs: ['https://www.linkedin.com/in/arunmca1/'],
          },
        }}
      />
      <PageHeader
        kicker="Contact"
        title="Let's build something exceptional"
        subtitle="Tell me about your goals and I'll get back within one business day. Serving clients across the USA, UK, and Europe."
      />
      <Contact />
    </>
  );
}
