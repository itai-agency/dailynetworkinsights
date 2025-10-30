import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import videoSrc from "@/assets/file.mp4";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Video Overlay - Lighter overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 z-[1]" />
      
      {/* Animated Gradient Background with Parallax */}
      <div className="absolute inset-0 bg-gradient-hero bg-[length:200%_200%] animate-gradient-shift opacity-[0.15] z-[2]" />
      
      {/* Multiple Floating Orbs with different animations */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float-smooth z-[2]" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl animate-float-smooth z-[2]" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse-glow z-[2]" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] z-[2]" style={{
        backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                         linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-[10]">
        <div className="max-w-6xl mx-auto text-center py-12 sm:py-0">

          {/* Main Heading with staggered animation */}
          <h1 
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight transition-all duration-1000 text-white drop-shadow-2xl ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
            style={{ transitionDelay: '0.2s', textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 8px rgba(0, 0, 0, 0.6)' }}
          >
            Empowering You at the{" "}
            <span className="block text-white brightness-125 drop-shadow-lg" style={{ filter: 'drop-shadow(0 4px 12px rgba(255, 255, 255, 0.3))' }}>
              Intersection
            </span>
            of Education and{" "}
            <span className="text-white brightness-125 drop-shadow-lg" style={{ filter: 'drop-shadow(0 4px 12px rgba(255, 255, 255, 0.3))' }}>
              Opportunity
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-14 max-w-3xl mx-auto leading-relaxed px-2 transition-all duration-1000 drop-shadow-lg ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            Welcome to our community. We believe education should open doors and
            we're here to help you walk through them with confidence.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mb-8 sm:mb-0 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            <Button 
              size="lg" 
              className="group sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg hover-lift hover:shadow-hover bg-white text-black hover:bg-white/90 border-2 border-white" 
              asChild
            >
              <a href="#about">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className=" sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg border-2 border-white/80 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white hover-lift shadow-lg transition-all duration-300"
              asChild
            >
              <a href="https://linktr.ee/dailynetworkinsights" target="_blank" rel="noopener noreferrer">
                All Links
              </a>
            </Button>
          </div>

          {/* Stats with hover effects */}
          <div 
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-24 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.8s' }}
          >
            {[
              { label: "Students", value: "800+", icon: TrendingUp },
              { label: "Partners", value: "4", icon: TrendingUp },
              { label: "Events", value: "50+", icon: TrendingUp },
              { label: "Community", value: "22", icon: TrendingUp },
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className="group text-center p-4 sm:p-6 rounded-2xl hover-lift cursor-default"
                style={{ transitionDelay: `${0.9 + index * 0.1}s` }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/80 font-medium drop-shadow-md">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-float-smooth z-[10]">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center p-1.5 sm:p-2 bg-black/20 backdrop-blur-sm">
          <div className="w-1 h-2 sm:h-3 bg-white rounded-full animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
