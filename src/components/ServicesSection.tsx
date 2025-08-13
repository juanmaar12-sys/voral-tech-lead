import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Workflow, MessageSquare, BarChart3, Shield, Lightbulb } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "Inteligencia Artificial Personalizada",
      description: "Desarrollamos modelos de IA adaptados específicamente a las necesidades de tu empresa, desde chatbots hasta sistemas de predicción avanzados.",
      features: ["Modelos personalizados", "Machine Learning", "Procesamiento de lenguaje natural"]
    },
    {
      icon: Workflow,
      title: "Automatización de Procesos",
      description: "Optimizamos y automatizamos procesos empresariales para aumentar la eficiencia y reducir costos operativos.",
      features: ["RPA", "Workflows inteligentes", "Integración de sistemas"]
    },
    {
      icon: MessageSquare,
      title: "Chatbots y Asistentes Virtuales",
      description: "Creamos asistentes conversacionales inteligentes para mejorar la atención al cliente y automatizar consultas.",
      features: ["IA conversacional", "Soporte 24/7", "Integración multicanal"]
    },
    {
      icon: BarChart3,
      title: "Análisis Predictivo",
      description: "Implementamos soluciones de análisis de datos avanzado para tomar decisiones basadas en predicciones precisas.",
      features: ["Big Data", "Predicciones precisas", "Dashboards inteligentes"]
    },
    {
      icon: Shield,
      title: "Ciberseguridad con IA",
      description: "Protegemos tu empresa con sistemas de seguridad potenciados por inteligencia artificial para detectar amenazas en tiempo real.",
      features: ["Detección de amenazas", "Monitoreo continuo", "Respuesta automática"]
    },
    {
      icon: Lightbulb,
      title: "Consultoría e Innovación",
      description: "Te asesoramos en la transformación digital de tu empresa y la implementación estratégica de tecnologías emergentes.",
      features: ["Estrategia digital", "Roadmap tecnológico", "Capacitación"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-background relative">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Nuestros{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Servicios
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos soluciones completas de IA y automatización diseñadas para transformar 
            tu empresa y optimizar cada aspecto de tus operaciones.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 group hover:scale-105"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-foreground text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-card p-8 rounded-2xl border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Listo para transformar tu empresa?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contacta con nuestro equipo de expertos y descubre cómo la IA puede 
              revolucionar tu negocio.
            </p>
            <Button size="lg" variant="hero" className="shadow-glow">
              Solicitar Consulta Gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;