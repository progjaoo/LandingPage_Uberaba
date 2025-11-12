import RadioLogo from "@/components/RadioLogo";
import AudioPlayer from "@/components/AudioPlayer";
import SocialLinks from "@/components/SocialLinks";
import bgDesktop from "@/assets/bg-desktop.png";
import bgMobile from "@/assets/bg-mobile.png";
import logoSite from "@/assets/logoSite.png"
const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <section 
        className="relative bg-primary py-12 md:py-20 px-4 overflow-hidden"
        style={{
          backgroundImage: `url(${bgDesktop})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div 
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: `url(${bgMobile})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="relative z-10 container mx-auto max-w-5x1" >
          
        <div className="flex justify-center mb-10 animate-fade-in">
          <img
            src={logoSite}
            alt="Logo Rádio"
            className="w-24 md:w-28"
          />
        </div>
         
          <h1 className="text-hero text-white text-center mb-8 md:mb-10 animate-fade-in px-4">
            A rádio de todas
            <br />
            as igrejas que toca
            <br />
            o som do céu!
          </h1>

          <div className="mb-8 md:mb-12 animate-fade-in">
            <SocialLinks />
          </div>
        </div>
      </section>

      <section className="relative -mt-8 md:-mt-10 px-4 z-20 animate-scale-in">
        <AudioPlayer />
      </section>

      <section className="bg-background py-12 md:py-16 px-4 flex-1">
        <div className="container mx-auto max-w-3xl space-y-6 text-center">
          <p className="text-foreground text-base md:text-lg leading-relaxed">
            A Rádio 89.3 Maravilha FM é a sua companhia diária, levando até você muito mais do que música: transmitimos fé, esperança e a Palavra de Deus, sempre com uma programação de excelência feita para abençoar e transformar vidas.
          </p>

          <p className="text-foreground text-base md:text-lg leading-relaxed">
            Somos uma emissora cristã com a missão de compartilhar o Evangelho da Paz e estar ao seu lado em todos os momentos, trazendo mensagens de amor, inspiração e alegria.
          </p>

          <p className="text-foreground text-base md:text-lg leading-relaxed">
            Em Belo Horizonte, sintonize 89.3 FM e viva a experiência de ter a Maravilha FM como parte da sua rotina. Porque aqui, cada canção e cada palavra são preparadas especialmente para você!
          </p>
        </div>
      </section>

      
      <footer className="bg-primary py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Logo */}
          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <img
              src={logoSite}
              alt="Logo Rádio Maravilha"
              className="w-20 animate-fade-in"
            />
          </div>

          {/* Contact Info */}
          <div className="text-white space-y-2 md:text-right">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://maps.app.goo.gl/RdZ72fpBRLGMhTCx8"
              className="hover:underline"
            >
              <p className="text-sm md:text-base leading-snug">
                Rua Dr. Jesuino Felicissimo, 36 Quinta da Boa Esperança<br/>
                Uberaba - MG
              </p>
            </a>

            <p className="text-sm md:text-base">
              Whatsapp:{" "}
              <a
                href="https://wa.me/5531999982089"
                className="font-semibold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                (31) 99998-2089
              </a>
            </p>

            <p className="text-xs text-gray-200 mt-2">
              © 2025 Rádio 89.3 Maravilha FM — Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>

    </div>
  );
};

export default Index;
