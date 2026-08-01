import { Link, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { Layers, DollarSign, Target, ArrowRight, Globe, ShoppingBag, TrendingUp } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SEO from '@/components/SEO';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLang } from '@/i18n/LangContext';
import TrustpilotBadge from '@/components/TrustpilotBadge';

const iconMap: Record<string, typeof Layers> = { Layers, DollarSign, Target };

const projectCategories = [
  {
    key: 'digital',
    icon: Globe,
    title: 'Digital Presence',
    titleFr: 'Présence Digitale',
    description: 'Websites, mobile apps and custom platforms that go beyond simple online presence — creating interconnected systems that grow your audience and streamline your operations.',
    descriptionFr: 'Sites web, applications mobiles et plateformes sur-mesure qui vont au-delà de la simple présence en ligne — créant des systèmes interconnectés qui développent votre audience et optimisent vos opérations.',
    projects: [
      { title: 'Novely Store — E-Commerce Redesign', category: 'Web Design', image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { title: 'Astrova Solutions — Corporate Platform', category: 'Custom Platform', image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { title: 'Bellavera Media — Content Hub', category: 'Web Design', image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800' },
    ],
  },
  {
    key: 'ecommerce',
    icon: ShoppingBag,
    title: 'E-Commerce & Revenue',
    titleFr: 'E-Commerce & Revenus',
    description: 'E-commerce stores, digital product systems and monetization strategies that turn visibility into consistent and scalable revenue streams.',
    descriptionFr: 'Boutiques e-commerce, systèmes de produits digitaux et stratégies de monétisation qui transforment la visibilité en flux de revenus constants et évolutifs.',
    projects: [
      { title: 'Hoffmann Goods — Shopify Ecosystem', category: 'E-Commerce', image: 'https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { title: 'Naija Style Hub — Fashion Store', category: 'E-Commerce', image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { title: 'Pearl Retail UAE — Dubai Store', category: 'E-Commerce', image: 'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&w=800' },
    ],
  },
  {
    key: 'growth',
    icon: TrendingUp,
    title: 'Growth & Automation',
    titleFr: 'Croissance & Automatisation',
    description: 'Data-driven strategies aligning branding, marketing and technology — ensuring measurable growth, stronger positioning and real business results.',
    descriptionFr: 'Stratégies data-driven alignant branding, marketing et technologie — garantissant une croissance mesurable, un positionnement plus fort et de réels résultats business.',
    projects: [
      { title: 'Lagos Retail Group — Growth System', category: 'Strategy', image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { title: 'Gulf Trade Links — Operations Unification', category: 'Automation', image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { title: 'Dakar Digital — Revenue Ecosystem', category: 'Growth', image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=800' },
    ],
  },
];

export default function ServicesPage() {
  const { t, lang } = useLang();
  const ref = useScrollAnimation();
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') === 'projects' ? 'projects' : 'services';
  const [activeTab, setActiveTab] = useState<'services' | 'projects'>(initialTab);
  const [activeCat, setActiveCat] = useState(searchParams.get('cat') || 'digital');

  const active = projectCategories.find((c) => c.key === activeCat) ?? projectCategories[0];

  return (
    <>
      <SEO
        title={lang === 'FR' ? 'Services & Projets | LIYAH GROUP' : 'Services & Projects | LIYAH GROUP'}
        description={lang === 'FR'
          ? 'Sites web, e-commerce, croissance digitale et automatisation. Découvrez nos services et projeta réalisés en Afrique et aux EAU.'
          : 'Web design, e-commerce, digital growth and automation. Explore our services and projects across Africa and the UAE.'}
        path="/services"
      />
      <PageHero label={t.engines.label} title={t.engines.title} subtitle={t.outcomes.subtitle} />

      {/* Tab switcher */}
      <section className="relative py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => setActiveTab('services')}
            className={`flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-widest font-bold rounded-lg transition-all duration-300 ${
              activeTab === 'services'
                ? 'bg-secondary-600 text-white shadow-lg shadow-secondary-200'
                : 'border border-slate-200 text-slate-600 hover:border-secondary-400 hover:text-secondary-700 hover:-translate-y-0.5 bg-white'
            }`}
          >
            <Layers size={16} strokeWidth={1.5} />
            {lang === 'FR' ? 'Services' : 'Services'}
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-widest font-bold rounded-lg transition-all duration-300 ${
              activeTab === 'projects'
                ? 'bg-secondary-600 text-white shadow-lg shadow-secondary-200'
                : 'border border-slate-200 text-slate-600 hover:border-secondary-400 hover:text-secondary-700 hover:-translate-y-0.5 bg-white'
            }`}
          >
            <Globe size={16} strokeWidth={1.5} />
            {lang === 'FR' ? 'Projets' : 'Projects'}
          </button>
        </div>
      </section>

      {/* Services tab */}
      {activeTab === 'services' && (
        <section ref={ref} className="relative py-20 md:py-28 bg-slate-50 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-secondary-50 blur-[120px] rounded-full" />
          <div className="relative max-w-7xl mx-auto px-6 space-y-6 lg:space-y-8">
            {t.engines.items.map((s, i) => {
              const Icon = iconMap[s.icon] ?? Layers;
              const serviceSlugs = ['website-design-development', 'ecommerce-shopify', 'seo-digital-growth-strategy'];
              return (
                <div key={s.name} className={`animate-on-scroll animate-on-scroll-delay-${i + 1} card-glow group card card-hover p-8 lg:p-12`}>
                  <div className="grid md:grid-cols-3 gap-8 items-start">
                    <div className="md:col-span-1">
                      <div className="w-16 h-16 rounded-xl bg-secondary-50 flex items-center justify-center mb-6 group-hover:bg-secondary-600 transition-colors duration-500">
                        <Icon size={28} className="text-secondary-600 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                      </div>
                      <p className="text-secondary-600 text-xs uppercase tracking-widest font-bold mb-2">{s.name}</p>
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 leading-snug">{s.subtitle}</h3>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">{s.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {s.tags.map((tag) => (
                          <span key={tag} className="text-xs text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full font-medium group-hover:border-secondary-300 transition-colors duration-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link to={`/services/${serviceSlugs[i] ?? 'website-design-development'}`} className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-secondary-600 hover:text-secondary-700 transition-colors group/link">
                        {t.blog.readMore} <ArrowRight size={12} className="transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Projects tab */}
      {activeTab === 'projects' && (
        <>
          <section className="relative py-8 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-wrap gap-3 justify-center">
                {projectCategories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.key}
                      onClick={() => setActiveCat(cat.key)}
                      className={`flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-widest font-bold rounded-lg transition-all duration-300 ${
                        activeCat === cat.key
                          ? 'bg-secondary-600 text-white shadow-lg shadow-secondary-200'
                          : 'border border-slate-200 text-slate-600 hover:border-secondary-400 hover:text-secondary-700 hover:-translate-y-0.5 bg-white'
                      }`}
                    >
                      <Icon size={16} strokeWidth={1.5} />
                      {lang === 'FR' ? cat.titleFr : cat.title}
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="relative py-20 md:py-28 bg-slate-50 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-6">
              <div className="max-w-3xl mb-14">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary-50 flex items-center justify-center">
                    <active.icon size={24} className="text-secondary-600" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{lang === 'FR' ? active.titleFr : active.title}</h2>
                </div>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">{lang === 'FR' ? active.descriptionFr : active.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {active.projects.map((p, i) => (
                  <article key={p.title} className={`animate-on-scroll animate-on-scroll-delay-${i + 1} group cursor-pointer`}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200 mb-5">
                      <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="absolute top-4 left-4 bg-white/90 text-secondary-700 text-xs uppercase tracking-widest px-3 py-1 font-semibold rounded-full backdrop-blur-sm">{p.category}</span>
                      <div className="absolute bottom-4 right-4 w-10 h-10 bg-secondary-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-0 translate-x-4">
                        <ArrowRight size={16} className="text-white" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-secondary-700 transition-colors duration-300">{p.title}</h3>
                  </article>
                ))}
              </div>

              <div className="text-center mt-14">
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  {t.cta.cta} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Outcomes section — shared */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent-50 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="animate-on-scroll section-label">{t.outcomes.label}</span>
            <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">{t.outcomes.title}</h2>
            <p className="animate-on-scroll animate-on-scroll-delay-2 text-slate-600 text-sm md:text-base">{t.outcomes.subtitle}</p>
            <div className="animate-on-scroll animate-on-scroll-delay-3 mt-6 flex justify-center">
              <TrustpilotBadge variant="light" size="md" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.outcomes.items.map((item, i) => (
              <div key={item.title} className={`animate-on-scroll animate-on-scroll-delay-${i + 1} card-glow group card card-hover p-7 flex flex-col`}>
                <h3 className="text-base font-bold uppercase text-slate-900 mb-4 leading-tight">{item.title}</h3>
                <ul className="space-y-2.5 flex-grow">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-slate-600 leading-snug">
                      <span className="text-secondary-500 mt-0.5 flex-shrink-0">→</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-secondary-600 hover:text-secondary-700 transition-colors self-start">
                  {item.cta} <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
