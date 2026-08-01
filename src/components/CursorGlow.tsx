import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    const onDown = () => {
      if (ringRef.current) ringRef.current.style.width = '28px', ringRef.current.style.height = '28px';
    };
    const onUp = () => {
      if (ringRef.current) ringRef.current.style.width = '36px', ringRef.current.style.height = '36px';
    };
    const onEnterLink = () => {
      if (ringRef.current) ringRef.current.style.borderColor = 'rgba(6,182,212,0.8)', ringRef.current.style.transform += ' scale(1.3)';
    };
    const onLeaveLink = () => {
      if (ringRef.current) ringRef.current.style.borderColor = 'rgba(37,99,235,0.5)', ringRef.current.style.transform = ringRef.current.style.transform.replace(' scale(1.3)', '');
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    animate();

    const links = document.querySelectorAll('a, button, [role="button"], input, textarea');
    links.forEach((el) => {
      el.addEventListener('mouseenter', onEnterLink);
      el.addEventListener('mouseleave', onLeaveLink);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      links.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterLink);
        el.removeEventListener('mouseleave', onLeaveLink);
      });
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
        style={{
          width: '36px',
          height: '36px',
          border: '2px solid rgba(37,99,235,0.5)',
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease',
          willChange: 'transform',
        }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
        style={{
          width: '8px',
          height: '8px',
          background: 'rgba(37,99,235,0.9)',
          willChange: 'transform',
        }}
      />
    </>
  );
}
