import Reveal from './Reveal';

export default function SectionHeading({ kicker, title, subtitle, align = 'center', className = '' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';
  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      {kicker && <span className="kicker">{kicker}</span>}
      <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">{title}</h2>
      {subtitle && <p className="text-base text-muted sm:text-lg">{subtitle}</p>}
    </Reveal>
  );
}
