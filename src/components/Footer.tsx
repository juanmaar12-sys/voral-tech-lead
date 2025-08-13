import { Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicios: [
      { name: "IA Personalizada", href: "#servicios" },
      { name: "Automatización", href: "#servicios" },
      { name: "Chatbots", href: "#servicios" },
      { name: "Análisis Predictivo", href: "#servicios" }
    ],
    empresa: [
      { name: "Nosotros", href: "#nosotros" },
      { name: "Casos de Éxito", href: "#casos" },
      { name: "Blog", href: "#blog" },
      { name: "Carreras", href: "#carreras" }
    ],
    soporte: [
      { name: "Contacto", href: "#contacto" },
      { name: "Documentación", href: "#docs" },
      { name: "FAQ", href: "#faq" },
      { name: "Soporte", href: "#soporte" }
    ]
  };

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold text-foreground">Voral</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Transformamos empresas con soluciones de IA y automatización de vanguardia.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Tecnología del futuro, disponible hoy</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Soporte</h3>
            <ul className="space-y-3">
              {footerLinks.soporte.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Voral. Todos los derechos reservados.
            </div>
            <div className="flex gap-6 text-sm">
              <a 
                href="#privacidad" 
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Política de Privacidad
              </a>
              <a 
                href="#terminos" 
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Términos de Uso
              </a>
              <a 
                href="#cookies" 
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;