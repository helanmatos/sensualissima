# SENSUALISSIMA — Design System
## Versão 1.0 | Umoja Infinity 2026

---

## 1. FUNDAMENTOS

### Stack de Design

- **Tokens:** `tokens.json` (fonte da verdade para todas as variáveis)
- **CSS:** Custom Properties geradas a partir dos tokens
- **Componentes:** React + Tailwind CSS
- **Ícones:** Lucide + ícones customizados da marca
- **Animações:** Framer Motion

### Princípios de Design

1. **Espaço como luxo** — elementos precisam respirar; padding generoso
2. **Textura antes de cor** — camadas sutis criam profundidade sem poluir
3. **Tipografia dominante** — a palavra carrega a sensualidade
4. **Mobile first** — a maioria das compras acontece no celular
5. **Performance estética** — imagens rápidas, transições suaves

---

## 2. GRID E LAYOUT

### Grid Principal

```
Mobile (< 768px):
  Colunas: 4
  Gutter: 16px
  Margem: 20px

Tablet (768px–1023px):
  Colunas: 8
  Gutter: 24px
  Margem: 32px

Desktop (≥ 1024px):
  Colunas: 12
  Gutter: 32px
  Margem: 80px (max-width: 1280px, centralizado)
```

### Container Padrão

```css
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--spacing-5);   /* mobile */
  
  @media (min-width: 768px) {
    padding: 0 var(--spacing-8);
  }
  
  @media (min-width: 1024px) {
    padding: 0 var(--spacing-16);
  }
}
```

---

## 3. COMPONENTES

### 3.1 Botões

#### Botão Primário — `ButtonPrimary`

```
Estado padrão:
  Background: Borgonha Profundo (#3D0A30)
  Texto: Creme Luxo (#FAF5F0)
  Border: none
  Border-radius: 2px (quase quadrado, deliberado)
  Padding: 14px 32px
  Font: DM Sans SemiBold 14px
  Letter-spacing: 0.12em
  Text-transform: uppercase

Hover:
  Background: #6B1D50
  Transition: 200ms sensual

Active:
  Background: #2E0724
  Transform: translateY(1px)

Disabled:
  Background: #E8E0DC
  Texto: #9E9E9E
  Cursor: not-allowed
```

#### Botão Secundário — `ButtonOutline`

```
Estado padrão:
  Background: transparent
  Border: 1px solid #3D0A30
  Texto: #3D0A30
  (demais medidas iguais ao primário)

Hover:
  Background: rgba(61,10,48,0.05)
```

#### Botão Ghost — `ButtonGhost`

```
Background: transparent
Border: none
Texto: #3D0A30
Underline: com animação de slide
```

#### Botão Favoritar — `ButtonWishlist`

```
Ícone: Heart (Lucide)
Background: branco semi-transparente
Backdrop-filter: blur(4px)
Border-radius: 50%
Tamanho: 40px
Posição: absoluto no card de produto (top-right)

Estado ativo (favorito):
  Heart preenchido com Borgonha Profundo
  Animation: scale(1.3) → scale(1) com easing spring
```

### 3.2 Cards de Produto — `ProductCard`

```
┌──────────────────────────────┐
│                              │
│   [Imagem do produto]        │
│   aspect-ratio: 3/4          │
│   object-fit: cover          │
│                   [♡]        │
│                              │
│  ───────────────────────     │
│                              │
│  [CATEGORIA]   caption/label │
│  [Nome do Produto]   h4      │
│  [Linha emocional]   body-s  │
│                              │
│  R$ [000,00]         price   │
│                              │
│  [ADICIONAR AO RITUAL]  btn  │
│                              │
└──────────────────────────────┘

Hover (card inteiro):
  Shadow: md
  Image: scale(1.03)
  Transition: 350ms sensual
  Button: visível (ou desliza de baixo para cima com 300ms)
```

**Variantes:**
- `ProductCard` — padrão (exibido acima)
- `ProductCardCompact` — sem o CTA, apenas imagem + nome + preço
- `ProductCardHorizontal` — para wishlist e comparação
- `ProductCardFeatured` — largura dupla, imagem maior, para produtos hero

### 3.3 Badge — `Badge`

```
NOVO
  Background: #3D0A30
  Texto: #FAF5F0
  
EXCLUSIVO
  Background: #C9A96E
  Texto: #1A1A1A

% DESCONTO
  Background: #C62828
  Texto: #FFFFFF

ESGOTANDO
  Background: transparent
  Border: 1px solid #8B5E6D
  Texto: #8B5E6D

Dimensões: 6px 12px padding, border-radius: 2px
Font: DM Sans Bold 10px, letter-spacing: 0.1em, uppercase
```

### 3.4 Input de Formulário

```
Estado padrão:
  Border-bottom: 1px solid #E8E0DC  (underline apenas, sem box)
  Background: transparent
  Font: DM Sans Regular 16px
  Cor do texto: #1A1A1A
  Padding: 12px 0
  
  Label: flutua acima quando ativo
  Label cor padrão: #9E9E9E
  Label cor ativo: #3D0A30
  Label size: 12px quando flutua

Focus:
  Border-bottom: 1px solid #3D0A30
  Transition: 200ms sensual

Error:
  Border-bottom: 1px solid #C62828
  Mensagem de erro: DM Sans Regular 12px, #C62828

Placeholder:
  Cor: #D4C8C2
```

### 3.5 Navegação — `Header`

```
Desktop:
  Altura: 72px
  Background: rgba(250,245,240,0.92)
  Backdrop-filter: blur(12px)
  Border-bottom: 1px solid #E8E0DC
  Position: sticky top-0
  
  Layout: Logo (esquerda) | Nav links (centro) | Ações (direita)
  
  Nav links: DM Sans Medium 13px, letter-spacing: 0.08em, uppercase
  Active: linha fina borgonha abaixo (2px)
  
  Ações: ícones de Busca, Wishlist, Conta, Carrinho

Mobile:
  Altura: 60px
  Hamburger: lado esquerdo
  Logo: centralizado
  Carrinho: lado direito (com badge de qtd)

Scroll comportamento:
  Após 100px: shadow xs
  Após 200px: logo reduz de tamanho (scale transition)
```

### 3.6 Carrinho / Drawer — `CartDrawer`

```
Posição: lado direito, desliza com 400ms sensual
Largura: 420px (desktop) / 100vw (mobile)
Background: #FAF5F0
Overlay: rgba(61,10,48,0.5) com blur

Header do drawer:
  "Seu ritual"   h3
  Qtd de itens   body-s

Item no carrinho:
  Imagem: 80x107px (proporção 3:4)
  Nome: h5
  Variação: body-s
  Preço: price
  Controles: - quantidade + | botão remover

Footer do drawer:
  Subtotal
  Frete: "Calcular"
  CTA primário: "Confirmar meu ritual"
  CTA ghost: "Continuar comprando"
```

### 3.7 Hero Section — `HeroSection`

```
Variante A — Full Bleed (homepage):
  Altura: 100vh
  Imagem: full-bleed com overlay gradiente
  Gradiente: linear (transparente → #3D0A30 40%) da direita
  
  Conteúdo (esquerda):
    Overline: caption label em ouro
    Headline: display-xl em creme, font light italic
    Subheadline: body-l em rgba(250,245,240,0.8)
    CTA: botão primário + botão ghost

Variante B — Split (coleções):
  50% imagem | 50% conteúdo
  Background do conteúdo: #FAF5F0

Variante C — Editorial (campanhas):
  Grid sobreposto com múltiplas imagens
  Headline sobre imagem, alinhado à grade
```

### 3.8 Toast de Notificação

```
Posição: bottom-center
Max-width: 380px
Background: #1A1A1A
Texto: #FAF5F0
Border-radius: md
Ícone: colorido conforme status
Duration: 4000ms
Animation: slide-up de baixo com fade

"Adicionado ao ritual ✦" → sucesso
"Removido da wishlist" → neutro
"Tamanho esgotado" → aviso
```

### 3.9 Seletor de Tamanho — `SizeSelector`

```
Cada opção:
  40x40px
  Border: 1px solid #E8E0DC
  Font: DM Sans Regular 13px
  Color: #4A4A4A
  Border-radius: 2px

Estado selecionado:
  Border: 1px solid #3D0A30
  Background: #3D0A30
  Color: #FAF5F0

Estado esgotado:
  Linha diagonal traçada sobre o quadrado
  Color: #D4C8C2
  Cursor: not-allowed
```

### 3.10 Rating — `StarRating`

```
Estrela cheia: #C9A96E (ouro champagne)
Estrela vazia: #E8E0DC
Tamanho: 14px
Gap: 2px
Acompanhado de: "(42 avaliações)" em body-s
```

---

## 4. PADRÕES DE PÁGINA

### 4.1 Página de Produto — PDP

```
Layout mobile (scroll vertical):
  1. Galeria de imagens (swipe, 1:1 → hero, com thumbnails abaixo)
  2. Badge(s) de destaque
  3. Categoria (label)
  4. Nome do produto (h2)
  5. Linha emocional (body-l italic)
  6. Avaliações
  7. Preço (com preço riscado se em promoção)
  8. Seletor de tamanho / cor
  9. CTAs: "Adicionar ao ritual" (primário) + Wishlist
  10. Accordions: Descrição, Composição, Cuidados, Tamanhos
  11. Produtos relacionados ("Complete seu ritual")

Layout desktop:
  2 colunas: galeria (esquerda, 60%) | detalhes (direita, 40%)
  Sticky sidebar até o accordion
```

### 4.2 Página de Listagem — PLP

```
Sidebar filtros (desktop, 280px) | Grid de produtos
  
Filtros:
  Categoria, Tamanho, Cor, Faixa de preço, Novidades, Promoção
  
Grid:
  Mobile: 2 colunas
  Tablet: 3 colunas
  Desktop: 4 colunas (sidebar aberta: 3 colunas)

Ordenação: relevância | mais novos | preço ↑ | preço ↓ | mais vendidos

Paginação: infinite scroll com "Carregar mais" explícito
```

### 4.3 Homepage — Estrutura

```
1. Header sticky
2. Hero section (100vh) — editorial da coleção atual
3. Barra de benefícios: Frete grátis · Troca fácil · Embalagem discreta
4. Categorias em destaque — grid 4 colunas com imagem + nome
5. Produtos em destaque — carousel horizontal
6. Banner editorial — frase da marca + CTA
7. Coleção nova — grid 2 colunas, imagens grandes
8. Social proof — grid de fotos de clientes (UGC)
9. "Como funciona" — passos simplificados
10. Newsletter — fundo borgonha, copy intimista
11. Footer
```

### 4.4 Footer

```
Background: #1A1A1A
Texto: #F0D9D0

Colunas:
  1. Logo + tagline + redes sociais
  2. Loja: Novidades, Coleções, Promoções, Lookbook
  3. Ajuda: FAQ, Trocas, Rastreio, Contato
  4. Sobre: A marca, Sustentabilidade, Trabalhe conosco

Linha inferior:
  Copyright · Privacidade · Termos · Pagamentos aceitos (ícones)

Métodos de pagamento:
  Pix, cartões de crédito/débito, boleto
  Ícones: fundo escuro semi-transparente
```

---

## 5. MICRO-INTERAÇÕES

### 5.1 Hover em imagem de produto

```
Scale: 1 → 1.03
Duration: 350ms
Easing: sensual (cubic-bezier 0.25, 0.46, 0.45, 0.94)
Overflow: hidden no container
```

### 5.2 Adicionar ao carrinho

```
1. Botão comprime levemente (scale 0.97)
2. Ícone de saco/sacola aparece e "voa" até o ícone do header
3. Badge do carrinho incrementa com bounce
4. Toast "Adicionado ao ritual" aparece na base da tela
Total: ~600ms
```

### 5.3 Favoritar produto

```
1. Coração escala 1.4 e gira levemente (10deg)
2. Pequenas partículas/faíscas borgonha surgem e somem
3. Coração preenchido com easing spring
Total: ~400ms
```

### 5.4 Transição entre páginas

```
Fade out: 200ms
Fade in: 300ms
Easing: ease-out
```

### 5.5 Scroll reveal

```
Elementos entram de baixo (translateY 24px → 0)
Opacity: 0 → 1
Duration: 600ms
Delay: 100ms entre elementos sequenciais
```

---

## 6. ACESSIBILIDADE

- **Contraste mínimo:** 4.5:1 para texto normal, 3:1 para texto grande
- **Focus ring:** 2px solid #C9A96E (ouro), offset 2px — visível e on-brand
- **Touch targets:** mínimo 44×44px em mobile
- **Alt text:** obrigatório em todas as imagens de produto
- **ARIA labels:** botões sem texto visível (favoritar, buscar) precisam de aria-label
- **Reduced motion:** todas as animações respeitam `prefers-reduced-motion`
- **Screen readers:** produtos anunciam nome + preço + disponibilidade

---

## 7. PERFORMANCE

- **Imagens:** formato WebP/AVIF, lazy loading, blur placeholder
- **Fontes:** `font-display: swap`, preload das principais
- **CSS:** crítico inline, resto async
- **Core Web Vitals alvo:**
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1

---

*Design System Sensualissima v1.0 — Umoja Infinity 2026*
