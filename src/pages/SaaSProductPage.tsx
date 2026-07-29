import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Boxes, ArrowRight, CheckCircle, ChevronDown, MessageCircle, Users, Target, Sparkles, AlertCircle,
  Zap, ShieldCheck, Cloud, Smartphone, Globe, TrendingUp, Rocket, Layers,
} from 'lucide-react';
import { useState } from 'react';
import PageHero from '@/components/PageHero';
import SEO from '@/components/SEO';
import ProductMockup from '@/components/ProductMockup';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLang } from '@/i18n/LangContext';
import { getSaaSProductBySlug, tr, saasProducts, getLiAfrikModules } from '@/data/saasProducts';
import { services } from '@/data/services';

const WHATSAPP_NUMBER = '971503857203';

const timeline = [
  { year: '2012', title: { fr: 'Premiers projets lancés', en: 'First ventures launched' }, desc: { fr: 'Début du parcours entrepreneurial — premiers projets et clients.', en: 'Start of the entrepreneurial journey — first projects and clients.' } },
  { year: '2016', title: { fr: 'Écosystèmes e-commerce', en: 'E-commerce ecosystems built' }, desc: { fr: 'Construction de plateformes e-commerce et solutions digitales pour commerçants.', en: 'Building e-commerce platforms and digital solutions for merchants.' } },
  { year: '2019', title: { fr: 'Naissance de LIYAH GROUP', en: 'LIYAH GROUP founded' }, desc: { fr: 'Fédération des activités sous une seule marque — services, produits et conseil.', en: 'Bringing all activities under one brand — services, products and consulting.' } },
  { year: '2023', title: { fr: 'Expansion multi-marchés', en: 'Multi-market expansion' }, desc: { fr: 'Déploiement en Afrique et aux EAU — présence sur 16 marchés.', en: 'Expansion across Africa and the UAE — presence in 16 markets.' } },
  { year: '2026', title: { fr: 'LiAfrik — plateforme globale', en: 'LiAfrik — global platform' }, desc: { fr: 'Lancement de LiAfrik, le système d\'exploitation business africain unifié.', en: 'Launch of LiAfrik, the unified African business operating system.' } },
];

const moduleConnections: Record<string, string[]> = {
  'liafrik-digital-skills': ['liafrik-skul-afrik', 'liafrik-crm', 'liafrik-os'],
  'liafrik-pos-commerce': ['liafrik-os', 'liafrik-libooks', 'liafrik-crm'],
  'liafrik-mafo-la-reine': ['liafrik-health', 'liafrik-crm'],
  'liafrik-faka-hr': ['liafrik-libooks', 'liafrik-crm'],
  'liafrik-health': ['liafrik-crm', 'liafrik-libooks', 'liafrik-mafo-la-reine'],
  'liafrik-crm': ['liafrik-pos-commerce', 'liafrik-os', 'liafrik-libooks'],
  'liafrik-libooks': ['liafrik-pos-commerce', 'liafrik-os', 'liafrik-bailly', 'liafrik-faka-hr'],
  'liafrik-skul-afrik': ['liafrik-digital-skills', 'liafrik-libooks', 'liafrik-crm'],
  'liafrik-bailly': ['liafrik-libooks', 'liafrik-crm'],
  'liafrik-liafund': ['liafrik-libooks', 'liafrik-crm'],
  'liafrik-os': ['liafrik-pos-commerce', 'liafrik-crm', 'liafrik-libooks'],
  'liafrik': ['liafrik-digital-skills', 'liafrik-pos-commerce', 'liafrik-mafo-la-reine', 'liafrik-faka-hr', 'liafrik-health', 'liafrik-crm', 'liafrik-libooks', 'liafrik-skul-afrik', 'liafrik-bailly', 'liafrik-liafund', 'liafrik-os'],
};

const trustBadges = [
  { icon: ShieldCheck, fr: 'Sécurité bancaire', en: 'Bank-grade security' },
  { icon: Cloud, fr: 'Cloud natif', en: 'Cloud-native' },
  { icon: Smartphone, fr: 'Mobile-first', en: 'Mobile-first' },
  { icon: Globe, fr: 'Bilingue FR/EN', en: 'Bilingual FR/EN' },
  { icon: Zap, fr: 'API-first', en: 'API-first' },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left py-5 group"
      >
        <span className="text-sm md:text-base font-semibold text-slate-900 pr-4">{question}</span>
        <ChevronDown
          size={18}
          className={`text-slate-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 animate-fade-in">
          <p className="text-sm text-slate-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function SaaSProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLang();
  const ref = useScrollAnimation();
  const product = slug ? getSaaSProductBySlug(slug) : undefined;

  if (!product) return <Navigate to="/saas" replace />;

  const whatsappMsg = lang === 'FR'
    ? `Bonjour LIYAH GROUP, je souhaite en savoir plus sur ${product.name}. Pouvez-vous me contacter ?`
    : `Hello LIYAH GROUP, I'd like to learn more about ${product.name}. Can you contact me?`;
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`;

  const isModule = product.isModule;
  const otherModules = getLiAfrikModules().filter((p) => p.slug !== product.slug);
  const connections = (moduleConnections[product.slug] || []).map((s) => getSaaSProductBySlug(s)).filter(Boolean) as typeof saasProducts;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description: tr(product.valueProposition, lang),
      category: tr(product.category, lang),
      brand: { '@type': 'Brand', name: 'LIYAH GROUP' },
      url: `https://liyahgroup.me/saas/${product.slug}`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: product.faqs.map((f) => ({
        '@type': 'Question',
        name: tr(f.question, lang),
        acceptedAnswer: { '@type': 'Answer', text: tr(f.answer, lang) },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://liyahgroup.me/' },
        { '@type': 'ListItem', position: 2, name: 'SaaS Products', item: 'https://liyahgroup.me/saas' },
        ...(isModule ? [{ '@type': 'ListItem', position: 3, name: 'LiAfrik', item: 'https://liyahgroup.me/saas/liafrik' }] : []),
        { '@type': 'ListItem', position: isModule ? 4 : 3, name: product.name, item: `https://liyahgroup.me/saas/${product.slug}` },
      ],
    },
  ];

  return (
    <>
      <SEO
        title={tr(product.seo.title, lang)}
        description={tr(product.seo.description, lang)}
        path={`/saas/${product.slug}`}
        type="product"
        jsonLd={jsonLd}
      />
      <PageHero label={tr(product.category, lang)} title={product.name} subtitle={tr(product.valueProposition, lang)} />

      {/* Breadcrumb for modules */}
      {isModule && (
        <div className="bg-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-xs text-slate-500">
            <Link to="/saas" className="hover:text-secondary-600 transition-colors">{lang === 'FR' ? 'Produits SaaS' : 'SaaS Products'}</Link>
            <span>/</span>
            <Link to="/saas/liafrik" className="hover:text-secondary-600 transition-colors">LiAfrik</Link>
            <span>/</span>
            <span className="text-slate-700 font-medium">{product.name}</span>
          </div>
        </div>
      )}

      {/* Trust badges bar */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {trustBadges.map((b) => (
            <div key={b.en} className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <b.icon size={14} className="text-secondary-600" />
              {lang === 'FR' ? b.fr : b.en}
            </div>
          ))}
        </div>
      </div>

      <section ref={ref} className="relative py-20 md:py-28 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-50 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.accent} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <Boxes size={26} className="text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-secondary-600 text-xs uppercase tracking-widest font-bold block">{tr(product.category, lang)}</span>
                  {isModule && (
                    <span className="text-slate-400 text-xs flex items-center gap-1 mt-0.5">
                      <Layers size={11} /> {lang === 'FR' ? 'Module LiAfrik' : 'LiAfrik module'}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">{tr(product.mainBenefit, lang)}</p>

              {/* Product mockup — moved higher for visual impact */}
              <div className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-5">
                  {lang === 'FR' ? 'Aperçu produit' : 'Product preview'}
                </h2>
                <div className="relative group">
                  <div className={`absolute -inset-2 bg-gradient-to-br ${product.accent} opacity-10 rounded-3xl blur-xl group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className="relative">
                    <ProductMockup type={product.mockupType} productName={product.name} accent={product.accent} />
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-3 text-center">
                  {lang === 'FR' ? 'Aperçu de l\'interface — remplaçable par des captures réelles' : 'Interface preview — replaceable with real screenshots'}
                </p>
              </div>

              {/* Problem solved */}
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-5">
                  <AlertCircle size={20} className="text-secondary-600" />
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    {lang === 'FR' ? 'Le problème résolu' : 'The problem solved'}
                  </h2>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-orange-100 rounded-xl p-5">
                  <p className="text-slate-700 text-sm md:text-base leading-relaxed">{tr(product.problemSolved, lang)}</p>
                </div>
              </div>

              {/* Who is it for */}
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-5">
                  <Users size={20} className="text-secondary-600" />
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    {lang === 'FR' ? 'Pour qui ?' : 'Who is it for?'}
                  </h2>
                </div>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">{tr(product.audience, lang)}</p>
              </div>

              {/* Key features — enhanced with cards */}
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-5">
                  <Sparkles size={20} className="text-secondary-600" />
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    {lang === 'FR' ? 'Fonctionnalités clés' : 'Key features'}
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {product.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-secondary-200 hover:bg-secondary-50/50 transition-colors duration-300">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${product.accent} flex items-center justify-center flex-shrink-0`}>
                        <CheckCircle size={16} className="text-white" />
                      </div>
                      <span className="text-sm md:text-base text-slate-700 font-medium leading-snug pt-1">{tr(f, lang)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business outcomes */}
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-5">
                  <Target size={20} className="text-secondary-600" />
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    {lang === 'FR' ? 'Résultats business' : 'Business outcomes'}
                  </h2>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {product.outcomes.map((o, i) => (
                    <div key={i} className="card p-5 text-center">
                      <div className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center mx-auto mb-3">
                        <TrendingUp size={18} className="text-secondary-600" />
                      </div>
                      <p className="text-sm text-slate-700 font-medium leading-relaxed">{tr(o, lang)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Module connections — shows how this module connects to others */}
              {connections.length > 0 && (
                <div className="mb-12">
                  <div className="flex items-center gap-2 mb-5">
                    <Layers size={20} className="text-secondary-600" />
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                      {lang === 'FR' ? 'Connexions LiAfrik' : 'LiAfrik connections'}
                    </h2>
                  </div>
                  <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                    {lang === 'FR'
                      ? `${product.name} partage ses données avec ces modules — automatiquement, sans intégration à maintenir.`
                      : `${product.name} shares data with these modules — automatically, no integrations to maintain.`}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {connections.map((c) => (
                      <Link
                        key={c.slug}
                        to={`/saas/${c.slug}`}
                        className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:border-secondary-400 hover:bg-secondary-50 hover:text-secondary-700 transition-all duration-300 group"
                      >
                        <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${c.accent} flex items-center justify-center flex-shrink-0`}>
                          <Boxes size={12} className="text-white" />
                        </div>
                        {c.name}
                        <ArrowRight size={12} className="text-slate-300 group-hover:text-secondary-500 group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* How it works */}
              <div className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
                  {lang === 'FR' ? 'Comment ça marche' : 'How it works'}
                </h2>
                <div className="relative">
                  {/* Connecting line */}
                  <div className="absolute top-5 left-5 right-5 h-0.5 bg-gradient-to-r from-secondary-200 via-secondary-300 to-secondary-200 hidden md:block" />
                  <div className="grid md:grid-cols-3 gap-5 relative">
                    {product.howItWorks.map((step, i) => (
                      <div key={i} className="card p-6 relative">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${product.accent} text-white flex items-center justify-center text-sm font-bold mb-4 relative z-10 mx-auto md:mx-0`}>
                          {i + 1}
                        </div>
                        <h3 className="text-base font-bold text-slate-900 mb-2">{tr(step.title, lang)}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{tr(step.desc, lang)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="card p-8 mb-12 bg-gradient-to-br from-slate-50 to-secondary-50 border-slate-200">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                  {lang === 'FR' ? 'Tarification' : 'Pricing'}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {lang === 'FR'
                    ? 'Les tarifs dépendent des modules activés et de la taille de votre équipe. Contactez-nous pour un devis personnalisé.'
                    : 'Pricing depends on activated modules and your team size. Contact us for a custom quote.'}
                </p>
                <Link
                  to="/contact"
                  data-cta="saas-pricing-demo"
                  data-product={product.slug}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  {lang === 'FR' ? 'Demander une démo' : 'Request a demo'}
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* FAQ */}
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                {lang === 'FR' ? 'Questions fréquentes' : 'Frequently asked questions'}
              </h2>
              <div className="mb-12">
                {product.faqs.map((f, i) => (
                  <FaqItem key={i} question={tr(f.question, lang)} answer={tr(f.answer, lang)} />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="card card-hover p-6 bg-gradient-to-br from-slate-900 to-secondary-900 border-0">
                  <h3 className="text-white text-lg font-bold mb-3">
                    {lang === 'FR' ? 'Commencer avec ' + product.name : 'Get started with ' + product.name}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    {lang === 'FR'
                      ? 'Réservez une démo pour voir comment ' + product.name + ' peut transformer votre business.'
                      : 'Book a demo to see how ' + product.name + ' can transform your business.'}
                  </p>
                  <Link
                    to="/contact"
                    data-cta="saas-detail-contact"
                    data-product={product.slug}
                    className="btn-primary w-full flex items-center justify-center gap-2 mb-3"
                  >
                    {lang === 'FR' ? 'Demander l\'accès' : 'Request access'}
                    <ArrowRight size={14} />
                  </Link>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="saas-detail-whatsapp"
                    data-product={product.slug}
                    className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-3 rounded-lg transition-all duration-300"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                </div>

                {/* Other modules (if this is a module) or all modules (if this is LiAfrik) */}
                <div className="card p-6">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">
                    {isModule
                      ? (lang === 'FR' ? 'Autres modules LiAfrik' : 'Other LiAfrik modules')
                      : (lang === 'FR' ? 'Modules LiAfrik' : 'LiAfrik modules')}
                  </h3>
                  {(isModule ? otherModules : getLiAfrikModules()).slice(0, 6).map((p) => (
                    <Link
                      key={p.slug}
                      to={`/saas/${p.slug}`}
                      className="block text-sm text-secondary-600 hover:text-secondary-700 font-medium py-2 border-b border-slate-100 last:border-b-0"
                    >
                      {p.name} →
                    </Link>
                  ))}
                </div>

                <div className="card p-6">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">
                    {lang === 'FR' ? 'Services liés' : 'Related services'}
                  </h3>
                  {services.slice(0, 4).map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="block text-sm text-secondary-600 hover:text-secondary-700 font-medium py-2 border-b border-slate-100 last:border-b-0"
                    >
                      {tr(s.name, lang)} →
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Company journey timeline — shared across all SaaS product pages */}
      <section className="relative py-20 md:py-28 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.06),transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-secondary-400 text-xs uppercase tracking-widest font-bold">
              {lang === 'FR' ? 'NOTRE PARCOURS' : 'OUR JOURNEY'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-3 mb-4 text-balance">
              {lang === 'FR' ? 'De 2012 à LiAfrik — 14 ans de construction' : 'From 2012 to LiAfrik — 14 years of building'}
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              {lang === 'FR'
                ? 'Chaque étape nous a rapprochés de la vision d\'un système d\'exploitation business unifié pour l\'Afrique.'
                : 'Every step brought us closer to the vision of a unified business operating system for Africa.'}
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary-600 via-secondary-500 to-accent-500 md:-translate-x-1/2" />

            <div className="space-y-8 md:space-y-12">
              {timeline.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={item.year}
                    className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-secondary-500 ring-4 ring-slate-900 md:-translate-x-1/2 z-10 flex-shrink-0" />

                    {/* Content */}
                    <div className={`pl-12 md:pl-0 md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="inline-block">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.accent} flex items-center justify-center mb-3 ${isLeft ? 'md:ml-auto' : ''}`}>
                          {i === timeline.length - 1 ? <Rocket size={22} className="text-white" /> : <span className="text-white text-xs font-bold">{item.year.slice(2)}</span>}
                        </div>
                        <span className="text-secondary-400 text-xs font-bold uppercase tracking-widest">{item.year}</span>
                        <h3 className="text-white text-lg font-bold mt-1 mb-2">{lang === 'FR' ? item.title.fr : item.title.en}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{lang === 'FR' ? item.desc.fr : item.desc.en}</p>
                      </div>
                    </div>
                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA at the bottom of timeline */}
          <div className="text-center mt-14">
            <div className="inline-block bg-white/5 border border-white/10 rounded-2xl p-8 max-w-xl">
              <h3 className="text-white text-xl font-bold mb-3">
                {lang === 'FR' ? 'Rejoignez le mouvement LiAfrik' : 'Join the LiAfrik movement'}
              </h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {lang === 'FR'
                  ? '14 ans d\'expérience, 16 marchés, une plateforme unifiée. Réservez votre démo aujourd\'hui.'
                  : '14 years of experience, 16 markets, one unified platform. Book your demo today.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2" data-cta="saas-timeline-demo">
                  {lang === 'FR' ? 'Réserver une démo' : 'Book a demo'}
                  <ArrowRight size={14} />
                </Link>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="saas-timeline-whatsapp"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
