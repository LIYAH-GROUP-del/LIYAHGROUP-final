import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, Download } from 'lucide-react';
import { usePWA } from '@/hooks/usePWA';
import { useLang } from '@/i18n/LangContext';
import TrustBar from '@/components/TrustBar';

interface NavChild {
  label: string;
  path: string;
  descKey?: 'digitalDesc' | 'ecommerceDesc' | 'growthDesc' | 'blogDesc' | 'productsDesc';
}

interface NavItem {
  label: string;
  path?: string;
  children?: NavChild[];
}

export default function Header() {
  const { lang, setLang, t } = useLang();
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const { isInstallable, install } = usePWA();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      const inAnyDropdown = Object.values(dropdownRefs.current).some(
        (ref) => ref && ref.contains(target)
      );
      if (!inAnyDropdown) setOpenDropdown(null);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const navItems: NavItem[] = [
    {
      label: t.header.services,
      children: [
        { label: t.header.projectsChildren.digital, path: '/services/website-design-development', descKey: 'digitalDesc' },
        { label: t.header.projectsChildren.ecommerce, path: '/services/ecommerce-shopify', descKey: 'ecommerceDesc' },
        { label: t.header.projectsChildren.growth, path: '/services/seo-digital-growth-strategy', descKey: 'growthDesc' },
      ],
    },
    {
      label: t.header.products,
      children: [
        { label: t.header.productsChildren.overview, path: '/saas', descKey: 'productsDesc' },
        { label: t.header.productsChildren.liafrik, path: '/saas/liafrik', descKey: 'productsDesc' },
        { label: 'Digital Skills', path: '/saas/liafrik-digital-skills' },
        { label: 'POS Commerce', path: '/saas/liafrik-pos-commerce' },
        { label: 'Mafo La Reine', path: '/saas/liafrik-mafo-la-reine' },
        { label: 'Faka HR', path: '/saas/liafrik-faka-hr' },
        { label: 'Health', path: '/saas/liafrik-health' },
        { label: 'CRM', path: '/saas/liafrik-crm' },
        { label: 'Libooks', path: '/saas/liafrik-libooks' },
        { label: 'Skul Afrik', path: '/saas/liafrik-skul-afrik' },
        { label: 'Bailly', path: '/saas/liafrik-bailly' },
        { label: 'Liafund', path: '/saas/liafrik-liafund' },
        { label: 'OS', path: '/saas/liafrik-os' },
      ],
    },
    {
      label: t.header.projects,
      children: [
        { label: t.header.projectsChildren.digital, path: '/projects?cat=digital', descKey: 'digitalDesc' },
        { label: t.header.projectsChildren.ecommerce, path: '/projects?cat=ecommerce', descKey: 'ecommerceDesc' },
        { label: t.header.projectsChildren.growth, path: '/projects?cat=growth', descKey: 'growthDesc' },
      ],
    },
    { label: t.header.pricing, path: '/pricing' },
    { label: t.header.courses, path: '/courses' },
    {
      label: t.header.blog,
      children: [
        { label: t.blog.label, path: '/blog', descKey: 'blogDesc' },
      ],
    },
    { label: t.header.about, path: '/about' },
  ];

  const descMap: Record<string, string> = {
    digitalDesc: t.header.navDesc?.digital ?? '',
    ecommerceDesc: t.header.navDesc?.ecommerce ?? '',
    growthDesc: t.header.navDesc?.growth ?? '',
    blogDesc: t.header.navDesc?.blog ?? '',
    productsDesc: t.header.navDesc?.products ?? '',
  };

  const handleNav = (path: string) => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
    navigate(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-md shadow-slate-200/60 border-b border-slate-200' : 'border-b border-slate-200/50'
      }`}
    >
      <TrustBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 group flex items-center">
          <img
            src="/assets/images/LIYAH_GROUP_LOGO.png"
            alt="LIYAH GROUP"
            className="h-14 md:h-20 lg:h-24 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                ref={(el) => { dropdownRefs.current[item.label] = el; }}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  className="nav-link flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-secondary-700 transition-colors duration-200"
                >
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === item.label && (
                  <div className={`absolute top-full left-0 pt-2 animate-dropdown ${item.children.length > 4 ? 'w-[28rem]' : 'w-72'}`}>
                    <div className="bg-white border border-slate-200 rounded-xl shadow-xl shadow-slate-300/40 overflow-hidden">
                      {item.children.length > 4 ? (
                        <div className="grid grid-cols-2">
                          {item.children.map((child) => (
                            <button
                              key={child.label}
                              onClick={() => handleNav(child.path)}
                              className="block w-full text-left px-4 py-3 hover:bg-slate-50 transition-colors duration-150 border-b border-r border-slate-100"
                            >
                              <span className="block text-sm font-semibold text-slate-800">{child.label}</span>
                              {child.descKey && <span className="block text-xs text-slate-500 mt-0.5">{descMap[child.descKey]}</span>}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <>
                          {item.children.map((child) => (
                            <button
                              key={child.label}
                              onClick={() => handleNav(child.path)}
                              className="block w-full text-left px-5 py-3.5 hover:bg-slate-50 transition-colors duration-150 border-b border-slate-100 last:border-b-0"
                            >
                              <span className="block text-sm font-semibold text-slate-800 group-hover:text-secondary-700">{child.label}</span>
                              {child.descKey && <span className="block text-xs text-slate-500 mt-0.5">{descMap[child.descKey]}</span>}
                            </button>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                key={item.label}
                onClick={() => handleNav(item.path!)}
                className="nav-link px-3 py-2 text-sm font-medium text-slate-700 hover:text-secondary-700 transition-colors duration-200"
              >
                {item.label}
              </button>
            )
          )}
        </nav>

        {/* Right controls */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-1 mr-1">
            <Globe size={14} className="text-slate-400" />
            {(['EN', 'FR'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-xs font-semibold px-1.5 py-1 rounded transition-colors ${lang === l ? 'text-secondary-700 bg-secondary-50' : 'text-slate-400 hover:text-slate-700'}`}
              >
                {l}
              </button>
            ))}
          </div>

          {isInstallable && (
            <button onClick={install} className="flex items-center gap-1.5 text-slate-600 px-3 py-2 text-xs font-medium rounded-lg hover:bg-slate-100 transition-all duration-200">
              <Download size={14} /> {t.header.install}
            </button>
          )}
          <button onClick={() => handleNav('/contact')} className="btn-primary text-xs">
            {t.header.cta}
          </button>
        </div>

        {/* Mobile burger */}
        <button className="lg:hidden p-2 text-slate-700" onClick={() => setMobileOpen((o) => !o)} aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-1 shadow-xl animate-dropdown max-h-[calc(100vh-4rem)] overflow-y-auto">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                  className="flex items-center justify-between w-full text-left text-sm font-semibold text-slate-700 py-3 border-b border-slate-100"
                >
                  {item.label}
                  <ChevronDown size={16} className={`transition-transform duration-200 ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpanded === item.label && (
                  <div className="pl-4 space-y-1 py-2">
                    {item.children.map((child) => (
                      <button
                        key={child.label}
                        onClick={() => handleNav(child.path)}
                        className="block w-full text-left text-sm text-slate-600 hover:text-secondary-700 py-2"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={item.label}
                onClick={() => handleNav(item.path!)}
                className="block w-full text-left text-sm font-semibold text-slate-700 py-3 border-b border-slate-100"
              >
                {item.label}
              </button>
            )
          )}
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-2">
              <Globe size={14} className="text-slate-400" />
              {(['EN', 'FR'] as const).map((l) => (
                <button key={l} onClick={() => setLang(l)} className={`text-xs font-semibold px-2 py-1 rounded ${lang === l ? 'text-secondary-700 bg-secondary-50' : 'text-slate-400'}`}>{l}</button>
              ))}
            </div>
            <button onClick={() => handleNav('/contact')} className="btn-primary text-xs">{t.header.cta}</button>
          </div>
          {isInstallable && (
            <button onClick={install} className="flex items-center gap-1.5 text-slate-600 text-xs pt-2">
              <Download size={14} /> {t.header.install}
            </button>
          )}
        </div>
      )}
    </header>
  );
}
