import { Link } from 'react-router-dom';
import {
  ArrowRight, Star, Layers, DollarSign, Target, Cloud, Smartphone,
  Zap, Code2, Brain, Lock, TrendingUp, Globe2,
  ShoppingBag, Megaphone, Building2, HeartPulse, GraduationCap, Plane,
  Rocket, LineChart, Lightbulb, Clock, MessageCircle,
} from 'lucide-react';
import { useState, useRef, useEffect, useCallback } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';
import { useTilt } from '@/hooks/useTilt';
import { useLang } from '@/i18n/LangContext';
import TrustpilotBadge from '@/components/TrustpilotBadge';
import {
  Users, ScanLine, ShoppingCart, Store, MessageSquare, PiggyBank,
  Briefcase, Sparkles, Boxes,
} from 'lucide-react';
import { locations } from '@/data/locations';
import { saasProducts, tr as trSaaS } from '@/data/saasProducts';

// ─── Particle Canvas ─────────────────────────────────────────────────────────

interface Particle {
  x: number; y: number; vx: number; vy: number;
  radius: number; alpha: number; alphaDir: number;
  color: string; pulse: number; pulseSpeed: number;
}

const BLUE = 'rgba(37,99,235,';
const CYAN = 'rgba(6,182,212,';
const WHITE = 'rgba(255,255,255,';
const PALETTE = [BLUE, CYAN, WHITE];

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const particles = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const ripples = useRef<{ x: number; y: number; r: number; alpha: number }[]>([]);

  const makeParticle = useCallback((W: number, H: number): Particle => {
    const col = PALETTE[Math.floor(Math.random() * PALETTE.length)];
    return {
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      radius: 1 + Math.random() * 2.5,
      alpha: 0.2 + Math.random() * 0.5,
      alphaDir: Math.random() > 0.5 ? 1 : -1,
      color: col, pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.01 + Math.random() * 0.02,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0;
    const COUNT = () => Math.min(180, Math.floor((W * H) / 6000));

    const resize = () => {
      W = canvas.offsetWidth; H = canvas.offsetHeight;
      canvas.width = W; canvas.height = H;
      particles.current = Array.from({ length: COUNT() }, () => makeParticle(W, H));
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => { mouse.current = { x: -9999, y: -9999 }; };
    const onClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      ripples.current.push({ x: e.clientX - rect.left, y: e.clientY - rect.top, r: 0, alpha: 0.5 });
      for (let i = 0; i < 8; i++) {
        const p = makeParticle(W, H);
        p.x = e.clientX - rect.left; p.y = e.clientY - rect.top;
        const angle = (i / 8) * Math.PI * 2;
        p.vx = Math.cos(angle) * (1 + Math.random() * 2);
        p.vy = Math.sin(angle) * (1 + Math.random() * 2);
        p.alpha = 0.9;
        particles.current.push(p);
      }
    };
    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', onLeave);
    canvas.addEventListener('click', onClick);

    const MAX_DIST = 120, MOUSE_DIST = 100;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ripples.current = ripples.current.filter((r) => r.alpha > 0);
      for (const r of ripples.current) {
        ctx.beginPath(); ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(37,99,235,${r.alpha})`; ctx.lineWidth = 1.5; ctx.stroke();
        r.r += 3; r.alpha -= 0.02;
      }
      const mx = mouse.current.x, my = mouse.current.y;
      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.pulse += p.pulseSpeed; p.alpha += 0.005 * p.alphaDir;
        if (p.alpha > 0.85 || p.alpha < 0.1) p.alphaDir *= -1;
        const dx = mx - p.x, dy = my - p.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < MOUSE_DIST && d > 0) {
          const force = (1 - d / MOUSE_DIST) * 0.06;
          p.vx += (dx / d) * force; p.vy += (dy / d) * force;
        }
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 2) { p.vx = (p.vx / speed) * 2; p.vy = (p.vy / speed) * 2; }
        p.vx *= 0.99; p.vy *= 0.99; p.x += p.vx; p.y += p.vy;
        if (p.x < -10) p.x = W + 10; if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10; if (p.y > H + 10) p.y = -10;
        if (p.alpha <= 0.01 && particles.current.length > COUNT()) { particles.current.splice(i, 1); continue; }
        const r = p.radius * (1 + 0.3 * Math.sin(p.pulse));
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 3);
        grd.addColorStop(0, `${p.color}${p.alpha})`); grd.addColorStop(1, `${p.color}0)`);
        ctx.beginPath(); ctx.arc(p.x, p.y, r * 3, 0, Math.PI * 2); ctx.fillStyle = grd; ctx.fill();
        ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.min(p.alpha + 0.2, 1)})`; ctx.fill();
      }
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const a = particles.current[i], b = particles.current[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const strength = (1 - dist / MAX_DIST) * 0.2;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(37,99,235,${strength})`; ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      }
      if (mx > 0) {
        const grd = ctx.createRadialGradient(mx, my, 0, mx, my, 140);
        grd.addColorStop(0, 'rgba(37,99,235,0.06)'); grd.addColorStop(1, 'rgba(37,99,235,0)');
        ctx.fillStyle = grd; ctx.beginPath(); ctx.arc(mx, my, 140, 0, Math.PI * 2); ctx.fill();
      }
      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);
    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
      canvas.removeEventListener('click', onClick);
      cancelAnimationFrame(rafRef.current);
    };
  }, [makeParticle]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" style={{ cursor: 'crosshair' }} />;
}

// ─── Tilt Card wrapper ──────────────────────────────────────────────────────

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const { ref, style, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>();
  return (
    <div ref={ref} style={style} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className={className}>
      {children}
    </div>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function HomeHero() {
  const { t } = useLang();
  const keywords = t.hero.keywords.split(' + ');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-24 md:pt-28 pb-24">
      <div className="absolute inset-0 animated-gradient z-0" />
      <ParticleCanvas />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_30%,rgba(15,23,42,0.7)_100%)] z-[1] pointer-events-none" />
      <div className="absolute top-1/4 left-4 w-24 h-24 md:w-40 md:h-40 rounded-full bg-secondary-600/15 blur-3xl animate-float z-[1] pointer-events-none" />
      <div className="absolute bottom-1/4 right-4 w-32 h-32 md:w-48 md:h-48 rounded-full bg-accent-500/10 blur-3xl animate-float z-[1] pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pointer-events-none">
        <div className="animate-on-scroll flex items-center justify-center gap-2 mb-8">
          <div className="flex items-center gap-2 border border-secondary-600/30 bg-secondary-600/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <Star size={12} className="text-secondary-400 fill-secondary-400" />
            <span className="text-xs uppercase tracking-widest text-slate-100 font-semibold">{t.hero.trustBadge}</span>
          </div>
        </div>
        <h1 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white tracking-tight text-balance drop-shadow-[0_2px_16px_rgba(0,0,0,0.8)]">
          {t.hero.title} <span className="text-shimmer">{t.hero.titleHighlight}</span>
        </h1>
        <p className="animate-on-scroll animate-on-scroll-delay-2 mt-8 text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)]">
          {t.hero.subtitle}
        </p>
        <div className="animate-on-scroll animate-on-scroll-delay-3 mt-10 flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
          <Link to="/services" className="btn-primary flex items-center justify-center gap-2 group">
            {t.hero.ctaExplore}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/contact" className="btn-outline bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white flex items-center justify-center">
            {t.hero.ctaRequest}
          </Link>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-1 pointer-events-none">
        <div className="w-5 h-8 border-2 border-slate-500 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-secondary-400 rounded-full animate-scroll-indicator" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-slate-900/60 backdrop-blur-sm py-3 overflow-hidden pointer-events-none">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...keywords, ...keywords, ...keywords].map((kw, i) => (
            <span key={i} className="flex items-center gap-3 px-6 text-xs uppercase tracking-widest text-slate-300 font-medium">
              {kw} <span className="text-secondary-500/40">+</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Trust Bar ────────────────────────────────────────────────────────────────

function TrustBar() {
  const { t } = useLang();
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-12 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <p className="animate-on-scroll text-center text-xs uppercase tracking-widest text-slate-400 font-semibold mb-6">{t.techEcosystem.label}</p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {t.techEcosystem.platforms.map((p, i) => (
            <span key={p} className={`animate-on-scroll animate-on-scroll-delay-${i + 1} text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors cursor-default`}>
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About Summary ────────────────────────────────────────────────────────────

function AboutSummary() {
  const { t } = useLang();
  const ref = useScrollAnimation();

  return (
    <section id="about" ref={ref} className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-50 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div className="animate-on-scroll relative">
          <div className="relative aspect-[4/5] overflow-hidden bg-slate-200 rounded-2xl group max-w-sm mx-auto md:mx-0">
            <img src="/assets/images/IMG_6290.JPG" alt="Vincent Nogue, Founder of LIYAH GROUP." loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
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
          <p className="animate-on-scroll animate-on-scroll-delay-2 mt-6 text-slate-600 leading-relaxed text-sm md:text-base line-clamp-4">
            {t.about.body}
          </p>
          <Link to="/about" className="animate-on-scroll animate-on-scroll-delay-3 mt-8 inline-flex items-center gap-2 text-sm font-semibold text-secondary-700 hover:text-secondary-800 transition-colors duration-200 group">
            {t.about.cta}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Services Summary ─────────────────────────────────────────────────────────

const serviceIcons = [Layers, DollarSign, Target];

function ServicesSummary() {
  const { t } = useLang();
  const ref = useScrollAnimation();

  return (
    <section id="services" ref={ref} className="relative py-20 md:py-32 bg-slate-50 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary-600/30 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="animate-on-scroll section-label">{t.engines.label}</span>
          <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            {t.engines.title}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {t.engines.items.map((s, i) => {
            const Icon = serviceIcons[i] ?? Layers;
            return (
              <TiltCard key={s.name} className={`animate-on-scroll animate-on-scroll-delay-${i + 1} card-glow group card card-hover p-8`}>
                <div className="w-14 h-14 rounded-xl bg-secondary-50 flex items-center justify-center mb-6 group-hover:bg-secondary-600 transition-colors duration-500">
                  <Icon size={26} className="text-secondary-600 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <p className="text-secondary-600 text-xs uppercase tracking-widest font-bold mb-2">{s.name}</p>
                <h3 className="text-lg font-bold text-slate-900 mb-4 leading-snug">{s.subtitle}</h3>
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">{s.description}</p>
                <Link to="/services" className="mt-6 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-secondary-600 font-bold hover:gap-2 transition-all">
                  Learn more <ArrowRight size={12} />
                </Link>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Solutions ───────────────────────────────────────────────────────────────

const solutionIcons = [Code2, ShoppingBag, Megaphone, Brain];

function SolutionsSection() {
  const { t } = useLang();
  const ref = useScrollAnimation();
  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-10 right-10 w-64 h-64 bg-accent-50 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="animate-on-scroll section-label">{t.solutions.label}</span>
          <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            {t.solutions.title}
          </h2>
          <p className="animate-on-scroll animate-on-scroll-delay-2 mt-4 text-slate-600 text-sm md:text-base">
            {t.solutions.subtitle}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.solutions.items.map((s, i) => {
            const Icon = solutionIcons[i] ?? Code2;
            return (
              <TiltCard key={s.title} className={`animate-on-scroll animate-on-scroll-delay-${i + 1} card-glow group card card-hover p-7`}>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary-600 to-accent-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                  <Icon size={22} className="text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Industries ──────────────────────────────────────────────────────────────

const industryIcons = [ShoppingBag, TrendingUp, Building2, HeartPulse, GraduationCap, Plane, Globe2, Megaphone];

function IndustriesSection() {
  const { t } = useLang();
  const ref = useScrollAnimation();
  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-slate-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="animate-on-scroll section-label">{t.industries.label}</span>
          <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            {t.industries.title}
          </h2>
          <p className="animate-on-scroll animate-on-scroll-delay-2 mt-4 text-slate-600 text-sm md:text-base">
            {t.industries.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {t.industries.items.map((name, i) => {
            const Icon = industryIcons[i] ?? Globe2;
            return (
              <div key={name} className={`animate-on-scroll animate-on-scroll-delay-${Math.min(i + 1, 4)} group flex flex-col items-center justify-center text-center p-6 card card-hover`}>
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4 group-hover:bg-secondary-600 transition-colors duration-500">
                  <Icon size={22} className="text-slate-600 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <p className="text-sm font-semibold text-slate-700">{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Portfolio Preview ────────────────────────────────────────────────────────

function PortfolioPreview() {
  const { t } = useLang();
  const ref = useScrollAnimation();
  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="animate-on-scroll section-label">{t.portfolio.label}</span>
          <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            {t.portfolio.title}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {t.portfolio.items.map((p, i) => (
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
        <div className="text-center mt-12">
          <Link to="/projects" className="btn-outline inline-flex items-center gap-2 group">
            {t.portfolio.viewAll} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Technologies ─────────────────────────────────────────────────────────────

const techIcons = [Code2, Cloud, Smartphone, Lock, Zap, Brain];

function TechnologiesSection() {
  const { t } = useLang();
  const ref = useScrollAnimation();
  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.05),transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="animate-on-scroll section-label text-secondary-400">{t.technologies.label}</span>
          <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl md:text-5xl font-bold tracking-tight text-white">
            {t.technologies.title}
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {t.technologies.items.map((tech, i) => {
            const Icon = techIcons[i] ?? Code2;
            return (
              <div key={tech} className={`animate-on-scroll animate-on-scroll-delay-${Math.min(i + 1, 4)} group flex flex-col items-center text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-secondary-600 hover:bg-slate-800 transition-all duration-300`}>
                <Icon size={28} className="text-secondary-400 mb-3 group-hover:text-accent-400 transition-colors duration-300" strokeWidth={1.5} />
                <p className="text-xs font-semibold text-slate-300">{tech}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Tech Ecosystem ───────────────────────────────────────────────────────────

function TechEcosystemSection() {
  const { t } = useLang();
  const ref = useScrollAnimation();
  return (
    <section ref={ref} className="relative py-16 md:py-20 bg-white border-y border-slate-200 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="animate-on-scroll section-label">{t.techEcosystem.label}</span>
          <h3 className="animate-on-scroll animate-on-scroll-delay-1 text-xl md:text-2xl font-bold text-slate-900 mb-3">{t.techEcosystem.title}</h3>
          <p className="animate-on-scroll animate-on-scroll-delay-2 text-slate-500 text-sm max-w-2xl mx-auto">{t.techEcosystem.subtitle}</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {t.techEcosystem.platforms.map((p, i) => (
            <div key={p} className={`animate-on-scroll animate-on-scroll-delay-${Math.min(i + 1, 4)} group flex items-center justify-center`}>
              <span className="text-lg md:text-xl font-bold text-slate-300 hover:text-secondary-600 transition-colors duration-300 cursor-default tracking-tight">
                {p}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Process ──────────────────────────────────────────────────────────────────

const processIcons = [Lightbulb, Rocket, Code2, LineChart];

function ProcessSection() {
  const { t } = useLang();
  const ref = useScrollAnimation();
  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-slate-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="animate-on-scroll section-label">{t.process.label}</span>
          <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            {t.process.title}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {t.process.steps.map((step, i) => {
            const Icon = processIcons[i] ?? Lightbulb;
            return (
              <div key={step.num} className={`animate-on-scroll animate-on-scroll-delay-${i + 1} relative`}>
                <div className="card card-hover p-7 h-full">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary-600 to-accent-500 flex items-center justify-center">
                      <Icon size={22} className="text-white" strokeWidth={1.5} />
                    </div>
                    <span className="text-3xl font-bold text-slate-200">{step.num}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < t.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-slate-300" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose Us ────────────────────────────────────────────────────────────

function WhyChooseUs() {
  const { t } = useLang();
  const ref = useScrollAnimation();
  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-10 left-10 w-64 h-64 bg-secondary-50 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="animate-on-scroll section-label">{t.whyChooseUs.label}</span>
          <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
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
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────

function StatItem({ end, prefix, suffix, label }: { end: number; prefix: string; suffix: string; label: string }) {
  const { ref, value } = useCountUp({ end, duration: 2000 });
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="animate-on-scroll flex flex-col items-center text-center">
      <span className="text-4xl md:text-6xl font-bold text-secondary-500">{prefix}{value}{suffix}</span>
      <span className="text-slate-400 text-xs md:text-sm uppercase tracking-widest font-medium mt-2">{label}</span>
    </div>
  );
}

function StatsSection() {
  const { t } = useLang();
  return (
    <section className="relative py-16 md:py-20 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.06),transparent_70%)]" />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          <StatItem end={15} prefix="+" suffix="" label={t.stats[0].label} />
          <StatItem end={5} prefix="+" suffix="K" label={t.stats[1].label} />
          <StatItem end={11} prefix="+" suffix="K" label={t.stats[2].label} />
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ──────────────────────────────────────────────────────────────

function TestimonialsSection() {
  const { t } = useLang();
  const ref = useScrollAnimation();
  const featured = t.reviews.reviews.slice(0, 3);

  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="animate-on-scroll section-label">{t.reviews.label}</span>
          <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">{t.reviews.title}</h2>
          <div className="animate-on-scroll animate-on-scroll-delay-2 flex flex-col items-center">
            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold text-secondary-600">4.9</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (<Star key={i} size={18} className="text-secondary-500 fill-secondary-500" />))}
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-2 uppercase tracking-wide">{t.reviews.ratingText}</p>
            <div className="mt-4">
              <TrustpilotBadge variant="light" size="md" showText={false} />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((r, i) => (
            <div key={i} className={`animate-on-scroll animate-on-scroll-delay-${i + 1} card-glow group card card-hover p-7 flex flex-col`}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (<Star key={j} size={14} className="text-secondary-500 fill-secondary-500" />))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow italic line-clamp-4">"{r.quote}"</p>
              <div className="mt-6 pt-4 border-t border-slate-200">
                <p className="font-bold text-slate-900 text-sm">{r.name}</p>
                <p className="text-xs text-slate-500">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ Preview ──────────────────────────────────────────────────────────────

function FaqPreview() {
  const { t } = useLang();
  const ref = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = t.faq.items.slice(0, 4);

  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent-50 rounded-full blur-3xl" />
      <div className="relative max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="animate-on-scroll section-label">{t.faq.label}</span>
          <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            {t.faq.title}
          </h2>
        </div>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className={`animate-on-scroll animate-on-scroll-delay-${Math.min(i + 1, 4)} card overflow-hidden`}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left group">
                <span className={`text-sm md:text-base font-semibold transition-colors ${openIndex === i ? 'text-secondary-700' : 'text-slate-800 group-hover:text-secondary-700'}`}>
                  {item.question}
                </span>
                <span className={`flex-shrink-0 w-7 h-7 rounded-lg border flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'bg-secondary-600 border-secondary-600 text-white rotate-180' : 'border-slate-300 text-slate-500'}`}>
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>
              <div className="overflow-hidden transition-all duration-500" style={{ maxHeight: openIndex === i ? '500px' : '0', opacity: openIndex === i ? 1 : 0 }}>
                <div className="px-5 pb-5">
                  <p className="text-slate-600 text-sm leading-relaxed">{item.intro}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/courses" className="inline-flex items-center gap-2 text-sm font-semibold text-secondary-700 hover:text-secondary-800 transition-colors group">
            {t.faq.title} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Products (LiAfrik) ──────────────────────────────────────────────────────

const moduleIcons = [Users, ScanLine, ShoppingCart, Store, MessageSquare, PiggyBank, GraduationCap, Briefcase, Sparkles, Boxes];

function ProductsSection() {
  const { t } = useLang();
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary-50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-50 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="animate-on-scroll section-label">{t.products.label}</span>
          <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">
            {t.products.title}
          </h2>
          <p className="animate-on-scroll animate-on-scroll-delay-2 mt-4 text-slate-600 text-sm md:text-base leading-relaxed">
            {t.products.subtitle}
          </p>
        </div>

        <div className="animate-on-scroll animate-on-scroll-delay-3 relative max-w-4xl mx-auto mb-16 p-8 md:p-10 rounded-2xl bg-gradient-to-br from-slate-900 via-secondary-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.1),transparent_60%)]" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary-500 to-accent-500 flex items-center justify-center">
              <Boxes size={30} className="text-white" strokeWidth={1.5} />
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{t.products.flagshipName}</h3>
              <p className="text-accent-400 text-sm font-semibold mb-3">{t.products.flagshipTagline}</p>
              <p className="text-slate-300 text-sm leading-relaxed">{t.products.flagshipDesc}</p>
            </div>
          </div>
        </div>

        <p className="animate-on-scroll text-center text-xs uppercase tracking-widest text-slate-400 font-semibold mb-8">{t.products.modulesLabel}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {t.products.modules.map((m, i) => {
            const Icon = moduleIcons[i] ?? Boxes;
            return (
              <div key={m.name} className={`animate-on-scroll animate-on-scroll-delay-${Math.min(i + 1, 4)} group card card-hover p-5 text-center`}>
                <div className="w-11 h-11 rounded-xl bg-secondary-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-600 transition-colors duration-500">
                  <Icon size={20} className="text-secondary-600 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-2">{m.name}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{m.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
            {t.products.cta}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Where We Work ────────────────────────────────────────────────────────────

function WhereWeWorkSection() {
  const { t, lang } = useLang();
  const ref = useScrollAnimation();

  const featuredLocations = [
    { slug: 'e-commerce-cameroun', country: 'Cameroun', lang: 'fr' },
    { slug: 'digital-agency-nigeria', country: 'Nigeria', lang: 'en' },
    { slug: 'digital-agency-united-arab-emirates', country: 'UAE', lang: 'en' },
    { slug: 'agence-digitale-cote-divoire', country: 'Côte d\'Ivoire', lang: 'fr' },
    { slug: 'ecommerce-agency-kenya', country: 'Kenya', lang: 'en' },
    { slug: 'creation-site-web-senegal', country: 'Sénégal', lang: 'fr' },
  ];

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-slate-50 overflow-hidden">
      <div className="absolute top-10 left-10 w-64 h-64 bg-accent-50 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="animate-on-scroll section-label">{lang === 'FR' ? 'OÙ NOUS OPÉRONS' : 'WHERE WE WORK'}</span>
          <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">
            {lang === 'FR' ? 'Afrique, EAU & Marché Global' : 'Africa, UAE & Global Markets'}
          </h2>
          <p className="animate-on-scroll animate-on-scroll-delay-2 mt-4 text-slate-600 text-sm md:text-base leading-relaxed">
            {lang === 'FR'
              ? 'Nous construisons des écosystèmes digitaux pour les entreprises à travers l\'Afrique francophone et anglophone, les EAU, et au-delà.'
              : 'We build digital ecosystems for businesses across Francophone and Anglophone Africa, the UAE, and beyond.'}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredLocations.map((loc, i) => (
            <Link
              key={loc.slug}
              to={`/${loc.lang}/${loc.slug}`}
              className={`animate-on-scroll animate-on-scroll-delay-${Math.min(i + 1, 4)} card card-hover p-5 text-center group`}
            >
              <Globe2 size={28} className="text-secondary-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              <p className="text-sm font-bold text-slate-900 group-hover:text-secondary-700 transition-colors">{loc.country}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/contact" className="btn-outline inline-flex items-center gap-2 group" data-cta="where-we-work-contact">
            {lang === 'FR' ? 'Voir tous les pays' : 'View all countries'}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Insights Preview ─────────────────────────────────────────────────────────

function InsightsSection() {
  const { t, lang } = useLang();
  const ref = useScrollAnimation();

  const images = [
    'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];
  const slugs = ['why-your-website-is-losing-clients', 'building-ecommerce-that-scales', 'digital-ecosystem-advantage'];
  const readTimes = ['5 min read', '7 min read', '6 min read'];

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-50 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="animate-on-scroll section-label">{t.blog.label}</span>
            <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl md:text-4xl font-bold tracking-tight text-slate-900 text-balance">
              {lang === 'FR' ? 'Insights & Stratégie' : 'Insights & Strategy'}
            </h2>
          </div>
          <Link to="/blog" className="animate-on-scroll animate-on-scroll-delay-2 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-secondary-600 hover:text-secondary-700 transition-colors group">
            {lang === 'FR' ? 'Tous les articles' : 'All articles'}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.blog.articles.map((a, i) => (
            <article key={slugs[i]} className={`animate-on-scroll animate-on-scroll-delay-${i + 1} group`}>
              <Link to={`/blog/${slugs[i]}`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200 mb-5">
                  <img src={images[i]} alt={a.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-4 left-4 bg-white/90 text-secondary-700 text-xs uppercase tracking-widest px-3 py-1 font-semibold rounded-full backdrop-blur-sm">{a.category}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                  <Clock size={12} />
                  <span>{readTimes[i]}</span>
                </div>
                <h3 className="text-lg font-bold leading-snug mb-4 text-slate-900 group-hover:text-secondary-700 transition-colors duration-300">{a.title}</h3>
                <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-slate-500 group-hover:text-secondary-600 transition-colors font-bold">
                  {t.blog.readMore} <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Business Diagnostic CTA ──────────────────────────────────────────────────

function DiagnosticCTASection() {
  const { lang } = useLang();
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.1),transparent_60%)]" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="animate-on-scroll w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary-500 to-accent-500 flex items-center justify-center mx-auto mb-8">
          <Zap size={30} className="text-white" strokeWidth={1.5} />
        </div>
        <span className="animate-on-scroll section-label text-secondary-400 justify-center">{lang === 'FR' ? 'DIAGNOSTIC BUSINESS' : 'BUSINESS DIAGNOSTIC'}</span>
        <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 text-balance">
          {lang === 'FR' ? 'Votre Business est-il Prêt pour le Digital ?' : 'Is Your Business Ready for Digital?'}
        </h2>
        <p className="animate-on-scroll animate-on-scroll-delay-2 text-slate-300 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          {lang === 'FR'
            ? 'Réservez un appel stratégique gratuit. Nous analyserons vos systèmes actuels et identifierons les opportunités de croissance digitale pour votre entreprise.'
            : 'Book a free strategy call. We\'ll analyze your current systems and identify digital growth opportunities for your business.'}
        </p>
        <div className="animate-on-scroll animate-on-scroll-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group" data-cta="diagnostic-book-call">
            {lang === 'FR' ? 'Réserver mon diagnostic' : 'Book my diagnostic'}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={`https://wa.me/971503857203?text=${encodeURIComponent(
              lang === 'FR'
                ? 'Bonjour LIYAH GROUP, je souhaite un diagnostic business gratuit.'
                : 'Hello LIYAH GROUP, I\'d like a free business diagnostic.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="diagnostic-whatsapp"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTA() {
  const { t } = useLang();
  const ref = useScrollAnimation();

  return (
    <section id="contact" ref={ref} className="relative py-24 md:py-32 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08),transparent_70%)]" />
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-secondary-600/15 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-accent-500/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <span className="animate-on-scroll section-label text-secondary-400 justify-center">{t.cta.label}</span>
        <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-white tracking-tight text-balance">
          {t.cta.title}
        </h2>
        <p className="animate-on-scroll animate-on-scroll-delay-2 text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
          {t.cta.body}
        </p>
        <p className="animate-on-scroll animate-on-scroll-delay-3 mt-6 text-accent-400 font-semibold text-sm md:text-base">{t.cta.highlight}</p>
        <Link to="/contact" className="animate-on-scroll animate-on-scroll-delay-4 mt-10 inline-block btn-primary animate-pulse-glow">
          {t.cta.cta}
        </Link>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <HomeHero />
      <TrustBar />
      <AboutSummary />
      <ServicesSummary />
      <SolutionsSection />
      <IndustriesSection />
      <PortfolioPreview />
      <TechnologiesSection />
      <TechEcosystemSection />
      <ProductsSection />
      <WhereWeWorkSection />
      <ProcessSection />
      <WhyChooseUs />
      <StatsSection />
      <TestimonialsSection />
      <FaqPreview />
      <InsightsSection />
      <DiagnosticCTASection />
      <FinalCTA />
    </>
  );
}
