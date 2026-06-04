"use client";

import Image from "@/components/Img";
import Link from "next/link";
import { Heart, Star } from "lucide-react";
import { cn, formatBRL, formatDiscount } from "@/lib/utils";
import { useCartStore, useWishlistStore } from "@/lib/store";
import type { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
  variant?: "default" | "compact" | "featured";
}

const badgeStyles: Record<string, string> = {
  NOVO:      "bg-borgonha-600 text-rosa-50",
  EXCLUSIVO: "bg-ouro-400 text-carvao",
  ESGOTANDO: "border border-rosa-600 text-rosa-600 bg-transparent",
};

export function ProductCard({ product, variant = "default" }: ProductCardProps) {
  const { addItem, openCart } = useCartStore();
  const { toggle, has } = useWishlistStore();
  const isFav = has(product.id);
  const discount = product.originalPrice
    ? formatDiscount(product.originalPrice, product.price)
    : 0;

  const firstAvailableSize = product.sizes.find((s) => s.available)?.label ?? "";

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: firstAvailableSize,
    });
    openCart();
  }

  function handleWishlist(e: React.MouseEvent) {
    e.preventDefault();
    toggle(product.id);
  }

  return (
    <Link
      href={`/produto/${product.id}`}
      className={cn(
        "group block relative",
        variant === "featured" && "col-span-2"
      )}
    >
      {/* Imagem */}
      <div className="relative overflow-hidden bg-rosa-200 hover-image-zoom">
        <div
          className={cn(
            "relative w-full",
            variant === "featured" ? "aspect-[4/3]" : "aspect-[3/4]"
          )}
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>

        {/* Badge */}
        {product.badge && (
          <span
            className={cn(
              "absolute top-3 left-3 text-label-upper px-2.5 py-1 rounded-sm",
              { fontSize: "9px" },
              badgeStyles[product.badge]
            )}
            style={{ fontSize: "9px" }}
          >
            {product.badge}
          </span>
        )}

        {/* Desconto */}
        {discount > 0 && (
          <span
            className="absolute top-3 left-3 bg-[#C62828] text-white text-label-upper px-2.5 py-1 rounded-sm"
            style={{ fontSize: "9px" }}
          >
            -{discount}%
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={handleWishlist}
          aria-label={isFav ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          className={cn(
            "absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center",
            "bg-white/80 backdrop-blur-sm shadow-brand-sm",
            "transition-all duration-200",
            isFav ? "text-borgonha-600" : "text-grafite hover:text-borgonha-600"
          )}
        >
          <Heart
            size={16}
            className={cn(isFav && "fill-borgonha-600 animate-heart-pop")}
          />
        </button>

        {/* CTA hover (desktop) */}
        {variant !== "compact" && (
          <div className="absolute bottom-0 inset-x-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-sensual">
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full rounded-none py-3.5"
              disabled={!firstAvailableSize}
            >
              {firstAvailableSize ? "Adicionar ao ritual" : "Esgotado"}
            </button>
          </div>
        )}
      </div>

      {/* Informações do produto */}
      <div className="mt-3 space-y-1 px-0.5">
        <p className="text-label-upper text-rosa-600" style={{ fontSize: "10px" }}>
          {product.category}
        </p>

        <h3 className="font-display font-semibold text-lg text-carvao group-hover:text-borgonha-600 transition-colors duration-200 leading-snug">
          {product.name}
        </h3>

        {variant !== "compact" && (
          <p className="text-sm text-grafite italic font-display leading-snug">
            {product.tagline}
          </p>
        )}

        {/* Avaliações */}
        <div className="flex items-center gap-1.5 pt-0.5">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={11}
                className={i < Math.floor(product.rating) ? "fill-ouro-400 text-ouro-400" : "text-nevoa"}
              />
            ))}
          </div>
          <span className="text-xs text-prata">({product.reviewCount})</span>
        </div>

        {/* Preço */}
        <div className="flex items-baseline gap-2 pt-1">
          <span className="text-lg font-semibold text-carvao">
            {formatBRL(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-prata line-through">
              {formatBRL(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
