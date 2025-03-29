
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate elements when the page loads
    const animateElements = heroRef.current?.querySelectorAll('.hero-animate');
    
    animateElements?.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('appear');
      }, index * 200); // Stagger the animations
    });
  }, []);

  return (
    <div className="relative overflow-hidden bg-white" ref={heroRef}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5e1ff]/20 to-[#d9f9f2]/20 z-0"></div>
      
      <div className="container mx-auto px-4 pt-20 pb-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight hero-animate animate-on-scroll">
            We <span className="gradient-text">Ship Your Product</span> While You Focus On Your Business
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-10 hero-animate animate-on-scroll">
            Our 100% shipping guarantee means your product gets built and delivered on time. 
            No delays, no excuses, just results that drive your business forward.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center hero-animate animate-on-scroll">
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-[#b692e0] to-[#7ee7d2] hover:opacity-90 transition-opacity text-base py-6 px-8"
            >
              Book Your $100 Consultation
            </Button>
            <Button
              variant="outline"
              size="lg" 
              className="border-[#b692e0] text-[#b692e0] hover:bg-[#b692e0]/5 text-base py-6 px-8"
            >
              See Our Work
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "100%", label: "Ship Rate" },
              { value: "50+", label: "Projects Shipped" },
              { value: "92%", label: "Client Retention" },
              { value: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="p-4 animate-on-scroll hero-animate"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <p className="text-3xl font-bold text-[#b692e0]">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
