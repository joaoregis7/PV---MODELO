/**
 * CONFIGURAÇÃO DOS LINKS DE CHECKOUT
 * Insira aqui os links da sua plataforma de pagamento (ex: Kiwify, Hotmart, Eduzz, etc.)
 */

export const CHECKOUT_URLS = {
  // Link do Plano Completo (R$ 29,90)
  planoCompleto: 'https://app.zuptos.com.br/checkout/d9294be3ca36ba18',

  // Link do Plano Básico (R$ 10,00)
  planoBasico: 'https://app.zuptos.com.br/checkout/5247dc2a32716d71',

  // Link da Oferta Especial do Pop-up (R$ 19,90)
  ofertaEspecial: 'https://app.zuptos.com.br/checkout/487e8d276eaf7396',
};

/**
 * Retorna a URL de checkout preservando parâmetros de rastreamento (UTMs)
 */
export const getCheckoutUrlWithParams = (baseUrl: string): string => {
  if (!baseUrl || baseUrl.trim() === '' || baseUrl === '#') {
    return '#';
  }
  if (typeof window === 'undefined' || !window.location.search) {
    return baseUrl;
  }
  const search = window.location.search.replace(/^\?/, '');
  if (!search) return baseUrl;
  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}${search}`;
};

/**
 * Função utilitária para redirecionar diretamente ao checkout
 */
export const goToCheckout = (url: string) => {
  if (!url || url.trim() === '' || url === '#') return;
  const finalUrl = getCheckoutUrlWithParams(url);
  try {
    // Redirecionamento direto da janela atual
    window.location.href = finalUrl;
  } catch {
    window.open(finalUrl, '_blank');
  }
};
