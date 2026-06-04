"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { formatBRL } from "@/lib/utils";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total, itemCount } = useCartStore();
  const count = itemCount();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[300] bg-borgonha-600/50 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 z-[400] w-full max-w-[420px] bg-rosa-50 flex flex-col shadow-brand-lg animate-slide-right">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-nevoa">
          <div>
            <h2 className="font-display text-2xl text-borgonha-600">Seu ritual</h2>
            <p className="text-xs text-prata mt-0.5">
              {count === 0 ? "Nenhum item" : `${count} ${count === 1 ? "item" : "itens"}`}
            </p>
          </div>
          <button
            onClick={closeCart}
            className="p-2 text-grafite hover:text-borgonha-600 transition-colors"
            aria-label="Fechar carrinho"
          >
            <X size={20} />
          </button>
        </div>

        {/* Itens */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={48} className="text-nevoa" />
              <div>
                <p className="font-display text-xl text-grafite">Seu carrinho está vazio</p>
                <p className="text-sm text-prata mt-1">Descubra peças que te celebram.</p>
              </div>
              <button onClick={closeCart} className="btn-outline mt-2">
                Descobrir
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-4">
                  {/* Imagem */}
                  <div className="relative w-20 h-[107px] flex-shrink-0 bg-rosa-200 overflow-hidden rounded-sm">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-sm text-carvao leading-snug">{item.name}</p>
                        <p className="text-xs text-prata mt-0.5">Tamanho: {item.size}</p>
                        {item.color && (
                          <p className="text-xs text-prata">Cor: {item.color}</p>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.size)}
                        className="p-1 text-prata hover:text-borgonha-600 transition-colors flex-shrink-0"
                        aria-label="Remover item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantidade */}
                      <div className="flex items-center border border-nevoa rounded-sm">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          className="p-1.5 text-grafite hover:text-borgonha-600 transition-colors"
                          aria-label="Diminuir quantidade"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          className="p-1.5 text-grafite hover:text-borgonha-600 transition-colors"
                          aria-label="Aumentar quantidade"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <span className="font-semibold text-sm">
                        {formatBRL(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-nevoa space-y-4">
            {/* Frete */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-grafite">Frete</span>
              <button className="btn-ghost text-xs">Calcular</button>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="font-display text-lg text-carvao">Total</span>
              <span className="font-bold text-xl text-borgonha-600">{formatBRL(total())}</span>
            </div>

            <p className="text-xs text-center text-prata">
              ou em até 6x de {formatBRL(total() / 6)} sem juros
            </p>

            <Link href="/checkout" onClick={closeCart} className="btn-primary w-full block text-center">
              Confirmar meu ritual
            </Link>

            <button onClick={closeCart} className="btn-ghost text-xs w-full justify-center">
              Continuar comprando
            </button>
          </div>
        )}
      </div>
    </>
  );
}
