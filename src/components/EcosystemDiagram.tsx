import { useState } from 'react';
import {
  Boxes, GraduationCap, ScanLine, HeartPulse, Users, Stethoscope,
  Contact, Calculator, School, Building2, PiggyBank, ShoppingBag,
} from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { saasProducts } from '@/data/saasProducts';

const moduleIcons: Record<string, typeof Boxes> = {
  'liafrik-digital-skills': GraduationCap,
  'liafrik-pos-commerce': ScanLine,
  'liafrik-mafo-la-reine': HeartPulse,
  'liafrik-faka-hr': Users,
  'liafrik-health': Stethoscope,
  'liafrik-crm': Contact,
  'liafrik-libooks': Calculator,
  'liafrik-klasoo': School,
  'liafrik-bailly': Building2,
  'liafrik-liafund': PiggyBank,
  'liafrik-os': ShoppingBag,
};

const moduleAccents: Record<string, string> = {
  'liafrik-digital-skills': 'from-violet-500 to-purple-600',
  'liafrik-pos-commerce': 'from-orange-500 to-amber-600',
  'liafrik-mafo-la-reine': 'from-pink-500 to-rose-600',
  'liafrik-faka-hr': 'from-blue-500 to-indigo-600',
  'liafrik-health': 'from-emerald-500 to-teal-600',
  'liafrik-crm': 'from-sky-500 to-blue-600',
  'liafrik-libooks': 'from-green-500 to-emerald-600',
  'liafrik-klasoo': 'from-amber-500 to-orange-600',
  'liafrik-bailly': 'from-stone-500 to-slate-600',
  'liafrik-liafund': 'from-yellow-500 to-amber-600',
  'liafrik-os': 'from-cyan-500 to-blue-600',
};

export default function EcosystemDiagram() {
  const { lang } = useLang();
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const modules = saasProducts.filter((p) => p.isModule);

  const categories = lang === 'FR'
    ? ['Commerce', 'RH', 'Santé', 'Finance', 'Éducation', 'Immobilier', 'Communauté', 'E-Commerce', 'CRM', 'Formation']
    : ['Commerce', 'HR', 'Health', 'Finance', 'Education', 'Real Estate', 'Community', 'E-Commerce', 'CRM', 'Training'];

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Center hub */}
      <div className="relative flex items-center justify-center py-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 rounded-full bg-gradient-to-br from-secondary-600/10 to-accent-500/10 blur-2xl" />
        </div>

        {/* Connection rings */}
        <div className="absolute w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full border-2 border-dashed border-slate-200" />
        <div className="absolute w-[480px] h-[480px] md:w-[560px] md:h-[560px] rounded-full border border-slate-100" />

        {/* Center LiAfrik hub */}
        <div className="relative z-10 w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-secondary-600 to-accent-500 flex flex-col items-center justify-center shadow-2xl shadow-secondary-600/30 animate-pulse-glow">
          <Boxes size={32} className="text-white mb-1" strokeWidth={1.5} />
          <span className="text-white text-sm font-bold">LiAfrik</span>
          <span className="text-slate-200 text-[8px] uppercase tracking-widest">OS</span>
        </div>

        {/* Module nodes */}
        {modules.map((mod, i) => {
          const angle = (i / modules.length) * 2 * Math.PI - Math.PI / 2;
          const radius = 210;
          const mdRadius = 270;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const mdX = Math.cos(angle) * mdRadius;
          const mdY = Math.sin(angle) * mdRadius;
          const Icon = moduleIcons[mod.slug] ?? Boxes;
          const accent = moduleAccents[mod.slug] ?? 'from-secondary-500 to-accent-500';
          const isActive = activeModule === mod.slug;

          return (
            <button
              key={mod.slug}
              onClick={() => setActiveModule(isActive ? null : mod.slug)}
              className="absolute z-20 group"
              style={{
                transform: `translate(${x}px, ${y}px)`,
                left: '50%',
                top: '50%',
                marginLeft: '-36px',
                marginTop: '-36px',
              }}
            >
              {/* Connection line */}
              <div
                className="absolute top-1/2 left-1/2 w-[210px] h-px origin-left -translate-y-1/2 -translate-x-1/2"
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle * 180 / Math.PI + 90}deg)`,
                  width: `${radius}px`,
                }}
              >
                <div className={`w-full h-px transition-colors duration-300 ${isActive ? 'bg-secondary-500' : 'bg-slate-200'}`} />
              </div>

              {/* Node circle */}
              <div
                className={`w-[72px] h-[72px] rounded-2xl bg-gradient-to-br ${accent} flex flex-col items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 ${isActive ? 'ring-4 ring-secondary-300 scale-110' : ''}`}
              >
                <Icon size={22} className="text-white mb-0.5" strokeWidth={1.5} />
                <span className="text-white text-[8px] font-bold text-center px-1 leading-tight">{mod.name}</span>
              </div>

              {/* Tooltip on hover/active */}
              {(isActive) && (
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-48 bg-white border border-slate-200 rounded-xl shadow-xl p-3 z-30 animate-fade-in">
                  <p className="text-xs font-bold text-slate-900 mb-1">{mod.name}</p>
                  <p className="text-[10px] text-slate-500 leading-relaxed mb-2">
                    {lang === 'FR' ? mod.category.fr : mod.category.en}
                  </p>
                  <p className="text-[10px] text-slate-600 leading-relaxed">
                    {lang === 'FR' ? mod.valueProposition.fr : mod.valueProposition.en}
                  </p>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Category legend */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {modules.map((mod) => {
          const Icon = moduleIcons[mod.slug] ?? Boxes;
          const accent = moduleAccents[mod.slug] ?? 'from-secondary-500 to-accent-500';
          return (
            <button
              key={mod.slug}
              onClick={() => setActiveModule(activeModule === mod.slug ? null : mod.slug)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border ${
                activeModule === mod.slug
                  ? 'border-secondary-400 bg-secondary-50 text-secondary-700'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
              }`}
            >
              <div className={`w-4 h-4 rounded bg-gradient-to-br ${accent} flex items-center justify-center`}>
                <Icon size={9} className="text-white" strokeWidth={2} />
              </div>
              {mod.name}
            </button>
          );
        })}
      </div>

      {/* Description */}
      <p className="mt-8 text-center text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
        {lang === 'FR'
          ? 'Chaque module LiAfrik partage une couche de données unique. Votre CRM parle à votre POS, votre POS parle à votre comptabilité, et vos RH parlent à votre paie — sans intégrations à maintenir.'
          : 'Every LiAfrik module shares a single data layer. Your CRM talks to your POS, your POS talks to your accounting, and your HR talks to your payroll — without integrations to maintain.'}
      </p>
    </div>
  );
}
