import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import WhatsAppButton from "@/components/WhatsAppButton";
import { APP_LOGO } from "@/const";
import { 
  Home as HomeIcon, 
  Award, 
  Users, 
  TrendingUp, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook,
  Star,
  CheckCircle2,
  Building2,
  Key,
  FileText,
  Heart
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = "5511999999999";
  const defaultMessage = "Olá André! Vi seu cartão de visitas e gostaria de conversar sobre imóveis.";
  const whatsappMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Header fixo */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black border-b border-white/10 shadow-lg shadow-black/50">
        <div className="container py-0">
          <div className="flex items-center justify-between">
            {/* Logo à esquerda */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="transition-opacity hover:opacity-80 cursor-pointer flex-shrink-0"
              aria-label="Voltar ao topo"
            >
              <img src={APP_LOGO} alt="André Fernandes Imóveis" className="h-18 md:h-22 w-auto" />
            </button>
            
            {/* Menu centralizado */}
            <nav className="flex items-center gap-3 md:gap-4 lg:gap-6 xl:gap-8 flex-1 justify-center">
              {[
                { label: 'Início', href: '#inicio' },
                { label: 'Imóveis', href: '#imoveis' },
                { label: 'Sobre Mim', href: '#sobre' },
                { label: 'Serviços', href: '#servicos' },
                { label: 'Depoimentos', href: '#depoimentos' },
                { label: 'Contato', href: '#contato' }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(item.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/90 hover:text-white/60 text-xs md:text-sm font-medium transition-all duration-300 relative group font-sans"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </nav>



          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-20 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-transparent to-transparent" />
        <div className="container relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                  André Fernandes
                </h1>
                <p className="text-xl md:text-2xl text-zinc-300 font-light">
                  Corretor de Imóveis Especializado
                </p>
              </div>
              <div className="space-y-3 max-w-xl">
                <div className="flex items-center gap-3 text-zinc-200">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                  <p className="text-base">Especialista em Imóveis Próximos ao Metrô</p>
                </div>
                <div className="flex items-center gap-3 text-zinc-200">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                  <p className="text-base">Programas Habitacionais Populares - MCMV</p>
                </div>
                <div className="flex items-center gap-3 text-zinc-200">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                  <p className="text-base">Mais de 10 anos transformando sonhos em realidade</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-white text-black hover:bg-zinc-100" onClick={() => {
                  document.getElementById('imoveis')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Ver Imóveis Disponíveis
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black" onClick={() => {
                  document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Conhecer Meu Trabalho
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-6 border-t border-white/10">
                <div>
                  <p className="text-3xl font-bold text-white">200+</p>
                  <p className="text-sm text-zinc-400">Imóveis Vendidos</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">150+</p>
                  <p className="text-sm text-zinc-400">Famílias Realizadas</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">10+</p>
                  <p className="text-sm text-zinc-400">Anos de Experiência</p>
                </div>
              </div>
            </div>
            <div className="relative animate-in fade-in slide-in-from-right duration-700">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <img 
                  src="/andre-photo.jpg" 
                  alt="André Fernandes - Corretor de Imóveis" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-amber-500 to-amber-600 text-black p-5 rounded-xl shadow-2xl">
                <div className="flex items-center gap-3">
                  <Award className="w-7 h-7" />
                  <div>
                    <p className="font-bold text-sm">CRECI 265764-F</p>
                    <p className="text-xs opacity-80">Corretor Certificado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Mim */}
      <section id="sobre" className="py-16 md:py-24 bg-muted/30 scroll-mt-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Sobre Mim</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou <strong>André Fernandes</strong>, corretor de imóveis credenciado pelo CRECI 265764-F, com mais de uma década de experiência no mercado imobiliário. Minha missão é transformar sonhos em realidade, ajudando famílias a encontrarem o lar perfeito e investidores a fazerem negócios lucrativos.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trabalho com transparência, dedicação e conhecimento profundo do mercado. Cada cliente é único, e meu compromisso é oferecer um atendimento personalizado, desde a primeira conversa até a entrega das chaves.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="font-medium">Atendimento Personalizado</span>
              </div>
              <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="font-medium">Negociação Transparente</span>
              </div>
              <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="font-medium">Suporte Completo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Imóveis em Destaque */}
      <section id="imoveis" className="py-16 md:py-24 scroll-mt-16">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Imóveis em Destaque</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Confira alguns dos imóveis incríveis que tenho disponível. Entre em contato para mais informações!
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/property1.jpg",
                title: "Apartamento Moderno",
                location: "Centro, São Paulo",
                price: "R$ 850.000",
                features: ["3 Quartos", "2 Vagas", "120m²"]
              },
              {
                image: "/property2.jpg",
                title: "Casa de Luxo",
                location: "Alphaville, SP",
                price: "R$ 1.500.000",
                features: ["4 Quartos", "4 Vagas", "350m²"]
              },
              {
                image: "/property3.jpg",
                title: "Cobertura Premium",
                location: "Jardins, São Paulo",
                price: "R$ 2.200.000",
                features: ["5 Quartos", "5 Vagas", "450m²"]
              }
            ].map((property, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 border-dashed border-primary/30">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                    Destaque
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {property.features.map((feature, i) => (
                      <span key={i} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-2xl font-bold text-primary">{property.price}</span>
                    <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Olá André! Tenho interesse no imóvel: ${property.title} - ${property.location}`)}`} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                        Tenho Interesse
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="servicos" className="py-16 md:py-24 bg-muted/30 scroll-mt-16">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Por Que Escolher Meus Serviços?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ofereço um atendimento completo e diferenciado para garantir a melhor experiência na compra ou venda do seu imóvel.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                title: "Portfólio Completo",
                description: "Acesso aos melhores imóveis da região com opções para todos os perfis."
              },
              {
                icon: Key,
                title: "Processo Simplificado",
                description: "Cuido de toda a burocracia para você focar no que importa."
              },
              {
                icon: FileText,
                title: "Documentação Segura",
                description: "Análise completa de documentos para garantir segurança jurídica."
              },
              {
                icon: Heart,
                title: "Atendimento Humanizado",
                description: "Cada cliente é único e merece atenção especial e personalizada."
              }
            ].map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-2 border-dashed border-primary/30">
                <CardContent className="space-y-4 p-0">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-16 md:py-24 scroll-mt-16">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">O Que Meus Clientes Dizem</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A satisfação dos meus clientes é minha maior conquista. Veja alguns depoimentos.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                role: "Compradora",
                text: "O André foi fundamental para encontrar minha casa dos sonhos. Profissional, atencioso e sempre disponível. Recomendo de olhos fechados!",
                rating: 5
              },
              {
                name: "João Santos",
                role: "Investidor",
                text: "Excelente corretor! Me ajudou a fazer um ótimo investimento com total transparência e segurança. Já fechei 3 negócios com ele.",
                rating: 5
              },
              {
                name: "Ana Costa",
                role: "Vendedora",
                text: "Vendi meu apartamento em tempo recorde graças ao trabalho impecável do André. Super indico!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 space-y-4 hover:shadow-lg transition-shadow border-2 border-dashed border-primary/30">
                <CardContent className="space-y-4 p-0">
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <div className="pt-4 border-t">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Pronto para Encontrar Seu Imóvel Ideal?</h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Entre em contato agora mesmo e vamos juntos realizar seu sonho ou fazer o melhor investimento!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => {
              document.getElementById('imoveis')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Ver Todos os Imóveis
            </Button>
            <a href="tel:+5511999999999">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="py-12 bg-muted/30 border-t scroll-mt-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <img src={APP_LOGO} alt="André Fernandes Imóveis" className="h-16 w-auto" />
              <p className="text-sm text-muted-foreground">
                Corretor de imóveis especializado em realizar sonhos e criar oportunidades de investimento.
              </p>
              <p className="text-xs text-muted-foreground mt-2">CRECI 265764-F | Todos os direitos reservados</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Contato</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>andre@imoveis.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>São Paulo, SP</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Redes Sociais</h3>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href={whatsappUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} André Fernandes Imóveis. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
}
