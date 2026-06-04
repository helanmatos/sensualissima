import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Star, Shield, RefreshCw, Truck } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { ProductCard } from "@/components/ProductCard";
import { AddToCartForm } from "@/components/AddToCartForm";
import { products } from "@/lib/data";
import { formatBRL } from "@/lib/utils";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return {};
  return {
    title: product.name,
    description: product.tagline,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);

  return (
    <>
      <Header />
      <CartDrawer />

      <main className="pt-24 md:pt-28">
        {/* Breadcrumb */}
        <nav className="px-5 md:px-8 lg:px-16 py-4 max-w-[1280px] mx-auto">
          <ol className="flex items-center gap-2 text-xs text-prata">
            <li><Link href="/" className="hover:text-borgonha-600 transition-colors">Home</Link></li>
            <li><ChevronRight size={12} /></li>
            <li><Link href={`/colecoes/${product.category.toLowerCase()}`} className="hover:text-borgonha-600 transition-colors">{product.category}</Link></li>
            <li><ChevronRight size={12} /></li>
            <li className="text-carvao">{product.name}</li>
          </ol>
        </nav>

        {/* Produto */}
        <div className="px-5 md:px-8 lg:px-16 pb-20 max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-[60%_40%] gap-10 lg:gap-16">

            {/* Galeria */}
            <div className="space-y-3">
              <div className="relative aspect-[3/4] overflow-hidden bg-rosa-200">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
              </div>
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((img, i) => (
                    <div key={i} className="relative aspect-square overflow-hidden bg-rosa-200">
                      <Image src={img} alt={`${product.name} ${i + 1}`} fill className="object-cover" sizes="25vw" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Detalhes */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              {product.badge && (
                <span className="inline-block text-label-upper bg-borgonha-600 text-rosa-50 px-2.5 py-1 rounded-sm mb-4" style={{ fontSize: "9px" }}>
                  {product.badge}
                </span>
              )}

              <p className="text-label-upper text-rosa-600 mb-2" style={{ fontSize: "10px" }}>{product.category}</p>
              <h1 className="font-display text-3xl md:text-4xl text-borgonha-600 mb-2">{product.name}</h1>
              <p className="font-display text-lg italic text-grafite mb-5">{product.tagline}</p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} className={i < Math.floor(product.rating) ? "fill-ouro-400 text-ouro-400" : "text-nevoa"} />
                  ))}
                </div>
                <span className="text-sm text-grafite">{product.rating}</span>
                <span className="text-xs text-prata">({product.reviewCount} avaliações)</span>
              </div>

              {/* Preço */}
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-3xl font-bold text-carvao">{formatBRL(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-lg text-prata line-through">{formatBRL(product.originalPrice)}</span>
                )}
              </div>
              <p className="text-xs text-prata -mt-6 mb-8">
                ou 6x de {formatBRL(product.price / 6)} sem juros
              </p>

              {/* Formulário de compra */}
              <AddToCartForm product={product} />

              {/* Garantias */}
              <div className="mt-8 pt-8 border-t border-nevoa space-y-3">
                {[
                  { icon: Truck, text: "Frete grátis acima de R$ 299" },
                  { icon: RefreshCw, text: "Troca gratuita em 30 dias" },
                  { icon: Shield, text: "Compra 100% segura e discreta" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-grafite">
                    <Icon size={15} className="text-ouro-500 flex-shrink-0" />
                    {text}
                  </div>
                ))}
              </div>

              {/* Accordions */}
              <div className="mt-8 border-t border-nevoa divide-y divide-nevoa">
                {[
                  { title: "Composição", content: product.composition },
                  {
                    title: "Cuidados",
                    content: (
                      <ul className="space-y-1">
                        {product.care.map((c) => <li key={c} className="flex items-start gap-2"><span className="text-ouro-500 mt-0.5">·</span>{c}</li>)}
                      </ul>
                    ),
                  },
                  {
                    title: "Guia de tamanhos",
                    content: "Consulte nossa tabela de medidas para encontrar o tamanho ideal. Em caso de dúvida, recomendamos o tamanho acima.",
                  },
                ].map(({ title, content }) => (
                  <details key={title} className="group">
                    <summary className="flex items-center justify-between py-4 cursor-pointer text-sm font-medium text-carvao select-none list-none">
                      {title}
                      <span className="text-prata group-open:rotate-45 transition-transform duration-200 text-lg">+</span>
                    </summary>
                    <div className="pb-4 text-sm text-grafite leading-relaxed">
                      {content}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Produtos relacionados */}
        {related.length > 0 && (
          <section className="bg-rosa-200/40 px-5 md:px-8 lg:px-16 py-20">
            <div className="max-w-[1280px] mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-light text-borgonha-600 italic text-center mb-12">
                Complete seu ritual
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {related.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
