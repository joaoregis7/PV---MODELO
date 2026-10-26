import React from 'react';

interface TestimonialImage {
  id: number;
  src: string;
  fallback: string;
  alt: string;
}

const TESTIMONIAL_IMAGES: TestimonialImage[] = [
  {
    id: 1,
    src: '/depoimento1.webp',
    fallback: '/depoimento1.jpg',
    alt: 'Depoimento real de cliente 1',
  },
  {
    id: 2,
    src: '/depoimento2.webp',
    fallback: '/depoimento2.jpg',
    alt: 'Depoimento real de cliente 2',
  },
  {
    id: 3,
    src: '/depoimento3.webp',
    fallback: '/depoimento3.jpg',
    alt: 'Depoimento real de cliente 3',
  },
  {
    id: 4,
    src: '/depoimento4.webp',
    fallback: '/depoimento4.jpg',
    alt: 'Depoimento real de cliente 4 (Gabriela Nunes)',
  },
  {
    id: 5,
    src: '/depoimento5.webp',
    fallback: '/depoimento5.jpg',
    alt: 'Depoimento real de cliente 5',
  },
  {
    id: 6,
    src: '/depoimento6.webp',
    fallback: '/depoimento6.jpg',
    alt: 'Depoimento real de cliente 6',
  },
];

const TestimonialCard: React.FC<{ item: TestimonialImage }> = ({ item }) => {
  const [imgSrc, setImgSrc] = React.useState(item.src);

  const handleError = () => {
    if (imgSrc !== item.fallback) {
      setImgSrc(item.fallback);
    }
  };

  return (
    <div
      className="h-[430px] sm:h-[500px] w-auto shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden border-4 sm:border-[6px] border-white shadow-xl relative flex items-center justify-center select-none"
      style={{
        boxShadow: '0 12px 30px -5px rgba(7, 61, 36, 0.16), 0 8px 10px -6px rgba(0, 0, 0, 0.08)',
      }}
    >
      <img
        src={imgSrc}
        alt={item.alt}
        onError={handleError}
        loading="lazy"
        decoding="async"
        width="270"
        height="480"
        className="h-full w-auto block select-none pointer-events-none"
      />
    </div>
  );
};

export const TestimonialsSection: React.FC = () => {
  // Duplicar a lista para criar o loop contínuo infinito e sem emendas
  const carouselItems = [...TESTIMONIAL_IMAGES, ...TESTIMONIAL_IMAGES];

  return (
    <section
      id="testimonials-section"
      className="pt-10 pb-12 sm:pt-14 sm:pb-16 relative overflow-hidden border-b border-[#ecd8be]"
      style={{
        backgroundColor: '#FFF8EE',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Título da Seção */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-black text-center tracking-tight mb-2 uppercase"
          style={{ color: '#073D24' }}
        >
          NOSSOS CLIENTES APROVAM O MATERIAL
        </h2>
        <p
          className="text-xs sm:text-sm max-w-lg mx-auto mb-6 sm:mb-8 font-medium"
          style={{ color: '#24323D' }}
        >
          Veja os relatos reais de quem já comprou e aplicou o acervo com as crianças:
        </p>
      </div>

      {/* Carrossel Horizontal Contínuo Infinito */}
      <div className="relative w-full overflow-hidden py-2 sm:py-3 select-none">
        {/* Efeito de fade nas bordas esquerda e direita */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-[#FFF8EE] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-[#FFF8EE] to-transparent z-10" />

        {/* Trilha deslizante contínua com a mesma velocidade e borda branca perfeita */}
        <div className="animate-testimonials-carousel flex gap-6 px-4">
          {carouselItems.map((item, idx) => (
            <TestimonialCard
              key={`${item.id}-${idx}`}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
