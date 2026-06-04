import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Package, RefreshCw, EyeOff, Star } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/lib/data";

const featuredProducts = products.filter((p) => p.isFeatured);
const newProducts = products.filter((p) => p.isNew);

const benefits = [
  { icon: Package,  label: "Frete grátis acima de R$&nbsp;299" },
  { icon: RefreshCw, label: "Troca gratuita em 30 dias" },
  { icon: EyeOff,  label: "Embalagem 100% discreta" },
  { icon: Star,    label: "Avaliação média 4.8 ★" },
];

const testimonials = [
  {
    name: "Ana L.",
    text: "A qualidade é impecável. Parece que foi feito para o meu corpo.",
    rating: 5,
  },
  {
    name: "Mariana C.",
    text: "A embalagem me fez sentir especial antes mesmo de abrir. Voltarei com certeza.",
    rating: 5,
  },
  {
    name: "Beatriz R.",
    text: "Finalmente uma marca que me celebra sem precisar me sexualizar para vender.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <CartDrawer />

      <main>
        {/* ─── Hero ─── */}
        <section className="relative min-h-screen flex items-end pb-20 md:pb-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/hero-capa.jpg"
              alt="Coleção Sensualissima"
              fill
              className="object-cover object-[center_30%]"
              priority
              sizes="100vw"
            />
            {/* Gradiente da esquerda para legibilidade do texto */}
            <div className="absolute inset-0 bg-gradient-to-r from-borgonha-900/90 via-borgonha-800/60 to-borgonha-600/20" />
            {/* Escurece a base */}
            <div className="absolute inset-0 bg-gradient-to-t from-borgonha-900/70 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16 w-full">
            <div className="max-w-xl">
              <p className="text-label-upper text-ouro-400 mb-5 animate-fade-in" style={{ fontSize: "11px" }}>
                ✦ &nbsp; Nova Coleção — Outono 2026
              </p>
              <h1
                className="text-display text-rosa-50 mb-6 animate-slide-up"
                style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
              >
                Não é o que você veste.
                <br />
                É o que você sente.
              </h1>
              <p className="text-rosa-200 text-lg md:text-xl leading-relaxed mb-10 animate-slide-up animate-delay-100">
                Lingerie e bodywear criados para a mulher que se celebra — com sofisticação, sensualidade e liberdade.
              </p>
              <div className="flex flex-wrap gap-4 animate-slide-up animate-delay-200">
                <Link href="/colecoes/novidades" className="btn-primary">
                  Descobrir coleção
                </Link>
                <Link href="/sobre" className="btn-ghost text-rosa-100 after:bg-rosa-100">
                  Nossa história <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Benefícios ─── */}
        <section className="bg-borgonha-600 px-5 md:px-8 lg:px-16 py-5">
          <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 py-1">
                <Icon size={16} className="text-ouro-400 flex-shrink-0" />
                <span
                  className="text-rosa-100"
                  style={{ fontSize: "11px", letterSpacing: "0.03em" }}
                  dangerouslySetInnerHTML={{ __html: label }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* ─── Categorias ─── */}
        <section className="px-5 md:px-8 lg:px-16 py-20">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-12">
              <p className="text-label-upper text-ouro-500 mb-3" style={{ fontSize: "10px" }}>
                O universo Sensualissima
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-borgonha-600 italic">
                Cada peça, um ritual.
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/colecoes/${cat.id}`}
                  className="group relative overflow-hidden bg-rosa-200 aspect-square flex flex-col items-center justify-end p-4"
                >
                  {/* Imagem de fundo quando disponível */}
                  {cat.image && (
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 17vw"
                    />
                  )}
                  {/* Overlay sempre presente — mais escuro quando tem foto */}
                  <div className={`absolute inset-0 transition-colors duration-300 ${cat.image ? "bg-borgonha-900/30 group-hover:bg-borgonha-900/55" : "bg-borgonha-600/0 group-hover:bg-borgonha-600/60"}`} />
                  <div className="relative z-10 text-center">
                    <p className={`font-display text-lg font-semibold transition-colors duration-300 ${cat.image ? "text-rosa-50" : "text-carvao group-hover:text-rosa-50"}`}>
                      {cat.name}
                    </p>
                    <p className={`text-xs transition-colors duration-300 mt-0.5 font-display italic ${cat.image ? "text-rosa-200/80" : "text-grafite group-hover:text-rosa-200"}`}>
                      {cat.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Produtos em destaque ─── */}
        <section className="px-5 md:px-8 lg:px-16 py-20 bg-rosa-200/40">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-label-upper text-ouro-500 mb-3" style={{ fontSize: "10px" }}>
                  Seleção da semana
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-light text-borgonha-600 italic">
                  Peças em destaque
                </h2>
              </div>
              <Link href="/colecoes" className="btn-ghost hidden md:flex">
                Ver tudo <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Link href="/colecoes" className="btn-outline">
                Ver todos os produtos
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Banner editorial ─── */}
        <section className="relative overflow-hidden min-h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/editorial-sens.jpg"
              alt="Editorial Sensualissima"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-borgonha-900/55" />
          </div>
          <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16 text-center w-full py-24">
            <p className="text-label-upper text-ouro-400 mb-5" style={{ fontSize: "10px" }}>
              ✦ &nbsp; Manifesto
            </p>
            <blockquote className="text-display text-rosa-50 max-w-3xl mx-auto" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
              "Sensualidade não se aprende. Se desperta."
            </blockquote>
            <p className="text-rosa-200/80 mt-6 text-lg">
              Cada peça foi pensada para o momento em que você para, respira e se reconhece.
            </p>
            <Link href="/sobre" className="btn-outline border-rosa-50 text-rosa-50 hover:bg-rosa-50/10 mt-10 inline-flex">
              Nossa história
            </Link>
          </div>
        </section>

        {/* ─── Novidades ─── */}
        <section className="px-5 md:px-8 lg:px-16 py-20">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-12">
              <p className="text-label-upper text-ouro-500 mb-3" style={{ fontSize: "10px" }}>
                Acabou de chegar
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-borgonha-600 italic">
                Recém-chegadas
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
              {newProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── Depoimentos ─── */}
        <section className="bg-rosa-200/50 px-5 md:px-8 lg:px-16 py-20">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-12">
              <p className="text-label-upper text-ouro-500 mb-3" style={{ fontSize: "10px" }}>
                Quem já vive o ritual
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-borgonha-600 italic">
                O que dizem sobre nós
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-white/60 backdrop-blur-sm p-8 rounded-sm border border-nevoa">
                  <div className="flex mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-ouro-400 text-ouro-400" />
                    ))}
                  </div>
                  <p className="font-display text-lg text-carvao italic leading-relaxed mb-5">
                    "{t.text}"
                  </p>
                  <p className="text-label-upper text-grafite" style={{ fontSize: "10px" }}>— {t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Como funciona ─── */}
        <section className="px-5 md:px-8 lg:px-16 py-20">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-light text-borgonha-600 italic">
                Simples como deve ser.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-12 text-center">
              {[
                { step: "01", title: "Escolha sua peça", desc: "Navegue pelas coleções e encontre o que faz sentido para você — não para os outros." },
                { step: "02", title: "Receba com discrição", desc: "Embalagem sem identificação da marca. Só você sabe o que chegou." },
                { step: "03", title: "Sinta a diferença", desc: "Qualidade que se percebe no toque. Detalhes que você notará ao longo do dia." },
              ].map(({ step, title, desc }) => (
                <div key={step}>
                  <p className="font-display text-6xl text-nevoa font-light mb-4">{step}</p>
                  <h3 className="font-display text-xl font-semibold text-borgonha-600 mb-3">{title}</h3>
                  <p className="text-sm text-grafite leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
