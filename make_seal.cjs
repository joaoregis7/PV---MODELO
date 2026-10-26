const fs = require('fs');

// Generate 36-point scalloped starburst path
const cx = 300, cy = 300;
const points = 36;
const rOuter = 280;
const rInner = 250;
let pathD = '';

for (let i = 0; i < points * 2; i++) {
  const angle = (i * Math.PI) / points - Math.PI / 2;
  const r = i % 2 === 0 ? rOuter : rInner;
  const x = cx + r * Math.cos(angle);
  const y = cy + r * Math.sin(angle);
  if (i === 0) {
    pathD += `M ${x.toFixed(2)} ${y.toFixed(2)}`;
  } else {
    pathD += ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
  }
}
pathD += ' Z';

// Generate radial sunburst rays for the dark background
let rays = '';
const numRays = 48;
for (let i = 0; i < numRays; i++) {
  const angle = (i * 2 * Math.PI) / numRays;
  const x2 = cx + 180 * Math.cos(angle);
  const y2 = cy + 180 * Math.sin(angle);
  rays += `<line x1="${cx}" y1="${cy}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="rgba(245, 206, 89, 0.12)" stroke-width="2" />\n`;
}

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Gold Gradients -->
    <linearGradient id="goldRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E5A93B"/>
      <stop offset="25%" stop-color="#FCE589"/>
      <stop offset="50%" stop-color="#CA861E"/>
      <stop offset="75%" stop-color="#FEEBA0"/>
      <stop offset="100%" stop-color="#B27414"/>
    </linearGradient>

    <radialGradient id="goldRing" cx="50%" cy="50%" r="50%" fx="35%" fy="35%">
      <stop offset="0%" stop-color="#FFF3B3"/>
      <stop offset="35%" stop-color="#E5A835"/>
      <stop offset="70%" stop-color="#9E610A"/>
      <stop offset="90%" stop-color="#F5CF6B"/>
      <stop offset="100%" stop-color="#804E07"/>
    </radialGradient>

    <linearGradient id="textGold" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFF8D6"/>
      <stop offset="35%" stop-color="#F7D067"/>
      <stop offset="70%" stop-color="#DDA02A"/>
      <stop offset="100%" stop-color="#A1690F"/>
    </linearGradient>

    <linearGradient id="sevenGold" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFDF0"/>
      <stop offset="25%" stop-color="#FFE082"/>
      <stop offset="50%" stop-color="#F5C042"/>
      <stop offset="75%" stop-color="#D4911B"/>
      <stop offset="100%" stop-color="#9C6409"/>
    </linearGradient>

    <radialGradient id="darkCenter" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#2c2a29"/>
      <stop offset="55%" stop-color="#181716"/>
      <stop offset="85%" stop-color="#0f0e0d"/>
      <stop offset="100%" stop-color="#050505"/>
    </radialGradient>

    <radialGradient id="bottomHighlight" cx="50%" cy="85%" r="40%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.45)"/>
      <stop offset="50%" stop-color="rgba(255,215,100,0.15)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>

    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.35"/>
    </filter>

    <filter id="innerShadow">
      <feOffset dx="0" dy="3"/>
      <feGaussianBlur stdDeviation="3" result="offset-blur"/>
      <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"/>
      <feFlood flood-color="black" flood-opacity="0.7" result="color"/>
      <feComposite operator="in" in="color" in2="inverse" result="shadow"/>
      <feComposite operator="over" in="shadow" in2="SourceGraphic"/>
    </filter>

    <filter id="textGlow">
      <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.8"/>
    </filter>

    <!-- Paths for Arched Text -->
    <!-- Top arc: center 300,300, radius 195 -->
    <path id="topArc" d="M 125,300 A 175,175 0 0,1 475,300" fill="none"/>
    <!-- Bottom arc: center 300,300, radius 195 -->
    <path id="bottomArc" d="M 475,300 A 175,175 0 0,1 125,300" fill="none"/>
  </defs>

  <!-- Outer Shadow & Scalloped Ribbon Base -->
  <path d="${pathD}" fill="url(#goldRibbon)" filter="url(#shadow)" stroke="#8F570B" stroke-width="2"/>

  <!-- Scalloped Inner Border -->
  <circle cx="300" cy="300" r="248" fill="none" stroke="#7A4705" stroke-width="2"/>

  <!-- Outer Solid Gold Ring -->
  <circle cx="300" cy="300" r="240" fill="url(#goldRing)" stroke="#FFECA0" stroke-width="3"/>
  <circle cx="300" cy="300" r="226" fill="none" stroke="#5C3602" stroke-width="3"/>

  <!-- Middle Gold Groove -->
  <circle cx="300" cy="300" r="220" fill="url(#goldRibbon)"/>
  <circle cx="300" cy="300" r="215" fill="none" stroke="#FFECA0" stroke-width="1.5"/>

  <!-- Inner Dark Disc -->
  <circle cx="300" cy="300" r="202" fill="url(#darkCenter)" stroke="#5A3705" stroke-width="4"/>
  <circle cx="300" cy="300" r="198" fill="none" stroke="#E5A835" stroke-width="1.5"/>

  <!-- Radial Sunburst Rays in Center -->
  <g opacity="0.65">
    ${rays}
  </g>

  <!-- Inner Dark Sunken Ring for Text Contrast -->
  <circle cx="300" cy="300" r="148" fill="none" stroke="#E5A835" stroke-width="1.5" opacity="0.8"/>

  <!-- Arched Top Text: GARANTIA -->
  <text font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="34" letter-spacing="14" fill="url(#textGold)" filter="url(#textGlow)">
    <textPath href="#topArc" startOffset="50%" text-anchor="middle">
      GARANTIA
    </textPath>
  </text>

  <!-- Arched Bottom Text: GARANTIA -->
  <text font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="34" letter-spacing="14" fill="url(#textGold)" filter="url(#textGlow)">
    <textPath href="#bottomArc" startOffset="50%" text-anchor="middle">
      GARANTIA
    </textPath>
  </text>

  <!-- Left Stars (3 stars) -->
  <g fill="url(#textGold)" filter="url(#textGlow)">
    <!-- Top-left star -->
    <path d="M 124,242 l 3.5,7 7.7,1.1 -5.6,5.4 1.3,7.7 -6.9,-3.6 -6.9,3.6 1.3,-7.7 -5.6,-5.4 7.7,-1.1 z" transform="rotate(-15 124 242) scale(0.85)"/>
    <!-- Middle-left star (larger) -->
    <path d="M 106,290 l 4.5,9 9.9,1.4 -7.2,7 1.7,9.9 -8.9,-4.7 -8.9,4.7 1.7,-9.9 -7.2,-7 9.9,-1.4 z" transform="scale(0.9)"/>
    <!-- Bottom-left star -->
    <path d="M 124,358 l 3.5,7 7.7,1.1 -5.6,5.4 1.3,7.7 -6.9,-3.6 -6.9,3.6 1.3,-7.7 -5.6,-5.4 7.7,-1.1 z" transform="rotate(15 124 358) scale(0.85)"/>
  </g>

  <!-- Right Stars (3 stars) -->
  <g fill="url(#textGold)" filter="url(#textGlow)">
    <!-- Top-right star -->
    <path d="M 476,242 l 3.5,7 7.7,1.1 -5.6,5.4 1.3,7.7 -6.9,-3.6 -6.9,3.6 1.3,-7.7 -5.6,-5.4 7.7,-1.1 z" transform="rotate(15 476 242) scale(0.85)"/>
    <!-- Middle-right star (larger) -->
    <path d="M 494,290 l 4.5,9 9.9,1.4 -7.2,7 1.7,9.9 -8.9,-4.7 -8.9,4.7 1.7,-9.9 -7.2,-7 9.9,-1.4 z" transform="scale(0.9)"/>
    <!-- Bottom-right star -->
    <path d="M 476,358 l 3.5,7 7.7,1.1 -5.6,5.4 1.3,7.7 -6.9,-3.6 -6.9,3.6 1.3,-7.7 -5.6,-5.4 7.7,-1.1 z" transform="rotate(-15 476 358) scale(0.85)"/>
  </g>

  <!-- Center Big "7" -->
  <text x="304" y="325" text-anchor="middle" font-family="'Montserrat', 'Arial Black', Impact, sans-serif" font-weight="900" font-size="160" fill="url(#sevenGold)" filter="url(#textGlow)">
    7
  </text>

  <!-- Center Text "DIAS" -->
  <text x="300" y="380" text-anchor="middle" font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="44" letter-spacing="4" fill="url(#textGold)" filter="url(#textGlow)">
    DIAS
  </text>

  <!-- Bottom Metallic Reflection Arc -->
  <path d="M 180,380 A 140,140 0 0,0 420,380 A 130,130 0 0,1 180,380" fill="url(#bottomHighlight)" opacity="0.6"/>
</svg>`;

fs.writeFileSync('public/selo-garantia.svg', svg);
console.log('SVG created successfully at public/selo-garantia.svg');
