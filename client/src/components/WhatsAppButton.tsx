import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "5511999999999"; // Número do WhatsApp (ajustar depois)
  const message = encodeURIComponent("Olá André! Vi seu cartão de visitas digital e gostaria de conversar sobre imóveis.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
      aria-label="Fale comigo no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-20 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Fale comigo!
      </span>
    </a>
  );
}
