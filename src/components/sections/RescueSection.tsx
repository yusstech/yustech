import React from "react";
import { Button } from "@/components/ui/button";
import Testimonial from "@/components/Testimonial";
import { CTAButton } from "@/components/ui/cta-button";

const RescueSection = () => {
  return (
    <section id="rescue" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0d0d0f]"></div>
      <div className="absolute inset-0 sweet-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block mb-2 px-3 py-1 rounded-full border border-brand-purple/30 text-sm text-brand-purple">
            Step 5: Rescue Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fix, Rebuild, or <span className="gradient-text">Scale Your Product</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Already have a product but stuck? Let's get your product back on track.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="glass rounded-lg p-6 border border-brand-purple/20 animate-on-scroll">
            <h3 className="text-xl font-bold mb-3 text-white">Fix Broken Code</h3>
            <p className="text-gray-300 mb-4">We rescue failing projects with expert code review and repair services.</p>
            <Button 
              className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90" 
              asChild
            >
              <a href="https://paystack.com/pay/hbwnuhje7h" target="_blank" rel="noopener noreferrer">
                Rescue My Project
              </a>
            </Button>
          </div>
          
          <div className="glass rounded-lg p-6 border border-brand-purple/20 animate-on-scroll" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-xl font-bold mb-3 text-white">Rebuild & Scale</h3>
            <p className="text-gray-300 mb-4">Upgrade outdated or poorly built software with modern architecture.</p>
            <Button 
              className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90" 
              asChild
            >
              <a href="https://paystack.com/pay/hbwnuhje7h" target="_blank" rel="noopener noreferrer">
                Upgrade My Product
              </a>
            </Button>
          </div>
          
          <div className="glass rounded-lg p-6 border border-brand-purple/20 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-bold mb-3 text-white">Add Features & Automate</h3>
            <p className="text-gray-300 mb-4">Enhance your product with AI, integrations, and optimizations.</p>
            <Button 
              className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90" 
              asChild
            >
              <a href="https://paystack.com/pay/hbwnuhje7h" target="_blank" rel="noopener noreferrer">
                Enhance My Product
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Testimonial
            quote="Our app was stuck in development hell for 9 months. YussTech rescued it and shipped a functional version in just 6 weeks."
            name="Thomas Wright"
            title="Founder"
            company="HealthTrack"
            project="Mobile App Rescue"
            variant="featured"
          />
        </div>

        <div className="mt-8">
          <CTAButton>
            Rescue My Project
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default RescueSection;
