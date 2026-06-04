import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/lib/data";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ categoria: string }>;
}

export async function generateStaticParams() {
  return [
    ...categories.map((c) => ({ categoria: c.id })),
    { categoria: "novidades" },
    { categoria: "todos" },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria } = await params;
  const cat = categories.find((c) => c.id === categoria);
  return {
    title: cat ? `${cat.name} — Sensualissima` : "Coleções",
    description: cat?.description,
  };
}

export default async function ColecaoPage({ params }: Props) {
  const { categoria } = await params;

  const filtered =
    categoria === "novidades"
      ? products.filter((p) => p.isNew)
      : categoria === "todos"
      ? products
      : products.filter(
          (p) => p.category.toLowerCase() === categoria.replace("-", " ")
        );

  const cat = categories.find((c) => c.id === categoria);
  const title = categoria === "novidades" ? "Novidades" : cat?.name ?? "Coleção";
  const subtitle = categoria === "novidades"
    ? "Recém-chegadas ao ritual."
    : cat?.description ?? "Descubra nossas peças.";

  return (
    <>
      <Header />
      <CartDrawer />

      <main className="pt-24 md:pt-28">
        {/* Hero da coleção */}
        <div className="bg-rosa-200/50 px-5 md:px-8 lg:px-16 py-16 text-center">
          <p className="text-label-upper text-ouro-500 mb-3" style={{ fontSize: "10px" }}>
            Coleção
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-light italic text-borgonha-600">
            {title}
          </h1>
          <p className="font-display text-xl italic text-grafite mt-3">
            {subtitle}
          </p>
          <p className="text-sm text-prata mt-2">{filtered.length} peças</p>
        </div>

        {/* Grid de produtos */}
        <section className="px-5 md:px-8 lg:px-16 py-16 max-w-[1280px] mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-display text-2xl text-grafite italic">
                Ainda não há peças nesta coleção.
              </p>
              <p className="text-sm text-prata mt-2">Volte em breve.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
