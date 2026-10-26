import React, { useState } from 'react';

export const HeroMockup: React.FC = () => {
  const [currentSrc, setCurrentSrc] = useState('/mockup-principal.webp');
  const [fallbackIndex, setFallbackIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  const fallbackList = [
    '/mockup-principal.png',
    'https://raw.githubusercontent.com/joaoregis7/PV---MODELO/main/mockup-principal.png',
    'https://raw.githubusercontent.com/joaoregis7/PV---MODELO/main/mockup_principal.png',
    'https://raw.githubusercontent.com/joaoregis7/PV---MODELO/main/mockup.png',
  ];

  const handleImgError = () => {
    if (fallbackIndex < fallbackList.length) {
      setCurrentSrc(fallbackList[fallbackIndex]);
      setFallbackIndex(fallbackIndex + 1);
    } else {
      setHasError(true);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto my-4 sm:my-6 flex justify-center">
      {!hasError ? (
        <img
          src={currentSrc}
          alt="Mockup do Acervo Completo de Brinquedos Recicláveis"
          onError={handleImgError}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width="460"
          height="345"
          className="w-full max-w-[460px] h-auto object-contain drop-shadow-2xl transition-transform hover:scale-[1.02] duration-300"
        />
      ) : (
        <div className="w-full max-w-[460px] bg-white rounded-3xl p-6 border-2 border-emerald-300 shadow-xl flex flex-col items-center justify-center text-center">
          <span className="text-4xl mb-2">📚✂️♻️</span>
          <h3 className="text-base font-black text-[#073D24] uppercase">
            Acervo Completo Brinca & Recicla
          </h3>
          <p className="text-xs text-stone-600 mt-1">
            Mais de 60 Brinquedos Recicláveis + 4 Bônus Exclusivos
          </p>
        </div>
      )}
    </div>
  );
};
