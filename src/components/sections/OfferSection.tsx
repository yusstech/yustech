
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const OfferSection = () => {
  return (
    <section id="offer" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-brand-blue/10"></div>
      <div className="absolute inset-0 tech-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block mb-2 px-3 py-1 rounded-full border border-brand-purple/30 text-sm text-brand-purple">
            Step 4: Limited Offer
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
          
          <form className="space-y-4">
            <div>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-2 rounded bg-muted/50 border border-brand-purple/30 focus:outline-none focus:ring-2 focus:ring-brand-purple text-white placeholder:text-gray-400"
                required
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-2 rounded bg-muted/50 border border-brand-purple/30 focus:outline-none focus:ring-2 focus:ring-brand-purple text-white placeholder:text-gray-400"
                required
              />
            </div>
            <div>
              <select 
                className="w-full px-4 py-2 rounded bg-muted/50 border border-brand-purple/30 focus:outline-none focus:ring-2 focus:ring-brand-purple text-gray-300 placeholder:text-gray-400"
                defaultValue=""
                required
              >
                <option value="" disabled>Select Service</option>
                <option value="website">Website/Web App</option>
                <option value="mobile">Mobile App</option>
                <option value="ai">AI Integration</option>
                <option value="rescue">Project Rescue</option>
              </select>
            </div>
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 transition-all group py-6"
            >
              Book Your Custom Plan Today
              <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </form>
          
          <p className="mt-4 text-xs text-gray-400">
            By booking, you agree to our terms and conditions. The $100 fee is applied to your project if you decide to work with us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
