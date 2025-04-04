
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const CTASection = () => {
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
        
        <div className="max-w-md mx-auto glass rounded-lg p-6 shadow-lg border border-brand-purple/30 animate-pulse-glow">
          <h3 className="text-xl font-bold mb-4 text-white">Limited Slots Available</h3>
          
          <form className="space-y-4" action="https://paystack.com/pay/hbwnuhje7h" method="GET">
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
              className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 transition-all group"
            >
              Book Your Custom Plan - $50
              <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </form>
          
          <p className="mt-4 text-xs text-gray-400">
            By booking, you agree to our terms and conditions. The $50 fee is applied to your project if you decide to work with us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
