import {
  Cloud,
  Brain,
  Bot,
  ShoppingCart,
  Smartphone,
  Settings,
  Wallet,
  CreditCard,
  ShieldCheck,
  Landmark,
  MessageSquare,
  Network,
  Database,
  Server,
  LayoutGrid,
  Boxes,
  Users,
  GitBranch,
  Shield,
  Zap,
  Globe,
  Code2,
} from 'lucide-react';

export const CONTACT = {
  email: 'arupdivakar@gmail.com',
  phone: '+965 66564873',
  whatsapp: '+965 66564873',
  whatsappLink: 'https://wa.me/96566564873',
};

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Industries', to: '/industries' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

export const STATS = [
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 120, suffix: '+', label: 'Projects Delivered' },
  { value: 40, suffix: '+', label: 'Enterprise Clients' },
  { value: 6, suffix: '', label: 'Industries Served' },
];

export const HIGHLIGHTS = [
  '15+ Years Experience',
  'FinTech Expert',
  'Cloud Certified Professional',
  'AI Enthusiast',
  'Enterprise Solutions Architect',
];

export const EXPERTISE = [
  'Cloud Architecture',
  'AI Consulting',
  'FinTech Solutions',
  'Enterprise Application Development',
  'DevOps & Automation',
  'Digital Transformation',
];

export const SERVICES = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    slug: 'ai',
    tagline: 'From AI strategy to production-grade generative systems and autonomous agents.',
    items: ['LLM Integration', 'AI Agents', 'RAG Systems', 'Predictive Analytics', 'Document Intelligence'],
    tech: ['OpenAI', 'LangChain', 'CrewAI'],
    gradient: 'from-cyan-500/20 to-blue-600/20',
    accent: '#06B6D4',
  },
  {
    icon: Wallet,
    title: 'Fintech Solutions',
    slug: 'fintech',
    tagline: 'Digital banking, payment systems, and open banking platforms at enterprise scale.',
    items: ['Digital Wallets', 'Payment Gateways', 'Open Banking APIs', 'KYC / AML Platforms', 'Core Banking'],
    tech: ['PSD2', 'ISO 20022', 'Stripe'],
    gradient: 'from-emerald-500/20 to-cyan-600/20',
    accent: '#10B981',
  },
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    slug: 'cloud',
    tagline: 'Multi-cloud strategy, migration, and cost-optimized infrastructure at any scale.',
    items: ['Cloud Migration', 'Infrastructure Design', 'Cost Optimization', 'DevOps Automation', 'HA Systems'],
    tech: ['AWS', 'Azure', 'GCP'],
    gradient: 'from-blue-500/20 to-violet-600/20',
    accent: '#2563EB',
  },
  {
    icon: Code2,
    title: 'Custom Software Development',
    slug: 'custom-dev',
    tagline: 'Bespoke software engineered for scale, security, and long-term maintainability.',
    items: ['Enterprise Applications', 'SaaS Platforms', 'API Development', 'System Integration', 'Legacy Modernization'],
    tech: ['Node.js', 'Python', 'PHP'],
    gradient: 'from-violet-500/20 to-pink-600/20',
    accent: '#8B5CF6',
  },
  {
    icon: Globe,
    title: 'Web Applications',
    slug: 'web',
    tagline: 'High-performance, accessible web products using modern frameworks and best practices.',
    items: ['React / Next.js Apps', 'Progressive Web Apps', 'Admin Dashboards', 'CMS Platforms', 'E-Commerce'],
    tech: ['React', 'Next.js', 'TypeScript'],
    gradient: 'from-orange-500/20 to-rose-600/20',
    accent: '#F97316',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    slug: 'mobile',
    tagline: 'Cross-platform and native mobile apps for iOS and Android with premium UX.',
    items: ['iOS & Android', 'React Native', 'Flutter Apps', 'Mobile Banking', 'Push Notifications'],
    tech: ['Flutter', 'React Native'],
    gradient: 'from-pink-500/20 to-rose-600/20',
    accent: '#EC4899',
  },
  {
    icon: Shield,
    title: 'Cybersecurity Consulting',
    slug: 'security',
    tagline: 'Security-first architecture, compliance frameworks, and threat mitigation strategies.',
    items: ['Security Audits', 'Penetration Testing', 'GDPR / PCI-DSS Compliance', 'Zero Trust Architecture', 'SOC Setup'],
    tech: ['ISO 27001', 'OWASP'],
    gradient: 'from-red-500/20 to-orange-600/20',
    accent: '#EF4444',
  },
  {
    icon: Zap,
    title: 'Digital Transformation',
    slug: 'digital-transformation',
    tagline: 'End-to-end digitization strategies that modernize operations and unlock growth.',
    items: ['Process Automation', 'RPA Implementation', 'Change Management', 'Data Strategy', 'Platform Modernization'],
    tech: ['Power Platform', 'Terraform'],
    gradient: 'from-amber-500/20 to-yellow-600/20',
    accent: '#F59E0B',
  },
];

export const SOLUTIONS = [
  {
    icon: Wallet,
    title: 'FinTech Solutions',
    items: ['Digital Wallets', 'Payment Gateways', 'KYC Platforms', 'Banking Applications'],
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    items: ['AI Chatbots', 'AI Agents', 'RAG Systems', 'Business Intelligence'],
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    items: ['Cloud Migration', 'Disaster Recovery', 'High Availability Systems'],
  },
  {
    icon: Boxes,
    title: 'Enterprise Systems',
    items: ['ERP', 'CRM', 'HRMS', 'Inventory Systems'],
  },
];

export const SOLUTION_ICONS = { CreditCard, ShieldCheck, Landmark, MessageSquare, Network, Database, Server, LayoutGrid, Users, GitBranch };

export const INDUSTRIES = [
  {
    name: 'Banking & Finance',
    desc: 'Core banking modernization, payments, KYC, and AI-driven risk analytics.',
    icon: Landmark,
  },
  {
    name: 'Government & Public Sector',
    desc: 'Secure, compliant digital services and large-scale citizen platforms.',
    icon: ShieldCheck,
  },
  {
    name: 'Retail & E-Commerce',
    desc: 'Omnichannel commerce, recommendation engines, and demand forecasting.',
    icon: ShoppingCart,
  },
  {
    name: 'Healthcare',
    desc: 'Interoperable systems, data platforms, and clinical workflow automation.',
    icon: ShieldCheck,
  },
  {
    name: 'Startups & SaaS',
    desc: 'Cloud-native MVPs, scalable architecture, and go-to-market velocity.',
    icon: Network,
  },
  {
    name: 'Logistics & Supply Chain',
    desc: 'Real-time tracking, optimization, and predictive operations.',
    icon: Boxes,
  },
];

export const TECH_STACK = [
  { category: 'Cloud', items: ['AWS', 'Azure', 'GCP'] },
  { category: 'Frontend', items: ['ReactJS', 'NextJS', 'TypeScript'] },
  { category: 'Backend', items: ['Node.js', 'PHP', 'Python', 'FastAPI'] },
  { category: 'Database', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
  { category: 'AI', items: ['OpenAI', 'LangChain', 'CrewAI', 'TensorFlow'] },
  { category: 'DevOps', items: ['Docker', 'Kubernetes', 'GitHub Actions'] },
];

export const BLOG_POSTS = [
  {
    title: 'AI Development Services for Small Businesses in the USA',
    excerpt:
      'How small and mid-sized US businesses can implement AI — from chatbots and document intelligence to predictive analytics — without enterprise-level budgets.',
    category: 'Artificial Intelligence',
    readTime: '7 min read',
    date: 'May 2026',
    slug: 'ai-development-services-usa-small-business',
  },
  {
    title: 'Fintech Software Development Company: What to Look for in 2026',
    excerpt:
      'A practical guide for US and UK startups evaluating fintech development partners — covering digital wallets, open banking, payment systems, and regulatory compliance.',
    category: 'FinTech',
    readTime: '9 min read',
    date: 'Apr 2026',
    slug: 'fintech-software-development-company-guide',
  },
  {
    title: 'ReactJS Development Services UK: Build Faster, Scale Smarter',
    excerpt:
      'Why UK startups and enterprises are choosing ReactJS for web applications, and what a skilled React team actually delivers beyond the component library.',
    category: 'Web Development',
    readTime: '6 min read',
    date: 'Mar 2026',
    slug: 'reactjs-development-services-uk',
  },
  {
    title: 'Open Banking Solutions for Europe: A Developer Perspective',
    excerpt:
      'PSD2, APIs, and the real engineering challenges of building open banking products for European financial institutions — and how to solve them.',
    category: 'FinTech',
    readTime: '11 min read',
    date: 'Feb 2026',
    slug: 'open-banking-solutions-europe',
  },
  {
    title: 'Enterprise Software Development USA: From Monolith to Cloud-Native',
    excerpt:
      'The organizational playbook for modernizing legacy enterprise systems — governance, data migration, and delivering measurable ROI at every stage.',
    category: 'Cloud',
    readTime: '8 min read',
    date: 'Jan 2026',
    slug: 'enterprise-software-development-usa',
  },
];

export const CASE_STUDIES = [
  {
    client: 'Regional Digital Bank',
    industry: 'FinTech',
    result: '40% faster transaction processing',
    summary:
      'Re-architected a monolithic core onto a cloud-native, event-driven platform with real-time fraud scoring.',
    metrics: [
      { label: 'Cost reduction', value: '32%' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Deploy frequency', value: '20x' },
    ],
  },
  {
    client: 'National Retail Group',
    industry: 'E-Commerce',
    result: '3.1x increase in conversion',
    summary:
      'Built an AI recommendation engine and re-platformed the storefront for sub-second global load times.',
    metrics: [
      { label: 'Page load', value: '0.8s' },
      { label: 'Conversion', value: '+210%' },
      { label: 'AOV', value: '+24%' },
    ],
  },
  {
    client: 'Government Services Agency',
    industry: 'Public Sector',
    result: '2M+ citizens onboarded securely',
    summary:
      'Delivered a compliant identity & KYC platform with AI document intelligence and full audit trails.',
    metrics: [
      { label: 'Onboarding time', value: '-65%' },
      { label: 'Verification', value: '99.6%' },
      { label: 'Compliance', value: '100%' },
    ],
  },
];

export const PROCESS = [
  {
    step: '01',
    title: 'Discover',
    desc: 'Deep-dive into your goals, systems, and constraints to define the highest-leverage opportunities.',
  },
  {
    step: '02',
    title: 'Architect',
    desc: 'Design a secure, scalable, cost-aware architecture with a clear, de-risked roadmap.',
  },
  {
    step: '03',
    title: 'Build',
    desc: 'Ship in fast, measurable increments with automated delivery and quality baked in.',
  },
  {
    step: '04',
    title: 'Scale',
    desc: 'Optimize for performance, reliability, and cost as adoption grows — and hand over confidently.',
  },
];

export const SERVICE_OPTIONS = [
  'Artificial Intelligence',
  'Fintech Solutions',
  'Cloud Architecture',
  'Custom Software Development',
  'Web Applications',
  'Mobile Applications',
  'Cybersecurity Consulting',
  'Digital Transformation',
  'Other',
];

export const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'FinVault Technologies',
    location: 'San Francisco, USA',
    avatar: 'SJ',
    text: "Arun's team delivered an AI-powered risk engine that reduced our fraud rate by 67% in just 3 months. The technical depth, communication, and professionalism were exceptional — unlike any vendor we'd worked with before.",
    rating: 5,
    accent: '#06B6D4',
  },
  {
    name: 'James Whitfield',
    role: 'CEO',
    company: 'CloudPath Systems',
    location: 'London, United Kingdom',
    avatar: 'JW',
    text: "The cloud migration was seamless — zero downtime, 40% cost reduction, and a DevOps pipeline that actually works. They genuinely understand enterprise architecture and delivery at scale.",
    rating: 5,
    accent: '#2563EB',
  },
  {
    name: 'Amira Khalil',
    role: 'Head of Digital',
    company: 'NeoBank Europe',
    location: 'Amsterdam, Netherlands',
    avatar: 'AK',
    text: "We needed a PSD2-compliant open banking platform in 4 months. They delivered in 3.5, with full FCA documentation and a clean, maintainable codebase. Outstanding.",
    rating: 5,
    accent: '#8B5CF6',
  },
];

export const WHY_CHOOSE = [
  {
    title: 'Enterprise-Grade Solutions',
    desc: 'Battle-tested architecture designed for scale, security, and reliability from day one.',
    icon: Shield,
    color: '#2563EB',
  },
  {
    title: 'AI-First Approach',
    desc: 'Every solution we build is designed with AI augmentation in mind — future-proofed by default.',
    icon: Brain,
    color: '#06B6D4',
  },
  {
    title: 'Agile Delivery Model',
    desc: 'Two-week sprints, continuous delivery, and full transparency through every milestone.',
    icon: Zap,
    color: '#10B981',
  },
  {
    title: 'Global Delivery',
    desc: 'Onshore, nearshore, and offshore models serving USA, UK, Europe, and the Middle East.',
    icon: Globe,
    color: '#8B5CF6',
  },
  {
    title: 'Secure by Design',
    desc: 'GDPR, PCI-DSS, SOC 2, and ISO 27001 aligned practices embedded in every project.',
    icon: ShieldCheck,
    color: '#F59E0B',
  },
  {
    title: 'Transparent Communication',
    desc: 'Direct access to your team, weekly reporting, and no black-box surprises.',
    icon: Users,
    color: '#EC4899',
  },
];
