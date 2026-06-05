import { useEffect } from 'react';

const SITE = 'Arun P Divakaran';
const BASE_URL = 'https://arunpd.com';
const DEFAULT_DESCRIPTION =
  'Senior Technology Consultant with 15+ years helping US and European enterprises scale through Cloud, AI, FinTech, and Digital Transformation. Remote consulting for startups, SMBs, and enterprises across the USA, UK, and Europe.';
const DEFAULT_KEYWORDS =
  'cloud consultant USA, AI consultant Europe, digital transformation consultant, cloud consulting services UK, remote IT consultant USA, fintech consultant Europe, AWS consultant, Azure consultant UK, AI solutions USA, cloud migration Europe, Arun P Divakaran';

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href, extra = {}) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
  Object.entries(extra).forEach(([k, v]) => el.setAttribute(k, v));
}

export default function Seo({ title, description, keywords, path = '/', jsonLd }) {
  const pageTitle = title
    ? `${title} — ${SITE} | Cloud & AI Consultant for USA & Europe`
    : `${SITE} — Cloud, AI & Digital Transformation Consultant for USA & Europe`;
  const desc = description || DEFAULT_DESCRIPTION;
  const kw = keywords || DEFAULT_KEYWORDS;
  const url = `${BASE_URL}${path}`;

  useEffect(() => {
    document.title = pageTitle;

    upsertMeta('name', 'description', desc);
    upsertMeta('name', 'keywords', kw);
    upsertMeta('name', 'author', 'Arun P Divakaran');
    upsertMeta('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large');

    // Open Graph
    upsertMeta('property', 'og:title', pageTitle);
    upsertMeta('property', 'og:description', desc);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:locale', 'en_US');
    upsertMeta('property', 'og:site_name', 'Arun P Divakaran Consulting');

    // Twitter
    upsertMeta('name', 'twitter:title', pageTitle);
    upsertMeta('name', 'twitter:description', desc);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:site', '@arunmca1');

    // Canonical
    upsertLink('canonical', url);

    // Page-level JSON-LD
    let script;
    if (jsonLd) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo', 'page');
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      if (script) document.head.removeChild(script);
    };
  }, [pageTitle, desc, kw, url, jsonLd]);

  return null;
}
