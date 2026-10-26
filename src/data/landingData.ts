export interface ToyItem {
  id: string;
  name: string;
  age: string;
  category: 'PET' | 'Tampinhas' | 'Latinhas' | 'Embalagens';
  adultHelp: boolean;
  tagline: string;
  description: string;
  materials: string[];
  steps: string[];
  color: string;
  badge: string;
}

export interface BonusItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  originalPrice: string;
  icon: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  city: string;
  avatar: string;
  stars: number;
  toyMade: string;
  comment: string;
  timeAgo: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const TOYS_DATA: ToyItem[] = [
  {
    id: 'vai-e-vem',
    name: 'O Clássico Vai e Vem',
    age: 'A partir de 8 anos',
    category: 'PET',
    adultHelp: true,
    tagline: 'Exercita o corpo, diverte e envolve pessoas de todas as idades!',
    description: 'Este brinquedo nostálgico fez parte da infância de milhões de brasileiros. Excelente para coordenação motora, reflexo e brincadeiras ao ar livre entre duplas.',
    materials: [
      '2 garrafas PET transparentes',
      'Tesoura sem ponta',
      'Fita crepe',
      'Fitas adesivas coloridas para decorar',
      'Barbante resistente (aprox. 3 a 4 metros)'
    ],
    steps: [
      'Recorte a parte superior (duas taças) de duas garrafas plásticas.',
      'Da região do rótulo, recorte 4 argolas de 2 a 3 cm para fazer os pegadores de mão.',
      'Corte cada uma das taças conforme o modelo e encaixe uma dentro da outra.',
      'Passe fita crepe e fita adesiva colorida para fixar e vedar o corpo do brinquedo.',
      'Passe os dois fios de barbante compridos por dentro da garrafa unida.',
      'Amarre cada ponta do barbante em uma argola plástica (duas para cada jogador) e comece a diversão!'
    ],
    color: 'from-emerald-500 to-teal-600',
    badge: 'Mais Popular'
  },
  {
    id: 'serpente',
    name: 'Serpente Articulada de Tampinhas',
    age: 'A partir de 3 anos',
    category: 'Tampinhas',
    adultHelp: true,
    tagline: 'Simplicidade é o caminho! Articulada, colorida e super maleável.',
    description: 'Um brinquedo encantador e muito fácil de confeccionar que ensina cores, texturas e movimentos ondulatórios às crianças menores.',
    materials: [
      '30 tampinhas de refrigerante coloridas',
      '2 embalagens plásticas amarelas de Kinder Ovo (ou similar)',
      '1 metro de barbante ou elástico resistente',
      'Chave de fenda ou agulha grossa (para o adulto furar)',
      'Caneta permanente preta e vermelha'
    ],
    steps: [
      'O adulto fura cuidadosamente o centro de cada uma das 30 tampinhas com chave de fenda aquecida ou prego fino.',
      'Fure também a ponta da embalagem plástica que servirá como a cabeça e a cauda da serpente.',
      'Passe o barbante enfileirando as tampinhas de maneira alternada para criar um padrão de cores vibrante.',
      'Amarre firmemente as pontas do barbante por dentro das embalagens das extremidades.',
      'Desenhe os olhos, nariz e a boquinha da cobra com a caneta permanente e está pronta!'
    ],
    color: 'from-amber-500 to-orange-600',
    badge: 'Super Fácil'
  },
  {
    id: 'espuma-sabao',
    name: 'Super Soprador de Espuma de Sabão',
    age: 'Todas as idades',
    category: 'PET',
    adultHelp: true,
    tagline: 'Nuvens gigantes de espuma que encantam qualquer criança!',
    description: 'Transforma uma garrafa comum e uma meia velha numa fábrica mágica de nuvens de espuma branca contínua que as crianças adoram assoprar no quintal.',
    materials: [
      '1 garrafa PET de 600ml ou 500ml',
      '1 pedaço de tecido de algodão, toalhinha ou meia velha',
      '1 elástico de borracha ou pedaço de barbante',
      'Tesoura',
      'Tigela com água morna e detergente neutro ou sabão líquido'
    ],
    steps: [
      'Corte o fundo da garrafa PET com a tesoura a cerca de 5 a 7 cm da base.',
      'Cubra a abertura cortada com o pedaço de tecido ou meia, esticando bem a superfície.',
      'Prenda o tecido firmemente na garrafa usando o elástico ou amarrando com barbante.',
      'Em um prato fundo ou tigela, misture um pouco de água com sabão/detergente (gotinhas de corante alimentício são opcionais para espuma colorida).',
      'Mergulhe apenas a ponta com tecido no sabão e sopre pelo bocal da garrafa para criar serpentes gigantes de espuma!'
    ],
    color: 'from-cyan-500 to-blue-600',
    badge: 'Sucesso Total'
  },
  {
    id: 'pe-de-lata',
    name: 'O Tradicional Pé de Lata',
    age: 'A partir de 5 anos',
    category: 'Latinhas',
    adultHelp: true,
    tagline: 'Quem não tem uma lata de leite em pó ou achocolatado em casa?',
    description: 'Brincadeira clássica que desenvolve equilíbrio corporal, postura e coordenação psicomotora, lembrando as brincadeiras de rua de antigamente.',
    materials: [
      '2 latas de alumínio do mesmo tamanho (leite em pó, achocolatado ou café)',
      '1 prego grande',
      '1 martelo',
      '2 metros de cordinha de varal resistente ou barbante grosso',
      'Tinta guache ou fitas coloridas para personalizar'
    ],
    steps: [
      'Com o auxílio de um adulto, posicione o prego na borda lateral superior da lata (fundo virado para cima).',
      'Dê batidas firmes com o martelo para fazer dois furos opostos em cada lata.',
      'Passe a cordinha de varal pelos furos e dê um nó duplo reforçado pelo lado de dentro.',
      'Ajuste o tamanho da corda na altura da cintura da criança para que ela segure esticada.',
      'Pinte ou decore as latas com desenhos divertidos. Suba sobre os fundos das latas, segure as cordas e comece a caminhar!'
    ],
    color: 'from-emerald-600 to-green-700',
    badge: 'Equilíbrio & Coordenação'
  },
  {
    id: 'cavalo-de-pau',
    name: 'O Mágico Cavalo de Pau',
    age: 'A partir de 3 anos',
    category: 'PET',
    adultHelp: true,
    tagline: 'Imaginação a galope! O companheiro perfeito de cavalgadas lúdicas.',
    description: 'Feito com garrafa PET dobrada, cabo de vassoura e detalhes em EVA, estimula o faz de conta e brincadeiras ativas dentro ou fora de casa.',
    materials: [
      '1 garrafa PET de 2 litros limpa',
      'Placas de E.V.A (branco, preto, marrom ou vermelho)',
      '1 novelo de lã para a crina e franja',
      'Tesoura sem ponta',
      '2 metros de corda ou cadarço para a rédea',
      '1 cabo de vassoura de madeira ou plástico',
      'Cola de contato ou cola quente'
    ],
    steps: [
      'Dobre a garrafa ao meio cuidadosamente para formar a curvatura da cabeça do cavalo e amarre o focinho com a corda.',
      'Recorte orelhas, olhos, focinho e manchas no E.V.A usando o molde incluso no guia.',
      'Cole os detalhes com cola quente ou cola de contato sobre a garrafa plástica.',
      'Para a crina: enrole a lã 30 vezes ao redor de 5 dedos, amarre o centro e corte as pontas para abrir os fios.',
      'Para a franja: enrole 10 vezes em 4 dedos e fixe entre as orelhas.',
      'Encaixe firmemente o cabo de vassoura no gargalo da garrafa e fixe com fita ou parafuso curto.'
    ],
    color: 'from-amber-600 to-red-600',
    badge: 'Estimula o Faz de Conta'
  },
  {
    id: 'cai-nao-cai',
    name: 'Cai-Não-Cai & Lança-Bolinhas',
    age: 'A partir de 4 anos',
    category: 'PET',
    adultHelp: true,
    tagline: 'Seja com palitinhos e tampinhas ou com bolinhas de gude!',
    description: 'Jogo de suspense e estratégia onde cada jogador retira um palito por rodada tentando não deixar as bolinhas ou tampinhas caírem.',
    materials: [
      '1 garrafa PET transparente de 2 litros',
      '20 a 30 palitos de churrasco sem ponta ou canudos coloridos rígidos',
      '15 bolinhas de gude ou tampinhas de garrafa coloridas',
      'Ferro de solda ou prego aquecido para furos guiados'
    ],
    steps: [
      'Faça vários furos aos pares em alturas alternadas na metade superior da garrafa PET.',
      'Passe os palitinhos cruzando a garrafa de um lado ao outro, formando uma teia ou grade.',
      'Despeje as bolinhas ou tampinhas por cima, para que fiquem suspensas sobre a rede de palitos.',
      'Corte uma portinha na base da garrafa para recolher as peças caídas.',
      'Regras: cada participante puxa um palito na sua vez. Quem derrubar menos bolinhas vence a partida!'
    ],
    color: 'from-violet-500 to-purple-600',
    badge: 'Estratégia & Raciocínio'
  },
  {
    id: 'mini-casinhas',
    name: 'Mini Casinhas & Castelos de Embalagens',
    age: 'A partir de 3 anos',
    category: 'Embalagens',
    adultHelp: true,
    tagline: 'São tantas possibilidades de criar que vai dar vontade de fazer uma cidade inteira!',
    description: 'Dê vida a embalagens de amaciante, sabão líquido e xampu criando casinhas de boneca, garagens de carrinhos e pet shops em miniatura.',
    materials: [
      'Embalagens plásticas de amaciante ou sabão líquido bem lavadas',
      'Estilete ou tesoura resistente (uso exclusivo do adulto)',
      'Papel contact, adesivos, canetinhas permanentes',
      'Retalhos de tecido para tapetes e cortinas',
      'Mini bonequinhos ou bichinhos de brinquedo'
    ],
    steps: [
      'Lave e seque muito bem a embalagem para remover qualquer resíduo químico.',
      'Desenhe com canetinha a porta principal e as janelas na parte frontal da garrafa.',
      'O adulto recorta as aberturas com estilete, lixando as bordinhas plásticas para evitar rebarbas.',
      'Decore com a criança: use adesivos, crie telhados com papel colorido e desenhe floreiras.',
      'Coloque retalhos de pano como tapete no chão e crie móveis com caixinhas de fósforo!'
    ],
    color: 'from-pink-500 to-rose-600',
    badge: 'Criatividade Ilimitada'
  },
  {
    id: 'jogo-da-velha',
    name: 'Jogo da Velha Sustentável',
    age: 'A partir de 4 anos',
    category: 'Tampinhas',
    adultHelp: false,
    tagline: 'Deixe o papel e caneta de lado e jogue com peças reutilizáveis!',
    description: 'Um clássico do raciocínio lógico em versão tátil e durável para levar na mochila, viagens e piqueniques.',
    materials: [
      '10 tampinhas plásticas (5 de uma cor e 5 de outra)',
      '4 palitos de sorvete coloridos ou bandeja de isopor de legumes limpa',
      'Caneta hidrográfica permanente',
      'Cola branca ou fita dupla-face'
    ],
    steps: [
      'Una os 4 palitos de sorvete formando o grid # tradicional do jogo da velha e cole com uma gota de cola nas interseções.',
      'Caso use a bandejinha de isopor, desenhe o tabuleiro de 9 casas com caneta permanente e régua.',
      'Em 5 tampinhas marque o símbolo X e nas outras 5 marque o símbolo O.',
      'Pronto! Você tem um jogo compacto e portátil para desafiar amigos e familiares sem gastar uma folha de papel sequer.'
    ],
    color: 'from-amber-500 to-yellow-600',
    badge: 'Raciocínio Rápido'
  },
  {
    id: 'telefone-sem-fio',
    name: 'Telefone Sem Fio Acústico',
    age: 'A partir de 3 anos',
    category: 'Embalagens',
    adultHelp: false,
    tagline: 'Fale por um copo e ouça segredos pelo outro a metros de distância!',
    description: 'Uma aula prática e mágica sobre como o som viaja através de ondas mecânicas e vibrações pelo barbante esticado.',
    materials: [
      '2 copos plásticos descartáveis ou potinhos de iogurte higienizados',
      '5 a 10 metros de barbante de algodão',
      '1 clipe de papel ou palito de dente',
      'Prego fino ou ponta de caneta para furar'
    ],
    steps: [
      'Faça um pequeno furo no centro exato do fundo de cada copinho plástico.',
      'Passe a ponta do barbante de fora para dentro do copo.',
      'Amarre a ponta em um pedaço de palito de dente ou clipe de papel para que não escape.',
      'Repita o mesmo processo no segundo copo com a outra extremidade do barbante.',
      'Estique o barbante sem encostar em nenhum obstáculo. Uma criança sussurra no copo e a outra coloca no ouvido!'
    ],
    color: 'from-blue-500 to-indigo-600',
    badge: 'Ciência Divertida'
  },
  {
    id: 'pegue-a-bolinha',
    name: 'Pegue a Bolinha no Ar (Bilboquê Moderno)',
    age: 'A partir de 4 anos',
    category: 'Embalagens',
    adultHelp: true,
    tagline: 'Lançou, mirou, pegou! Treine reflexos e mira com materiais simples.',
    description: 'Um brinquedo dinâmico que pode ser jogado sozinho como bilboquê ou em dupla como jogo de passe e recepção.',
    materials: [
      '1 embalagem grande de produto de limpeza ou amaciante com alça',
      'Tesoura resistente',
      'Fitas adesivas coloridas',
      '1 bolinha de tênis de mesa, plástico ou bolinha de papel amassado com fita'
    ],
    steps: [
      'Lave e higienize cuidadosamente a embalagem com alça.',
      'O adulto corta a embalagem diagonalmente na metade, preservando a alça ergonômica como pegador.',
      'Cubra as bordas plásticas com fita adesiva colorida para garantir total segurança e conforto.',
      'Decore com faixas coloridas e números de pontuação se quiser criar um desafio esportivo.',
      'Lance a bolinha contra uma parede ou para outra pessoa e pegue no ar com a concha!'
    ],
    color: 'from-red-500 to-pink-600',
    badge: 'Reflexo & Agilidade'
  }
];

export const BONUSES_DATA: BonusItem[] = [
  {
    id: 1,
    title: 'Manual do Cantinho Criativo & Segurança Familiar',
    subtitle: 'Ambiente preparado e zero riscos',
    description: 'Aprenda a montar uma caixinha de ferramentas infantis, como higienizar embalagens de descarte com segurança e quais etapas exigem auxílio direto de um adulto.',
    items: [
      'Checklist de higienização de plásticos e latinhas',
      'Técnicas seguras para furar e cortar sem machucar',
      'Organização de tintas, fitas e colas em potes',
      'Classificação de tarefas por faixa etária infantil'
    ],
    originalPrice: 'R$ 37,00',
    icon: 'ShieldCheck'
  },
  {
    id: 2,
    title: 'Checklist de Sucatas Inteligentes',
    subtitle: 'O que nunca jogar no lixo comum',
    description: 'Uma lista prática para colar na geladeira com tudo o que sua casa gera de material reciclável no dia a dia e que se transforma em brinquedos surpreendentes.',
    items: [
      'Catálogo de tampinhas, garrafas e embalagens ideais',
      'Como substituir materiais caros por recicláveis',
      'Dicas para coletar peças com amigos e parentes',
      'Checklist para nunca faltar matéria-prima lúdica'
    ],
    originalPrice: 'R$ 17,00',
    icon: 'Sparkles'
  },
  {
    id: 3,
    title: 'Guia de 25 Brincadeiras Retrô Sem Telas',
    subtitle: 'Brincadeiras da nossa infância para hoje',
    description: 'Gincanas, dinâmicas de grupo e desafios divertidos para brincar em dias de chuva ou finais de semana no parque usando os brinquedos construídos.',
    items: [
      '25 regras de brincadeiras tradicionais explicadas',
      'Desafios com pontuação para irmãos e amigos',
      'Brincadeiras sensoriais para os pequenos de 2 a 5 anos',
      'Ideias para festinhas de aniversário sustentáveis'
    ],
    originalPrice: 'R$ 47,00',
    icon: 'Gamepad2'
  },
  {
    id: 4,
    title: 'Certificado do Pequeno Inventor Sustentável',
    subtitle: 'Reconhecimento e orgulho infantil',
    description: 'Arquivo em alta definição para imprimir e preencher com o nome da criança ao concluir a construção de cada brinquedo, estimulando a autoestima.',
    items: [
      'Modelo em alta resolução para imprimir em folha A4',
      'Espaço para nome, data e brinquedos criados',
      'Selo oficial de Defensor do Planeta',
      'Estímulo comprovado à autoconfiança da criança'
    ],
    originalPrice: 'R$ 27,00',
    icon: 'Award'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 1,
    name: 'Mariana Duarte',
    role: 'Mãe do Theo (6 anos)',
    city: 'Curitiba - PR',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80',
    stars: 5,
    toyMade: 'Vai e Vem & Serpente',
    comment: 'Meu filho passava mais de 4 horas por dia no YouTube e tablet. Compramos o guia no sábado e passamos a tarde toda fazendo o Vai e Vem. Nunca vi ele tão empolgado! Corremos no quintal até anoitecer. Valeu cada centavo!',
    timeAgo: 'Comprador Verificado • Há 2 dias'
  },
  {
    id: 2,
    name: 'Carlos Eduardo Silveira',
    role: 'Pai da Clara (8) e Davi (4)',
    city: 'Belo Horizonte - MG',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
    stars: 5,
    toyMade: 'Pé de Lata & Mini Casinhas',
    comment: 'Eu lembro de brincar de Pé de Lata com meu pai há 30 anos atrás. Fazer isso hoje com meus filhos trouxe uma nostalgia indescritível. O material é muito didático, com ilustrações claras e fáceis de seguir no celular.',
    timeAgo: 'Comprador Verificado • Há 4 dias'
  },
  {
    id: 3,
    name: 'Prof. Juliana Ramos',
    role: 'Pedagoga e Educadora Infantil',
    city: 'São Paulo - SP',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80',
    stars: 5,
    toyMade: 'Jogo da Velha & Soprador de Espuma',
    comment: 'Adotei as instruções na minha turma de pré-escola e os pais ficaram maravilhados. É impressionante como materiais que iam pro lixo se tornam ferramentas pedagógicas tão ricas em desenvolvimento motor e empatia ambiental.',
    timeAgo: 'Compradora Verificada • Há 1 semana'
  },
  {
    id: 4,
    name: 'Roberto Mendonça',
    role: 'Avô do Lucas e da Sofia',
    city: 'Campinas - SP',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80',
    stars: 5,
    toyMade: 'Cavalo de Pau & Telefone Sem Fio',
    comment: 'Os netos vinham aqui e não largavam o celular. Fizemos o cavalo de pau de garrafa pet e o telefone sem fio. A casa se encheu de risadas de verdade! É o melhor investimento familiar que já fiz nos últimos anos.',
    timeAgo: 'Comprador Verificado • Há 1 semana'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 1,
    question: 'Vou precisar comprar materiais para fazer os brinquedos?',
    answer: 'A maioria utiliza materiais recicláveis do dia a dia, como papelão, PET, tampinhas, rolinhos e caixas.'
  },
  {
    id: 2,
    question: 'Como sei quais materiais preciso separar?',
    answer: 'Cada brinquedo traz sua própria lista de materiais antes do passo a passo.'
  },
  {
    id: 3,
    question: 'Não tenho muito tempo para preparar as atividades. É demorado?',
    answer: 'Não. Você escolhe o modelo e já encontra os materiais e o passo a passo organizados, sem começar do zero.'
  },
  {
    id: 4,
    question: 'Preciso preparar todos os brinquedos?',
    answer: 'Não. Você escolhe apenas os que fizerem sentido para sua turma e para o tempo disponível.'
  },
  {
    id: 5,
    question: 'Consigo usar com uma turma inteira?',
    answer: 'Sim. Você pode organizar a montagem individualmente, em duplas ou grupos, conforme sua turma.'
  },
  {
    id: 6,
    question: 'Os brinquedos servem para diferentes idades?',
    answer: 'O acervo reúne modelos com diferentes níveis de montagem para você escolher os mais adequados aos seus alunos.'
  },
  {
    id: 7,
    question: 'Preciso imprimir tudo?',
    answer: 'Não. Você pode consultar pelo celular, tablet ou computador e imprimir somente quando quiser.'
  },
  {
    id: 8,
    question: 'Quando recebo meu acesso?',
    answer: 'O material é digital e o acesso é liberado após a confirmação do pagamento.'
  },
  {
    id: 9,
    question: 'Posso usar depois do Dia das Crianças?',
    answer: 'Sim. Os brinquedos também podem ser usados em projetos de reciclagem, oficinas e outras atividades durante o ano.'
  },
  {
    id: 10,
    question: 'Como funciona a garantia?',
    answer: 'Você tem 7 dias para conhecer o material e, caso não fique satisfeita, solicitar o reembolso.'
  }
];

export const FAQ_DATA = FAQS_DATA;

export const CONNECT_RATE_BENCHMARK = {
  originalWordPress: {
    htmlSize: '312 KB (bruto sem cache)',
    loadTime3G: '4.8 segundos',
    connectRate: '48% a 54%',
    blockingScripts: 'WP-Rocket, Perfmatters, Google Maps, Stape GTM duplicado',
    cls: '0.24 (Deslocamento visual acentuado)',
    domNodes: '1.450 elementos aninhados'
  },
  optimizedLandingPage: {
    htmlSize: '24 KB (ultra-compacto)',
    loadTime3G: '0.6 segundos (LCP < 800ms)',
    connectRate: '92% a 97%',
    blockingScripts: '0 scripts bloqueantes (Carregamento assíncrono nativo)',
    cls: '0.00 (Zero layout shift, tamanhos fixados)',
    domNodes: '280 elementos semânticos otimizados'
  }
};
