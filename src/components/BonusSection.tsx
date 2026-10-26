import React, { useState } from 'react';
import { TOY_GUIDES, GuideItem } from '../data/guidesData';

interface BonusSectionProps {
  onCtaClick: () => void;
}

// Single deliverable card - pure fixed image with fallback poster
const PureDeliverableCard: React.FC<{
  guide: GuideItem;
}> = ({ guide }) => {
  const [currentSrcIdx, setCurrentSrcIdx] = useState(0);
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    if (currentSrcIdx < guide.imageFilenames.length - 1) {
      setCurrentSrcIdx((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  const imageToDisplay = !hasError ? guide.imageFilenames[currentSrcIdx] : null;

  return (
    <div
      className="w-[270px] sm:w-[320px] shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden border-4 sm:border-[6px] border-white shadow-xl bg-white relative flex flex-col select-none"
      style={{
        boxShadow: '0 12px 30px -5px rgba(84, 42, 121, 0.18), 0 8px 10px -6px rgba(0, 0, 0, 0.08)'
      }}
    >
      {/* If the image file exists */}
      {imageToDisplay && !hasError ? (
        <img
          src={imageToDisplay}
          alt={guide.fullName}
          referrerPolicy="no-referrer"
          onError={handleImageError}
          loading="lazy"
          decoding="async"
          width="320"
          height="480"
          className="w-full h-auto block"
        />
      ) : (
        /* Deliverable Poster View */
        <div
          className="w-full h-[460px] sm:h-[520px] flex flex-col justify-between p-5 text-left relative overflow-hidden"
          style={{ backgroundColor: '#ffffff' }}
        >
          {/* Subtle colored accent strip on top */}
          <div
            className="absolute top-0 inset-x-0 h-2"
            style={{ backgroundColor: guide.themeColor }}
          />

          {/* Poster Header */}
          <div className="pt-1">
            <span className="inline-block bg-amber-400 text-stone-900 text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-wide mb-1 shadow-xs">
              COMO FAZER UM
            </span>
            <h3
              className="text-xl sm:text-2xl font-black uppercase tracking-tight leading-none mb-1"
              style={{ color: guide.themeColor }}
            >
              {guide.name}
            </h3>
            <div className="text-[10px] font-extrabold text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded-full inline-block border border-emerald-300">
              COM MATERIAIS RECICLÁVEIS
            </div>

            {/* Toy Illustration Area */}
            <div
              className="w-full py-6 rounded-2xl flex flex-col items-center justify-center my-3 shadow-inner border border-stone-100"
              style={{ backgroundColor: guide.bgColor }}
            >
              <span className="text-6xl drop-shadow-md">
                {guide.previewEmoji}
              </span>
              <span className="text-[11px] font-bold text-stone-700 mt-2 px-3 text-center">
                {guide.category}
              </span>
            </div>
          </div>

          {/* Key Materials Preview from the Deliverable */}
          <div className="bg-[#faf8fc] rounded-2xl p-3 border border-stone-200/80 mb-2">
            <span className="text-[10px] font-black uppercase tracking-wider text-stone-500 block mb-1">
              📦 Materiais Necessários:
            </span>
            <ul className="text-[11px] text-stone-800 space-y-0.5">
              {guide.materials.slice(0, 3).map((mat, i) => (
                <li key={i} className="flex items-center gap-1.5 truncate">
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: guide.themeColor }}
                  />
                  <span className="truncate font-medium">{mat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Slogan pill from original poster */}
          <div
            className="text-center py-1.5 px-3 rounded-xl text-[11px] font-bold border"
            style={{
              backgroundColor: guide.bgColor,
              color: guide.themeColor,
              borderColor: guide.borderColor
            }}
          >
            "{guide.tagline}"
          </div>
        </div>
      )}
    </div>
  );
};

export const BonusSection: React.FC<BonusSectionProps> = ({ onCtaClick }) => {
  // Duplicate items array once to achieve infinite seamless loop for all 11 toys
  const carouselItems = [...TOY_GUIDES, ...TOY_GUIDES];

  return (
    <section
      id="bonus-section"
      className="pt-8 pb-10 sm:pt-12 sm:pb-14 relative overflow-hidden border-t border-b border-[#ebdcfc]"
      style={{
        backgroundColor: '#F4ECFF'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Heading */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 tracking-tight text-center uppercase"
          style={{ color: '#542A79' }}
        >
          VEJA O MATERIAL POR DENTRO
        </h2>
      </div>

      {/* Infinite Horizontal Carousel Container (All 11 toys fixed) */}
      <div className="relative w-full overflow-hidden py-2 sm:py-3 select-none">
        {/* Soft edge blur / gradient masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-[#F4ECFF] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-[#F4ECFF] to-transparent z-10" />

        {/* Scrolling Track */}
        <div className="animate-infinite-carousel flex gap-6 px-4">
          {carouselItems.map((guide, idx) => (
            <PureDeliverableCard
              key={`${guide.slug}-${idx}`}
              guide={guide}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
