export interface GuideItem {
  id: number;
  slug: string;
  name: string;
  fullName: string;
  tagline: string;
  category: string;
  themeColor: string;
  bgColor: string;
  borderColor: string;
  badge: string;
  imageFilenames: string[];
  materials: string[];
  keyFeature: string;
  stepsCount: number;
  previewEmoji: string;
}

export const TOY_GUIDES: GuideItem[] = [
  {
    id: 1,
    slug: 'foguete',
    name: 'Foguete Espacial',
    fullName: 'Como Fazer um Foguete',
    tagline: 'Uma aventura espacial feita de reutilização!',
    category: 'Garrafa PET & Papelão',
    themeColor: '#7c3aed',
    bgColor: '#ede9fe',
    borderColor: '#c4b5fd',
    badge: 'Modelo #1',
    imageFilenames: ['/foguete.webp', '/foguete.png', 'foguete.png'],
    materials: [
      '1 garrafa PET',
      'Papelão resistente para aletas',
      'Cone de papel para a ponta',
      'Tinta acrílica e fitas coloridas',
      'Cola quente ou fita adesiva'
    ],
    keyFeature: 'Bico aerodinâmico cônico com aletas estabilizadoras e propulsores',
    stepsCount: 9,
    previewEmoji: '🚀'
  },
  {
    id: 2,
    slug: 'lagarta',
    name: 'Lagarta',
    fullName: 'Como Fazer uma Lagarta',
    tagline: 'Criar, brincar e reutilizar!',
    category: '12 Tampinhas & Barbante',
    themeColor: '#eab308',
    bgColor: '#fef08a',
    borderColor: '#fde047',
    badge: 'Modelo #2',
    imageFilenames: ['/lagarta.webp', '/lagarta.png', 'lagarta.png'],
    materials: [
      '12 tampinhas plásticas coloridas',
      'Barbante grosso resistente',
      'Papel branco e preto para olhos',
      '1 arame chenille para antenas',
      'Cola e canetinha para sorriso'
    ],
    keyFeature: 'Corpo segmentado flexível ondulante com anteninhas chenille',
    stepsCount: 9,
    previewEmoji: '🐛'
  },
  {
    id: 3,
    slug: 'lagosta',
    name: 'Lagosta',
    fullName: 'Como Fazer uma Lagosta',
    tagline: 'Uma nova amiga feita de reutilização!',
    category: 'Garrafa PET Pequena',
    themeColor: '#dc2626',
    bgColor: '#fee2e2',
    borderColor: '#fca5a5',
    badge: 'Modelo #3',
    imageFilenames: ['/lagosta.webp', '/lagosta.png', 'lagosta.png'],
    materials: [
      '1 garrafa PET pequena',
      'EVA vermelho e com glitter',
      'EVA branco e preto',
      'Tinta vermelha e pincel',
      'Cola quente ou silicone'
    ],
    keyFeature: 'Garras articuladas duplas, corpinho texturizado e 6 perninhas',
    stepsCount: 9,
    previewEmoji: '🦞'
  },
  {
    id: 4,
    slug: 'tubarao',
    name: 'Tubarão',
    fullName: 'Como Fazer um Tubarão',
    tagline: 'Uma aventura feita de reutilização!',
    category: 'Garrafa PET de 2L & EVA',
    themeColor: '#0284c7',
    bgColor: '#e0f2fe',
    borderColor: '#7dd3fc',
    badge: 'Modelo #4',
    imageFilenames: ['/tubarao.webp', '/tubarão.webp', '/tubarao.png', '/tubarão.png', 'tubarao.png', 'tubarão.png'],
    materials: [
      '1 garrafa PET de 2 litros',
      'EVA azul',
      'Papel branco e preto',
      'Cola e tesoura sem ponta',
      'Canetinha preta'
    ],
    keyFeature: 'Boca articulada com dentes de papel e nadadeiras de EVA brilhante',
    stepsCount: 9,
    previewEmoji: '🦈'
  },
  {
    id: 5,
    slug: 'dinossauro',
    name: 'Dinossauro',
    fullName: 'Como Fazer um Dinossauro',
    tagline: 'Uma ideia jurássica feita de reutilização!',
    category: 'Garrafa PET Verde',
    themeColor: '#16a34a',
    bgColor: '#dcfce7',
    borderColor: '#86efac',
    badge: 'Modelo #5',
    imageFilenames: ['/dinossauro.webp', '/dinossauro.png', 'dinossauro.png'],
    materials: [
      '1 garrafa PET verde',
      'EVA em tons de verde',
      'EVA branco e preto',
      'Cola quente',
      'Tesoura sem ponta e canetinha'
    ],
    keyFeature: 'Placas dorsais em 3 tamanhos, 4 patas largas e cauda jurássica',
    stepsCount: 9,
    previewEmoji: '🦖'
  },
  {
    id: 6,
    slug: 'escavadeira',
    name: 'Escavadeira',
    fullName: 'Como Fazer uma Escavadeira',
    tagline: 'Construir também é imaginar!',
    category: 'Rolos de Papelão & Tampinhas',
    themeColor: '#ca8a04',
    bgColor: '#fef9c3',
    borderColor: '#fde047',
    badge: 'Modelo #6',
    imageFilenames: ['/escavadeira.webp', '/escavadeira.png', 'escavadeira.png'],
    materials: [
      '2 rolos de papelão',
      '5 tampinhas plásticas',
      'Papelão para base e teto',
      '2 palitos de sorvete',
      'Tinta amarela e cola'
    ],
    keyFeature: 'Pá dianteira funcional com braços de palito e cabine de motorista',
    stepsCount: 9,
    previewEmoji: '🚜'
  },
  {
    id: 7,
    slug: 'carrinho',
    name: 'Carrinho',
    fullName: 'Como Fazer um Carrinho',
    tagline: 'Velocidade e diversão sobre rodinhas recicladas!',
    category: 'Caixinha de Leite & Tampinhas',
    themeColor: '#ea580c',
    bgColor: '#ffedd5',
    borderColor: '#fdba74',
    badge: 'Modelo #7',
    imageFilenames: ['/carrinho.webp', '/carrinho.png', 'carrinho.png'],
    materials: [
      '1 caixinha de leite ou suco',
      '4 tampinhas plásticas para as rodas',
      '2 palitos de churrasco para os eixos',
      'Canudinhos para guia do eixo',
      'Tinta acrílica e adesivos decorativos'
    ],
    keyFeature: 'Rodas que giram livremente nos eixos com chassi reforçado',
    stepsCount: 9,
    previewEmoji: '🚗'
  },
  {
    id: 8,
    slug: 'trem',
    name: 'Trem',
    fullName: 'Como Fazer um Trem',
    tagline: 'Uma viagem feita de criatividade!',
    category: '2 Garrafas PET & Tampinhas',
    themeColor: '#2563eb',
    bgColor: '#dbeafe',
    borderColor: '#93c5fd',
    badge: 'Modelo #8',
    imageFilenames: ['/trem.webp', '/trem.png', 'trem.png'],
    materials: [
      '2 garrafas PET pequenas',
      '8 tampinhas (4 vermelhas, 4 azuis)',
      'Papelão para a cabine',
      '1 rolinho de papelão',
      'Cola e canetinha preta'
    ],
    keyFeature: 'Locomotiva acoplada com chaminé de rolinho e vagão de carga',
    stepsCount: 9,
    previewEmoji: '🚂'
  },
  {
    id: 9,
    slug: 'castelo',
    name: 'Castelo',
    fullName: 'Como Fazer um Castelo',
    tagline: 'Um reino inteiro feito de imaginação!',
    category: '3 Tubos de Papelão & EVA',
    themeColor: '#db2777',
    bgColor: '#fce7f3',
    borderColor: '#f9a8d4',
    badge: 'Modelo #9',
    imageFilenames: ['/castelo.webp', '/castelo.png', 'castelo.png'],
    materials: [
      '3 tubos de papelão (2 altos e 1 baixo)',
      'Papelão para a base oval',
      'EVA rosa, branco e verde',
      'Papel rosa com glitter',
      '2 palitos de churrasco com bandeiras'
    ],
    keyFeature: 'Torres cilíndricas com telhados cônicos, ameias centrais e portão',
    stepsCount: 9,
    previewEmoji: '🏰'
  },
  {
    id: 10,
    slug: 'telefone',
    name: 'Telefone',
    fullName: 'Como Fazer um Telefone',
    tagline: 'Uma ligação direta com a imaginação!',
    category: '2 Caixas de Papelão & Tampinhas',
    themeColor: '#dc2626',
    bgColor: '#fee2e2',
    borderColor: '#fca5a5',
    badge: 'Modelo #10',
    imageFilenames: ['/telefone.webp', '/telefone.png', 'telefone.png'],
    materials: [
      '2 caixas de papelão',
      'Papel vermelho e amarelo',
      '12 tampinhas plásticas',
      '1 pedaço de barbante grosso espiral',
      'Cola quente e canetinha preta'
    ],
    keyFeature: 'Teclado com 12 botões numéricos completos e fone com fio em espiral',
    stepsCount: 9,
    previewEmoji: '☎️'
  },
  {
    id: 11,
    slug: 'violao',
    name: 'Violão',
    fullName: 'Como Fazer um Violão',
    tagline: 'Criatividade que também faz música!',
    category: 'Embalagem de Amaciante & Elásticos',
    themeColor: '#c026d3',
    bgColor: '#fae8ff',
    borderColor: '#f0abfc',
    badge: 'Modelo #11',
    imageFilenames: ['/violao.webp', '/violão.webp', '/violao.png', '/violão.png', 'violao.png', 'violão.png'],
    materials: [
      '1 embalagem de amaciante vazia',
      '1 pedaço de cabo de vassoura',
      '4 elásticos grandes para cordas',
      '1 tira de papelão para o cavalete',
      'Tinta rosa, adesivos e cola quente'
    ],
    keyFeature: '4 cordas sonoras com vibração real, cavalete de apoio e braço de madeira',
    stepsCount: 9,
    previewEmoji: '🎸'
  }
];
