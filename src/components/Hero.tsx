
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
    <div className="relative overflow-hidden animated-bg min-h-[90vh] flex items-center py-24" ref={heroRef}>
      {/* Tech Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-brand-purple/10 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-brand-blue/10 blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6 px-3 py-1 rounded-full neon-border hero-animate animate-on-scroll">
            <span className="text-brand-purple text-sm">100% Ship Rate Guarantee</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight hero-animate animate-on-scroll glow-text">
            We <span className="gradient-text">Ship Your Product</span> While You Focus On Your Business
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 hero-animate animate-on-scroll">
            Our 100% shipping guarantee means your product gets built and delivered on time. 
            No delays, no excuses, just results that drive your business forward.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center hero-animate animate-on-scroll">
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 transition-all hover:shadow-lg hover:shadow-brand-purple/25 text-base py-6 px-8"
            >
              Book Your $100 Consultation
            </Button>
            <Button
              variant="outline"
              size="lg" 
              className="border-brand-purple text-brand-purple hover:bg-brand-purple/10 text-base py-6 px-8 neon-border"
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
                className="p-4 animate-on-scroll hero-animate glass rounded-lg hover-glow border border-brand-purple/20"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <p className="text-3xl font-bold text-brand-purple">{stat.value}</p>
                <p className="text-sm text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
