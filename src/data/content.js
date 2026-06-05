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
  { label: 'Case Studies', to: '/case-studies' },
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
    icon: Cloud,
    title: 'Cloud Consulting',
    slug: 'cloud',
    tagline: 'Cloud strategy & implementation across AWS, Azure, and GCP.',
    items: [
      'Cloud Migration',
      'Infrastructure Design',
      'Cost Optimization',
      'Security Assessment',
      'DevOps Automation',
    ],
  },
  {
    icon: Brain,
    title: 'AI Consulting',
    slug: 'ai',
    tagline: 'From AI strategy to production-grade generative systems.',
    items: [
      'AI Strategy',
      'Generative AI',
      'LLM Integration',
      'AI Agents',
      'Chatbots',
      'Document Intelligence',
      'Image Recognition',
      'Predictive Analytics',
    ],
  },
  {
    icon: Bot,
    title: 'AI Agent Development',
    slug: 'agents',
    tagline: 'Intelligent agents that automate real business workflows.',
    items: [
      'Customer Service',
      'Sales Automation',
      'HR Automation',
      'Finance Operations',
      'Enterprise Knowledge Base',
    ],
    tech: ['OpenAI', 'LangChain', 'CrewAI', 'AutoGen', 'MCP'],
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Consulting',
    slug: 'ecommerce',
    tagline: 'Scalable commerce platforms for B2B, B2C, and marketplaces.',
    items: [
      'B2B Platforms',
      'B2C Platforms',
      'Marketplace Solutions',
      'Payment Gateway Integration',
      'Mobile Commerce',
    ],
  },
  {
    icon: Smartphone,
    title: 'Web & Mobile Consulting',
    slug: 'web-mobile',
    tagline: 'Enterprise web, SaaS, and mobile applications built to scale.',
    items: [
      'Enterprise Applications',
      'SaaS Platforms',
      'React Applications',
      'Flutter Apps',
      'API Development',
    ],
  },
  {
    icon: Settings,
    title: 'DevOps & Cloud Automation',
    slug: 'devops',
    tagline: 'Reliable delivery pipelines and infrastructure as code.',
    items: [
      'CI/CD Pipelines',
      'Docker',
      'Kubernetes',
      'Monitoring',
      'Infrastructure as Code',
    ],
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
    title: 'AI Agents in Business',
    excerpt:
      'How autonomous AI agents are moving from demos to dependable workers across sales, support, and operations.',
    category: 'Artificial Intelligence',
    readTime: '7 min read',
    date: 'May 2026',
    slug: 'ai-agents-in-business',
  },
  {
    title: 'Cloud Migration Strategies',
    excerpt:
      'A practical framework — rehost, replatform, refactor — for moving enterprise workloads without disruption.',
    category: 'Cloud',
    readTime: '9 min read',
    date: 'Apr 2026',
    slug: 'cloud-migration-strategies',
  },
  {
    title: 'GCP vs AWS vs Azure',
    excerpt:
      'An honest, workload-driven comparison to help you pick the right hyperscaler — or the right mix.',
    category: 'Cloud',
    readTime: '11 min read',
    date: 'Mar 2026',
    slug: 'gcp-vs-aws-vs-azure',
  },
  {
    title: 'The Future of FinTech',
    excerpt:
      'Embedded finance, real-time payments, and AI underwriting are reshaping how money moves.',
    category: 'FinTech',
    readTime: '6 min read',
    date: 'Feb 2026',
    slug: 'future-of-fintech',
  },
  {
    title: 'Enterprise AI Adoption',
    excerpt:
      'The organizational playbook for rolling out AI at scale — governance, data, and change management.',
    category: 'Artificial Intelligence',
    readTime: '8 min read',
    date: 'Jan 2026',
    slug: 'enterprise-ai-adoption',
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
  'Cloud Consulting',
  'AI Consulting',
  'AI Agent Development',
  'E-Commerce Consulting',
  'Web & Mobile Consulting',
  'DevOps & Cloud Automation',
  'FinTech Solutions',
  'Other',
];
