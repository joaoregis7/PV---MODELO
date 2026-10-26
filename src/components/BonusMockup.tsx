import React, { useState } from 'react';

interface BonusMockupProps {
  bonusNumber: string;
  title: string;
  category?: string;
}

export const BonusMockup: React.FC<BonusMockupProps> = ({ bonusNumber, title }) => {
  const getPossibleFilenames = (num: string) => {
    switch (num) {
      case '01':
      case '1':
        return [
          '/bonus-bilhete.webp',
          '/bonus-bilhete.png',
          'https://raw.githubusercontent.com/joaoregis7/PV---MODELO/main/bonus-bilhete.png',
        ];
      case '02':
      case '2':
        return [
          '/bonus-semana.webp',
          '/bonus-semana.png',
          'https://raw.githubusercontent.com/joaoregis7/PV---MODELO/main/bonus-semana.png',
        ];
      case '03':
      case '3':
        return [
          '/bonus-medalhas.webp',
          '/bonus-medalhas.png',
          'https://raw.githubusercontent.com/joaoregis7/PV---MODELO/main/bonus-medalhas.png',
        ];
      case '04':
      case '4':
        return [
          '/bonus-diploma.webp',
          '/bonus-diploma.png',
          'https://raw.githubusercontent.com/joaoregis7/PV---MODELO/main/bonus-diploma.png',
        ];
      default:
        return [`/bonus-${num}.webp`, `/bonus-${num}.png`];
    }
  };

  const fileCandidates = getPossibleFilenames(bonusNumber);
  const [fileIdx, setFileIdx] = useState(0);
  const [hasImageError, setHasImageError] = useState(false);

  const handleImgError = () => {
    if (fileIdx < fileCandidates.length - 1) {
      setFileIdx((prev) => prev + 1);
    } else {
      setHasImageError(true);
    }
  };

  const getBonusVisualDetails = (num: string) => {
    switch (num) {
      case '01':
      case '1':
        return {
          icon: '💌',
          themeColor: '#0284c7',
          bgColor: '#e0f2fe',
          accentColor: '#38bdf8',
          label: 'COMUNICAÇÃO PRONTA',
          desc: 'Modelos editáveis e ilustrados para enviar no WhatsApp ou impresso para os pais',
          badge: 'BÔNUS #1',
          pages: '12 Modelos',
        };
      case '02':
      case '2':
        return {
          icon: '📅',
          themeColor: '#7c3aed',
          bgColor: '#ede9fe',
          accentColor: '#a78bfa',
          label: 'CRONOGRAMA DE 5 DIAS',
          desc: 'Planejamento de segunda a sexta com oficinas temáticas para a Semana da Criança',
          badge: 'BÔNUS #2',
          pages: 'Plano 5 Dias',
        };
      case '03':
      case '3':
        return {
          icon: '🏅',
          themeColor: '#ea580c',
          bgColor: '#ffedd5',
          accentColor: '#fb923c',
          label: 'RECONHECIMENTO INFANTIL',
          desc: 'Medalhas coloridas para imprimir, recortar e premiar cada aluno criador',
          badge: 'BÔNUS #3',
          pages: 'Para Imprimir',
        };
      case '04':
      case '4':
        return {
          icon: '🎓',
          themeColor: '#16a34a',
          bgColor: '#dcfce7',
          accentColor: '#4ade80',
          label: 'CERTIFICADO OFICIAL',
          desc: 'Diploma para preencher com o nome da criança e celebrar o Dia das Crianças',
          badge: 'BÔNUS #4',
          pages: 'Alta Resolução',
        };
      default:
        return {
          icon: '🎁',
          themeColor: '#059669',
          bgColor: '#ecfdf5',
          accentColor: '#34d399',
          label: 'MATERIAL EXTRA',
          desc: 'Conteúdo exclusivo complementar',
          badge: `BÔNUS #${bonusNumber}`,
          pages: 'PDF Pronto',
        };
    }
  };

  const details = getBonusVisualDetails(bonusNumber);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {!hasImageError ? (
        <div className="relative w-full flex items-center justify-center p-2">
          <img
            src={fileCandidates[fileIdx]}
            alt={title}
            onError={handleImgError}
            loading="lazy"
            decoding="async"
            width="280"
            height="280"
            className="w-full max-w-[280px] sm:max-w-[320px] h-auto object-contain drop-shadow-xl transition-transform hover:scale-105 duration-300"
          />
        </div>
      ) : (
        /* Fallback elegante */
        <div
          className="w-full max-w-[280px] h-[340px] rounded-2xl p-5 border-2 flex flex-col justify-between text-left relative overflow-hidden shadow-md"
          style={{
            backgroundColor: details.bgColor,
            borderColor: details.accentColor,
          }}
        >
          <div className="flex items-center justify-between">
            <span
              className="text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-wider text-white"
              style={{ backgroundColor: details.themeColor }}
            >
              {details.badge}
            </span>
            <span className="text-2xl">{details.icon}</span>
          </div>

          <div className="my-auto py-2">
            <h4
              className="text-base sm:text-lg font-black leading-snug uppercase mb-1"
              style={{ color: details.themeColor }}
            >
              {title}
            </h4>
            <p className="text-xs text-stone-700 leading-relaxed font-medium">
              {details.desc}
            </p>
          </div>

          <div
            className="pt-2 border-t border-stone-200/60 flex items-center justify-between text-[10px] font-bold"
            style={{ color: details.themeColor }}
          >
            <span>{details.label}</span>
            <span className="bg-white/80 px-2 py-0.5 rounded font-black text-stone-800">
              {details.pages}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
