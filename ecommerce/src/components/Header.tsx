"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Heart, User, ShoppingBag, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/lib/store";

const navLinks = [
  { href: "/colecoes/novidades", label: "Novidades" },
  { href: "/colecoes/conjuntos", label: "Conjuntos" },
  { href: "/colecoes/bodies", label: "Bodies" },
  { href: "/colecoes/sleepwear", label: "Sleepwear" },
  { href: "/colecoes/acessorios", label: "Acessórios" },
  { href: "/promocoes", label: "Promoções" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCartStore();
  const count = itemCount();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-[200] transition-all duration-300",
          scrolled
            ? "bg-rosa-50/95 backdrop-blur-md shadow-brand-sm"
            : "bg-rosa-50/80 backdrop-blur-sm"
        )}
      >
        {/* Barra superior */}
        <div className="bg-borgonha-600 text-rosa-100 text-center py-2 px-4">
          <p className="text-label-upper" style={{ fontSize: "10px" }}>
            Frete grátis em compras acima de R$&nbsp;299 &nbsp;✦&nbsp; Embalagem discreta garantida
          </p>
        </div>

        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-[72px]">

            {/* Mobile: hamburguer */}
            <button
              className="lg:hidden p-2 -ml-2 text-borgonha-600"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menu"
            >
              <Menu size={22} />
            </button>

            {/* Logo */}
            <Link href="/" className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
              <span
                className="text-brand-name text-borgonha-600"
                style={{ fontSize: scrolled ? "0.95rem" : "1.05rem", transition: "font-size 300ms" }}
              >
                Sensualissima
              </span>
            </Link>

            {/* Nav desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-label-upper text-grafite hover:text-borgonha-600 transition-colors duration-200 relative group"
                  style={{ fontSize: "11px" }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-borgonha-600 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Ações */}
            <div className="flex items-center gap-1">
              <button
                className="p-2 text-grafite hover:text-borgonha-600 transition-colors duration-200"
                aria-label="Buscar"
              >
                <Search size={18} />
              </button>
              <Link
                href="/wishlist"
                className="p-2 text-grafite hover:text-borgonha-600 transition-colors duration-200"
                aria-label="Lista de desejos"
              >
                <Heart size={18} />
              </Link>
              <Link
                href="/conta"
                className="hidden md:flex p-2 text-grafite hover:text-borgonha-600 transition-colors duration-200"
                aria-label="Minha conta"
              >
                <User size={18} />
              </Link>
              <button
                onClick={openCart}
                className="p-2 text-grafite hover:text-borgonha-600 transition-colors duration-200 relative"
                aria-label={`Carrinho com ${count} itens`}
              >
                <ShoppingBag size={18} />
                {count > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-borgonha-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center animate-heart-pop">
                    {count}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[400] lg:hidden">
          <div
            className="absolute inset-0 bg-borgonha-600/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-4/5 max-w-xs bg-rosa-50 flex flex-col animate-slide-right">
            <div className="flex items-center justify-between px-6 py-5 border-b border-nevoa">
              <span className="text-brand-name text-borgonha-600 text-sm">Sensualissima</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Fechar menu">
                <X size={20} className="text-grafite" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-label-upper text-grafite hover:text-borgonha-600 transition-colors"
                  style={{ fontSize: "12px" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="px-6 py-6 border-t border-nevoa">
              <Link href="/conta" className="flex items-center gap-3 text-grafite">
                <User size={18} />
                <span className="text-sm font-medium">Meu espaço</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
