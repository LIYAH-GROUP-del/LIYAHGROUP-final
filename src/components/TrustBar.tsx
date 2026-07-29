import { Star, ExternalLink } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';

const TRUSTPILOT_URL = 'https://www.trustpilot.com/review/liyahgroup.me';

function TrustpilotLogo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center font-bold tracking-tight ${className}`}>
      Trustpilot
    </span>
  );
}

function StarRow({ size = 14, className = '' }: { size?: number; className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 ${className}`}>
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={size} className="text-[#00b67a] fill-[#00b67a]" />
      ))}
    </span>
  );
}

export default function TrustBar() {
  const { t } = useLang();

  return (
    <a
      href={TRUSTPILOT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full bg-gradient-to-r from-slate-900 via-secondary-900 to-slate-900 text-white overflow-hidden"
      aria-label={t.trustbar.ariaLabel}
    >
      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(6,182,212,0.08),transparent)] bg-[length:200%_100%] group-hover:bg-[position:100%_0] transition-[background-position] duration-700" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.12),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center gap-3 py-2 text-xs sm:text-sm">
        <StarRow size={12} className="flex-shrink-0" />
        <span className="font-semibold tracking-wide hidden sm:inline">{t.trustbar.trusted}</span>
        <span className="text-slate-400 hidden md:inline">•</span>
        <TrustpilotLogo className="text-white text-xs sm:text-sm" />
        <span className="text-slate-300 hidden md:inline">—</span>
        <span className="text-slate-200 hidden sm:inline">{t.trustbar.verified}</span>
        <ExternalLink size={11} className="text-accent-400 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0" />
      </div>

      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-secondary-500 to-accent-500 group-hover:w-full transition-all duration-500" />
    </a>
  );
}
