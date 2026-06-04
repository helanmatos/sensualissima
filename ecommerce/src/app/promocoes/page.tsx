import Image from "@/components/Img";
import Link from "next/link";
import { Flame, Tag } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { ProductCard } from "@/components/ProductCard";
import { CountdownTimer } from "@/components/CountdownTimer";
import { products } from "@/lib/data";
import { formatBRL, formatDiscount } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Promoções — Até 35% off",
  description:
    "Peças selecionadas com desconto especial. Sensualidade premium por tempo limitado.",
};

const saleProducts = products.filter((p) => p.originalPrice);

const savings = saleProducts.map((p) => ({
  product: p,
  discount: formatDiscount(p.originalPrice!, p.price),
  saved: p.originalPrice! - p.price,
}));

const maxDiscount = Math.max(...savings.map((s) => s.discount));

export default function PromocoesPage() {
  return (
    <>
      <Header />
      <CartDrawer />

      <main>
        {/* ─── Hero ─── */}
        <section className="relative overflow-hidden bg-borgonha-600 pt-24 pb-0">
          {/* Textura de fundo */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #FAF5F0 0px, #FAF5F0 1px, transparent 1px, transparent 12px)",
            }}
          />

          <div className="relative max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              {/* Conteúdo esquerdo */}
              <div className="py-16">
                <div className="flex items-center gap-2 mb-6">
                  <Flame size={14} className="text-ouro-400" />
                  <p className="text-label-upper text-ouro-400" style={{ fontSize: "10px" }}>
                    Oferta por tempo limitado
                  </p>
                </div>

                <h1
                  className="text-display text-rosa-50 mb-4"
                  style={{ fontSize: "clamp(3rem, 7vw, 5rem)" }}
                >
                  Até {maxDiscount}%<br />de desconto.
                </h1>

                <p className="text-rosa-200 text-lg leading-relaxed mb-10 max-w-md">
                  Peças selecionadas com preço especial. O mesmo cuidado, a mesma qualidade — por menos.
                </p>

                {/* Countdown */}
                <div className="mb-10">
                  <p className="text-label-upper text-rosa-200/60 mb-4" style={{ fontSize: "9px" }}>
                    Oferta encerra em
                  </p>
                  <CountdownTimer targetHours={23} />
                </div>

                <a href="#produtos" className="btn-primary bg-ouro-400 text-carvao hover:bg-ouro-300 inline-flex">
                  Ver promoções
                </a>
              </div>

              {/* Imagem direita — pilha de cards de produto */}
              <div className="hidden lg:flex items-end justify-center gap-4 pb-0">
                {saleProducts.slice(0, 3).map((p, i) => (
                  <div
                    key={p.id}
                    className="relative overflow-hidden bg-rosa-200 shadow-brand-lg flex-shrink-0"
                    style={{
                      width: i === 1 ? "210px" : "170px",
                      height: i === 1 ? "340px" : "270px",
                      marginBottom: i === 1 ? "0" : "40px",
                    }}
                  >
                    <Image
                      src={p.images[0]}
                      alt={p.name}
                      fill
                      className="object-cover"
                      sizes="210px"
                    />
                    {/* Badge de desconto sobre a imagem */}
                    <div className="absolute top-3 left-3 bg-[#C62828] text-white text-label-upper px-2.5 py-1 rounded-sm" style={{ fontSize: "9px" }}>
                      -{formatDiscount(p.originalPrice!, p.price)}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Barra de economia ─── */}
        <div className="bg-borgonha-700 border-t border-borgonha-500">
          <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16 py-4">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
              {savings.map(({ product, discount, saved }) => (
                <div key={product.id} className="flex items-center gap-2">
                  <Tag size={11} className="text-ouro-400 flex-shrink-0" />
                  <span className="text-rosa-200/80" style={{ fontSize: "11px" }}>
                    <span className="text-rosa-100 font-medium">{product.name}</span>
                    {" "}— economize{" "}
                    <span className="text-ouro-400 font-semibold">{formatBRL(saved)}</span>
                    {" "}
                    <span className="text-rosa-200/50">({discount}% off)</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Produtos em promoção ─── */}
        <section id="produtos" className="px-5 md:px-8 lg:px-16 py-20 max-w-[1280px] mx-auto scroll-mt-24">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-label-upper text-ouro-500 mb-3" style={{ fontSize: "10px" }}>
                {saleProducts.length} peças em promoção
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-borgonha-600 italic">
                Peças com desconto
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
            {saleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* ─── Banner "Sem abrir mão" ─── */}
        <section className="mx-5 md:mx-8 lg:mx-16 mb-20 relative overflow-hidden rounded-sm">
          <div className="relative h-64 md:h-80">
            <Image
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80"
              alt="Qualidade Sensualissima"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-borgonha-600/65" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <p className="text-label-upper text-ouro-400 mb-3" style={{ fontSize: "10px" }}>
                Nossa promessa
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-rosa-50 font-light italic max-w-xl">
                Desconto no preço. Nunca na qualidade.
              </h2>
              <p className="text-rosa-200/80 text-sm mt-4 max-w-md">
                As mesmas peças, os mesmos tecidos, o mesmo cuidado. Só o momento é diferente.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Todos os produtos (outros, sem desconto) ─── */}
        <section className="px-5 md:px-8 lg:px-16 pb-20 max-w-[1280px] mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-label-upper text-grafite mb-2" style={{ fontSize: "10px" }}>
                Explore também
              </p>
              <h2 className="font-display text-3xl font-light text-borgonha-600 italic">
                Coleção completa
              </h2>
            </div>
            <Link href="/colecoes/todos" className="btn-ghost hidden md:flex text-sm">
              Ver tudo
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
            {products
              .filter((p) => !p.originalPrice)
              .slice(0, 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} variant="compact" />
              ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
