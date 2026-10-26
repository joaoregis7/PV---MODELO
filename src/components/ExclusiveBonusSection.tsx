import React from 'react';
import { Mail, CalendarDays, Medal, GraduationCap, Check, ArrowRight, Sparkles } from 'lucide-react';
import { BonusMockup } from './BonusMockup';

interface ExclusiveBonusSectionProps {
  onCtaClick?: () => void;
}

interface BonusCardData {
  number: string;
  title: string;
  description: string;
  originalPrice: string;
  icon: React.ReactNode;
  highlights: string[];
}

const BONUSES: BonusCardData[] = [
  {
    number: '01',
    title: 'Bilhetes Prontos para as Famílias',
    description:
      'Modelos prontos para imprimir e enviar aos responsáveis, facilitando a arrecadação dos materiais recicláveis que serão usados nas atividades.',
    originalPrice: 'R$ 9,90',
    icon: <Mail className="w-5 h-5 text-amber-800" />,
    highlights: [
      'Prontos para imprimir e preencher',
      'Facilita o envio de materiais para a escola',
      'Comunicação clara com pais e responsáveis'
    ]
  },
  {
    number: '02',
    title: 'Semana da Criança Planejada',
    description:
      'Um roteiro de segunda a sexta com atividades organizadas para você não precisar pensar todos os dias no que fazer com a turma.',
    originalPrice: 'R$ 19,90',
    icon: <CalendarDays className="w-5 h-5 text-emerald-800" />,
    highlights: [
      'Planejamento de segunda a sexta',
      'Atividades organizadas por dia',
      'Menos tempo preparando a semana'
    ]
  },
  {
    number: '03',
    title: 'Medalhas de Pequeno Inventor',
    description:
      'Medalhas prontas para imprimir e recortar, perfeitas para reconhecer a participação e as criações dos alunos ao final das atividades.',
    originalPrice: 'R$ 12,90',
    icon: <Medal className="w-5 h-5 text-amber-800" />,
    highlights: [
      'Prontas para imprimir e recortar',
      'Valoriza a participação dos alunos',
      'Deixa a atividade ainda mais especial'
    ]
  },
  {
    number: '04',
    title: 'Diploma Amigo do Planeta',
    description:
      'Um diploma pronto para imprimir e personalizar com o nome de cada aluno, ideal para encerrar o projeto de forma especial.',
    originalPrice: 'R$ 9,90',
    icon: <GraduationCap className="w-5 h-5 text-emerald-800" />,
    highlights: [
      'Pronto para impressão',
      'Personalizável com o nome do aluno',
      'Uma lembrança para levar para casa'
    ]
  }
];

export const ExclusiveBonusSection: React.FC<ExclusiveBonusSectionProps> = ({ onCtaClick }) => {
  return (
    <section
      id="exclusive-bonus-section"
      className="pt-8 pb-10 sm:pt-12 sm:pb-14 px-4 sm:px-6 relative overflow-hidden border-b border-[#ecd8be]"
      style={{
        backgroundColor: '#FAF6EE'
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header: Estilo idêntico à referência */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <p className="text-xs sm:text-sm md:text-base font-black uppercase tracking-[0.2em] text-[#EA580C] mb-2">
            E NÃO PARA POR AÍ... TEM MAIS!
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight text-center uppercase text-[#073D24]">
            VOCÊ TAMBÉM VAI RECEBER <span className="text-[#3B82F6]">4 BÔNUS EXCLUSIVOS</span>
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-8">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.number}
              className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#ecd8be] shadow-lg flex flex-col justify-between hover:shadow-xl transition-shadow relative overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-500" />

              <div>
                {/* Header inside card: Tag dourada um pouco maior + Ícone correspondente */}
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-amber-950 bg-gradient-to-r from-[#FDE68A] via-[#FBBF24] to-[#F59E0B] border border-amber-500/80 px-4 py-1.5 rounded-full shadow-xs">
                    BÔNUS #{bonus.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-center shrink-0 shadow-2xs">
                    {bonus.icon}
                  </div>
                </div>

                {/* Mockup da imagem do bônus logo abaixo de Bônus 01 / 02 */}
                <BonusMockup bonusNumber={bonus.number} title={bonus.title} />

                <h3 className="text-lg sm:text-xl font-black text-stone-900 mb-2 leading-snug">
                  {bonus.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  {bonus.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-1.5 mb-5 pt-3 border-t border-stone-100">
                  {bonus.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-semibold text-stone-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 font-bold" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Price Bar: Ocupa a largura inteira com tipografia grande, legível e de alto impacto */}
              <div className="pt-4 border-t border-stone-100 w-full mt-3">
                <div className="w-full flex items-center justify-between gap-3 bg-gradient-to-r from-[#F0FBF5] via-[#EAF7F0] to-[#E3F5EC] border border-[#b8e5cd] px-4 sm:px-5 py-3 rounded-2xl shadow-xs">
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-stone-500">
                      Valor individual:
                    </span>
                    <span className="text-base sm:text-xl font-black text-red-600 line-through decoration-red-500/80 decoration-[1.5px] leading-tight">
                      {bonus.originalPrice}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-emerald-600 to-green-700 text-white px-3.5 sm:px-4 py-2 rounded-xl shadow-xs shrink-0">
                    <Sparkles className="w-4 h-4 text-emerald-200 shrink-0" />
                    <span className="font-black text-xs sm:text-sm tracking-wider uppercase">
                      INCLUSO GRÁTIS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center px-4 mt-8">
          <a
            href="#pricing-section"
            id="btn-cta-bonus"
            className="btn-reidotenebrio w-full sm:w-auto text-sm sm:text-base py-4 px-8 inline-flex items-center justify-center gap-2 shadow-xl no-underline cursor-pointer"
          >
            <span>QUERO GARANTIR OS BÔNUS</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
};
