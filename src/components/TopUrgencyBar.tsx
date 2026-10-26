import React, { useState, useEffect } from 'react';

export const TopUrgencyBar: React.FC = () => {
  const [formattedDate, setFormattedDate] = useState('21/09/2026');

  useEffect(() => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    setFormattedDate(`${day}/${month}/${year}`);
  }, []);

  return (
    <div
      id="top-urgency-bar"
      className="bg-[#e3261c] text-white py-2.5 px-4 text-center font-black text-xs sm:text-sm tracking-wide shadow-xs flex items-center justify-center min-h-[42px]"
      style={{ backgroundColor: '#e3261c' }}
    >
      <p className="text-center w-full uppercase font-black tracking-wide text-xs sm:text-sm flex items-center justify-center gap-1.5 flex-wrap m-0">
        <span>OFERTA DISPONÍVEL APENAS HOJE:</span>
        <span className="bg-black/25 px-2 py-0.5 rounded font-mono font-extrabold text-white">
          {formattedDate}
        </span>
      </p>
    </div>
  );
};
