export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: string;
  price: number;
  originalPrice?: number;
  images: string[];
  sizes: { label: string; available: boolean }[];
  colors?: { name: string; hex: string }[];
  composition: string;
  care: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  rating: number;
  reviewCount: number;
  badge?: "NOVO" | "EXCLUSIVO" | "ESGOTANDO";
}

export const products: Product[] = [
  {
    id: "set-bordado-malva",
    name: "Set Bordado Malva",
    tagline: "Para a noite que merece ser lembrada.",
    category: "Conjuntos",
    price: 329,
    images: [
      "/produto-bordado.jpg",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
    ],
    sizes: [
      { label: "PP", available: true },
      { label: "P", available: true },
      { label: "M", available: true },
      { label: "G", available: true },
      { label: "GG", available: false },
    ],
    colors: [
      { name: "Malva", hex: "#8B5E6D" },
      { name: "Borgonha", hex: "#3D0A30" },
      { name: "Marfim", hex: "#FAF5F0" },
    ],
    composition: "80% Poliamida, 20% Elastano. Renda: 100% Nylon.",
    care: [
      "Lavar à mão em água fria",
      "Não usar amaciante",
      "Secar à sombra",
      "Não torcer",
    ],
    isNew: true,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 127,
    badge: "NOVO",
  },
  {
    id: "body-seda-creme",
    name: "Body Seda Creme",
    tagline: "A segunda pele que você escolhe.",
    category: "Bodies",
    price: 489,
    originalPrice: 620,
    images: [
      "/produto-body.jpg",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    ],
    sizes: [
      { label: "PP", available: true },
      { label: "P", available: true },
      { label: "M", available: false },
      { label: "G", available: true },
    ],
    composition: "100% Seda natural (Charmeuse). Renda: 100% Algodão.",
    care: [
      "Lavar à mão somente",
      "Água fria com sabão neutro",
      "Secar horizontalmente à sombra",
      "Passar com ferro frio",
    ],
    isFeatured: true,
    rating: 4.9,
    reviewCount: 89,
    badge: "EXCLUSIVO",
  },
  {
    id: "conjunto-renda-preta",
    name: "Conjunto Renda Noir",
    tagline: "Clássico que nunca pede desculpa.",
    category: "Conjuntos",
    price: 279,
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    ],
    sizes: [
      { label: "PP", available: false },
      { label: "P", available: true },
      { label: "M", available: true },
      { label: "G", available: true },
      { label: "GG", available: true },
    ],
    composition: "75% Poliamida, 25% Elastano.",
    care: ["Lavar à mão", "Não usar secadora", "Secar à sombra"],
    rating: 4.7,
    reviewCount: 203,
    badge: "ESGOTANDO",
  },
  {
    id: "camisola-modal-rose",
    name: "Camisola Modal Rosé",
    tagline: "Do banho ao sonho, sem abrir mão do desejo.",
    category: "Sleepwear",
    price: 219,
    images: [
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=800&q=80",
    ],
    sizes: [
      { label: "P", available: true },
      { label: "M", available: true },
      { label: "G", available: true },
      { label: "GG", available: true },
    ],
    colors: [
      { name: "Rosé", hex: "#F0D9D0" },
      { name: "Preto", hex: "#1A1A1A" },
      { name: "Ouro", hex: "#C9A96E" },
    ],
    composition: "95% Modal, 5% Elastano.",
    care: ["Máquina ciclo delicado", "Água fria", "Não usar secadora"],
    isNew: true,
    rating: 4.6,
    reviewCount: 54,
    badge: "NOVO",
  },
  {
    id: "calcinha-fio-ouro",
    name: "Calcinha Fio Ouro",
    tagline: "O detalhe que só você sabe que existe.",
    category: "Calcinhas",
    price: 129,
    images: [
      "/produto-calcinhadourada.jpg",
    ],
    sizes: [
      { label: "PP", available: true },
      { label: "P", available: true },
      { label: "M", available: true },
      { label: "G", available: false },
    ],
    composition: "90% Poliamida, 10% Elastano. Detalhes: corrente banhada a ouro.",
    care: ["Lavar à mão", "Não expor ao cloro", "Secar à sombra"],
    isFeatured: true,
    rating: 4.9,
    reviewCount: 178,
  },
  {
    id: "sutica-push-nude",
    name: "Sutiã Push Nude",
    tagline: "Invisível para o mundo. Essencial para você.",
    category: "Sutiãs",
    price: 189,
    originalPrice: 239,
    images: [
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800&q=80",
    ],
    sizes: [
      { label: "34A", available: true },
      { label: "36B", available: true },
      { label: "38B", available: true },
      { label: "38C", available: true },
      { label: "40C", available: false },
    ],
    composition: "85% Poliamida, 15% Elastano.",
    care: ["Lavar à mão", "Água fria", "Não colocar aro na máquina"],
    rating: 4.5,
    reviewCount: 312,
  },
  {
    id: "kit-seducao-noturna",
    name: "Kit Sedução Noturna",
    tagline: "Tudo que a noite pede, reunido.",
    category: "Conjuntos",
    price: 399,
    originalPrice: 580,
    images: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    ],
    sizes: [
      { label: "PP", available: true },
      { label: "P", available: true },
      { label: "M", available: true },
      { label: "G", available: true },
      { label: "GG", available: true },
    ],
    composition: "Conjunto: 80% Poliamida, 20% Elastano. Robe: 100% Viscose.",
    care: ["Lavar à mão em água fria", "Não usar amaciante", "Secar à sombra"],
    rating: 4.9,
    reviewCount: 64,
    badge: "ESGOTANDO",
  },
  {
    id: "calcinha-rendada-borgonha",
    name: "Calcinha Rendada Borgonha",
    tagline: "A cor que já diz tudo.",
    category: "Calcinhas",
    price: 89,
    originalPrice: 129,
    images: [
      "https://images.unsplash.com/photo-1532635248-cdd3d399f56a?w=800&q=80",
    ],
    sizes: [
      { label: "PP", available: true },
      { label: "P", available: true },
      { label: "M", available: true },
      { label: "G", available: true },
    ],
    composition: "90% Nylon, 10% Elastano. Renda francesa.",
    care: ["Lavar à mão", "Água fria", "Secar à sombra"],
    rating: 4.7,
    reviewCount: 248,
  },
  {
    id: "camisola-renda-ivory",
    name: "Camisola Renda Ivory",
    tagline: "Delicadeza que permanece na memória.",
    category: "Sleepwear",
    price: 169,
    originalPrice: 229,
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    ],
    sizes: [
      { label: "PP", available: false },
      { label: "P", available: true },
      { label: "M", available: true },
      { label: "G", available: true },
      { label: "GG", available: false },
    ],
    composition: "100% Algodão egípcio. Acabamento em renda Chantilly.",
    care: ["Lavar à mão somente", "Água fria", "Não torcer", "Secar horizontalmente"],
    rating: 4.8,
    reviewCount: 91,
    badge: "ESGOTANDO",
  },
  {
    id: "body-transparente-malha",
    name: "Body Transparente Malha",
    tagline: "Para quem não precisa esconder nada.",
    category: "Bodies",
    price: 259,
    originalPrice: 359,
    images: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80",
    ],
    sizes: [
      { label: "PP", available: true },
      { label: "P", available: true },
      { label: "M", available: true },
      { label: "G", available: false },
    ],
    colors: [
      { name: "Preto", hex: "#1A1A1A" },
      { name: "Malva", hex: "#8B5E6D" },
    ],
    composition: "85% Poliamida micro-mesh, 15% Elastano.",
    care: ["Lavar à mão", "Água fria com sabão neutro", "Secar à sombra"],
    rating: 4.6,
    reviewCount: 137,
  },
];

export const categories = [
  { id: "conjuntos",  name: "Conjuntos",  description: "Harmonia que seduz.",     image: "/cat-conjuntos.jpg" },
  { id: "bodies",     name: "Bodies",     description: "Segunda pele.",            image: "/cat-bodies.jpg" },
  { id: "calcinha",   name: "Calcinhas",  description: "O segredo do dia.",        image: "/cat-calcinha.jpg" },
  { id: "sutias",     name: "Sutiãs",     description: "Suporte com elegância.",   image: "/cat-sutias.jpg" },
  { id: "sleepwear",  name: "Sleepwear",  description: "Sonhos com textura.",      image: "/cat-sleepwear.jpg" },
  { id: "acessorios", name: "Acessórios", description: "Detalhes que completam.",  image: "/cat-acessorios.jpg" },
];
