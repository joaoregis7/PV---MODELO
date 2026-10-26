import React from 'react';
import { Sparkles, Star } from 'lucide-react';

export const ProofCarousel: React.FC = () => {
  const proofCards = [
    {
      title: 'Vai e Vem com Garrafa PET',
      sub: 'Diversão que gasta energia e exercita os braços',
      badge: 'PROJETO #1',
      emoji: '🚀',
      feedback: '“Meus dois filhos passaram a tarde toda brincando no quintal!”'
    },
    {
      title: 'Serpente Articulada de Tampinhas',
      sub: 'Desenvolve coordenação motora e concentração',
      badge: 'PROJETO #2',
      emoji: '🐍',
      feedback: '“Juntamos 30 tampinhas e ela ficou linda demais!”'
    },
    {
      title: 'Soprador de Espuma de Sabão',
      sub: 'Cobras gigantes de espuma com tecido e PET',
      badge: 'PROJETO #3',
      emoji: '🫧',
      feedback: '“Sucesso absoluto no sábado de sol com os primos.”'
    },
    {
      title: 'O Tradicional Pé de Lata',
      sub: 'Equilíbrio e gargalhadas como nos velhos tempos',
      badge: 'PROJETO #4',
      emoji: '🥫',
      feedback: '“Lembrei da minha própria infância, foi emocionante.”'
    },
    {
      title: 'Cavalo de Pau com PET',
      sub: 'Estimula o faz-de-conta e a imaginação livre',
      badge: 'PROJETO #5',
      emoji: '🐴',
      feedback: '“Meu filho de 4 anos dorme com o cavalinho dele.”'
    },
    {
      title: 'Cai-Não-Cai Caseiro',
      sub: 'Estratégia, tensão e risadas em família',
      badge: 'PROJETO #6',
      emoji: '🎯',
      feedback: '“Melhor que o jogo da loja que custa 80 reais!”'
    }
  ];

  return (
    <section
      id="proof-carousel-section"
      className="py-10 px-4 overflow-hidden border-t border-b border-[#cce8da]"
      style={{ backgroundColor: '#EAF7F0' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6 text-center">
          <Sparkles className="w-4 h-4 text-emerald-700" />
          <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest" style={{ color: '#073D24' }}>
            Mais de 1.480 famílias já criaram seus brinquedos
          </h2>
          <Sparkles className="w-4 h-4 text-emerald-700" />
        </div>

        {/* Scrollable Gallery */}
        <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x scrollbar-none px-2">
          {proofCards.map((card, idx) => (
            <div
              key={idx}
              className="w-72 sm:w-80 shrink-0 bg-white rounded-2xl p-5 border-2 border-[#c2e5d3] shadow-md snap-start flex flex-col justify-between text-left transform hover:-translate-y-1 transition-transform"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black uppercase text-[#073D24] bg-[#EAF7F0] px-2 py-0.5 rounded-full border border-[#a8dfc2]">
                    {card.badge}
                  </span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <div className="text-3xl mb-2">{card.emoji}</div>
                <h3 className="text-base font-black leading-snug mb-1" style={{ color: '#073D24' }}>
                  {card.title}
                </h3>
                <p className="text-xs mb-3 font-medium" style={{ color: '#24323D' }}>
                  {card.sub}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-200 text-xs italic font-medium" style={{ color: '#24323D' }}>
                {card.feedback}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
