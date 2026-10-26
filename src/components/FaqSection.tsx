import React, { useState } from 'react';
import { FAQ_DATA } from '../data/landingData';
import { ChevronDown } from 'lucide-react';

interface FaqSectionProps {
  onCtaClick?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onCtaClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq-section"
      className="pt-8 pb-10 sm:pt-12 sm:pb-14 px-4 sm:px-6 relative overflow-hidden border-t border-b border-[#f0debe]"
      style={{
        backgroundColor: '#FFF8EE'
      }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-center mb-5 sm:mb-7 uppercase" style={{ color: '#073D24' }}>
          PERGUNTAS FREQUENTES
        </h2>

        <div className="space-y-3 mb-8 sm:mb-10">
          {FAQ_DATA.map((faq, idx) => (
            <div
              key={idx}
              className="border border-[#eedbc1] rounded-xl overflow-hidden bg-white shadow-2xs"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-4 sm:p-5 text-left font-bold text-sm sm:text-base flex items-center justify-between gap-4 hover:bg-[#fffbf5] transition-colors cursor-pointer"
                style={{ color: '#073D24' }}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                    openIndex === idx ? 'rotate-180 text-emerald-700' : 'text-stone-400'
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm leading-relaxed border-t border-[#eedbc1]/60 bg-white font-medium" style={{ color: '#24323D' }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button below FAQ */}
        <div className="text-center pt-2">
          <a
            href="#pricing-section"
            id="btn-cta-faq"
            className="btn-reidotenebrio w-full sm:w-auto text-sm sm:text-base md:text-lg max-w-xl mx-auto inline-flex items-center justify-center no-underline cursor-pointer"
          >
            <span>TIREI MINHAS DÚVIDAS, QUERO O MATERIAL 📲</span>
          </a>
        </div>
      </div>
    </section>
  );
};
