import { useEffect, useState } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function SurfCursorEffects() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    // Only enable on devices with hover/pointer (desktop mice)
    if (typeof window === 'undefined' || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    const handleClick = (e: MouseEvent) => {
      const newRipple: Ripple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setRipples((prev) => [...prev.slice(-6), newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 650);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  if (ripples.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full border border-surf-accent/60 -translate-x-1/2 -translate-y-1/2 animate-ping"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '22px',
            height: '22px',
            animationDuration: '550ms',
            boxShadow: '0 0 10px rgba(255, 78, 0, 0.4)',
          }}
        />
      ))}
    </div>
  );
}
