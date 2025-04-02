
import React from "react";
import AnimatedText from "@/components/AnimatedText";
import Testimonial from "@/components/Testimonial";
import ShippingProcess from "@/components/ShippingProcess";

const SolutionSection = () => {
  return (
    <section id="process" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0d0d0f]"></div>
      <div className="absolute inset-0 sweet-pattern opacity-10"></div>
      
      {/* Animated elements */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-brand-purple/5 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-brand-blue/5 blur-3xl"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <AnimatedText className="inline-block mb-2 px-3 py-1 rounded-full border border-brand-purple/30 text-sm text-brand-purple">
            Step 2: The Solution
          </AnimatedText>
          
          <AnimatedText variant="gradient" delay={100} className="text-3xl md:text-4xl font-bold mb-4">
            Our Proven <span className="gradient-text">"Shipped Product"</span> Process
          </AnimatedText>
          
          <AnimatedText delay={200} className="text-lg text-gray-400 max-w-2xl mx-auto">
            At YussTech, we don't just build. We guarantee you a fully shipped product.
            No wasted time. No unreliable teams. Just results.
          </AnimatedText>
        </div>

        <div className="mb-16 grid md:grid-cols-2 gap-8">
          <Testimonial
            quote="The structured approach YussTech brings to development made the entire process transparent and stress-free. We always knew where we stood."
            name="Jennifer Lee"
            title="Product Manager"
            company="TechFusion"
            project="SaaS Platform"
            variant="simple"
            delay={100}
            className="md:col-span-1"
          />
          <Testimonial
            quote="Their process documentation and regular updates gave us confidence throughout the development cycle. No surprises at the end."
            name="David Miller"
            title="CTO"
            company="StartupNow"
            project="Marketplace App"
            variant="simple"
            delay={200}
            className="md:col-span-1"
          />
        </div>

        <ShippingProcess />
      </div>
    </section>
  );
};

export default SolutionSection;
