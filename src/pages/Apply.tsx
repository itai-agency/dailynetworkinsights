import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import applySubmitBg from "@/assets/apply-submit.png";
import studentsOnCampus from "@/assets/students-on-campus.png";

const Apply = () => {
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

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle contact form submission
    console.log("Contact form submitted");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Services Section - modern hero + glass cards */}
      <section className="relative py-24">
        {/* gradient backdrop with subtle noise */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-600/15 via-fuchsia-500/10 to-emerald-400/15" />
        <div className="absolute -top-20 -right-24 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Empowering entrepreneurs, students, and communities with mentorship, real experience, and meaningful events.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {/* Mentorship Card */}
              <div className="group relative rounded-2xl border border-white/20 bg-white/70 backdrop-blur-xl p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-white/60 to-white/40" />
                <div className="relative">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/10 text-violet-700">
                    {/* icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M12 14a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.33 0-8 1.75-8 4v1h16v-1c0-2.25-3.67-4-8-4Z"/></svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Mentorship</h3>
                  <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
                    Personalized guidance from industry experts to help you overcome challenges, develop skills, and accelerate your success.
                  </p>
                </div>
              </div>

              {/* Internship Opportunities Card */}
              <div className="group relative rounded-2xl border border-white/20 bg-white/70 backdrop-blur-xl p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-white/60 to-white/40" />
                <div className="relative">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600/10 text-emerald-700">
                    {/* icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M4 4h16v4H4Zm0 6h10v10H4Z"/></svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Internship Opportunities</h3>
                  <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
                    Get real-world experience, expand your network, and build practical skills through curated placements with partner companies.
                  </p>
                </div>
              </div>

              {/* Community Events Card */}
              <div className="group relative rounded-2xl border border-white/20 bg-white/70 backdrop-blur-xl p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-white/60 to-white/40" />
                <div className="relative">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-fuchsia-600/10 text-fuchsia-700">
                    {/* icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M12 2 2 7l10 5 10-5Zm0 7.18L7 7l5-2.18L17 7ZM2 17l10 5 10-5v-2l-10 5L2 15Z"/></svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Community Events</h3>
                  <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
                    Experiencias que conectan y fortalecen comunidades: festivales, talleres y eventos con impacto real y memorable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apprenticeship & Internship Opportunities Section */}
      <section 
        ref={sectionRef}
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url(${applySubmitBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background Overlay (no blur) */}
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
              Apprenticeship & Internship Opportunities
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* How to Apply Card */}
              <Card className={`bg-white/95 backdrop-blur-sm border-0 shadow-xl transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: '0.2s' }}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-gray-600 mr-4">
                      1
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">How to Apply</h3>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Ready to gain real world experience? Our internship and apprenticeship programs help 
                      students apply classroom knowledge, build skills, and explore career paths.
                    </p>
                    <p>
                      To apply, email your contact info, school, major, and the type of experience you're 
                      seeking. Your details may be shared with partner organizations looking for motivated students.
                    </p>
                    <p>
                      Make your application stand out by including a short video (up to 5 minutes) introducing 
                      yourself, your goals, and why you'd be a great fit. Show your passion and personality 
                      we want to meet the real you!
                    </p>
                  </div>
                  <Button className="w-full mt-6 bg-black text-white hover:bg-gray-800">
                    Submit
                  </Button>
                </CardContent>
              </Card>

              {/* Next Steps Card */}
              <Card className={`bg-white/95 backdrop-blur-sm border-0 shadow-xl transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: '0.4s' }}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-gray-600 mr-4">
                      2
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Next Steps</h3>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Once we receive your application, our team will review your information and match you 
                      with potential opportunities that align with your goals and area of study.
                    </p>
                    <p>
                      If selected, you'll be contacted for a short introduction call or interview to discuss 
                      available placements and next steps with our partner organizations.
                    </p>
                    <p>
                      Stay connected we'll guide you through the process, help you prepare, and keep you 
                      updated on upcoming internship and apprenticeship openings. We're excited to help you 
                      take the next step toward building your future career!
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Final Step Card */}
              <Card className={`bg-white/95 backdrop-blur-sm border-0 shadow-xl transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: '0.6s' }}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-gray-600 mr-4">
                      3
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Final Step</h3>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      After your interview, we'll personally connect you with the company or organization 
                      offering the opportunity that best fits your goals. From there, you'll begin your 
                      journey of hands on learning, career development, and real world experience in your 
                      field of interest.
                    </p>
                    <p>
                      Throughout your placement, our team will stay in touch to ensure you're supported, 
                      gaining valuable skills, and building strong professional connections that can lead 
                      to future opportunities.
                    </p>
                    <p>
                      This is your chance to grow, network, and take the first real step toward shaping 
                      your career path.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-8">
                  Get in touch by filling out the form. We'll respond as soon we can.
                </p>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      className="mt-1"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      className="mt-1"
                      placeholder="Enter your last name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      className="mt-1"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
                    Submit
                  </Button>
                </form>
              </div>

              {/* Campus Image */}
              <div className="relative">
                <img 
                  src={studentsOnCampus}
                  alt="Students on campus" 
                  className="w-full h-[28rem] lg:h-[36rem] object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apply;
