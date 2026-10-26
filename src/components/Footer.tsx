import React from 'react';
import { ShieldAlert } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      id="footer-section"
      className="py-8 px-4 text-xs border-t border-[#0e4431]"
      style={{ backgroundColor: '#092D20', color: '#D5E3DC' }}
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center gap-3.5">
        {/* Brand */}
        <p className="font-black text-sm sm:text-base text-white tracking-wide">
          Brinca e Recicla — Acervo de Brinquedos Recicláveis
        </p>

        {/* Anti-Piracy & Copyright Warning */}
        <div className="max-w-2xl bg-[#072419] border border-[#16563f] rounded-2xl p-4 sm:p-5 text-emerald-100/90 text-center leading-relaxed">
          <div className="flex items-center justify-center gap-2 mb-2 text-amber-300 font-bold text-xs uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span>Aviso Legal de Proteção aos Direitos Autorais</span>
          </div>
          <p className="text-[11px] sm:text-xs text-emerald-200/90 mb-2">
            Este material e todo o conteúdo deste site (textos, imagens, design, marcas e metodologia) são obras intelectuais protegidas pela <strong>Lei de Direitos Autorais (Lei Federal nº 9.610/98)</strong> e pelo <strong>Art. 184 do Código Penal Brasileiro</strong> (Crime contra a Propriedade Intelectual).
          </p>
          <p className="text-[11px] sm:text-xs text-emerald-300/80">
            É <strong>estritamente proibida</strong> a cópia, reprodução, distribuição, clonagem de páginas, revenda não autorizada, compartilhamento em grupos ou rateio total ou parcial sem autorização prévia por escrito. Os infratores e responsáveis identificados estarão sujeitos a medidas judiciais cabíveis nas esferas cível e criminal, incluindo cobrança de indenização por perdas e danos.
          </p>
        </div>

        {/* Copyright Year */}
        <p className="text-[11px] text-emerald-300/70">
          Copyright © {new Date().getFullYear()} Brinca e Recicla. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
