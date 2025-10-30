import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Lightbulb } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import cofounderImage from "@/assets/cofunder.png";

const About = () => {
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
    <section ref={sectionRef} id="about" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle opacity-40" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div 
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Message from Our{" "}
              <span className="text-foreground">
                Cofounder
              </span>
            </h2>
            <p className="text-2xl text-foreground/70 font-medium">Kasey Eckels</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            {/* Image */}
            <div 
              className={`relative max-w-sm mx-auto transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="absolute inset-0 bg-foreground opacity-20 blur-3xl rounded-full animate-pulse-glow" />
              <div className="relative rounded-3xl overflow-hidden shadow-card hover-lift group">
                <div className="absolute inset-0 bg-foreground opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <img
                  src={cofounderImage}
                  alt="Kasey Eckels"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Message */}
            <div 
              className={`space-y-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              <p className="text-xl leading-relaxed text-foreground/80 text-justify">
                At Daily Network Insights, I've seen firsthand how powerful the
                right connections can be. Our mission is to help entrepreneurs
                and professionals strengthen their networking skills through
                practical strategies, inspiring success stories, and meaningful
                insights.
              </p>
              <p className="text-xl leading-relaxed text-foreground/80 text-justify">
                We built this community to create real opportunities—where
                learning meets action and connections turn into growth. I invite
                you to join us, share your experiences, and discover how
                effective networking can open doors to your next opportunity.
              </p>
            </div>
          </div>

          {/* Mission Cards */}
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Community First",
                description:
                  "Building a supportive network where everyone grows together through shared experiences and mutual support.",
              },
              {
                icon: Target,
                title: "Real Opportunities",
                description:
                  "Connecting students and professionals with meaningful internships, mentorship, and career pathways.",
              },
              {
                icon: Lightbulb,
                title: "Practical Learning",
                description:
                  "Bridging the gap between academic knowledge and real-world application through hands-on experience.",
              },
            ].map((item, index) => (
              <Card
                key={item.title}
                className={`border-border/50 hover:border-foreground/50 transition-all duration-500 hover-lift group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${0.6 + index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-foreground flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-glow">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-foreground transition-colors">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed text-lg">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
