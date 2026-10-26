/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { TopUrgencyBar } from './components/TopUrgencyBar';
import { HeroSection } from './components/HeroSection';
import { BonusSection } from './components/BonusSection';
import { ExclusiveBonusSection } from './components/ExclusiveBonusSection';
import { IdealForSection } from './components/IdealForSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { AccessStepsSection } from './components/AccessStepsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ExitIntentModal } from './components/ExitIntentModal';
import { CHECKOUT_URLS, goToCheckout } from './config/checkoutUrls';

export default function App() {
  const [isExitIntentOpen, setIsExitIntentOpen] = useState(false);

  // Exit intent detection on desktop and mobile back button
  useEffect(() => {
    let triggered = false;

    // 1. Desktop: Cursor leaves viewport towards the top
    const handleMouseOut = (e: MouseEvent) => {
      if ((e.clientY <= 15 || e.pageY <= 15) && !triggered) {
        triggered = true;
        setIsExitIntentOpen(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 15 && !triggered) {
        triggered = true;
        setIsExitIntentOpen(true);
      }
    };

    document.addEventListener('mouseout', handleMouseOut);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    // 2. Mobile & Browser Back Button (popstate trap)
    try {
      if (typeof window !== 'undefined' && window.history) {
        window.history.pushState({ page: 'vsl' }, '', window.location.href);
        const handlePopState = () => {
          setIsExitIntentOpen(true);
          window.history.pushState({ page: 'vsl' }, '', window.location.href);
        };
        window.addEventListener('popstate', handlePopState);
        return () => {
          document.removeEventListener('mouseout', handleMouseOut);
          document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
          window.removeEventListener('popstate', handlePopState);
        };
      }
    } catch {
      // ignore
    }

    return () => {
      document.removeEventListener('mouseout', handleMouseOut);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const scrollToPricing = useCallback(() => {
    const el = document.getElementById('pricing-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      goToCheckout(CHECKOUT_URLS.planoCompleto);
    }
  }, []);

  const handleSelectPlan = useCallback(
    (plan: { name: string; price: string; installments: string; isFull: boolean }) => {
      if (!plan.isFull) {
        // Ao clicar no Plano Básico, exibe a oferta especial com 40% OFF
        setIsExitIntentOpen(true);
      } else {
        // Redireciona diretamente para o link de checkout do Plano Completo
        goToCheckout(CHECKOUT_URLS.planoCompleto);
      }
    },
    []
  );

  const handleClaimDiscount = useCallback(() => {
    setIsExitIntentOpen(false);
    // Redireciona diretamente para o link da oferta especial (R$ 19,90)
    goToCheckout(CHECKOUT_URLS.ofertaEspecial);
  }, []);

  const handleDeclineToBasic = useCallback(() => {
    setIsExitIntentOpen(false);
    // Redireciona diretamente para o checkout do Plano Básico (R$ 10,00)
    goToCheckout(CHECKOUT_URLS.planoBasico);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8EE] text-stone-900 font-sans selection:bg-emerald-500 selection:text-white">
      {/* 1. Barra de Urgência no Topo */}
      <TopUrgencyBar />

      {/* 2. Dobra Principal (Hero) com Mockup Principal */}
      <HeroSection onCtaClick={scrollToPricing} />

      {/* 3. Veja o material por dentro (Carrossel Contínuo com os 11 brinquedos) */}
      <BonusSection onCtaClick={scrollToPricing} />

      {/* 4. Bloco de Bônus Exclusivos */}
      <ExclusiveBonusSection onCtaClick={scrollToPricing} />

      {/* 5. Este material é ideal para você */}
      <IdealForSection />

      {/* 6. Prova Social e Depoimentos */}
      <TestimonialsSection />

      {/* 7. Planos e Preços (Redirecionamento Direto para o Checkout) */}
      <PricingSection onSelectPlan={handleSelectPlan} />

      {/* 8. Garantia de 7 Dias Incondicional com Selo Otimizado */}
      <GuaranteeSection />

      {/* 9. Passo a Passo de Acesso com Passo 4 em Verde */}
      <AccessStepsSection onCtaClick={scrollToPricing} />

      {/* 10. FAQ com Perguntas Frequentes */}
      <FaqSection onCtaClick={scrollToPricing} />

      {/* 11. Rodapé Centralizado com Aviso da Lei Antipirataria */}
      <Footer />

      {/* Modal de Oferta Especial (R$ 17,90 ao clicar no plano básico ou ao tentar sair) */}
      {isExitIntentOpen && (
        <ExitIntentModal
          isOpen={isExitIntentOpen}
          onClose={() => setIsExitIntentOpen(false)}
          onClaimDiscount={handleClaimDiscount}
          onDeclineToBasic={handleDeclineToBasic}
        />
      )}
    </div>
  );
}
