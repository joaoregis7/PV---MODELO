import React, { useState } from 'react';
import { TOYS_DATA, ToyItem } from '../data/landingData';
import { Sparkles, Eye, X, Check, ShieldAlert, Sparkle } from 'lucide-react';

interface ToysShowcaseProps {
  onCtaClick: () => void;
}

export const ToysShowcase: React.FC<ToysShowcaseProps> = ({ onCtaClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeToyModal, setActiveToyModal] = useState<ToyItem | null>(null);

  const categories = [
    { id: 'all', label: 'Todos os 10 Brinquedos' },
    { id: 'PET', label: 'Garrafas PET' },
    { id: 'Tampinhas', label: 'Tampinhas' },
    { id: 'Latinhas', label: 'Latinhas' },
    { id: 'Embalagens', label: 'Papelão & Embalagens' },
  ];

  const filteredToys = selectedCategory === 'all'
    ? TOYS_DATA
    : TOYS_DATA.filter((toy) => toy.category === selectedCategory);

  const getToyEmoji = (id: string) => {
    switch (id) {
      case 'vai-e-vem': return '🚀';
      case 'serpente': return '🐍';
      case 'soprador-espuma': return '🫧';
      case 'pe-de-lata': return '🥫';
      case 'cavalo-de-pau': return '🐴';
      case 'cai-nao-cai': return '🎯';
      case 'mini-casinhas': return '🏰';
      case 'jogo-da-velha': return '❌';
      case 'telefone-sem-fio': return '📞';
      case 'pegue-a-bolinha': return '🎾';
      default: return '✂️';
    }
  };

  return (
    <section id="toys-showcase" className="py-16 px-4 sm:px-6 border-t border-b border-[#f0debe]" style={{ backgroundColor: '#FFF4E4' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF7F0] text-[#073D24] text-xs font-bold uppercase tracking-wider mb-2 border border-[#b7e8d0]">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Conteúdo Exclusivo do E-book</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight" style={{ color: '#073D24' }}>
            Os 10 Brinquedos Recicláveis do Guia
          </h2>
          <p className="text-xs sm:text-sm mt-2 font-medium" style={{ color: '#24323D' }}>
            Projetos testados e aprovados que unem diversão, coordenação motora e sustentabilidade.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#073D24] text-white shadow-sm'
                  : 'bg-white text-[#24323D] hover:bg-[#fff9f0] border border-[#e4d3b8]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of Toys */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredToys.map((toy, idx) => (
            <div
              key={toy.id}
              className="bg-white rounded-2xl p-5 border border-[#eedbc1] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black uppercase text-amber-900 bg-amber-200/60 px-2 py-0.5 rounded">
                    PROJETO #{idx + 1}
                  </span>
                  <span className="text-xs font-semibold" style={{ color: '#24323D' }}>
                    {toy.age}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF7F0] text-emerald-800 flex items-center justify-center text-2xl shrink-0 border border-[#c2e5d3]">
                    {getToyEmoji(toy.id)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold leading-tight" style={{ color: '#073D24' }}>
                      {toy.name}
                    </h3>
                    <span className="text-[11px] text-emerald-700 font-semibold">
                      {toy.badge}
                    </span>
                  </div>
                </div>

                <p className="text-xs leading-relaxed mb-4" style={{ color: '#24323D' }}>
                  {toy.description}
                </p>

                <div className="space-y-1 mb-4 text-[11px]">
                  <span className="font-bold block" style={{ color: '#073D24' }}>Materiais principais:</span>
                  <div className="flex flex-wrap gap-1">
                    {toy.materials.slice(0, 3).map((mat, i) => (
                      <span
                        key={i}
                        className="bg-[#FFF4E4] px-2 py-0.5 rounded border border-[#eedbc1] text-[10px] font-medium"
                        style={{ color: '#24323D' }}
                      >
                        {mat}
                      </span>
                    ))}
                    {toy.materials.length > 3 && (
                      <span className="text-[10px] self-center" style={{ color: '#24323D' }}>
                        +{toy.materials.length - 3} mais
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveToyModal(toy)}
                className="w-full py-2.5 px-3 bg-[#FFF4E4] hover:bg-[#ffeed3] font-bold text-xs rounded-xl border border-[#e4d3b8] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                style={{ color: '#073D24' }}
              >
                <Eye className="w-3.5 h-3.5 text-emerald-700" />
                <span>Ver Passo a Passo Detalhado</span>
              </button>
            </div>
          ))}
        </div>

        {/* Big Pulsing CTA under Toys */}
        <div className="text-center">
          <button
            onClick={onCtaClick}
            className="btn-reidotenebrio w-full sm:w-auto text-base sm:text-lg"
          >
            <span>QUERO ACESSO A TODOS OS 10 PROJETOS 🚀</span>
          </button>
        </div>
      </div>

      {/* Interactive Modal showing instructions */}
      {activeToyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 text-stone-900 shadow-2xl relative">
            <button
              onClick={() => setActiveToyModal(null)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl p-2 bg-emerald-50 rounded-xl">
                {getToyEmoji(activeToyModal.id)}
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  {activeToyModal.category.toUpperCase()} • {activeToyModal.age}
                </span>
                <h3 className="text-lg font-black text-stone-900 mt-1 leading-tight">
                  {activeToyModal.name}
                </h3>
              </div>
            </div>

            <p className="text-xs text-stone-600 mb-4 leading-relaxed">
              {activeToyModal.description}
            </p>

            <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200 mb-4">
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wide mb-2">
                Materiais Necessários:
              </h4>
              <ul className="text-xs text-stone-700 space-y-1">
                {activeToyModal.materials.map((m, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wide mb-2">
                Como Fazer (Passo a Passo Ilustrado):
              </h4>
              <ol className="text-xs text-stone-700 space-y-2 list-decimal list-inside">
                {activeToyModal.steps.map((s, i) => (
                  <li key={i} className="leading-relaxed">
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2 mb-6">
              <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Atenção Responsável:</strong> {activeToyModal.adultHelp ? 'Requer supervisão de um adulto para o manuseio de tesouras ou furos.' : 'Projeto simples e seguro para crianças realizarem acompanhadas.'}
              </span>
            </div>

            <button
              onClick={() => {
                setActiveToyModal(null);
                onCtaClick();
              }}
              className="btn-reidotenebrio w-full text-xs sm:text-sm py-3"
            >
              <span>GARANTIR GUIA COMPLETO COM TODAS AS ILUSTRAÇÕES</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
