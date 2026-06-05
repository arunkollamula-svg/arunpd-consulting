import { Link } from 'react-router-dom';

const base =
  'group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none';

const sizes = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

const variants = {
  primary:
    'text-white bg-brand-gradient shadow-glow hover:shadow-glow-cyan hover:-translate-y-0.5',
  secondary:
    'border border-token text-[var(--text)] hover:border-cyan-500/60 hover:text-cyan-500 hover:-translate-y-0.5',
  ghost: 'text-[var(--text)] hover:text-brand-600',
  white:
    'bg-white text-navy hover:-translate-y-0.5 shadow-card',
};

export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  ...rest
}) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
}
