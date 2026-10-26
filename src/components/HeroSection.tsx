import React from 'react';
import { Check, Download, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { HeroMockup } from './HeroMockup';

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <header
      id="hero-section"
      className="pt-6 sm:pt-8 pb-8 sm:pb-10 px-4 sm:px-6 relative overflow-hidden"
      style={{
        backgroundColor: '#FFF8EE',
        color: '#24323D'
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Pill / Category */}
        <div className="inline-block mb-5 sm:mb-6">
          <span className="text-xs sm:text-sm font-black text-[#073D24] uppercase tracking-wider bg-[#EAF7F0] px-4 py-1.5 rounded-full border border-[#b7e8d0] shadow-xs">
            ESPECIAL DIA DAS CRIANÇAS ♻️✂️🎨
          </span>
        </div>

        {/* Big H1 Title with authentic gouache paint brush strokes - Compact & Punchy */}
        <h1
          className="text-2xl sm:text-4xl md:text-5xl font-black leading-[1.15] sm:leading-[1.18] tracking-tight mb-4 sm:mb-5 max-w-3xl mx-auto uppercase"
          style={{ color: '#073D24' }}
        >
          O ACERVO COMPLETO COM{' '}
          <span className="relative inline-block whitespace-nowrap px-2 sm:px-3 py-0.5">
            <span className="relative z-10 text-[#073D24]">MAIS DE 60 BRINQUEDOS</span>
            {/* Pincelada Artística 1: Cerdas reais e bordas orgânicas de tinta guache */}
            <svg
              aria-hidden="true"
              className="absolute -inset-x-1.5 -inset-y-0.5 w-[calc(100%+12px)] h-[calc(100%+4px)] -z-0 pointer-events-none -rotate-[0.6deg]"
              preserveAspectRatio="none"
              viewBox="0 0 340 54"
            >
              {/* Sombra de tinta fresca / base âmbar */}
              <path
                d="M12,28 C6,22 2,16 5,12 C10,9 18,14 26,11 C42,8 78,7 122,8 C176,9 238,6 288,9 C312,10 328,8 335,13 C338,17 334,22 331,26 C336,29 339,34 336,38 C332,42 320,40 305,43 C260,46 200,45 142,47 C88,48 40,46 22,44 C12,43 5,38 8,33 C4,31 7,29 12,28 Z"
                fill="#EAB308"
                opacity="0.3"
              />
              {/* Corpo principal da pincelada com formato de cerdas de trincha */}
              <path
                d="M16,26 C8,19 4,14 8,10 C14,7 22,12 30,9 C48,6 85,5 128,6 C182,7 244,4 294,7 C318,8 332,6 338,11 C341,15 336,20 333,24 C338,27 341,32 338,36 C334,40 322,38 308,41 C264,44 204,43 146,45 C92,46 44,44 26,42 C16,41 9,36 12,31 C7,29 10,27 16,26 Z"
                fill="#FDE047"
              />
              {/* Detalhes de cerdas secas nas extremidades */}
              <path
                d="M3,22 C1,18 4,14 10,13 M335,18 C339,21 338,25 334,28 M332,32 C337,34 336,37 330,39 M8,36 C4,38 6,42 12,41"
                stroke="#FACC15"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>{' '}
          <span className="relative inline-block whitespace-nowrap px-2 sm:px-3 py-0.5">
            <span className="relative z-10 text-[#073D24]">RECICLÁVEIS</span>
            {/* Pincelada Artística 2: Continuação natural da tinta */}
            <svg
              aria-hidden="true"
              className="absolute -inset-x-1.5 -inset-y-0.5 w-[calc(100%+12px)] h-[calc(100%+4px)] -z-0 pointer-events-none rotate-[0.5deg]"
              preserveAspectRatio="none"
              viewBox="0 0 190 54"
            >
              {/* Sombra de tinta fresca / base âmbar */}
              <path
                d="M10,27 C5,21 2,15 5,12 C9,9 16,13 22,10 C38,8 72,7 105,8 C135,9 162,7 178,11 C185,14 188,19 184,23 C188,27 187,33 182,37 C174,41 155,39 130,42 C95,45 55,44 32,46 C18,47 8,43 5,37 C2,33 5,29 10,27 Z"
                fill="#EAB308"
                opacity="0.3"
              />
              {/* Corpo principal da pincelada */}
              <path
                d="M13,25 C7,19 4,13 7,10 C12,7 19,11 25,8 C41,6 76,5 110,6 C140,7 166,5 181,9 C187,12 189,17 186,21 C190,25 189,31 184,35 C176,39 158,37 134,40 C98,43 58,42 35,44 C21,45 11,41 8,35 C5,31 8,27 13,25 Z"
                fill="#FDE047"
              />
              {/* Detalhes de cerdas secas nas pontas */}
              <path
                d="M2,20 C1,16 4,13 9,12 M182,16 C186,19 185,23 181,26 M180,30 C184,32 183,35 178,37 M6,34 C3,36 5,40 10,39"
                stroke="#FACC15"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>{' '}
          PARA CRIAR COM SUA TURMA NO DIA DAS CRIANÇAS
        </h1>

        {/* Mockup Principal: Apenas a imagem pura enviada pelo usuário, sem card nem textos de celular/vitalício */}
        <HeroMockup />

        {/* Subtitle Paragraph */}
        <p className="text-sm sm:text-base max-w-xl mx-auto mb-6 leading-relaxed font-normal" style={{ color: '#24323D' }}>
          Tenha modelos prontos, com lista de materiais e passo a passo visual, para não perder horas procurando atividades, pensando no que fazer e montando tudo do zero.
        </p>

        {/* Icon List - Perfeitamente centralizado no Mobile e Desktop */}
        <div className="flex justify-center mb-8 px-4">
          <ul className="inline-flex flex-col items-start space-y-2.5 sm:space-y-3 text-left">
            <li className="flex items-center gap-2.5 sm:gap-3">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 font-black" />
              </span>
              <span className="text-xs sm:text-sm font-semibold" style={{ color: '#24323D' }}>
                Modelos prontos para poupar horas de planejamento
              </span>
            </li>
            <li className="flex items-center gap-2.5 sm:gap-3">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 font-black" />
              </span>
              <span className="text-xs sm:text-sm font-semibold" style={{ color: '#24323D' }}>
                Lista de materiais para preparar tudo sem improviso
              </span>
            </li>
            <li className="flex items-center gap-2.5 sm:gap-3">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 font-black" />
              </span>
              <span className="text-xs sm:text-sm font-semibold" style={{ color: '#24323D' }}>
                Passo a passo visual simples de acompanhar
              </span>
            </li>
            <li className="flex items-center gap-2.5 sm:gap-3">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 font-black" />
              </span>
              <span className="text-xs sm:text-sm font-semibold" style={{ color: '#24323D' }}>
                Atividades para diferentes turmas e momentos
              </span>
            </li>
            <li className="flex items-center gap-2.5 sm:gap-3">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 font-black" />
              </span>
              <span className="text-xs sm:text-sm font-semibold" style={{ color: '#24323D' }}>
                Materiais acessíveis e fáceis de encontrar
              </span>
            </li>
          </ul>
        </div>

        {/* GIANT VIBRANT GREEN BUTTON with sweeping shine effect */}
        <div className="mb-4">
          <a
            href="#pricing-section"
            id="btn-cta-hero"
            className="btn-reidotenebrio w-full sm:w-auto text-base sm:text-lg inline-flex items-center justify-center no-underline cursor-pointer"
          >
            <span>QUERO ACESSAR AGORA</span>
          </a>
        </div>

        {/* Subtext under button */}
        <p className="text-xs sm:text-sm font-medium" style={{ color: '#24323D' }}>
          📲 Você recebe tudo na hora, direto no seu WhatsApp e e-mail.
        </p>
      </div>
    </header>
  );
};
