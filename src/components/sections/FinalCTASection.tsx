
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-blue/20"></div>
      <div className="absolute inset-0 tech-pattern opacity-10"></div>
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-brand-purple/10 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full bg-brand-blue/10 blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">Final Call: While You Think, Others Are Launching</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
          Your product could be live in weeks. Book a $50 consultation and let's make it happen.
        </p>
        
        <Button 
          className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 transition-all group py-6 px-8 text-lg"
          asChild
        >
          <a href="https://paystack.com/pay/hbwnuhje7h" target="_blank" rel="noopener noreferrer">
            Get Your Custom Build Plan Now
            <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default FinalCTASection;
