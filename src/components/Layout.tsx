import { useEffect, useState, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import CursorGlow from '@/components/CursorGlow';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useGlobalScrollAnimation } from '@/hooks/useGlobalScrollAnimation';

export default function Layout() {
  const { pathname } = useLocation();
  const [displayPath, setDisplayPath] = useState(pathname);
  const [transitioning, setTransitioning] = useState(false);
  const prevPath = useRef(pathname);
  useGlobalScrollAnimation();

  useEffect(() => {
    if (pathname !== prevPath.current) {
      setTransitioning(true);
      const timeout = setTimeout(() => {
        setDisplayPath(pathname);
        prevPath.current = pathname;
        setTransitioning(false);
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <CursorGlow />
      <Header />
      <main className="flex-grow relative">
        <div
          className={`transition-opacity duration-200 ${
            transitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Outlet key={displayPath} />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}
