import { Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const Events = () => {
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

  return (
    <section ref={sectionRef} id="events" className="py-24 sm:py-32 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-[0.05] animate-gradient-shift bg-[length:200%_200%]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div 
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Our Community{" "}
              <span className="text-foreground">
                Events
              </span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Join us as we bring people together through inspiring conversations,
              networking opportunities, and meaningful connections. From local
              meetups to industry expos, our events are designed to empower,
              educate, and celebrate the strength of our community.
            </p>
          </div>

          {/* Events Card */}
          <Card 
            className={`border-2 border-border/50 hover:border-foreground/50 transition-all duration-500 hover-lift overflow-hidden group shadow-card ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0 items-stretch">
                {/* Image/Icon Side */}
                <div className="relative min-h-[400px] bg-foreground flex items-center justify-center p-12 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-hero opacity-40 animate-gradient-shift bg-[length:200%_200%]" />
                  <div className="absolute inset-0 bg-foreground/20 animate-pulse-glow" />
                  <Calendar className="w-40 h-40 text-white relative z-10 animate-float-smooth group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-float-smooth" style={{ animationDelay: '1s' }} />
                </div>

                {/* Content Side */}
                <div className="p-10 md:p-12 flex flex-col justify-center bg-card">
                  <h3 className="text-3xl font-bold mb-6 group-hover:text-foreground transition-colors">
                    Discover Upcoming Events
                  </h3>
                  <p className="text-foreground/70 mb-8 leading-relaxed text-lg">
                    Stay connected with our growing community. Explore upcoming
                    workshops, networking sessions, speaker series, and
                    collaborative events designed to inspire and empower you on
                    your professional journey.
                  </p>
                  <Button 
                    size="lg" 
                    className="group/btn w-fit px-8 py-6 text-lg hover-lift hover:shadow-hover" 
                    asChild
                  >
                    <a
                      href="https://www.eventbrite.com/o/daily-network-insights-58486830883"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View All Events
                      <ExternalLink className="ml-2 w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Events;
