import { Link } from 'react-router-dom';
import { ArrowRight, Boxes, MessageCircle, CheckCircle, Sparkles } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SEO from '@/components/SEO';
import ProductMockup from '@/components/ProductMockup';
import EcosystemDiagram from '@/components/EcosystemDiagram';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLang } from '@/i18n/LangContext';
import { saasProducts, getLiAfrikModules, tr } from '@/data/saasProducts';

const WHATSAPP_NUMBER = '971503857203';

export default function SaaSOverviewPage() {
  const { lang } = useLang();
  const ref = useScrollAnimation();
  const liafrik = saasProducts.find((p) => p.slug === 'liafrik');
  const modules = getLiAfrikModules();

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: saasProducts.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.name,
        url: `https://liyahgroup.me/saas/${p.slug}`,
      })),
    },
  ];

  return (
    <>
      <SEO
        title={lang === 'FR' ? 'LiAfrik — Plateforme SaaS Business | LIYAH GROUP' : 'LiAfrik — Business SaaS Platform | LIYAH GROUP'}
        description={lang === 'FR'
          ? 'LiAfrik par LIYAH GROUP : CRM, POS, RH, Santé, Comptabilité, E-commerce, Éducation, Immobilier — 11 modules sur une seule plateforme. Conçu pour l\'Afrique et le monde entier.'
          : 'LiAfrik by LIYAH GROUP: CRM, POS, HR, Health, Accounting, E-commerce, Education, Real Estate — 11 modules on one platform. Built for Africa and the world.'}
        path="/saas"
        jsonLd={jsonLd}
      />
      <PageHero
        label={lang === 'FR' ? 'PLATEFORME SaaS' : 'SaaS PLATFORM'}
        title={lang === 'FR' ? 'LiAfrik — L\'OS Business Africain' : 'LiAfrik — The African Business OS'}
        subtitle={lang === 'FR'
          ? '11 modules. Une seule plateforme. Activez ce dont vous avez besoin — évoluez à votre rythme. Conçu pour l\'Afrique et le monde entier.'
          : '11 modules. One platform. Activate what you need — scale as you grow. Built for Africa and the world.'}
      />

      {/* LiAfrik unified product section */}
      {liafrik && (
        <section className="relative py-20 md:py-28 bg-slate-900 overflow-hidden">
          {/* Tech background effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08),transparent_60%)]" />
          <div className="absolute inset-0 tech-grid-bg opacity-20" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary-600/10 blur-[120px] rounded-full animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-500/10 blur-[100px] rounded-full animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-500/10 border border-secondary-500/20 mb-6">
                  <Sparkles size={14} className="text-secondary-400" />
                  <span className="text-secondary-400 text-xs uppercase tracking-widest font-bold">{lang === 'FR' ? 'PLATEFORME UNIFIÉE' : 'UNIFIED PLATFORM'}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 text-balance">
                  {lang === 'FR' ? 'LiAfrik — Un Système, Toute Votre Entreprise' : 'LiAfrik — One System, Your Entire Business'}
                </h2>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8">
                  {tr(liafrik.mainBenefit, lang)}
                </p>
                <ul className="space-y-3 mb-8">
                  {liafrik.features.slice(0, 4).map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle size={18} className="text-secondary-500 flex-shrink-0 mt-0.5" />
                      <span>{tr(f, lang)}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/saas/liafrik" className="btn-primary inline-flex items-center justify-center gap-2" data-cta="saas-liafrik-overview">
                    {lang === 'FR' ? 'Découvrir LiAfrik' : 'Explore LiAfrik'}
                    <ArrowRight size={14} />
                  </Link>
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 border border-slate-600 text-slate-200 px-7 py-3 text-sm font-semibold rounded-lg hover:border-secondary-500 hover:text-white transition-all duration-300" data-cta="saas-liafrik-demo">
                    {lang === 'FR' ? 'Demander une démo' : 'Request a demo'}
                  </Link>
                </div>
              </div>
              <div className="animate-fade-in">
                <ProductMockup type={liafrik.mockupType} productName={liafrik.name} accent={liafrik.accent} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ecosystem diagram */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="section-label">{lang === 'FR' ? 'ÉCOSYSTÈME LIAFRIK' : 'LIAFRIK ECOSYSTEM'}</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4 text-balance">
              {lang === 'FR' ? '11 Modules Connectés, Une Seule Plateforme' : '11 Connected Modules, One Platform'}
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              {lang === 'FR'
                ? 'Cliquez sur un module pour en savoir plus. Chaque module partage les données avec les autres — pas d\'intégrations à maintenir.'
                : 'Click a module to learn more. Every module shares data with the others — no integrations to maintain.'}
            </p>
          </div>
          <EcosystemDiagram />
        </div>
      </section>

      {/* All LiAfrik modules — unified grid */}
      <section ref={ref} className="relative py-20 md:py-28 bg-slate-50 overflow-hidden">
        {/* Tech background effects */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-secondary-50 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent-50 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 tech-grid-bg opacity-[0.03]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="section-label">{lang === 'FR' ? 'MODULES LIAFRIK' : 'LIAFRIK MODULES'}</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4 text-balance">
              {lang === 'FR' ? 'Tous Vos Outils, Une Seule Plateforme' : 'All Your Tools, One Platform'}
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              {lang === 'FR'
                ? 'Activez uniquement les modules dont vous avez besoin aujourd\'hui. Ajoutez-en au fur et à mesure de votre croissance. Tous les modules font partie de LiAfrik.'
                : 'Activate only the modules you need today. Add more as your business grows. Every module is part of LiAfrik.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {modules.map((product, i) => (
              <div
                key={product.slug}
                className={`animate-on-scroll animate-on-scroll-delay-${Math.min(i + 1, 4)} card-glow group card card-hover overflow-hidden flex flex-col relative`}
              >
                <div className={`h-1.5 bg-gradient-to-r ${product.accent}`} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.accent} flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      <Boxes size={22} className="text-white" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] uppercase tracking-widest text-secondary-600 font-bold block mb-0.5">
                        {tr(product.category, lang)}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 leading-tight">{product.name}</h3>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{tr(product.valueProposition, lang)}</p>

                  {/* Mini mockup */}
                  <div className="mb-5 rounded-lg overflow-hidden border border-slate-100 bg-slate-50 flex-shrink-0">
                    <div className="aspect-[16/10]">
                      <div className="scale-[0.42] origin-top-left w-[238%]">
                        <ProductMockup type={product.mockupType} productName={product.name} accent={product.accent} />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 mb-5 flex-1">
                    <CheckCircle size={14} className="text-secondary-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs font-medium text-slate-700 leading-relaxed">{tr(product.mainBenefit, lang)}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                    <Link
                      to={`/saas/${product.slug}`}
                      data-cta="saas-module-learn"
                      data-product={product.slug}
                      className="btn-primary flex-1 flex items-center justify-center gap-1.5 text-xs py-2.5"
                    >
                      {lang === 'FR' ? 'En savoir plus' : 'Learn more'}
                      <ArrowRight size={12} />
                    </Link>
                    <Link
                      to="/contact"
                      data-cta="saas-module-demo"
                      data-product={product.slug}
                      className="flex-1 flex items-center justify-center gap-1.5 border border-slate-300 text-slate-700 px-3 py-2.5 text-xs font-semibold rounded-lg hover:border-secondary-600 hover:text-secondary-700 hover:bg-secondary-50 transition-all duration-300"
                    >
                      {lang === 'FR' ? 'Démo' : 'Demo'}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <div className="inline-block card p-8 max-w-2xl">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {lang === 'FR' ? 'Besoin d\'une démo personnalisée ?' : 'Need a personalized demo?'}
              </h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {lang === 'FR'
                  ? 'Réservez un appel stratégique pour voir comment LiAfrik peut s\'adapter à votre business.'
                  : 'Book a strategy call to see how LiAfrik can fit your business.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2" data-cta="saas-demo-contact">
                  {lang === 'FR' ? 'Réserver une démo' : 'Book a demo'}
                  <ArrowRight size={14} />
                </Link>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    lang === 'FR'
                      ? 'Bonjour LIYAH GROUP, je souhaite une démo de LiAfrik.'
                      : 'Hello LIYAH GROUP, I\'d like a demo of LiAfrik.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="saas-whatsapp"
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
