import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Globe, ShoppingBag, TrendingUp, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLang } from '@/i18n/LangContext';

const categories = [
  {
    key: 'digital',
    icon: Globe,
    title: 'Digital Presence',
    description: 'Websites, mobile apps and custom platforms that go beyond simple online presence — creating interconnected systems that grow your audience and streamline your operations.',
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
    description: 'E-commerce stores, digital product systems and monetization strategies that turn visibility into consistent and scalable revenue streams.',
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
    description: 'Data-driven strategies aligning branding, marketing and technology — ensuring measurable growth, stronger positioning and real business results.',
    projects: [
      { title: 'Lagos Retail Group — Growth System', category: 'Strategy', image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { title: 'Gulf Trade Links — Operations Unification', category: 'Automation', image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { title: 'Dakar Digital — Revenue Ecosystem', category: 'Growth', image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=800' },
    ],
  },
];

export default function ProjectsPage() {
  const { t } = useLang();
  const ref = useScrollAnimation();
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get('cat') || 'digital';
  const [activeCat, setActiveCat] = useState(initialCat);

  const active = categories.find((c) => c.key === activeCat) ?? categories[0];

  return (
    <>
      <PageHero label={t.header.projects} title={t.header.projects} subtitle={t.outcomes.subtitle} />

      <section className="relative py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => {
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
                  {cat.title}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section ref={ref} className="relative py-20 md:py-28 bg-slate-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-secondary-50 flex items-center justify-center">
                <active.icon size={24} className="text-secondary-600" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{active.title}</h2>
            </div>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">{active.description}</p>
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
  );
}
