import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { CHECKOUT_URLS, getCheckoutUrlWithParams } from '../config/checkoutUrls';

interface ExitIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClaimDiscount?: () => void;
  onDeclineToBasic?: () => void;
}

export const ExitIntentModal: React.FC<ExitIntentModalProps> = ({
  isOpen,
  onClose,
  onClaimDiscount,
  onDeclineToBasic,
}) => {
  const [popupUrl, setPopupUrl] = useState(CHECKOUT_URLS.ofertaEspecial);
  const [basicUrl, setBasicUrl] = useState(CHECKOUT_URLS.planoBasico);

  useEffect(() => {
    setPopupUrl(getCheckoutUrlWithParams(CHECKOUT_URLS.ofertaEspecial));
    setBasicUrl(getCheckoutUrlWithParams(CHECKOUT_URLS.planoBasico));
  }, []);

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDecline = onDeclineToBasic || onClose;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs animate-fadeIn overflow-hidden cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="rounded-[22px] max-w-[370px] w-full p-4 sm:p-5 text-stone-900 shadow-2xl relative text-center mx-auto cursor-default"
        style={{
          backgroundColor: '#FFFDF9',
          border: '3px solid #FF4B68',
          boxShadow: '0 20px 45px rgba(0,0,0,0.35)',
          fontFamily: "'Poppins', sans-serif",
          maxHeight: '94vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute -top-2.5 -right-2.5 sm:top-2 sm:right-2 bg-white rounded-full w-8 h-8 sm:w-9 sm:h-9 font-black flex items-center justify-center shadow-md cursor-pointer transition-transform hover:scale-105 active:scale-95 z-10"
          style={{
            border: '2px solid #FF4B68',
            color: '#FF4B68',
          }}
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
        </button>

        {/* Title */}
        <h2
          className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-none mb-1 mt-0.5"
          style={{ color: '#E74C3C' }}
        >
          ESPERE!
        </h2>
        <p className="text-[11px] sm:text-xs font-semibold text-stone-600 mb-2.5 leading-snug">
          Temos uma oferta especial pra você!
        </p>

        {/* Badge Plano Completo */}
        <div className="flex justify-center mb-2">
          <span className="inline-block bg-[#00A870] text-white font-black text-[11px] sm:text-xs px-4 py-1 rounded-full uppercase tracking-wider shadow-xs">
            PLANO COMPLETO
          </span>
        </div>

        {/* White Card with Price */}
        <div className="bg-white rounded-xl py-2 px-3 border border-stone-200/90 shadow-2xs mb-2.5 text-center">
          <div className="text-[11px] font-bold text-red-500 line-through">
            De R$ 29,90
          </div>
          <div className="flex items-center justify-center gap-2 mt-0.5">
            <span className="text-2xl sm:text-3xl font-black text-[#00A870] leading-none">
              R$ 19,90
            </span>
            <span className="bg-[#00A870] text-white text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wide">
              OFERTA ESPECIAL
            </span>
          </div>
        </div>

        {/* List of Deliverables (Sem emojis de presente, acervo completo) */}
        <div className="text-left bg-white/80 rounded-xl p-2.5 sm:p-3 border border-amber-200/70 mb-3 shadow-2xs">
          <h3 className="text-[10px] sm:text-[11px] font-black text-stone-900 uppercase mb-1.5 tracking-tight text-center sm:text-left">
            O QUE VOCÊ GANHA NO COMPLETO:
          </h3>
          <ul className="text-[11px] sm:text-xs text-stone-700 space-y-1.5 font-medium leading-tight">
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 font-bold" />
              <span><strong>Acervo Completo:</strong> Mais de 60 Brinquedos</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 font-bold" />
              <span><strong>BÔNUS 1:</strong> Bilhetes para as Famílias</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 font-bold" />
              <span><strong>BÔNUS 2:</strong> Semana da Criança Planejada</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 font-bold" />
              <span><strong>BÔNUS 3:</strong> Medalhas de Pequeno Inventor</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 font-bold" />
              <span><strong>BÔNUS 4:</strong> Diploma Amigo do Planeta</span>
            </li>
          </ul>
        </div>

        {/* CTA Button com efeito reluzente e pulso suave */}
        <a
          href={popupUrl || '#'}
          id="btn-checkout-popup"
          onClick={(e) => {
            if (!popupUrl || popupUrl === '#' || popupUrl.trim() === '') {
              e.preventDefault();
            }
            if (onClaimDiscount) {
              onClaimDiscount();
            }
          }}
          className="btn-reidotenebrio w-full py-3 px-3 text-xs sm:text-sm font-black uppercase rounded-xl tracking-wide shadow-lg cursor-pointer flex items-center justify-center animate-pulse no-underline text-center"
        >
          <span>QUERO O PLANO COMPLETO POR R$ 19,90</span>
        </a>

        {/* Dismiss Link */}
        <a
          href={basicUrl || '#'}
          id="btn-checkout-popup-basico"
          onClick={(e) => {
            if (!basicUrl || basicUrl === '#' || basicUrl.trim() === '') {
              e.preventDefault();
            }
            if (onDeclineToBasic) {
              onDeclineToBasic();
            }
          }}
          className="mt-2 text-[10px] sm:text-[11px] text-stone-500 hover:text-stone-800 underline cursor-pointer block mx-auto py-0.5 transition-colors font-medium text-center no-underline"
        >
          Não quero o desconto. Continuar com o Plano Básico por R$ 10,00 →
        </a>
      </div>
    </div>
  );
};
