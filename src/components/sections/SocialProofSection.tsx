import React from "react";
import Testimonial from "@/components/Testimonial";
import { CTAButton } from "@/components/ui/cta-button";

const SocialProofSection = () => {
  return (
    <section id="testimonials" className="py-20 relative bg-black/80">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trusted by Founders. <span className="gradient-text">Proven by Results.</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          From stuck to shipped—these are the stories of real founders who partnered with us to turn chaos into clarity, and ideas into fully launched products.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Testimonial
            quote="We came with an idea and left with a working MVP in less than a month. No tech jargon, just execution."
            name="Nasir. C"
            title="Founder"
            company="Health Tech Solutions"
            project="Telehealth Platform"
            variant="default"
            delay={100}
          />
 
          <Testimonial
            quote="From idea to launch, they handled everything. Best decision we made."
            name="Amanda "
            title="COO"
            company="Retail "
            project="Inventory System"
            variant="default"
            delay={200}
          />
          <Testimonial
            quote="Their team rescued our project when we were ready to give up. Now we're profitable."
            name="Jamil"
            title="CEO"
            company="Data Drive"
            project="Analytics Dashboard"
            variant="default"
            delay={300}
          />
            <Testimonial
            quote="We needed a clean, fast mobile app for our customers. YussTech helped us launch in under 4 weeks—without endless meetings."
            name="Nasir"
            title="Founder"
            company="FinTech"
            project="Mobile App"
            variant="default"
            delay={400}
          />
        </div>
        <div className="mt-8">
          <CTAButton>
            Join Our Success Stories
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
