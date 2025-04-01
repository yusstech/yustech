
import { useEffect, useRef } from "react";
import ServiceCard from "./services/ServiceCard";
import ServicesHeader from "./services/ServicesHeader";
import ServicesCTA from "./services/ServicesCTA";
import { userNeeds } from "@/data/userNeeds";

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  
  // Animation observer setup
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add a delay based on index to create a staggered effect
          setTimeout(() => {
            entry.target.classList.add('appear');
          }, index * 150);
        }
      });
    }, { threshold: 0.1 });
    
    // Get all elements to animate
    const animElements = servicesRef.current?.querySelectorAll('.animate-on-scroll');
    animElements?.forEach(el => observer.observe(el));
    
    return () => {
      animElements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="services" className="py-20 relative" ref={servicesRef}>
      <div className="absolute inset-0 tech-pattern"></div>
      <div className="container mx-auto px-4 relative">
        <ServicesHeader />

        <div className="space-y-32">
          {userNeeds.map((need, index) => (
            <div key={index}>
              <ServiceCard 
                persona={need.persona} 
                painPoint={need.painPoint}
                challenge={need.challenge}
                solution={need.solution}
                socialProof={need.socialProof}
                index={index}
              />
              
              {/* Progress indicator */}
              {index < userNeeds.length - 1 && (
                <div className="w-1 h-24 bg-gradient-to-b from-brand-purple/30 to-brand-blue/30 mx-auto my-4"></div>
              )}
            </div>
          ))}
        </div>
        
        <ServicesCTA />
      </div>
    </section>
  );
};

export default Services;
