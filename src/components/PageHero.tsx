import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="relative pt-32 md:pt-40 pb-16 md:pb-20 bg-slate-900 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-90" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-8 w-32 h-32 rounded-full bg-secondary-600/15 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-8 w-40 h-40 rounded-full bg-accent-500/10 blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <span className="animate-on-scroll section-label text-secondary-400 justify-center">{label}</span>
        <h1 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white tracking-tight text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="animate-on-scroll animate-on-scroll-delay-2 mt-6 text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
