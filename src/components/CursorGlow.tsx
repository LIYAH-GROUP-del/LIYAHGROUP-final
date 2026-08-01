import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    let raf = 0;
    let visible = false;

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
          if (!visible) {
            visible = true;
            ref.current.style.opacity = '1';
          }
        }
      });
    };

    const onLeave = () => {
      if (ref.current) {
        visible = false;
        ref.current.style.opacity = '0';
      }
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-[100] w-[500px] h-[500px] rounded-full opacity-0"
      style={{
        background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, rgba(37,99,235,0.02) 40%, transparent 60%)',
        transition: 'opacity 0.4s ease',
        willChange: 'transform, opacity',
      }}
    />
  );
}
