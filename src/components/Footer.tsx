import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, FileText, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import TrustpilotBadge from '@/components/TrustpilotBadge';

const tiktokSvg = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.62c.3 0 .6.05.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V8.69a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.12z" />
  </svg>
);

const socialLinks = [
  { icon: <Facebook size={16} strokeWidth={1.5} />, href: 'https://www.facebook.com/share/18aFtK1ckw/?mibextid=wwXIfr', label: 'Facebook' },
  { icon: <Instagram size={16} strokeWidth={1.5} />, href: 'https://www.instagram.com/vincent_nogue?igsh=MWR2djd6bHV5bnM5Zg%3D%3D&utm_source=qr', label: 'Instagram' },
  { icon: tiktokSvg, href: 'https://www.tiktok.com/@vinctech', label: 'TikTok' },
  { icon: <Linkedin size={16} strokeWidth={1.5} />, href: 'https://www.linkedin.com/in/vincent-nogue-5a985a207', label: 'LinkedIn' },
  { icon: <MessageCircle size={16} strokeWidth={1.5} />, href: 'https://wa.me/971503857203', label: 'WhatsApp' },
];

export default function Footer() {
  const { t, lang } = useLang();

  const quickLinks = [
    { label: lang === 'FR' ? 'À Propos' : 'About', path: '/about' },
    { label: lang === 'FR' ? 'Services & Projets' : 'Services & Projects', path: '/services' },
    { label: lang === 'FR' ? 'Produits SaaS' : 'SaaS Products', path: '/saas' },
    { label: lang === 'FR' ? 'Tarifs' : 'Pricing', path: '/pricing' },
    { label: lang === 'FR' ? 'Blog' : 'Blog', path: '/blog' },
    { label: lang === 'FR' ? 'Contact' : 'Contact', path: '/contact' },
  ];

  const productLinks = [
    { label: lang === 'FR' ? 'Tous les Produits' : 'All Products', path: '/saas' },
    { label: 'LiAfrik', path: '/saas/liafrik' },
    { label: 'Digital Skills', path: '/saas/liafrik-digital-skills' },
    { label: 'POS Commerce', path: '/saas/liafrik-pos-commerce' },
    { label: 'Klasoo', path: '/saas/liafrik-klasoo' },
    { label: 'OS', path: '/saas/liafrik-os' },
  ];

  return (
    <footer className="relative bg-slate-900 text-slate-300 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary-600/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.05),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 tech-grid-bg opacity-[0.02]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Main grid — 4 balanced columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">

          {/* Brand */}
          <div className="lg:pr-4">
            <h3 className="text-lg font-bold text-white tracking-tight mb-3">LIYAH GROUP</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-xs">{t.footer.tagline}</p>
            <div className="flex gap-2.5 mb-5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-secondary-600 hover:border-secondary-600 hover:-translate-y-0.5 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <TrustpilotBadge variant="dark" size="sm" showText={false} />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">{lang === 'FR' ? 'Liens Rapides' : 'Quick Links'}</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-slate-400 hover:text-secondary-400 transition-colors text-sm flex items-center gap-1.5 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">{lang === 'FR' ? 'Produits SaaS' : 'SaaS Products'}</h4>
            <ul className="space-y-2.5">
              {productLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-slate-400 hover:text-secondary-400 transition-colors text-sm flex items-center gap-1.5 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all flex-shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">{t.footer.contactTitle}</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="mailto:info@liyahgroup.me" className="flex items-center gap-2.5 text-slate-400 hover:text-secondary-400 transition-colors">
                  <Mail size={14} className="text-secondary-500 flex-shrink-0" />
                  info@liyahgroup.me
                </a>
              </li>
              <li>
                <a href="https://wa.me/971503857203" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-slate-400 hover:text-secondary-400 transition-colors">
                  <Phone size={14} className="text-secondary-500 flex-shrink-0" />
                  +971 50 385 7203
                </a>
              </li>
            </ul>
            <div className="mt-5 pt-5 border-t border-slate-800 space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-secondary-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white text-xs uppercase tracking-wide mb-0.5">Cameroon</p>
                  <p className="text-slate-400 text-sm">Yaoundé - Soa</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-secondary-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white text-xs uppercase tracking-wide mb-0.5">UAE</p>
                  <p className="text-slate-400 text-sm">Jumeirah 1, Dubai</p>
                  <p className="text-slate-500 text-xs mt-0.5">SPC FZC — License No. 4425201.01</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 leading-relaxed text-center md:text-left">{t.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <Link to="/legal" className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-secondary-400 transition-colors">
              <FileText size={12} /> {t.footer.legal}
            </Link>
            <Link to="/legal" className="text-xs text-slate-500 hover:text-secondary-400 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
