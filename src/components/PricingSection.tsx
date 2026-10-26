import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { PaymentLogos } from './PaymentLogos';
import { CHECKOUT_URLS, getCheckoutUrlWithParams } from '../config/checkoutUrls';

interface PricingSectionProps {
  onSelectPlan?: (plan: { name: string; price: string; installments: string; isFull: boolean }) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [basicImgSrc, setBasicImgSrc] = useState('/mockup-basico.webp');
  const [basicFallbackIdx, setBasicFallbackIdx] = useState(0);
  const [basicImgFailed, setBasicImgFailed] = useState(false);

  const [fullImgSrc, setFullImgSrc] = useState('/mockup-principal.webp');
  const [fullFallbackIdx, setFullFallbackIdx] = useState(0);
  const [fullImgFailed, setFullImgFailed] = useState(false);

  const [basicUrl, setBasicUrl] = useState(CHECKOUT_URLS.planoBasico);
  const [fullUrl, setFullUrl] = useState(CHECKOUT_URLS.planoCompleto);

  useEffect(() => {
    setBasicUrl(getCheckoutUrlWithParams(CHECKOUT_URLS.planoBasico));
    setFullUrl(getCheckoutUrlWithParams(CHECKOUT_URLS.planoCompleto));
  }, []);

  const basicFallbacks = [
    '/mockup-basico.png',
    'https://raw.githubusercontent.com/joaoregis7/PV---MODELO/main/mockup-basico.png',
    'https://raw.githubusercontent.com/joaoregis7/PV---MODELO/main/mockup_basico.png',
  ];

  const fullFallbacks = [
    '/mockup-principal.png',
    'https://raw.githubusercontent.com/joaoregis7/PV---MODELO/main/mockup-principal.png',
    'https://raw.githubusercontent.com/joaoregis7/PV---MODELO/main/mockup_principal.png',
  ];

  const handleBasicImgError = () => {
    if (basicFallbackIdx < basicFallbacks.length) {
      setBasicImgSrc(basicFallbacks[basicFallbackIdx]);
      setBasicFallbackIdx(basicFallbackIdx + 1);
    } else {
      setBasicImgFailed(true);
    }
  };

  const handleFullImgError = () => {
    if (fullFallbackIdx < fullFallbacks.length) {
      setFullImgSrc(fullFallbacks[fullFallbackIdx]);
      setFullFallbackIdx(fullFallbackIdx + 1);
    } else {
      setFullImgFailed(true);
    }
  };

  return (
    <section
      id="pricing-section"
      className="pt-10 pb-12 sm:pt-14 sm:pb-16 px-4 sm:px-6 relative overflow-hidden"
      style={{
        backgroundColor: '#0B432D'
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Top Urgency Tag */}
        <div className="inline-block mb-3">
          <span className="text-xs sm:text-sm font-black uppercase text-white bg-red-600 px-4 py-1.5 rounded-full shadow-md">
            ⏰ ÚLTIMA CHANCE — OFERTA TERMINA HOJE
          </span>
        </div>

        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 sm:mb-8 tracking-tight text-center uppercase"
          style={{ color: '#FFFFFF' }}
        >
          ESCOLHA A OPÇÃO IDEAL PARA VOCÊ
        </h2>

        {/* 2 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch max-w-3xl mx-auto">
          {/* ========================================================================= */}
          {/* PLANO BÁSICO                                                              */}
          {/* ========================================================================= */}
          <div className="bg-[#EAF5EE] p-6 sm:p-7 flex flex-col justify-between rounded-3xl relative border border-[#c2e5d3] shadow-md text-center items-center">
            <div className="w-full flex flex-col items-center">
              {/* Título em Caixa Alta no Topo */}
              <h3 className="text-xl sm:text-2xl font-black text-[#073D24] uppercase tracking-tight mb-2">
                PLANO BÁSICO
              </h3>

              {/* Imagem Fixa do Mockup Básico */}
              <div className="w-full flex justify-center my-2">
                {!basicImgFailed ? (
                  <img
                    src={basicImgSrc}
                    alt="Mockup do Plano Básico"
                    onError={handleBasicImgError}
                    loading="lazy"
                    decoding="async"
                    width="220"
                    height="150"
                    className="w-full max-w-[220px] max-h-[150px] object-contain drop-shadow-sm"
                  />
                ) : (
                  <div className="w-full max-w-[230px] py-4 px-3 rounded-2xl border-2 border-dashed border-emerald-300 bg-white/70 flex flex-col items-center justify-center text-center shadow-2xs">
                    <span className="text-2xl mb-1">📦</span>
                    <span className="text-[11px] font-black text-[#073D24] uppercase tracking-tight">
                      Plano Básico
                    </span>
                  </div>
                )}
              </div>

              {/* O que você recebe */}
              <div className="text-xs font-black uppercase text-[#073D24] mt-3 mb-2.5">
                Você recebe:
              </div>

              {/* Bullets alinhados à esquerda (Sem WhatsApp/e-mail e sem suporte no básico) */}
              <div className="w-full max-w-[275px] mx-auto mb-5 text-left">
                <ul className="space-y-2 text-xs text-[#24323D] font-medium">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-700 shrink-0 font-bold mt-0.5" />
                    <span>Guia Digital dos 10 Brinquedos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-700 shrink-0 font-bold mt-0.5" />
                    <span>Passo a passo ilustrado explicativo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-700 shrink-0 font-bold mt-0.5" />
                    <span>Lista básica de materiais e ferramentas</span>
                  </li>
                </ul>
              </div>

              {/* Valor com ancoragem */}
              <div className="my-3 pt-3 border-t border-[#c2e5d3] w-full text-center">
                <span className="text-xs text-stone-500 block mb-0.5">
                  De <span className="text-red-600 line-through font-bold">R$ 19,90</span> por:
                </span>
                <span className="text-3xl sm:text-4xl font-black text-[#073D24] block">
                  R$ 10,00
                </span>
                <span className="text-xs font-semibold text-[#24323D] block mt-0.5">
                  Pagamento único • Sem mensalidade
                </span>
              </div>
            </div>

            <a
              href={basicUrl}
              id="btn-checkout-plano-basico"
              onClick={(e) => {
                if (!basicUrl || basicUrl === '#') {
                  e.preventDefault();
                }
                try {
                  if (typeof window !== 'undefined' && (window as any).dataLayer) {
                    (window as any).dataLayer.push({
                      event: 'gtm.linkClick',
                      'gtm.element': e.currentTarget,
                      'gtm.elementClasses': e.currentTarget.className,
                      'gtm.elementId': e.currentTarget.id,
                      'gtm.elementUrl': e.currentTarget.href,
                      'gtm.elementTarget': e.currentTarget.target || '',
                    });
                  }
                } catch {
                  // ignore
                }
                if (onSelectPlan) {
                  onSelectPlan({
                    name: 'Plano Básico',
                    price: 'R$ 10,00',
                    installments: 'Pagamento único',
                    isFull: false,
                  });
                }
              }}
              className="w-full py-3.5 px-4 bg-white hover:bg-stone-50 text-[#073D24] font-extrabold text-xs uppercase rounded-xl transition-all border-2 border-[#073D24] text-center cursor-pointer shadow-xs mt-2 block no-underline"
            >
              QUERO O PLANO BÁSICO
            </a>
          </div>

          {/* ========================================================================= */}
          {/* PLANO COMPLETO                                                            */}
          {/* ========================================================================= */}
          <div className="bg-white p-6 sm:p-7 flex flex-col justify-between rounded-3xl shadow-2xl relative border-4 border-amber-400 text-center items-center">
            {/* Top Red Badge Centralizado */}
            <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white font-black text-[11px] sm:text-xs px-4 py-1 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap">
              MAIS VENDIDO (92% ESCOLHEM)
            </div>

            <div className="w-full flex flex-col items-center mt-1">
              {/* Título em Caixa Alta no Topo */}
              <h3 className="text-2xl sm:text-3xl font-black text-stone-900 uppercase tracking-tight mb-0.5">
                PLANO COMPLETO
              </h3>

              {/* Acesso Completo e Vitalício */}
              <span className="text-xs font-black uppercase text-emerald-700 tracking-wider mb-2">
                ACESSO COMPLETO & VITALÍCIO
              </span>

              {/* Imagem Fixa do Mockup Principal */}
              <div className="w-full flex justify-center my-2">
                {!fullImgFailed ? (
                  <img
                    src={fullImgSrc}
                    alt="Mockup do Plano Completo"
                    onError={handleFullImgError}
                    loading="lazy"
                    decoding="async"
                    width="240"
                    height="160"
                    className="w-full max-w-[240px] max-h-[160px] object-contain drop-shadow-md"
                  />
                ) : (
                  <div className="w-full max-w-[250px] py-4 px-3 rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50/70 flex flex-col items-center justify-center text-center shadow-2xs">
                    <span className="text-2xl mb-1">🎁</span>
                    <span className="text-[11px] font-black text-amber-900 uppercase tracking-tight">
                      Plano Completo
                    </span>
                  </div>
                )}
              </div>

              {/* Tag com Raio: Com espaçamento aprimorado para a imagem */}
              <div className="mt-3 sm:mt-4 mb-3">
                <span className="inline-block text-[11px] font-black text-amber-950 bg-amber-100 border border-amber-300/80 px-3.5 py-1 rounded-full uppercase tracking-wide shadow-2xs">
                  ⚡ 6X MAIS CONTEÚDO
                </span>
              </div>

              {/* O que você recebe no completo */}
              <div className="text-xs font-black text-stone-900 uppercase mb-2.5">
                O que você recebe no completo:
              </div>

              {/* Bullets alinhados à esquerda: Confere primeiro, presentes depois */}
              <div className="w-full max-w-[275px] mx-auto mb-4 text-left">
                <ul className="space-y-2 text-xs text-stone-800 font-medium">
                  {/* Confere primeiro */}
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 font-bold mt-0.5" />
                    <span><strong>Acervo Completo:</strong> Mais de 60 Brinquedos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 font-bold mt-0.5" />
                    <span>Acesso Imediato no WhatsApp e E-mail</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 font-bold mt-0.5" />
                    <span>Suporte 24 Horas</span>
                  </li>

                  {/* Bônus com presente depois */}
                  <li className="flex items-start gap-2">
                    <span className="text-sm shrink-0">🎁</span>
                    <span><strong>BÔNUS 1:</strong> Bilhetes para as Famílias</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sm shrink-0">🎁</span>
                    <span><strong>BÔNUS 2:</strong> Semana da Criança Planejada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sm shrink-0">🎁</span>
                    <span><strong>BÔNUS 3:</strong> Medalhas Pequeno Inventor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sm shrink-0">🎁</span>
                    <span><strong>BÔNUS 4:</strong> Diploma Amigo do Planeta</span>
                  </li>
                </ul>
              </div>

              {/* Valor ajustado para R$ 29,90 com ancoragem de R$ 59,90 */}
              <div className="my-2 pt-2 border-t border-stone-200 w-full text-center">
                <span className="text-xs text-stone-500 block mb-0.5">
                  De <span className="text-red-600 line-through font-bold">R$ 59,90</span> por:
                </span>
                <span className="text-4xl font-black text-emerald-800 block">
                  R$ 29,90
                </span>
                <span className="text-xs font-bold text-stone-600 block mt-0.5">
                  Pagamento único • Acesso vitalício
                </span>
                <span className="inline-block text-[11px] font-black uppercase text-emerald-800 bg-emerald-100/90 border border-emerald-200 px-3 py-0.5 rounded-full mt-2">
                  Você economiza R$ 30,00
                </span>
              </div>
            </div>

            {/* Botão de Compra com efeito reluzente */}
            <div className="w-full mt-3">
              <a
                href={fullUrl || '#'}
                id="btn-checkout-plano-completo"
                onClick={(e) => {
                  if (!fullUrl || fullUrl === '#') {
                    e.preventDefault();
                  }
                  if (onSelectPlan) {
                    onSelectPlan({
                      name: 'Plano Completo',
                      price: 'R$ 29,90',
                      installments: 'Acesso vitalício',
                      isFull: true,
                    });
                  }
                }}
                className="btn-reidotenebrio w-full text-sm sm:text-base py-3.5 px-4 shadow-lg cursor-pointer inline-flex items-center justify-center text-center no-underline"
              >
                <span>QUERO O PLANO COMPLETO</span>
              </a>
              <PaymentLogos />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
