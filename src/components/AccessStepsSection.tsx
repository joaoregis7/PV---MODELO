import React from 'react';
import { CreditCard, Send, DownloadCloud, Sparkles, ArrowRight, ArrowDown } from 'lucide-react';

interface AccessStepsSectionProps {
  onCtaClick?: () => void;
}

export const AccessStepsSection: React.FC<AccessStepsSectionProps> = ({ onCtaClick }) => {
  const steps = [
    {
      step: '01',
      title: 'ESCOLHA SEU PLANO',
      desc: 'Finalize seu pedido via PIX ou Cartão com aprovação imediata.',
      icon: <CreditCard className="w-5 h-5 text-emerald-600" strokeWidth={2.3} />,
      badgeBg: 'bg-emerald-500',
    },
    {
      step: '02',
      title: 'ACESSO INSTANTÂNEO',
      desc: 'Os links e dados de acesso chegam no mesmo instante no seu e-mail e WhatsApp.',
      icon: <Send className="w-5 h-5 text-emerald-600" strokeWidth={2.3} />,
      badgeBg: 'bg-emerald-500',
    },
    {
      step: '03',
      title: 'BAIXE OU IMPRIMA',
      desc: 'Abra em qualquer celular, tablet ou computador e imprima os moldes quando quiser.',
      icon: <DownloadCloud className="w-5 h-5 text-emerald-600" strokeWidth={2.3} />,
      badgeBg: 'bg-emerald-500',
    },
    {
      step: '04',
      title: 'APLIQUE COM A TURMA',
      desc: 'Siga os guias ilustrados passo a passo e viva momentos mágicos com as crianças.',
      icon: <Sparkles className="w-5 h-5 text-emerald-600" strokeWidth={2.3} />,
      badgeBg: 'bg-emerald-500',
    }
  ];

  return (
    <section
      id="access-steps-section"
      className="py-10 sm:py-14 px-4 sm:px-6 relative overflow-hidden bg-[#FAF6EE] border-t border-b border-[#eedbc1]"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center tracking-tight uppercase mb-2 text-stone-900">
          VEJA COMO É SIMPLES ACESSAR
        </h2>
        <p className="text-xs sm:text-sm max-w-md mx-auto mb-7 sm:mb-9 font-medium text-stone-600">
          O acesso é 100% digital e liberado automaticamente logo após a confirmação.
        </p>

        {/* 4 Cards Padronizados em Verde */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2.5 sm:gap-3 mb-8">
          {steps.map((item, index) => (
            <React.Fragment key={item.step}>
              {/* Card */}
              <div className="w-full lg:w-1/4 bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/90 shadow-xs hover:shadow-md hover:border-emerald-400 transition-all flex flex-col items-center text-center group">
                {/* Modern light icon container em Verde */}
                <div className="relative mb-3 inline-block">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-50 to-teal-50 flex items-center justify-center shadow-2xs border border-emerald-200 group-hover:scale-105 group-hover:bg-emerald-100/60 transition-all">
                    {item.icon}
                  </div>
                  <span className={`absolute -top-1.5 -right-2 px-1.5 py-0.5 text-[9px] font-black font-mono text-white ${item.badgeBg} rounded-md shadow-xs`}>
                    {item.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xs sm:text-sm font-black uppercase tracking-tight text-stone-900 mb-1.5 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs leading-relaxed text-stone-600 font-normal">
                  {item.desc}
                </p>
              </div>

              {/* Sequential Directional Arrow between cards */}
              {index < steps.length - 1 && (
                <div className="shrink-0 flex items-center justify-center py-0.5 lg:py-0">
                  {/* Desktop Right Arrow */}
                  <div
                    className="hidden lg:flex w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 items-center justify-center shadow-2xs"
                    title="Próxima etapa"
                  >
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </div>

                  {/* Mobile Down Arrow */}
                  <div
                    className="flex lg:hidden w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 items-center justify-center my-0.5"
                    title="Próxima etapa"
                  >
                    <ArrowDown className="w-3 h-3" strokeWidth={2.5} />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-4 flex justify-center">
          <a
            href="#pricing-section"
            id="btn-cta-steps"
            className="btn-reidotenebrio inline-flex items-center justify-center px-7 py-3 text-xs sm:text-sm font-black uppercase rounded-2xl shadow-lg cursor-pointer no-underline text-center"
          >
            <span>QUERO TER ACESSO IMEDIATO AO MATERIAL</span>
          </a>
        </div>
      </div>
    </section>
  );
};
