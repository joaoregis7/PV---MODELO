import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const IdealForSection: React.FC = () => {
  const items = [
    {
      emoji: '⏱️',
      bgIcon: 'bg-amber-50 border-amber-200/80',
      tag: 'Mais Tempo Livre',
      tagColor: 'bg-amber-100/70 text-amber-800',
      title: 'ECONOMIZAR TEMPO NO PLANEJAMENTO',
      description:
        'Tenha atividades prontas para consultar sem passar horas pesquisando e montando tudo do zero na internet.'
    },
    {
      emoji: '🎨',
      bgIcon: 'bg-emerald-50 border-emerald-200/80',
      tag: 'Passo a Passo Visual',
      tagColor: 'bg-emerald-100/70 text-emerald-800',
      title: 'FACILITAR A PREPARAÇÃO DAS ATIVIDADES',
      description:
        'Escolha o brinquedo, confira a lista de materiais necessários e siga o guia ilustrado sem nenhuma complicação.'
    },
    {
      emoji: '💰',
      bgIcon: 'bg-teal-50 border-teal-200/80',
      tag: 'Custo Quase Zero',
      tagColor: 'bg-teal-100/70 text-teal-800',
      title: 'GASTAR MENOS COM MATERIAIS',
      description:
        'Crie oficinas e brinquedos especiais usando papelão, rolos, garrafas PET e itens fáceis que todo mundo tem.'
    },
    {
      emoji: '🧩',
      bgIcon: 'bg-rose-50 border-rose-200/80',
      tag: '100% Participativo',
      tagColor: 'bg-rose-100/70 text-rose-800',
      title: 'ENVOLVER MAIS A SUA TURMA',
      description:
        'Leve propostas práticas que tiram as crianças das telas e incentivam a turma toda a colocar a mão na massa.'
    },
    {
      emoji: '💡',
      bgIcon: 'bg-purple-50 border-purple-200/80',
      tag: 'Desenvolvimento Infantil',
      tagColor: 'bg-purple-100/70 text-purple-800',
      title: 'ESTIMULAR HABILIDADES ESSENCIAIS',
      description:
        'Trabalhe criatividade, coordenação motora fina, raciocínio espacial e consciência ecológica brincando.'
    },
    {
      emoji: '🎈',
      bgIcon: 'bg-orange-50 border-orange-200/80',
      tag: 'Sucesso Garantido',
      tagColor: 'bg-orange-100/70 text-orange-800',
      title: 'PREPARAR UM DIA DAS CRIANÇAS INESQUECÍVEL',
      description:
        'Tenha mais de 60 opções testadas para surpreender sua turma sem precisar improvisar nada em cima da hora.'
    }
  ];

  return (
    <section
      id="ideal-for-section"
      className="py-12 sm:py-16 px-4 sm:px-6 relative overflow-hidden border-b border-[#E8DEC8]"
      style={{
        backgroundColor: '#FFFDF9'
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading - Clean without top card */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-black text-center tracking-tight mb-3 uppercase"
          style={{ color: '#073D24' }}
        >
          ESTE MATERIAL É IDEAL PARA VOCÊ QUE DESEJA:
        </h2>

        <p className="text-xs sm:text-sm text-center max-w-xl mx-auto mb-8 sm:mb-12 text-stone-600 font-medium">
          Criado sob medida para professoras, educadores, mães e pais que buscam atividades criativas e pedagógicas sem dor de cabeça.
        </p>

        {/* 6 High-End Cards Grid with Emojis Restored */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 rounded-3xl bg-white border border-[#E8DEC8] shadow-xs hover:shadow-md hover:border-emerald-300 transition-all flex items-start gap-4 text-left group"
            >
              {/* Emoji Emblem Container */}
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border shadow-2xs text-2xl ${item.bgIcon} group-hover:scale-105 transition-transform`}
              >
                <span>{item.emoji}</span>
              </div>

              {/* Text & Tag */}
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                  <span
                    className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${item.tagColor}`}
                  >
                    {item.tag}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600/70 shrink-0" />
                </div>

                <h3
                  className="text-sm sm:text-base font-black uppercase mb-1.5 tracking-tight leading-snug"
                  style={{ color: '#073D24' }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-xs sm:text-sm leading-relaxed text-stone-600 font-normal"
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
