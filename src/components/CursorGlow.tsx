import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
        }
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-[100] w-[500px] h-[500px] rounded-full opacity-0"
      style={{
        background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 60%)',
        transition: 'opacity 0.3s ease',
        willChange: 'transform',
      }}
      onMouseEnter={() => { if (ref.current) ref.current.style.opacity = '1'; }}
    />
  );
}
