import React from "react";
import { ArrowUpRight } from "lucide-react";
import { CTAButton } from "@/components/ui/cta-button";

const OfferSection = () => {
  return (
    <section id="offer" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-brand-blue/10"></div>
      <div className="absolute inset-0 tech-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block mb-2 px-3 py-1 rounded-full border border-brand-purple/30 text-sm text-brand-purple">
            
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Custom <span className="gradient-text">Build Plan</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We only take on a few clients per month. Get clarity on your product & a strategy to launch—before you invest thousands.
          </p>
        </div>
        
        <div className="max-w-md mx-auto glass rounded-lg p-6 shadow-lg border border-brand-purple/30 animate-pulse-glow">
          <h3 className="text-xl font-bold mb-4 text-white">⚡ Limited Slots Available</h3>
          
          <CTAButton className="w-full transition-all group">
            Let's Get Your Product Live
            <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
