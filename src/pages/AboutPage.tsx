import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';
import { useLang } from '@/i18n/LangContext';
import TrustpilotBadge from '@/components/TrustpilotBadge';

function StatItem({ end, prefix, suffix, label }: { end: number; prefix: string; suffix: string; label: string }) {
  const { ref, value } = useCountUp({ end, duration: 2000 });
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="animate-on-scroll flex flex-col items-center text-center">
      <span className="text-4xl md:text-6xl font-bold text-secondary-500">{prefix}{value}{suffix}</span>
      <span className="text-slate-400 text-xs md:text-sm uppercase tracking-widest font-medium mt-2">{label}</span>
    </div>
  );
}

export default function AboutPage() {
  const { t } = useLang();
  const ref = useScrollAnimation();
  const ref2 = useScrollAnimation();
  const ref3 = useScrollAnimation();
  const ref4 = useScrollAnimation();

  return (
    <>
      <PageHero label={t.about.label} title={t.about.title} />

      <section ref={ref} className="relative py-20 md:py-28 bg-white overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-secondary-50 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent-50 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="animate-on-scroll relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-200 group max-w-md mx-auto md:mx-0">
              <img src="/assets/images/IMG_6290.JPG" alt="Vincent Nogue, Founder of LIYAH GROUP." loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-secondary-600 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-accent-500/40 rounded-2xl -z-10" />
          </div>

          <div>
            <span className="animate-on-scroll section-label">{t.about.label}</span>
            <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-tight text-balance">
              {t.about.title}
            </h2>
            <p className="animate-on-scroll animate-on-scroll-delay-2 text-slate-600 leading-relaxed text-sm md:text-base">
              {t.about.body}
            </p>
            <Link to="/contact" className="animate-on-scroll animate-on-scroll-delay-3 mt-8 inline-flex items-center gap-2 text-sm font-semibold text-secondary-700 hover:text-secondary-800 transition-colors duration-200 group">
              {t.about.cta}
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <div className="animate-on-scroll animate-on-scroll-delay-3 mt-8">
              <TrustpilotBadge variant="light" size="md" />
            </div>
          </div>
        </div>
      </section>

      <section ref={ref2} className="relative py-20 md:py-28 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.05),transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="animate-on-scroll section-label text-secondary-400">KEY METRICS</span>
            <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl md:text-4xl font-bold tracking-tight text-white">
              A Track Record Built Over Time
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-4 md:gap-8 py-8">
            <StatItem end={15} prefix="+" suffix="" label={t.stats[0].label} />
            <StatItem end={5} prefix="+" suffix="K" label={t.stats[1].label} />
            <StatItem end={11} prefix="+" suffix="K" label={t.stats[2].label} />
          </div>
          <div className="mt-16 relative">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-secondary-600/40 to-transparent" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
              {[
                { year: '2010', label: 'First ventures launched' },
                { year: '2015', label: 'E-commerce ecosystems built' },
                { year: '2020', label: 'Multi-market expansion (Africa + UAE)' },
                { year: '2026', label: 'LIYAH GROUP — global digital platform' },
              ].map((item, i) => (
                <div key={item.year} className={`animate-on-scroll animate-on-scroll-delay-${i + 1} text-center`}>
                  <div className="w-3 h-3 bg-secondary-500 rounded-full mx-auto mb-4 relative z-10 animate-pulse-glow" />
                  <p className="text-xl font-bold text-secondary-400">{item.year}</p>
                  <p className="text-slate-300 text-xs mt-2 leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={ref3} className="relative py-20 md:py-28 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="animate-on-scroll section-label">{t.whyChooseUs.label}</span>
            <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              {t.whyChooseUs.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {t.whyChooseUs.items.map((item, i) => (
              <div key={item.num} className={`animate-on-scroll animate-on-scroll-delay-${i + 1} card-glow group card card-hover p-7 flex gap-5`}>
                <span className="text-4xl font-bold text-secondary-200 group-hover:text-secondary-600 transition-colors duration-500 flex-shrink-0 leading-none">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ref4} className="relative py-20 md:py-28 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.06),transparent_70%)]" />
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-secondary-600/15 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-accent-500/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="animate-on-scroll section-label text-secondary-400 justify-center">{t.businessBuilder.label}</span>
          <p className="animate-on-scroll animate-on-scroll-delay-1 text-xl md:text-2xl leading-relaxed text-white text-balance font-medium">
            {t.businessBuilder.body}
          </p>
          <Link to="/contact" className="animate-on-scroll animate-on-scroll-delay-2 mt-10 inline-block btn-primary animate-pulse-glow">
            {t.businessBuilder.cta}
          </Link>
        </div>
      </section>
    </>
  );
}
