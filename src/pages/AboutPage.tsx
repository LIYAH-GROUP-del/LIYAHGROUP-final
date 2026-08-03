import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Award, Briefcase } from 'lucide-react';
import SEO from '@/components/SEO';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLang } from '@/i18n/LangContext';
import TrustpilotBadge from '@/components/TrustpilotBadge';

const timelineEN = [
  { year: '2012', text: 'Began career in digital as a Graphic Designer in Cameroon' },
  { year: '2015', text: 'Transitioned into e-commerce in Cameroon' },
  { year: '2019', text: 'Founded LIYAH GROUP, a web & digital agency in Cameroon' },
  { year: '2022', text: 'Restructured and expanded operations of LIYAH GROUP in Abu Dhabi, UAE' },
  { year: '2025', text: 'Launched LiAfrik with the full suite of SaaS platforms in Dubai, UAE' },
];
const timelineFR = [
  { year: '2012', text: 'Début de carrière dans le digital en tant que Graphiste au Cameroun' },
  { year: '2015', text: "Transition vers l'e-commerce au Cameroun" },
  { year: '2019', text: 'Fondation de LIYAH GROUP, agence web & digitale au Cameroun' },
  { year: '2022', text: 'Restructuration et expansion des opérations de LIYAH GROUP à Abu Dhabi, EAU' },
  { year: '2025', text: 'Lancement de LiAfrik avec la suite complète de plateformes SaaS à Dubaï, EAU' },
];

const educationEN = [
  { icon: 'grad', title: 'Master in E-commerce', school: 'Learners Point Academy Intl, Dubai', distinction: 'With distinction' },
  { icon: 'award', title: 'Full Stack Web Dev / SaaS Expert Diploma', school: 'Learners Point Academy Intl, Dubai', distinction: 'With distinction' },
  { icon: 'briefcase', title: 'Complementary Diplomas', school: 'Dubai Knowledge Academy (DKA)', distinction: '' },
];
const educationFR = [
  { icon: 'grad', title: 'Master en E-commerce', school: 'Learners Point Academy Intl, Dubai', distinction: 'Avec distinction' },
  { icon: 'award', title: 'Diplôme Full Stack Web Dev / Expert SaaS', school: 'Learners Point Academy Intl, Dubai', distinction: 'Avec distinction' },
  { icon: 'briefcase', title: 'Diplômes Complémentaires', school: 'Dubai Knowledge Academy (DKA)', distinction: '' },
];

export default function AboutPage() {
  const { t, lang } = useLang();
  const refBio = useScrollAnimation();
  const refJourney = useScrollAnimation();
  const refEducation = useScrollAnimation();
  const refBuilder = useScrollAnimation();

  const timeline = lang === 'FR' ? timelineFR : timelineEN;
  const education = lang === 'FR' ? educationFR : educationEN;

  return (
    <>
      <SEO
        title={lang === 'FR' ? 'À Propos — LIYAH GROUP' : 'About — LIYAH GROUP'}
        description={lang === 'FR' ? t.about.title : t.about.title}
        path="/about"
      />

      {/* Hero banner — visual only, no text */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 bg-slate-900 overflow-hidden">
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
      </section>

      {/* Bio + Photo — original structure */}
      <section ref={refBio} className="relative py-20 md:py-32 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-50 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="animate-on-scroll relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-slate-200 rounded-2xl group max-w-sm mx-auto md:mx-0">
              <img
                src="/assets/images/IMG_6290.JPG"
                alt="Vincent Nogue, Founder of LIYAH GROUP."
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-secondary-600 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-accent-500/40 rounded-2xl -z-10" />
          </div>

          <div>
            <span className="animate-on-scroll section-label">{t.about.label}</span>
            <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-slate-900 text-balance">
              {t.about.title}
            </h2>
            <p className="animate-on-scroll animate-on-scroll-delay-2 mt-6 text-slate-600 leading-relaxed text-sm md:text-base">
              {t.about.body}
            </p>
            <Link
              to="/contact"
              className="animate-on-scroll animate-on-scroll-delay-3 mt-8 inline-flex items-center gap-2 text-sm font-semibold text-secondary-700 hover:text-secondary-800 transition-colors duration-200 group"
            >
              {t.about.cta}
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <div className="animate-on-scroll animate-on-scroll-delay-3 mt-8">
              <TrustpilotBadge variant="light" size="md" />
            </div>
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section ref={refJourney} className="relative py-20 md:py-28 bg-slate-50 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-secondary-50 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-6">
          <h2 className="animate-on-scroll text-2xl font-bold text-slate-900 mb-10">
            {lang === 'FR' ? 'Le parcours' : 'The journey'}
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-3 top-3 bottom-3 w-px bg-secondary-200" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`animate-on-scroll animate-on-scroll-delay-${Math.min(i + 1, 4)} flex items-start gap-5`}
                >
                  {/* Dot */}
                  <div className="relative z-10 flex-shrink-0 mt-0.5">
                    <div className="w-6 h-6 rounded-full border-2 border-secondary-400 bg-white flex items-center justify-center">
                      {i === timeline.length - 1 && (
                        <div className="w-2 h-2 rounded-full bg-secondary-500" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <p className="text-secondary-600 font-bold text-base mb-1">{item.year}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section ref={refEducation} className="relative py-20 md:py-28 bg-white overflow-hidden">
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent-50 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-6">
          <h2 className="animate-on-scroll text-2xl font-bold text-slate-900 mb-10">
            {lang === 'FR' ? 'Formation' : 'Education'}
          </h2>

          <div className="space-y-6">
            {education.map((item, i) => (
              <div
                key={i}
                className={`animate-on-scroll animate-on-scroll-delay-${i + 1} flex items-start gap-5 p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:border-secondary-100 hover:bg-secondary-50/30 transition-colors duration-300`}
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-secondary-500">
                  {item.icon === 'grad' && <GraduationCap size={20} strokeWidth={1.5} />}
                  {item.icon === 'award' && <Award size={20} strokeWidth={1.5} />}
                  {item.icon === 'briefcase' && <Briefcase size={20} strokeWidth={1.5} />}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm leading-snug">{item.title}</p>
                  <p className="text-slate-500 text-sm mt-0.5">{item.school}</p>
                  {item.distinction && (
                    <span className="mt-2 inline-block text-xs text-secondary-600 border border-secondary-200 bg-secondary-50 rounded-full px-3 py-0.5">
                      {item.distinction}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Builder — original section */}
      <section ref={refBuilder} className="relative py-20 md:py-28 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.05),transparent_60%)]" />
        <div className="absolute inset-0 tech-grid-bg opacity-10" />
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-secondary-600/15 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-accent-500/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="animate-on-scroll section-label text-secondary-400 justify-center">{t.businessBuilder.label}</span>
          <p className="animate-on-scroll animate-on-scroll-delay-1 mt-6 text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            {t.businessBuilder.body}
          </p>
          <Link
            to="/contact"
            className="animate-on-scroll animate-on-scroll-delay-2 mt-10 inline-block btn-primary animate-pulse-glow"
          >
            {t.businessBuilder.cta}
          </Link>
        </div>
      </section>
    </>
  );
}
