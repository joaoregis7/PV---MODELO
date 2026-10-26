import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  const [imgSrc, setImgSrc] = useState('/selo.webp');
  const [fallbackIndex, setFallbackIndex] = useState(0);

  const fallbackList = [
    '/selo.png',
    'https://raw.githubusercontent.com/joaoregis7/PV---MODELO/main/selo.png',
    'https://raw.githubusercontent.com/joaoregis7/PV---MODELO/main/selo.png.png',
    '/selo-garantia.svg',
  ];

  const handleImgError = () => {
    if (fallbackIndex < fallbackList.length) {
      setImgSrc(fallbackList[fallbackIndex]);
      setFallbackIndex(fallbackIndex + 1);
    }
  };

  return (
    <section
      id="guarantee-section"
      className="py-8 sm:py-10 px-4 sm:px-6 relative overflow-hidden bg-[#FAF6EE] border-t border-b border-stone-200"
    >
      <div className="max-w-2xl mx-auto">
        {/* CARD OTIMIZADO E COMPACTO DE GARANTIA */}
        <div className="bg-white rounded-3xl p-5 sm:p-7 border-2 border-amber-300 shadow-lg relative overflow-hidden text-center">
          <div className="relative z-10 flex flex-col items-center">
            {/* SELO DE GARANTIA OTIMIZADO */}
            <div className="w-28 sm:w-36 h-28 sm:h-36 mb-3 flex items-center justify-center drop-shadow-md">
              <img
                src={imgSrc}
                alt="Selo 7 Dias de Garantia Incondicional"
                onError={handleImgError}
                loading="lazy"
                decoding="async"
                width="144"
                height="144"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Título Principal */}
            <h2 className="text-xl sm:text-2xl font-black tracking-tight mb-2 uppercase text-stone-900 leading-tight">
              7 DIAS DE GARANTIA • RISCO ZERO
            </h2>

            {/* Texto Explicativo Direto */}
            <p className="text-xs sm:text-sm leading-relaxed text-stone-700 mb-3 max-w-lg font-normal">
              Você tem <strong>7 dias completos</strong> para explorar todo o acervo. Se por qualquer motivo achar que não valeu a pena, basta solicitar seu reembolso. Devolvemos 100% do seu dinheiro sem burocracia.
            </p>

            {/* Callout de Reembolso Compacto */}
            <div className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-300 px-4 py-2 rounded-xl text-xs font-bold text-emerald-950 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Garantia incondicional: o risco é 100% nosso.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
