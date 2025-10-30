import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Instagram, Facebook, Linkedin, ArrowUp } from "lucide-react";
import ownerAlan from "@/assets/owner-alan.png";
import kancharImg from "@/assets/kanchar.png";
import corderoImg from "@/assets/cordero.png";
import yosmelImg from "@/assets/yosmel.png";
import englanderImg from "@/assets/englander.png";
import octaLogo from "@/assets/octa-MATE.png";
import letipLogo from "@/assets/letip-MATE.png";
import miracleNoodleLogo from "@/assets/miracle-noodle-MATE.png";
import freeLifeLogo from "@/assets/free-life-MATE.png";
import aabcLogo from "@/assets/aabc-MATE.png";
// Minimal TikTok icon (since not in current icon set)
const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M21 8.5c-2.2-.4-4-1.7-5.1-3.6V16a6 6 0 1 1-6-6c.4 0 .8 0 1.2.1V12a3 3 0 1 0 3 3V2h2.2c.6 2 2.2 3.7 4.7 4.2V8.5z" />
  </svg>
);
import { useEffect, useRef, useState } from "react";

const AboutPage = () => {
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

  const ambassadors = [
    {
      name: "Farah Kanchar",
      title: "Organization & Diversity",
      email: "info@aabchamber.org",
      phone: "949-287-2465",
      image: kancharImg,
      socials: [
        { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/aabchamber" },
        { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/profile.php?id=61570941665398&mibextid=wwXIfr" },
        { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/farah-kanchar-mba-623780121" },
      ]
    },
    {
      name: "Yosmel Gutierrez",
      title: "Banking & Lending",
      email: "yosmel@geegoals.com",
      phone: "949-910-5559",
      image: yosmelImg,
      socials: [
        { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/geegoals_official" },
        { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/groups/geegoals" },
        { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/yosmelg" },
      ]
    },
    {
      name: "Andrew Cordero",
      title: "Film & Media",
      email: "info@corderophotos.com",
      phone: "714-696-1320",
      image: corderoImg,
      socials: [
        { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/corderophotos" },
        { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/corderophotos" },
        { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/corderophotos" },
      ]
    },
    {
      name: "Jeff Englander",
      title: "Culinary & Hospitality",
      email: "bluefincateringandevents@gmail.com",
      phone: "623-308-2405",
      image: englanderImg,
      socials: [
        { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/bluefincateringandevents?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" },
        { name: "TikTok", icon: TikTokIcon, url: "https://www.tiktok.com/@bluefincateringandevents?_t=ZP-90uHKU2cHD4&_r=1" },
        { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/jeff-englander-b10416147" },
      ]
    }
  ];

  // Community partners logos (local assets)
  const communityMembers = [
    { name: "OCTA", logo: octaLogo },
    { name: "LeTip Anaheim", logo: letipLogo },
    { name: "Miracle Noodle", logo: miracleNoodleLogo },
    { name: "Free Life Community Church", logo: freeLifeLogo },
    { name: "Arab American Business Chamber", logo: aabcLogo },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* About Owner - Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-44 sm:pb-28"> 
        <div className="absolute inset-0 -z-10">
          <div className="h-full w-full bg-gradient-to-br from-black via-neutral-900 to-neutral-800" />
          <div className="absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-b from-transparent to-black" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Copy */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-foreground mb-6">
                <span className="bg-gradient-primary bg-clip-text text-transparent">About me!</span>
              </h1>
              <p className="text-lg sm:text-xl text-foreground/80 max-w-xl mb-8">
              I’m Alberto Rodriguez, an entrepreneur with a passion for connecting people, building businesses, and creating opportunities for growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-foreground text-white hover:bg-foreground/90 px-6 h-12 rounded-full">
                  Discover our creators
                </Button>
                <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground/5 px-6 h-12 rounded-full">
                  Our projects
                </Button>
              </div>
            </div>

            {/* Blob image */}
            <div className="relative mx-auto w-full max-w-lg">
              <div className="about-blob shadow-2xl">
                <img src={ownerAlan} alt="Owner Alan" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
        {/* local styles for blob */}
        <style>{`
          .about-blob {
            position: relative;
            width: 100%;
            aspect-ratio: 1 / 1.05;
            overflow: hidden;
            background: radial-gradient(120% 120% at 70% 30%, rgba(0,0,0,0.18) 0%, transparent 60%);
            border-radius: 46% 54% 40% 60% / 38% 40% 60% 62%;
            mask-image: radial-gradient(circle at 50% 50%, black 70%, transparent 100%);
            animation: about-float 6s ease-in-out infinite;
            box-shadow: 0 28px 84px rgba(0,0,0,0.55), 0 10px 28px rgba(0,0,0,0.45);
          }
          @keyframes about-float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(0.3deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          @media (min-width: 1024px) {
            .about-blob { aspect-ratio: 1 / 0.85; }
          }
        `}</style>
      </section>

      {/* Our Ambassadors Section - Image-forward grid */}
      <section ref={sectionRef} className="py-16 sm:py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                Our Ambassadors
              </h2>
              <p className="text-xl font-bold text-foreground mb-8">
                Dedication. Expertise. Passion.
              </p>
              <p className="text-lg text-foreground/80 max-w-4xl mx-auto leading-relaxed text-left">
                The Ambassadors Team is here to guide you on your entrepreneurial journey. With experienced professionals ready to share valuable insights and support, you’ll gain the knowledge and confidence needed to succeed. Their guidance makes every step of this journey inspiring and rewarding.
              </p>
            </div>
            {/* Grid of portrait cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ambassadors.map((ambassador, index) => (
                <div
                  key={ambassador.name}
                  className={`group relative overflow-hidden rounded-3xl bg-card shadow-card hover:shadow-2xl transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="aspect-[3/4] w-full overflow-hidden">
                    <img src={ambassador.image} alt={ambassador.name} className="h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-foreground mb-1">{ambassador.name}</h3>
                    <p className="text-sm text-foreground/70 mb-3">{ambassador.title}</p>
                    <a href={`mailto:${ambassador.email}`} className="flex items-start gap-2 text-sm text-foreground/80 hover:text-foreground transition-colors mb-2 w-full break-all pr-1 py-1">
                      <Mail className="w-4 h-4" />
                      <span>{ambassador.email}</span>
                    </a>
                    <a href={`tel:${ambassador.phone}`} className="flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground transition-colors mb-4">
                      <Phone className="w-4 h-4" />
                      <span>{ambassador.phone}</span>
                    </a>
                    <div className="flex items-center gap-3">
                      {ambassador.socials.map((social) => (
                        <a key={social.name} href={social.url} aria-label={social.name} className="w-9 h-9 rounded-full bg-foreground text-white flex items-center justify-center hover:bg-foreground/90 transition-colors">
                          <social.icon className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Members Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-8">
              The Wonderful
              <br />
              Members of Our
              <br />
              Community
            </h2>
            
            <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              With a mission to uplift and empower, Daily Network brings people together by sparking conversations, supporting local businesses, and creating opportunities that truly strengthen our community.
            </p>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mb-12">
              <div className="w-2 h-2 bg-foreground rounded-full"></div>
              <div className="w-2 h-2 bg-foreground/30 rounded-full"></div>
              <div className="w-2 h-2 bg-foreground/30 rounded-full"></div>
            </div>

            {/* Community Logos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 place-items-center gap-12 sm:gap-14 lg:gap-16">
              {communityMembers.map((member, index) => (
                <div key={member.name} className="group mb-2">
                  <div
                    className="brand-card w-44 h-44 sm:w-48 sm:h-48 mx-auto flex items-center justify-center p-5"
                    style={{ animationDelay: `${index * 0.08}s` }}
                  >
                    <img src={member.logo} alt={member.name} className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                  </div>
                </div>
              ))}
            </div>
            <style>{`
              .brand-card {
                position: relative;
                background: white;
                border-radius: 14px;
                border: 1px solid rgba(0,0,0,0.08);
                box-shadow: 0 10px 20px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.05);
                transform: translateY(0) rotate(0.2deg);
                transition: transform 300ms ease, box-shadow 300ms ease;
                animation: brand-in 600ms ease both;
              }
              .brand-card::before,
              .brand-card::after {
                content: "";
                position: absolute;
                width: 38px;
                height: 16px;
                background: linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.02));
                top: -10px;
                border-radius: 3px;
                transform: rotate(-8deg);
              }
              .brand-card::before { left: 18px; }
              .brand-card::after { right: 18px; transform: rotate(8deg); }
              .brand-card:hover {
                transform: translateY(-6px) rotate(0deg);
                box-shadow: 0 16px 32px rgba(0,0,0,0.10), 0 4px 10px rgba(0,0,0,0.06);
              }
              @keyframes brand-in {
                from { opacity: 0; transform: translateY(10px) scale(0.98); }
                to { opacity: 1; transform: translateY(0) scale(1); }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-foreground/80 text-white rounded-full flex items-center justify-center hover:bg-foreground transition-colors z-50"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
};

export default AboutPage;
