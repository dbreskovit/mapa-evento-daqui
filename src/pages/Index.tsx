import logo from "@/assets/logo.png";
import { LinkButton } from "@/components/LinkButton";

const Index = () => {
  const links = [
    {
      title: "Programação Completa",
      href: "/images/programacao.jpeg",
    },
    {
      title: "Mapa Geral do Evento",
      href: "/images/mapa-geral.jpeg",
    },
    {
      title: "Mapa - Pavilhão A (Ginásio A.Senna)",
      href: "/images/pavilhao-a.jpeg",
    },
    {
      title: "Mapa - Pavilhão B (Clube)",
      href: "/images/pavilhao-b.jpeg",
    },
    {
      title: "Mapa - Pavilhão C (Tenda Externa)",
      href: "/images/pavilhao-c.jpeg",
    },
    {
      title: "Mapa - Pavilhão D (Tenda Externa)",
      href: "/images/pavilhao-d.jpeg",
    },
  ];

  return (
    <main className="min-h-screen bg-background py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto flex flex-col items-center space-y-8 sm:space-y-10">
        {/* Logo Section */}
        <div className="w-full max-w-md animate-in fade-in slide-in-from-top-4 duration-700">
          <img
            src={logo}
            alt="Negócios Daqui"
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>

        {/* Event Info */}
        <div className="text-center space-y-2 animate-in fade-in slide-in-from-top-4 duration-700 delay-150">
          <p className="text-accent text-lg sm:text-xl font-bold tracking-wide">
            21 A 23 NOVEMBRO 2025
          </p>
          <p className="text-muted-foreground text-sm sm:text-base">
            Centro de Tenente Portela
          </p>
        </div>

        {/* Links Section */}
        <nav className="w-full space-y-4 sm:space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          {links.map((link, index) => (
            <div
              key={link.href}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <LinkButton href={link.href}>{link.title}</LinkButton>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <footer className="text-center text-muted-foreground text-xs sm:text-sm pt-8 animate-in fade-in duration-700 delay-700">
          <p>Entrada Gratuita • Acesso ao parque e aos shows é gratuito</p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
