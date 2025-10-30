import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Si es un enlace a una sección con ancla
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      const targetPath = path || "/";
      
      // Si estamos en la página correcta, solo hacer scroll
      if (location.pathname === targetPath) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // Si estamos en otra página, navegar primero y luego hacer scroll
        navigate(targetPath);
        // Esperar a que la navegación se complete
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    } else {
      // Para enlaces normales sin ancla
      navigate(href);
    }
    
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Apply", href: "/apply" },
    { label: "Work With Me", href: "/work-with-me" },
    { label: "About", href: "/about" },
    { label: "Achievements", href: "/#achievements" },
    { label: "FAQ", href: "/#faq" },
    { label: "Events", href: "/#events" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-black/30 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          <a 
            href="/" 
            onClick={(e) => handleNavClick(e, "/")}
            className={`text-xl sm:text-2xl font-bold hover:scale-105 transition-all duration-300 ${
              isScrolled 
                ? "text-foreground" 
                : "text-white drop-shadow-lg"
            }`}
            style={!isScrolled ? { textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' } : {}}
          >
            Daily Network Insights
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-semibold transition-all duration-300 relative group cursor-pointer ${
                  isScrolled 
                    ? "text-foreground/70 hover:text-foreground" 
                    : "text-white/90 hover:text-white drop-shadow-md"
                }`}
                style={!isScrolled ? { textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' } : {}}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                  isScrolled ? "bg-foreground" : "bg-white"
                }`} />
              </a>
            ))}
            <Button 
              variant="default" 
              size="sm" 
              className="px-6 bg-white text-black border-0 hover:bg-white/90 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(e as any, "/#contact");
              }}
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "hover:bg-muted" : "hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className={isScrolled ? "text-foreground" : "text-white drop-shadow-md"} />
            ) : (
              <Menu size={24} className={isScrolled ? "text-foreground" : "text-white drop-shadow-md"} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className={`py-6 border-t space-y-2 backdrop-blur-md ${
            isScrolled 
              ? "border-border/50 bg-background/95" 
              : "border-white/20 bg-black/40"
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block text-base font-semibold transition-all duration-300 py-3 px-4 rounded-lg cursor-pointer ${
                  isScrolled 
                    ? "text-foreground/70 hover:text-primary hover:bg-muted/50 hover:translate-x-1" 
                    : "text-white/90 hover:text-white hover:bg-white/10 hover:translate-x-1"
                }`}
                style={!isScrolled ? { textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' } : {}}
              >
                {link.label}
              </a>
            ))}
            <Button 
              variant="default" 
              size="sm" 
              className="w-full mt-4 mx-4 bg-primary text-white border-0 hover:bg-primary/90 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(e as any, "/#contact");
              }}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
