import React from 'react';

interface MethodPillarsProps {
  onCtaClick: () => void;
}

export const MethodPillars: React.FC<MethodPillarsProps> = ({ onCtaClick }) => {
  const pillars = [
    {
      emoji: '🧰',
      title: 'Passo a Passo Visual',
      description: 'Instruções simples e ilustradas para você preparar cada brinquedo com mais facilidade junto da sua turma.'
    },
    {
      emoji: '♻️',
      title: 'Materiais Fáceis de Encontrar',
      description: 'Use garrafas PET, papelão, tampinhas, caixas e outros materiais simples do dia a dia escolar.'
    },
    {
      emoji: '🎨',
      title: 'Atividades Prontas para Aplicar',
      description: 'Escolha o brinquedo, separe os materiais e leve a proposta para sala sem precisar criar tudo do zero.'
    },
    {
      emoji: '🧩',
      title: 'Aprendizado na Prática',
      description: 'Estimule criatividade, coordenação, autonomia e participação enquanto os alunos constroem e brincam.'
    }
  ];

  return (
    <section
      id="method-pillars-section"
      className="pt-8 pb-10 sm:pt-12 sm:pb-14 px-4 sm:px-6 relative overflow-hidden border-t border-b border-[#c8e9d7]"
      style={{
        backgroundColor: '#EAF7F0'
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl sm:text-3xl font-black tracking-tight mb-6 sm:mb-8 max-w-2xl mx-auto leading-snug uppercase" style={{ color: '#073D24' }}>
          UM ACERVO PENSADO PARA FACILITAR SEU PLANEJAMENTO E SUAS ATIVIDADES EM SALA DE AULA
        </h2>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left mb-6 sm:mb-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 flex items-start gap-4 border border-[#c2e5d3] shadow-xs"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                style={{ backgroundColor: '#EAF7F0', border: '1px solid #b7e8d0' }}
              >
                <span>{pillar.emoji}</span>
              </div>
              <div>
                <h3
                  className="text-base font-black mb-1"
                  style={{ color: '#073D24' }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-xs sm:text-sm leading-relaxed font-normal"
                  style={{ color: '#24323D' }}
                >
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <button
            onClick={onCtaClick}
            className="btn-reidotenebrio w-full sm:w-auto text-base sm:text-lg"
          >
            <span>QUERO COMEÇAR A CRIAR AGORA 🚀</span>
          </button>
        </div>
      </div>
    </section>
  );
};
