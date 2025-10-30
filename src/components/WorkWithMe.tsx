// Removed carousel in favor of CSS marquee slider
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lightbulb, TrendingUp, Users, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WorkWithMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [email, setEmail] = useState("");
  // No carousel API needed for CSS marquee slider

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

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  // Auto-load all partner logos ending with Comp.png from assets
  const companyLogoModules = import.meta.glob("@/assets/*Comp.png", { eager: true, import: "default" }) as Record<string, string>;
  const companyPartners = Object.entries(companyLogoModules).map(([path, url]) => {
    const fileName = path.split("/").pop() || "Partner";
    const name = fileName.replace(/\.png$/i, "").replace(/[-_]/g, " ");
    return { name, logo: url } as { name: string; logo: string };
  });

  // Duplicate partners list to enable seamless infinite scroll
  const duplicatedCompanyPartners = [...companyPartners, ...companyPartners];

  // Auto-load all non-profit logos ending with Comp2.png from assets
  const nonprofitLogoModules = import.meta.glob("@/assets/*Comp2.png", { eager: true, import: "default" }) as Record<string, string>;
  const nonprofitPartners = Object.entries(nonprofitLogoModules).map(([path, url]) => {
    const fileName = path.split("/").pop() || "Partner";
    const name = fileName.replace(/\.png$/i, "").replace(/[-_]/g, " ");
    return { name, logo: url } as { name: string; logo: string };
  });
  const duplicatedNonprofitPartners = [...nonprofitPartners, ...nonprofitPartners];

  const services = [
    {
      icon: Lightbulb,
      title: "Actionable Networking Tips",
      description: "Discover practical networking strategies and techniques to expand your professional circle and create valuable connections. Learn from real life examples and leverage networking opportunities to grow your business."
    },
    {
      icon: TrendingUp,
      title: "Valuable Networking Insights",
      description: "Access valuable insights into the world of networking, including trends, best practices, and innovative approaches. Stay updated with the latest strategies to enhance your networking skills and achieve success."
    },
    {
      icon: Users,
      title: "Inspiring Success Stories",
      description: "Explore stories of entrepreneurs who have utilized effective networking to achieve their goals. Gain motivation and insights from their journeys to apply to your own path toward growth and success."
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle opacity-40" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Section */}
        <div className="max-w-7xl mx-auto mb-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div 
              className={`relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-card hover-lift group">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Networking and collaboration"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Content Side */}
            <div 
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
                Where Education Meets{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Opportunity
                </span>
              </h2>
              
              <div className="space-y-8">
                {services.map((service, index) => (
                  <div 
                    key={service.title}
                    className="group"
                    style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors flex items-center gap-3">
                      <service.icon className="w-8 h-8 text-primary" />
                      {service.title}
                    </h3>
                    <p className="text-lg text-foreground/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Company Partners Section */}
        <div className="max-w-7xl mx-auto mb-32">
          {/* Header layout like the example: title left, description right */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
            <div 
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '0.9s' }}
            >
              <h4 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground">
                Trusted Company
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">Partners</span>
              </h4>
            </div>
            <p 
              className={`text-base sm:text-lg text-foreground/70 leading-relaxed transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: '1s' }}
            >
              We are proud to collaborate with organizations that believe in our mission. Their support helps us expand opportunities and create lasting impact in our community.
            </p>
          </div>

          {/* Logo marquee row */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '1.1s' }}
          >
            <div className="logo-slider w-full mx-auto">
              <div className="logo-track">
                {duplicatedCompanyPartners.map((partner, index) => (
                  <div key={`${partner.name}-${index}`} className="logo-slide">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-24 sm:h-28 md:h-32 lg:h-36 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Local styles for marquee slider */}
            <style>{`
              @keyframes logo-scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              @keyframes logo-scroll-reverse {
                0% { transform: translateX(-50%); }
                100% { transform: translateX(0); }
              }
              .logo-slider {
                background: transparent;
                overflow: hidden;
                position: relative;
                height: 170px;
              }
              .logo-track {
                display: flex;
                width: max-content;
                animation: logo-scroll 40s linear infinite;
              }
              .logo-track.reverse {
                animation: logo-scroll-reverse 40s linear infinite;
              }
              .logo-slide {
                height: 170px;
                width: 300px;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0 24px;
              }
              @media (max-width: 640px) {
                .logo-slide {
                  width: 160px;
                }
              }
            `}</style>
          </div>
        </div>

          {/* Non-Profit Partners */}
          <div className="max-w-7xl mx-auto mb-32">
            {/* Header layout: title left, description right (matching company) */}
            <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
              <div 
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: '1.6s' }}
              >
                <h4 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground">
                  Trusted Non-Profit
                  <br />
                  <span className="bg-gradient-primary bg-clip-text text-transparent">Partners</span>
                </h4>
              </div>
              <p 
                className={`text-base sm:text-lg text-foreground/70 leading-relaxed transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: '1s' }}
              >
                We are proud to collaborate with non-profit organizations committed to community growth and well-being. Their support helps us expand opportunities and create lasting impact in our community.
              </p>
            </div>

            {/* Logo marquee row (matching company) */}
            <div 
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '1.1s' }}
            >
              <div className="logo-slider w-full mx-auto">
                <div className="logo-track reverse">
                  {duplicatedNonprofitPartners.map((partner, index) => (
                    <div key={`${partner.name}-np-${index}`} className="logo-slide">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-24 sm:h-28 md:h-32 lg:h-36 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0 items-stretch">
            {/* Image Side */}
            <div 
              className={`relative min-h-[500px] hidden md:block transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '2s' }}
            >
              <div className="relative h-full rounded-l-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop"
                  alt="Community"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-primary/20" />
              </div>
            </div>

            {/* Newsletter Side */}
            <div 
              className={`bg-card p-12 md:p-16 rounded-3xl md:rounded-r-3xl md:rounded-l-none transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: '2.2s' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-8 h-8 text-primary" />
                <h3 className="text-4xl sm:text-5xl font-bold text-foreground/60">
                  Be The First To Know
                </h3>
              </div>
              <p className="text-xl text-foreground/60 mb-8">
                Subscribe to our newsletter to receive news and updates.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email here *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 text-lg border-2 border-border/50 focus:border-primary transition-colors rounded-xl"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-14 text-lg hover-lift hover:shadow-hover"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
    </section>
  );
};

export default WorkWithMe;

