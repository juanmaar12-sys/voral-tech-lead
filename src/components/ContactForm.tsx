import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  // Input sanitization function
  const sanitizeInput = (input: string): string => {
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
      .replace(/[<>]/g, "")
      .trim();
  };

  // Email validation
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (field: string, value: string) => {
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({
      ...prev,
      [field]: sanitizedValue
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.company || !formData.service || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor, completa todos los campos requeridos.",
        variant: "destructive"
      });
      return;
    }

    if (!isValidEmail(formData.email)) {
      toast({
        title: "Error",
        description: "Por favor, ingresa un email válido.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send form data to n8n webhook
      const response = await fetch("https://juanmar12.app.n8n.cloud/webhook-test/afd8db19-eacc-4239-8a8a-83216e0ebd68", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          timestamp: new Date().toISOString(),
          source: "voral-website"
        }),
      });

      if (response.ok) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Nos pondremos en contacto contigo pronto.",
        });
      } else {
        throw new Error("Error en el servidor");
      }

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Inténtalo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      details: "Ciudad de México, México"
    },
    {
      icon: Phone,
      title: "Teléfono",
      details: "+52 55 1234 5678"
    },
    {
      icon: Mail,
      title: "Email",
      details: "contacto@voral.com"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-hero relative">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Solicita más{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Información
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Estás listo para transformar tu empresa con IA? Contacta con nuestro equipo 
            de expertos y descubre cómo podemos ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">
                Solicitar Consulta Gratuita
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Completa el formulario y nuestro equipo se pondrá en contacto contigo 
                en menos de 24 horas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Nombre completo *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Tu nombre"
                      required
                      maxLength={100}
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email corporativo *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="tu@empresa.com"
                      required
                      maxLength={100}
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground">
                    Empresa *
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    placeholder="Nombre de tu empresa"
                    required
                    maxLength={100}
                    className="bg-background/50 border-border/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-foreground">
                    Servicio de interés *
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}>
                    <SelectTrigger className="bg-background/50 border-border/50">
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ia-personalizada">IA Personalizada</SelectItem>
                      <SelectItem value="automatizacion">Automatización de Procesos</SelectItem>
                      <SelectItem value="chatbots">Chatbots y Asistentes</SelectItem>
                      <SelectItem value="analisis-predictivo">Análisis Predictivo</SelectItem>
                      <SelectItem value="ciberseguridad">Ciberseguridad con IA</SelectItem>
                      <SelectItem value="consultoria">Consultoría e Innovación</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Mensaje *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                    required
                    maxLength={1000}
                    rows={4}
                    className="bg-background/50 border-border/50 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  className="w-full shadow-glow" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Enviando...</>
                  ) : (
                    <>
                      Enviar Solicitud
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <p className="text-muted-foreground">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">
                  ¿Por qué elegir Voral?
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Más de 5 años de experiencia en IA empresarial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Soluciones personalizadas para cada industria</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Soporte técnico especializado 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>ROI garantizado en 6 meses</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;