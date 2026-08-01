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

  const locationLinks = [
    { label: 'Côte d\'Ivoire', path: '/fr/agence-digitale-cote-divoire' },
    { label: 'Sénégal', path: '/fr/creation-site-web-senegal' },
    { label: 'Cameroun', path: '/fr/e-commerce-cameroun' },
    { label: 'Nigeria', path: '/en/digital-agency-nigeria' },
    { label: 'Kenya', path: '/en/ecommerce-agency-kenya' },
    { label: lang === 'FR' ? 'EAU / Dubaï' : 'UAE / Dubai', path: '/en/digital-agency-united-arab-emirates' },
  ];

  return (
    <footer className="relative bg-slate-900 text-slate-300 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary-600/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.05),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight mb-4">LIYAH GROUP</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">{t.footer.tagline}</p>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-secondary-600 hover:border-secondary-600 hover:-translate-y-0.5 transition-all duration-300"
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
            <ul className="space-y-3">
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

          {/* Products + Locations */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">{lang === 'FR' ? 'Produits SaaS' : 'SaaS Products'}</h4>
            <ul className="space-y-3 mb-6">
              {productLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-slate-400 hover:text-secondary-400 transition-colors text-sm flex items-center gap-1.5 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all flex-shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-3">{lang === 'FR' ? 'Où nous opérons' : 'Where we work'}</h4>
            <ul className="space-y-3">
              {locationLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-slate-400 hover:text-secondary-400 transition-colors text-sm flex items-center gap-1.5 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">{t.footer.contactTitle}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:info@liyahgroup.me" className="flex items-center gap-2.5 text-slate-400 hover:text-secondary-400 transition-colors">
                  <Mail size={14} className="text-secondary-500 flex-shrink-0" />
                  info@liyahgroup.me
                </a>
              </li>
              <li>
                <a href="mailto:ceo@liyahgroup.me" className="flex items-center gap-2.5 text-slate-400 hover:text-secondary-400 transition-colors">
                  <Mail size={14} className="text-secondary-500 flex-shrink-0" />
                  ceo@liyahgroup.me
                </a>
              </li>
              <li>
                <a href="https://wa.me/971503857203" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-slate-400 hover:text-secondary-400 transition-colors">
                  <Phone size={14} className="text-secondary-500 flex-shrink-0" />
                  +971 50 385 7203
                </a>
              </li>
              <li>
                <a href="https://wa.me/971503857203" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-slate-400 hover:text-secondary-400 transition-colors">
                  <MessageCircle size={14} className="text-secondary-500 flex-shrink-0" />
                  WhatsApp
                </a>
              </li>
            </ul>
            <div className="mt-5 pt-5 border-t border-slate-800">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2.5">
                  <MapPin size={14} className="text-secondary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white text-xs uppercase tracking-wide mb-0.5">Cameroon</p>
                    <p className="text-slate-400">Yaoundé - Soa</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin size={14} className="text-secondary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white text-xs uppercase tracking-wide mb-0.5">UAE</p>
                    <p className="text-slate-400">Jumeirah 1, Dubai</p>
                    <p className="text-slate-500 text-xs mt-0.5">SPC FZC — License No. 4425201.01</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter mini */}
        <div className="border-t border-slate-800 pt-8 pb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">{t.newsletter.subtitle}</p>
          <form className="flex gap-2 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder={t.newsletter.placeholder}
              className="flex-1 md:w-64 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-secondary-500 focus:outline-none transition-colors"
            />
            <button type="submit" className="btn-primary text-sm whitespace-nowrap">{t.newsletter.button}</button>
          </form>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
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
