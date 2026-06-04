"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCartStore, useWishlistStore } from "@/lib/store";
import type { Product } from "@/lib/data";

interface AddToCartFormProps {
  product: Product;
}

export function AddToCartForm({ product }: AddToCartFormProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors?.[0]?.name ?? ""
  );
  const [sizeError, setSizeError] = useState(false);

  const { addItem, openCart } = useCartStore();
  const { toggle, has } = useWishlistStore();
  const isFav = has(product.id);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedSize) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor || undefined,
    });
    openCart();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Seletor de cor */}
      {product.colors && product.colors.length > 0 && (
        <div>
          <p className="text-label-upper text-carvao mb-3" style={{ fontSize: "10px" }}>
            Cor — <span className="font-normal text-grafite normal-case tracking-normal" style={{ fontSize: "11px" }}>{selectedColor}</span>
          </p>
          <div className="flex gap-2">
            {product.colors.map((color) => (
              <button
                key={color.name}
                type="button"
                onClick={() => setSelectedColor(color.name)}
                aria-label={`Cor ${color.name}`}
                className={cn(
                  "w-8 h-8 rounded-full border-2 transition-all duration-200",
                  selectedColor === color.name
                    ? "border-borgonha-600 scale-110 shadow-brand-sm"
                    : "border-transparent hover:border-nevoa"
                )}
                style={{ backgroundColor: color.hex }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Seletor de tamanho */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className={cn("text-label-upper", sizeError ? "text-red-600" : "text-carvao")} style={{ fontSize: "10px" }}>
            {sizeError ? "Selecione um tamanho" : "Tamanho"}
          </p>
          <button type="button" className="btn-ghost text-xs">
            Guia de tamanhos
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <button
              key={size.label}
              type="button"
              disabled={!size.available}
              onClick={() => {
                setSelectedSize(size.label);
                setSizeError(false);
              }}
              className={cn(
                "relative w-12 h-10 text-sm border rounded-sm transition-all duration-150",
                size.available
                  ? selectedSize === size.label
                    ? "bg-borgonha-600 border-borgonha-600 text-rosa-50 font-semibold"
                    : "border-nevoa text-grafite hover:border-borgonha-400"
                  : "border-nevoa text-nevoa cursor-not-allowed overflow-hidden"
              )}
            >
              {size.label}
              {!size.available && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="absolute w-full h-px bg-nevoa rotate-45" />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* CTAs */}
      <div className="flex gap-3">
        <button type="submit" className="btn-primary flex-1">
          Adicionar ao ritual
        </button>
        <button
          type="button"
          onClick={() => toggle(product.id)}
          aria-label={isFav ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          className={cn(
            "w-12 h-12 flex items-center justify-center border rounded-sm transition-all duration-200",
            isFav
              ? "border-borgonha-600 bg-borgonha-50 text-borgonha-600"
              : "border-nevoa text-grafite hover:border-borgonha-400 hover:text-borgonha-600"
          )}
        >
          <Heart size={18} className={cn(isFav && "fill-borgonha-600")} />
        </button>
      </div>
    </form>
  );
}
