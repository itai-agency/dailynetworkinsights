import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useRef, useState } from "react";

const FAQ = () => {
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

  const faqs = [
    {
      question: "Who is Daily Network Insights?",
      answer:
        "We are an education-driven organization focused on preparing the next generation of entrepreneurs. Our mission is to bridge the gap between academic learning and real-world experience by helping students develop essential skills, gain professional exposure, and connect with meaningful opportunities.",
    },
    {
      question: "What does Daily Network do?",
      answer:
        "We empower students, entrepreneurs, and professionals through mentorship, career resources, and community programs. By collaborating with local organizations and chambers of commerce, we provide access to expert insights, business development tools, and opportunities for professional growth.",
    },
    {
      question: "How do you offer internship opportunities?",
      answer:
        "We partner with businesses and organizations to create tailored internship and apprenticeship programs. By matching students with opportunities that align with their studies and goals, we make it easier for them to gain hands-on experience, build strong networks, and prepare for long-term career success.",
    },
    {
      question: "How can I get involved?",
      answer:
        "There are many ways to get involved! You can attend our community events, join our mentorship programs, participate in our YouTube interview series, or connect with us through our social media channels. We welcome students, professionals, and organizations who share our mission.",
    },
  ];

  return (
    <section ref={sectionRef} id="faq" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle opacity-40" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div 
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked{" "}
              <span className="text-foreground">
                Questions
              </span>
            </h2>
            <p className="text-xl text-foreground/70">
              Everything you need to know about Daily Network Insights
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`border-2 border-border/50 rounded-xl px-8 hover:border-foreground/50 transition-all duration-500 hover-lift ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${0.3 + index * 0.15}s` }}
              >
                <AccordionTrigger className="text-left text-xl font-bold hover:text-foreground py-6 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed pb-6 text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
