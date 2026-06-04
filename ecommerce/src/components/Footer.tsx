import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";

const footerLinks = {
  loja: [
    { href: "/colecoes/novidades", label: "Novidades" },
    { href: "/colecoes", label: "Todas as coleções" },
    { href: "/promocoes", label: "Promoções" },
    { href: "/lookbook", label: "Lookbook" },
  ],
  ajuda: [
    { href: "/faq", label: "Perguntas frequentes" },
    { href: "/trocas", label: "Trocas e devoluções" },
    { href: "/rastreio", label: "Rastrear pedido" },
    { href: "/contato", label: "Fale conosco" },
  ],
  sobre: [
    { href: "/sobre", label: "Nossa história" },
    { href: "/sustentabilidade", label: "Sustentabilidade" },
    { href: "/trabalhe", label: "Trabalhe conosco" },
    { href: "/imprensa", label: "Imprensa" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-carvao text-rosa-200">
      {/* Newsletter */}
      <div className="bg-borgonha-600 px-5 md:px-8 lg:px-16 py-16">
        <div className="max-w-[1280px] mx-auto text-center">
          <p className="text-label-upper text-ouro-400 mb-3" style={{ fontSize: "10px" }}>
            Clube Sensualissima
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-rosa-50 font-light italic mb-4">
            Entre para o clube.
          </h2>
          <p className="text-rosa-200 text-sm mb-8 max-w-md mx-auto">
            Acesso antecipado a novas coleções, ofertas exclusivas e conteúdo que celebra a sua sensualidade.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="seu@email.com"
              className="flex-1 bg-white/10 border-b border-rosa-200/40 text-rosa-50 placeholder:text-rosa-200/50 px-4 py-3 text-sm outline-none focus:border-ouro-400 transition-colors"
            />
            <button type="submit" className="btn-primary bg-ouro-400 text-carvao hover:bg-ouro-300 whitespace-nowrap">
              Entrar para o clube
            </button>
          </form>
        </div>
      </div>

      {/* Links */}
      <div className="px-5 md:px-8 lg:px-16 py-16">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Marca */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-brand-name text-rosa-100 text-sm block mb-4">Sensualissima</span>
            <p className="text-rosa-200/70 text-sm leading-relaxed mb-6">
              Não é o que você veste.<br />É o que você sente.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/sensualissima"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-rosa-200/20 flex items-center justify-center text-rosa-200/60 hover:text-rosa-100 hover:border-rosa-200/40 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://youtube.com/@sensualissima"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full border border-rosa-200/20 flex items-center justify-center text-rosa-200/60 hover:text-rosa-100 hover:border-rosa-200/40 transition-colors"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Loja */}
          <div>
            <h4 className="text-label-upper text-ouro-400 mb-5" style={{ fontSize: "10px" }}>Loja</h4>
            <ul className="space-y-3">
              {footerLinks.loja.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-rosa-200/70 hover:text-rosa-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ajuda */}
          <div>
            <h4 className="text-label-upper text-ouro-400 mb-5" style={{ fontSize: "10px" }}>Ajuda</h4>
            <ul className="space-y-3">
              {footerLinks.ajuda.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-rosa-200/70 hover:text-rosa-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sobre */}
          <div>
            <h4 className="text-label-upper text-ouro-400 mb-5" style={{ fontSize: "10px" }}>Sobre</h4>
            <ul className="space-y-3">
              {footerLinks.sobre.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-rosa-200/70 hover:text-rosa-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-rosa-200/10 px-5 md:px-8 lg:px-16 py-6">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-rosa-200/40">
          <p>© 2026 Sensualissima. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="/privacidade" className="hover:text-rosa-200/70 transition-colors">Privacidade</Link>
            <Link href="/termos" className="hover:text-rosa-200/70 transition-colors">Termos</Link>
          </div>
          <div className="flex items-center gap-2 text-rosa-200/30">
            <span>Pix</span>
            <span>·</span>
            <span>Cartão de crédito</span>
            <span>·</span>
            <span>Boleto</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
