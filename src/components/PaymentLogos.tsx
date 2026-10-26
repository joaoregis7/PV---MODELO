import React, { useState } from 'react';

export const PaymentLogos: React.FC = () => {
  const [pixSrc, setPixSrc] = useState('/selopix.webp');
  const [masterSrc, setMasterSrc] = useState('/selomastercard-400.webp');
  const [visaSrc, setVisaSrc] = useState('/selovisa.webp');

  return (
    <div className="w-full mt-3 flex items-center justify-center">
      <div className="w-full max-w-full py-1.5 px-1 flex flex-wrap items-center justify-center gap-3 sm:gap-4 bg-transparent">
        {/* 1. COMPRA SEGURA */}
        <div className="flex items-center gap-1.5 shrink-0">
          <svg
            className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-stone-800 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="4"
              y="10"
              width="16"
              height="11"
              rx="2.5"
              stroke="#292524"
              strokeWidth="2"
            />
            <path
              d="M7 10V7a5 5 0 0 1 10 0v3"
              stroke="#292524"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M9 15.5l2 2 4.5-4.5"
              stroke="#16A34A"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex flex-col text-left leading-none">
            <span className="text-[8px] font-black text-stone-800 uppercase tracking-tight">
              COMPRA
            </span>
            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-wider">
              SEGURA
            </span>
          </div>
        </div>

        {/* 2. PIX (Imagem real do GitHub) */}
        <div className="flex items-center shrink-0">
          <img
            src={pixSrc}
            alt="Selo Pix"
            onError={() => setPixSrc('https://raw.githubusercontent.com/joaoregis7/PV---MODELO/main/selopix.webp')}
            className="h-4 sm:h-4.5 w-auto object-contain block drop-shadow-2xs"
            width="68"
            height="24"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* 3. MASTERCARD (Imagem real do GitHub) */}
        <div className="flex items-center shrink-0">
          <img
            src={masterSrc}
            alt="Selo Mastercard"
            onError={() => setMasterSrc('https://raw.githubusercontent.com/joaoregis7/PV---MODELO/main/selomastercard-400.webp')}
            className="h-4 sm:h-4.5 w-auto object-contain block drop-shadow-2xs"
            width="42"
            height="24"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* 4. VISA (Imagem real do GitHub) */}
        <div className="flex items-center shrink-0">
          <img
            src={visaSrc}
            alt="Selo Visa"
            onError={() => setVisaSrc('https://raw.githubusercontent.com/joaoregis7/PV---MODELO/main/selovisa.webp')}
            className="h-3.5 sm:h-4 w-auto object-contain block drop-shadow-2xs"
            width="54"
            height="18"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
};
