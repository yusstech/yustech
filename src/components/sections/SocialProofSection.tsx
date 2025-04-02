
import React from "react";
import Testimonial from "@/components/Testimonial";

const SocialProofSection = () => {
  return (
    <section id="testimonials" className="py-20 relative bg-black/80">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block mb-2 px-3 py-1 rounded-full border border-brand-purple/30 text-sm text-brand-purple">
            Step 3: Social Proof
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real Clients. <span className="gradient-text">Real Results.</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't take our word for it. Here's what our clients say about working with us.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Testimonial
            quote="YussTech delivered our platform in 3 weeks—after other teams wasted months!"
            name="Robert Chen"
            title="Founder"
            company="HealthTech Solutions"
            project="Telehealth Platform"
            variant="default"
            delay={100}
          />
          <Testimonial
            quote="From idea to launch, they handled everything. Best decision we made."
            name="Amanda Lopez"
            title="COO"
            company="RetailConnect"
            project="Inventory System"
            variant="default"
            delay={200}
          />
          <Testimonial
            quote="Their team rescued our project when we were ready to give up. Now we're profitable."
            name="James Wilson"
            title="CEO"
            company="DataDrive"
            project="Analytics Dashboard"
            variant="default"
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
