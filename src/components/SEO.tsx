import { useEffect } from 'react';
import { useLang } from '@/i18n/LangContext';

export interface SEOData {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article' | 'product';
  image?: string;
  jsonLd?: object[];
  hreflangPairs?: { en: string; fr: string };
}

const SITE_URL = 'https://liyahgroup.me';
const DEFAULT_IMAGE = '/assets/images/LIYAH.png';

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (hreflang) el.setAttribute('hreflang', hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(id: string, data: object) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.setAttribute('type', 'application/ld+json');
    el.setAttribute('data-dynamic', 'true');
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function cleanupDynamic() {
  document.head.querySelectorAll('[data-dynamic="true"]').forEach((el) => el.remove());
}

export default function SEO({ title, description, path, type = 'website', image = DEFAULT_IMAGE, jsonLd = [], hreflangPairs }: SEOData) {
  const { lang } = useLang();
  const canonicalUrl = `${SITE_URL}${path}`;
  const fullImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  useEffect(() => {
    cleanupDynamic();

    document.title = title;

    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', 'index, follow');

    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:image', fullImage);
    upsertMeta('property', 'og:locale', lang === 'FR' ? 'fr_FR' : 'en_US');
    upsertMeta('property', 'og:locale:alternate', lang === 'FR' ? 'en_US' : 'fr_FR');
    upsertMeta('property', 'og:site_name', 'LIYAH GROUP');

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', fullImage);

    upsertLink('canonical', canonicalUrl);

    if (hreflangPairs) {
      upsertLink('alternate', `${SITE_URL}${hreflangPairs.en}`, 'en');
      upsertLink('alternate', `${SITE_URL}${hreflangPairs.fr}`, 'fr');
      upsertLink('alternate', canonicalUrl, 'x-default');
    }

    jsonLd.forEach((data, i) => {
      upsertJsonLd(`dynamic-jsonld-${i}`, data);
    });

    return () => {
      cleanupDynamic();
    };
  }, [title, description, canonicalUrl, fullImage, type, lang, JSON.stringify(jsonLd), JSON.stringify(hreflangPairs)]);

  return null;
}
