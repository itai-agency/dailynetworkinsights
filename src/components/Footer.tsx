const Footer = () => {
  return (
    <footer className="py-12 border-t-2 border-border/50 bg-gradient-subtle relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-[0.03] animate-gradient-shift bg-[length:200%_200%]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-base text-foreground/70 font-medium">
              © {new Date().getFullYear()} Daily Network Insights. All rights reserved.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-base text-foreground/70 font-medium">
              Empowering the next generation of entrepreneurs
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
