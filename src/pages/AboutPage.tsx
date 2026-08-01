import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Award, MapPin, Briefcase } from 'lucide-react';
import SEO from '@/components/SEO';
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

const timeline = [
  { year: '2012', label: { en: 'Began career in digital as a Graphic Designer in Cameroon', fr: 'Début de carrière dans le digital en tant que Graphiste au Cameroun' } },
  { year: '2015', label: { en: 'Transitioned into e-commerce in Cameroon', fr: 'Transition vers l\'e-commerce au Cameroun' } },
  { year: '2019', label: { en: 'Founded LIYAH GROUP, a web & digital agency in Cameroon', fr: 'Fondation de LIYAH GROUP, agence web & digitale au Cameroun' } },
  { year: '2022', label: { en: 'Restructured and expanded operations of LIYAH GROUP in Abu Dhabi, UAE', fr: 'Restructuration et expansion des opérations de LIYAH GROUP à Abu Dhabi, EAU' } },
  { year: '2025', label: { en: 'Launched LiAfrik with the full suite of SaaS platforms in Dubai, UAE', fr: 'Lancement de LiAfrik avec la suite complète de plateformes SaaS à Dubaï, EAU' } },
];

const education = [
  { icon: 'grad', title: { en: 'Master in E-commerce', fr: 'Master en E-commerce' }, school: 'Learners Point Academy Intl, Dubai', distinction: { en: 'With distinction', fr: 'Avec distinction' } },
  { icon: 'code', title: { en: 'Full Stack Web Dev / SaaS Expert Diploma', fr: 'Diplôme Full Stack Web Dev / Expert SaaS' }, school: 'Learners Point Academy Intl, Dubai', distinction: { en: 'With distinction', fr: 'Avec distinction' } },
  { icon: 'award', title: { en: 'Complementary Diplomas', fr: 'Diplômes Complémentaires' }, school: 'Dubai Knowledge Academy (DKA)', distinction: { en: '', fr: '' } },
];

export default function AboutPage() {
  const { t, lang } = useLang();
  const ref = useScrollAnimation();
  const ref2 = useScrollAnimation();
  const ref3 = useScrollAnimation();
  const ref4 = useScrollAnimation();
  const ref5 = useScrollAnimation();

  return (
    <>
      <SEO
        title={lang === 'FR' ? 'À Propos — Vincent Nogue, Fondateur de LIYAH GROUP' : 'About — Vincent Nogue, Founder of LIYAH GROUP'}
        description={lang === 'FR'
          ? 'Vincent Nogue, Fondateur de LIYAH GROUP. Designer graphiste devenu expert e-commerce et SaaS. Parcours du Cameroun aux EAU, Master en E-commerce et Full Stack Web Dev.'
          : 'Vincent Nogue, Founder of LIYAH GROUP. From graphic designer to e-commerce and SaaS expert. Journey from Cameroon to UAE, Master in E-commerce and Full Stack Web Dev.'}
        path="/about"
      />

      {/* Simplified hero — single line, no duplicate content */}
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-90" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-1/4 left-8 w-32 h-32 rounded-full bg-secondary-600/15 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-8 w-40 h-40 rounded-full bg-accent-500/10 blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="animate-on-scroll text-2xl md:text-3xl font-bold text-white tracking-tight">
            {lang === 'FR' ? 'Vincent Nogue, Fondateur de LIYAH GROUP' : 'Vincent Nogue, Founder of LIYAH GROUP'}
          </h1>
        </div>
      </section>

      {/* Bio + Photo */}
      <section ref={ref} className="relative py-20 md:py-28 bg-white overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-secondary-50 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent-50 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="animate-on-scroll relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-200 group max-w-md mx-auto md:mx-0">
              <img src="/assets/images/IMG_6290.JPG" alt="Vincent Nogue, Founder of LIYAH GROUP" loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
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

      {/* Timeline / Journey */}
      <section ref={ref2} className="relative py-20 md:py-28 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.05),transparent_60%)]" />
        <div className="absolute inset-0 tech-grid-bg opacity-10" />
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-secondary-600/10 blur-[100px] rounded-full animate-pulse-slow" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="animate-on-scroll section-label text-secondary-400">{lang === 'FR' ? 'PARCOURS' : 'JOURNEY'}</span>
            <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl md:text-4xl font-bold tracking-tight text-white">
              {lang === 'FR' ? 'De Graphiste à SaaS' : 'From Designer to SaaS'}
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-secondary-600/40 to-transparent md:-translate-x-1/2" />

            <div className="space-y-8 md:space-y-12">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`animate-on-scroll animate-on-scroll-delay-${Math.min(i + 1, 4)} relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Dot */}
                  <div className="relative z-10 flex-shrink-0 md:w-1/2 md:flex md:justify-center">
                    <div className="w-10 h-10 rounded-full bg-secondary-600 flex items-center justify-center text-white text-xs font-bold md:absolute md:left-1/2 md:-translate-x-1/2">
                      {item.year.slice(2)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="card bg-slate-800/50 border border-slate-700 p-5 rounded-xl">
                      <p className="text-secondary-400 text-sm font-bold mb-1">{item.year}</p>
                      <p className="text-slate-300 text-sm leading-relaxed">{item.label[lang === 'FR' ? 'fr' : 'en']}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section ref={ref3} className="relative py-20 md:py-28 bg-slate-50 overflow-hidden">
        <div className="absolute top-10 left-10 w-48 h-48 bg-accent-50 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary-50 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="animate-on-scroll section-label">{lang === 'FR' ? 'FORMATION' : 'EDUCATION'}</span>
            <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              {lang === 'FR' ? 'Diplômes & Certifications' : 'Degrees & Certifications'}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {education.map((item, i) => (
              <div key={i} className={`animate-on-scroll animate-on-scroll-delay-${i + 1} card card-hover p-7 text-center`}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary-500 to-accent-500 flex items-center justify-center mx-auto mb-5">
                  {item.icon === 'grad' && <GraduationCap size={24} className="text-white" strokeWidth={1.5} />}
                  {item.icon === 'code' && <Briefcase size={24} className="text-white" strokeWidth={1.5} />}
                  {item.icon === 'award' && <Award size={24} className="text-white" strokeWidth={1.5} />}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-tight">{item.title[lang === 'FR' ? 'fr' : 'en']}</h3>
                <p className="text-slate-600 text-sm mb-2">{item.school}</p>
                {item.distinction[lang === 'FR' ? 'fr' : 'en'] && (
                  <p className="text-secondary-600 text-xs font-semibold uppercase tracking-wide">{item.distinction[lang === 'FR' ? 'fr' : 'en']}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={ref4} className="relative py-20 md:py-28 bg-slate-900 overflow-hidden">
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
        </div>
      </section>

      {/* CTA */}
      <section ref={ref5} className="relative py-20 md:py-28 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.06),transparent_70%)]" />
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-secondary-600/15 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-accent-500/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="animate-on-scroll section-label text-secondary-400 justify-center">{t.businessBuilder.label}</span>
          <p className="animate-on-scroll animate-on-scroll-delay-1 text-xl md:text-2xl leading-relaxed text-slate-900 text-balance font-medium">
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
