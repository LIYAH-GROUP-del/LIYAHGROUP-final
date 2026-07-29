import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLang } from '@/i18n/LangContext';

function FaqCard({ faq, isOpen, onToggle }: { faq: { question: string; intro: string; listTitle?: string; items?: string[] }; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`card overflow-hidden transition-all duration-300 ${isOpen ? 'border-secondary-300 shadow-lg shadow-secondary-100/50' : ''}`}>
      <button onClick={onToggle} className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left group">
        <span className="flex items-center gap-3">
          <HelpCircle size={18} className={`flex-shrink-0 transition-colors duration-300 ${isOpen ? 'text-secondary-600' : 'text-slate-400 group-hover:text-secondary-600'}`} strokeWidth={1.5} />
          <span className={`text-sm md:text-base font-semibold transition-colors duration-200 ${isOpen ? 'text-secondary-700' : 'text-slate-800 group-hover:text-secondary-700'}`}>
            {faq.question}
          </span>
        </span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-lg border flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-secondary-600 border-secondary-600 text-white rotate-180' : 'border-slate-300 text-slate-500'}`}>
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <div className="overflow-hidden transition-all duration-500 ease-out" style={{ maxHeight: isOpen ? '1000px' : '0', opacity: isOpen ? 1 : 0 }}>
        <div className="px-5 md:px-6 pb-6 pl-11">
          <p className="text-slate-600 text-sm leading-relaxed">{faq.intro}</p>
          {faq.items && (
            <>
              <p className="text-secondary-600 text-xs uppercase tracking-widest mt-5 mb-3 font-bold">{faq.listTitle}</p>
              <ul className="space-y-2.5">
                {faq.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-secondary-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CoursesPage() {
  const { t } = useLang();
  const ref = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <PageHero label={t.header.courses} title={t.faq.title} subtitle={t.faq.subtitle} />

      <section ref={ref} className="relative py-20 md:py-28 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-secondary-50 blur-[120px] rounded-full" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {t.faq.items.map((faq, i) => (
              <div key={i} className={`animate-on-scroll animate-on-scroll-delay-${Math.min(i + 1, 4)}`}>
                <FaqCard faq={faq} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
