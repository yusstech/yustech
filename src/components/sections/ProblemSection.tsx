
import React from "react";
import Testimonial from "@/components/Testimonial";

const ProblemSection = () => {
  return (
    <section id="services" className="pt-20 relative">
      <div className="absolute inset-0 tech-pattern"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block mb-2 px-3 py-1 rounded-full border border-brand-purple/30 text-sm text-brand-purple">
            Step 1: The Problem
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Most Products <span className="gradient-text">Never Launch</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            <span className="block mb-2">• Frustrated with developers disappearing mid-project?</span>
            <span className="block mb-2">• Tired of spending months (or years) on something that never ships?</span>
            <span className="block mb-2">• Lost in technical complexity?</span>
            <span className="block mt-4 text-white font-semibold">🛑 The truth? Most startups fail not because of bad ideas, but because of bad execution.</span>
            <span className="block mt-4 text-brand-purple font-medium">✅ What if you had a team that guarantees your product gets built & launched—without delays?</span>
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="mb-16">
          <Testimonial
            quote="After two failed attempts with other developers, YussTech delivered our e-commerce platform in half the time and exactly to spec. Revenue is up 215% since launch."
            name="Sarah Johnson"
            title="CEO"
            company="FashionMart"
            project="E-commerce Website"
            variant="featured"
          />
        </div>
        
        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              title: "Websites & Web Apps",
              description: "Custom responsive websites and powerful web applications built to convert visitors into customers.",
              features: ["Modern & responsive design", "SEO optimization", "Performance optimization", "Interactive features"],
              painPoint: "Tired of websites that don't convert or apps that never launch?",
              solution: "We deliver fully-functional, beautiful websites and web apps that actually get completed and generate results.",
              testimonial: {
                quote: "The website exceeded our expectations and was delivered ahead of schedule.",
                name: "Alex Roberts",
                title: "Marketing Director",
                company: "GrowthBrand",
                project: "Company Website"
              }
            },
            {
              title: "Mobile Apps",
              description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
              features: ["iOS & Android development", "User-focused design", "Performance optimization", "Continuous support"],
              painPoint: "Frustrated with mobile app developers who miss deadlines and go over budget?",
              solution: "Our fixed timeline and budget guarantee ensures your mobile app launches on schedule, every time.",
              testimonial: {
                quote: "Their AI integration saved us 30+ hours of manual work every week. The ROI was almost immediate.",
                name: "Michael Chen",
                title: "Operations Director",
                company: "LogisticsPro",
                project: "AI Workflow Automation"
              }
            },
            {
              title: "AI Integration",
              description: "Harness the power of artificial intelligence to automate processes and unlock new capabilities for your business.",
              features: ["Custom AI solutions", "Process automation", "Data analysis", "AI-powered features"],
              painPoint: "Struggling to implement AI solutions that deliver real business value?",
              solution: "We build practical AI implementations that solve real problems and create measurable ROI for your business.",
              testimonial: null
            },
            {
              title: "Project Rescue & Management",
              description: "We take over stalled projects, fix issues, and get your product back on track with professional management.",
              features: ["Code audit & refactoring", "Performance optimization", "Feature completion", "Ongoing maintenance"],
              painPoint: "Have a half-finished product that's burning money and not delivering value?",
              solution: "Our rescue team will evaluate, fix, and complete your project so you can finally launch and start seeing returns.",
              testimonial: {
                quote: "Our app was stuck in development hell for 9 months. YusTech rescued it and shipped a functional version in just 6 weeks.",
                name: "Thomas Wright",
                title: "Founder",
                company: "HealthTrack",
                project: "Mobile App Rescue"
              }
            }
          ].map((service, index) => (
            <div key={index} className="space-y-6">
              <div 
                className="glass rounded-lg service-card animate-on-scroll p-8 border border-brand-purple/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-6 bg-brand-purple/10 p-4 rounded-lg border border-brand-purple/20">
                  <h4 className="font-semibold text-brand-purple mb-2">Pain Point:</h4>
                  <p className="italic text-gray-300">{service.painPoint}</p>
                </div>
                
                <div className="mb-6 bg-brand-blue/10 p-4 rounded-lg border border-brand-blue/20">
                  <h4 className="font-semibold text-brand-blue mb-2">Our Solution:</h4>
                  <p className="text-gray-200">{service.solution}</p>
                </div>
                
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-brand-purple" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button 
                  className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 transition-all group px-4 py-2 rounded text-white font-medium flex items-center justify-center"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                </button>
              </div>
              
              {/* Testimonial below each service card if available */}
              {service.testimonial && (
                <Testimonial
                  quote={service.testimonial.quote}
                  name={service.testimonial.name}
                  title={service.testimonial.title}
                  company={service.testimonial.company}
                  project={service.testimonial.project}
                  variant="compact"
                  delay={index * 100 + 200}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
