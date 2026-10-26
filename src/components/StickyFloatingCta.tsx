import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';

interface StickyFloatingCtaProps {
  onCtaClick: () => void;
}

export const StickyFloatingCta: React.FC<StickyFloatingCtaProps> = ({ onCtaClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ minutes: 11, seconds: 45 });

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero section (~450px)
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Timer countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: 15, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Barra de oferta flutuante"
      className="fixed bottom-0 left-0 right-0 z-40 bg-stone-950/95 backdrop-blur-md text-white border-t-2 border-emerald-500/50 p-2.5 sm:px-6 shadow-2xl transition-all duration-300"
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Info & Timer */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-400/50 flex items-center justify-center text-emerald-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-amber-300">Brinca e Recicla + 4 Bônus</span>
              <span className="text-[10px] bg-red-600 px-1.5 py-0.5 rounded text-white font-bold">Hoje: R$ 37,90</span>
            </div>
            <p className="text-[11px] text-stone-400 flex items-center gap-1">
              <Clock className="w-3 h-3 text-amber-400" />
              Oferta encerra em:{' '}
              <span className="font-mono text-amber-300 font-bold">
                {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </p>
          </div>
        </div>

        {/* Mobile Info */}
        <div className="sm:hidden text-left">
          <span className="text-[10px] font-bold text-emerald-400 block uppercase">Oferta Limitada</span>
          <span className="text-base font-black text-white leading-tight">R$ 37,90</span>
        </div>

        {/* Action Button */}
        <button
          onClick={onCtaClick}
          className="btn-reidotenebrio py-2.5 px-5 text-xs sm:text-sm min-h-0!"
          style={{ minHeight: '46px' }}
        >
          <span>QUERO APROVEITAR AGORA 📲</span>
        </button>
      </div>
    </aside>
  );
};
