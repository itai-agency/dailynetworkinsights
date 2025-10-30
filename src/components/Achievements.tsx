import { Calendar, Award, Mic, Newspaper } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import newspaperImage from "@/assets/1757056965708.png";
import youtubeInterviewImage from "@/assets/1757056965917.png";

const Achievements = () => {
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

  const achievements = [
    {
      date: "November 2025",
      title: "Speaking at The Restaurant Hub Synergy Exchange Event",
      description:
        "Daily Network Insights was invited to speak at The Restaurant Hub Synergy Exchange event hosted at Moc Kitchen Pho & Grill. This 2 hour networking event brought together local business owners focused on improving cash flow, customer relationships, and community impact. We shared our mission and highlighted opportunities for collaboration, mentorship, and supporting the next generation of entrepreneurs.",
      icon: Mic,
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
    },
    {
      date: "October 2025",
      title: "Press Release on Newspaper",
      description:
        "Daily Network Insights celebrates one year of empowering students and young professionals through mentorship, internships, community engagement, and real world learning opportunities. Our impact was recognized in the Foothill Sentry, which helped expand our visibility and strengthen partnerships with local organizations, colleges, and business leaders.",
      icon: Newspaper,
      image: newspaperImage,
    },
    {
      date: "September 2025",
      title: "Sponsor of AABC Gala",
      description:
        "Daily Network Insights proudly served as a sponsor for the Arab American Business Chamber (AABC) Gala, supporting an evening dedicated to celebrating entrepreneurship, cultural leadership, and business growth in the community. Our involvement helped bring together business owners, community leaders, and emerging professionals for a night of networking, recognition, and collaboration.",
      icon: Award,
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
    },
    {
      date: "August 2025",
      title: "First Youtube Interview",
      description:
        "Daily Network Insights launched its first YouTube interview series, spotlighting real business owners and entrepreneurs from within our local community. Through open conversation, we captured their journeys, challenges, lessons learned, and the passion behind their work. This series was created to inspire students and young professionals by providing authentic insight into what it takes to build and sustain a business.",
      icon: Calendar,
      image: youtubeInterviewImage,
    },
  ];

  return (
    <section ref={sectionRef} id="achievements" className="py-24 sm:py-32 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-[0.05] animate-gradient-shift bg-[length:200%_200%]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div 
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Our{" "}
              <span className="text-foreground">
                Achievements
              </span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              We're proud of the meaningful progress we've made in empowering
              students & small business communities. Each milestone reflects our
              commitment to mentorship, real world learning, and building strong
              partnerships.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line - positioned on the right side */}
            <div className="absolute right-8 top-0 bottom-0 w-1 bg-foreground hidden sm:block rounded-full" />

            {/* Achievement Cards */}
            <div className="space-y-16">
              {achievements.map((achievement, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={achievement.title} className="relative flex flex-col md:flex-row items-start gap-4 md:gap-8">
                    {/* Image on left side for even, right side for odd */}
                    <div
                      className={`relative w-full md:w-1/2 transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: `${0.3 + index * 0.2}s` }}
                    >
                      <div className="relative h-[250px] md:h-[300px] rounded-lg overflow-hidden shadow-card hover-lift group">
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div className="absolute inset-0 bg-foreground flex items-center justify-center hidden">
                          <achievement.icon className="w-20 h-20 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div
                      className={`relative w-full md:w-1/2 transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: `${0.4 + index * 0.2}s` }}
                    >
                      <Card className="border-border/50 hover:border-foreground/50 transition-all duration-500 hover-lift group shadow-card">
                        <CardContent className="p-4 md:p-8">
                          <div className="flex items-start gap-4 md:gap-6">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-foreground flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-glow">
                              <achievement.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="text-xs md:text-sm font-bold text-foreground mb-2 md:mb-3 uppercase tracking-wider">
                                {achievement.date}
                              </div>
                              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-foreground transition-colors">
                                {achievement.title}
                              </h3>
                              <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                                {achievement.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
