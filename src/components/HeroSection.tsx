import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles, Zap, Brain } from "lucide-react";
import WaveBackground from "./WaveBackground";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <WaveBackground />
      
      <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-md rounded-full border border-border/50 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Transformando empresas con IA
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Servicios de{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              IA y Automatización
            </span>{" "}
            para tu empresa
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Potencia tu negocio con soluciones de inteligencia artificial personalizadas. 
            Automatizamos procesos, optimizamos operaciones y llevamos tu empresa al futuro digital.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" variant="hero" className="group">
              Solicitar Consulta
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-border/50 backdrop-blur-md">
              Ver Casos de Éxito
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 bg-card/30 backdrop-blur-md rounded-lg border border-border/30">
              <Brain className="w-6 h-6 text-primary" />
              <span className="text-foreground font-medium">IA Personalizada</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-card/30 backdrop-blur-md rounded-lg border border-border/30">
              <Zap className="w-6 h-6 text-secondary" />
              <span className="text-foreground font-medium">Automatización</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-card/30 backdrop-blur-md rounded-lg border border-border/30">
              <Sparkles className="w-6 h-6 text-accent" />
              <span className="text-foreground font-medium">Innovación</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;