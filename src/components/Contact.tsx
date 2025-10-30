import { Mail, Phone, Youtube, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@dailynetworkinsights",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/DailyNetworkInsights",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/dailynetworkinsights",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "http://www.linkedin.com/company/daily-network-insights",
    },
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-[0.08] animate-gradient-shift bg-[length:200%_200%]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div 
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Get in{" "}
              <span className="text-foreground">
                Touch
              </span>
            </h2>
            <p className="text-xl text-foreground/70">
              Ready to connect? We'd love to hear from you
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-8 mb-16">
            {/* Email Card */}
            <div 
              className={`group p-10 rounded-3xl border-2 border-border/50 hover:border-foreground/50 transition-all duration-500 hover-lift bg-card shadow-card ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              <div className="w-16 h-16 rounded-xl bg-foreground flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-glow">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-foreground transition-colors">Email Us</h3>
              <a
                href="mailto:info@dailynetworkinsights.com"
                className="text-lg text-foreground/70 hover:text-foreground transition-colors inline-block"
              >
                info@dailynetworkinsights.com
              </a>
            </div>

            {/* Phone Card */}
            <div 
              className={`group p-10 rounded-3xl border-2 border-border/50 hover:border-foreground/50 transition-all duration-500 hover-lift bg-card shadow-card ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              <div className="w-16 h-16 rounded-xl bg-foreground flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-glow">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-foreground transition-colors">Call Us</h3>
              <a
                href="tel:714-576-6128"
                className="text-lg text-foreground/70 hover:text-foreground transition-colors inline-block"
              >
                714-576-6128
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div 
            className={`text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.5s' }}
          >
            <h3 className="text-2xl font-bold mb-8">Follow Us</h3>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {socialLinks.map((social, index) => (
                <Button
                  key={social.name}
                  variant="outline"
                  size="lg"
                  className="group px-6 py-6 hover-lift border-2"
                  asChild
                  style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
                    <span className="ml-3 font-semibold">{social.name}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* All Links Button */}
          <div 
            className={`text-center mt-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.9s' }}
          >
            <Button size="lg" variant="default" className="px-10 py-6 text-lg shadow-glow hover-lift hover:shadow-hover" asChild>
              <a
                href="https://linktr.ee/dailynetworkinsights"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Links
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
