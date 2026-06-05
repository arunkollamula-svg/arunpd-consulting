import Seo from '@/lib/Seo';
import PageHeader from '@/components/ui/PageHeader';
import Blog from '@/components/sections/Blog';
import { CTA } from '@/components/sections/Process';

export default function BlogPage() {
  return (
    <>
      <Seo path="/blog" title="Blog" description="Insights on Cloud, AI, FinTech, and digital transformation." />
      <PageHeader
        kicker="Insights"
        title="Articles & perspectives"
        subtitle="Practical thinking on cloud, AI, and the technology shaping modern business."
      />
      <Blog />
      <CTA />
    </>
  );
}
