import { Link } from 'react-router-dom';
import { Layers, DollarSign, Target, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLang } from '@/i18n/LangContext';
import TrustpilotBadge from '@/components/TrustpilotBadge';

const iconMap: Record<string, typeof Layers> = { Layers, DollarSign, Target };

export default function ServicesPage() {
  const { t } = useLang();
  const ref = useScrollAnimation();

  return (
    <>
      <PageHero label={t.engines.label} title={t.engines.title} subtitle={t.outcomes.subtitle} />

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
