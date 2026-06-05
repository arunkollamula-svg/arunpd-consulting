import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Send, CheckCircle2, Loader2, Linkedin } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { CONTACT, SERVICE_OPTIONS } from '@/data/content';

const initialForm = { name: '', email: '', company: '', phone: '', service: '', message: '' };

async function submitLead(data) {
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: import.meta.env.VITE_WEB3FORMS_KEY,
      subject: `New consultation request from ${data.name}`,
      ...data,
    }),
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.message || 'Submission failed');
  return json;
}

const contactCards = [
  { icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Phone, label: 'Phone', value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, '')}` },
  { icon: MessageCircle, label: 'WhatsApp', value: CONTACT.whatsapp, href: CONTACT.whatsappLink },
  { icon: Linkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/arunmca1/' },
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const mutation = useMutation({ mutationFn: submitLead });

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!form.email.trim()) next.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email';
    if (!form.message.trim()) next.message = 'Tell me a little about your project';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    mutation.mutate(form, { onSuccess: () => setForm(initialForm) });
  };

  const fieldClass =
    'w-full rounded-xl border bg-[var(--bg)] px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-cyan-500';

  return (
    <section id="contact" className="container-px py-24 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        {/* Left: heading + contact cards */}
        <div className="lg:col-span-2">
          <SectionHeading
            align="left"
            kicker="Contact"
            title="Book a free consultation"
            subtitle="Share a few details and I'll get back within one business day to schedule a call."
          />

          <div className="mt-8 space-y-3">
            {contactCards.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={label === 'WhatsApp' || label === 'LinkedIn' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-token bg-[var(--bg-elev)] p-4 transition-colors hover:border-cyan-500/50"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-600/10 text-brand-600 transition-colors group-hover:bg-brand-gradient group-hover:text-white">
                  <Icon size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted">{label}</div>
                  <div className="text-sm font-semibold">{value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <Reveal className="lg:col-span-3">
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-3xl border border-token bg-[var(--bg-elev)] p-7 shadow-card sm:p-9"
          >
            {mutation.isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 py-16 text-center"
              >
                <CheckCircle2 size={56} className="text-cyan-500" />
                <h3 className="font-display text-2xl font-bold">Thank you!</h3>
                <p className="max-w-sm text-sm text-muted">
                  Your message has been received. I&apos;ll be in touch within one business day to
                  schedule your consultation.
                </p>
                <button
                  type="button"
                  onClick={() => mutation.reset()}
                  className="text-sm font-semibold text-brand-600 hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <div className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium" htmlFor="name">Name *</label>
                    <input id="name" name="name" value={form.name} onChange={update}
                      className={`${fieldClass} ${errors.name ? 'border-red-500' : 'border-token'}`} placeholder="Your full name" />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium" htmlFor="email">Email *</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={update}
                      className={`${fieldClass} ${errors.email ? 'border-red-500' : 'border-token'}`} placeholder="you@company.com" />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium" htmlFor="company">Company</label>
                    <input id="company" name="company" value={form.company} onChange={update}
                      className={`${fieldClass} border-token`} placeholder="Company name" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium" htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" value={form.phone} onChange={update}
                      className={`${fieldClass} border-token`} placeholder="+1 555 000 0000" />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium" htmlFor="service">Service Interested</label>
                  <select id="service" name="service" value={form.service} onChange={update}
                    className={`${fieldClass} border-token`}>
                    <option value="">Select a service…</option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium" htmlFor="message">Message *</label>
                  <textarea id="message" name="message" rows={4} value={form.message} onChange={update}
                    className={`${fieldClass} resize-none ${errors.message ? 'border-red-500' : 'border-token'}`}
                    placeholder="Tell me about your project or goals…" />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>

                {mutation.isError && (
                  <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gradient px-7 py-3.5 text-base font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:shadow-glow-cyan disabled:opacity-70"
                >
                  {mutation.isPending ? (
                    <><Loader2 size={18} className="animate-spin" /> Sending…</>
                  ) : (
                    <>Book a Free Consultation <Send size={17} className="transition-transform group-hover:translate-x-0.5" /></>
                  )}
                </button>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
