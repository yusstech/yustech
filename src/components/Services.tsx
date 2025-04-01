
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { ArrowUpRight, Award, Quote, Target, Users, Heart, Zap, HandShake, BarChart4 } from "lucide-react";
import Testimonial from "./Testimonial";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  
  // Animation observer setup
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add a delay based on index to create a staggered effect
          setTimeout(() => {
            entry.target.classList.add('appear');
          }, index * 150);
        }
      });
    }, { threshold: 0.1 });
    
    // Get all elements to animate
    const animElements = servicesRef.current?.querySelectorAll('.animate-on-scroll');
    animElements?.forEach(el => observer.observe(el));
    
    return () => {
      animElements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      title: "Websites & Web Apps",
      description: "Custom responsive websites and powerful web applications built to convert visitors into customers.",
      icon: <Zap className="w-6 h-6" />,
      targetAudience: "Perfect for startups and SMBs seeking to establish a strong digital presence or e-commerce businesses looking to increase conversion rates.",
      painPoint: "Tired of websites that don't convert or apps that never launch?",
      solution: "We deliver fully-functional, beautiful websites and web apps that actually get completed and generate results.",
      benefits: [
        "Increased conversion rates (avg. 35% improvement)",
        "Faster load times (under 2 seconds)",
        "Mobile-first responsive design",
        "SEO-optimized from the ground up"
      ],
      testimonial: {
        quote: "The website exceeded our expectations and was delivered ahead of schedule.",
        name: "Alex Roberts",
        title: "Marketing Director",
        company: "GrowthBrand",
        project: "Company Website",
        impact: "127% increase in leads"
      }
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      icon: <Users className="w-6 h-6" />,
      targetAudience: "Ideal for businesses looking to engage customers on mobile or organizations needing to streamline internal processes via mobile solutions.",
      painPoint: "Frustrated with mobile app developers who miss deadlines and go over budget?",
      solution: "Our fixed timeline and budget guarantee ensures your mobile app launches on schedule, every time.",
      benefits: [
        "Native performance for iOS & Android",
        "User engagement analytics built-in",
        "Smooth launch on app stores",
        "On-time delivery guarantee"
      ],
      testimonial: {
        quote: "Their AI integration saved us 30+ hours of manual work every week. The ROI was almost immediate.",
        name: "Michael Chen",
        title: "Operations Director",
        company: "LogisticsPro",
        project: "AI Workflow Automation",
        impact: "300% ROI within 3 months"
      }
    },
    {
      title: "AI Integration",
      description: "Harness the power of artificial intelligence to automate processes and unlock new capabilities for your business.",
      icon: <Target className="w-6 h-6" />,
      targetAudience: "Forward-thinking companies looking to gain competitive advantage through automation, personalization, and data insights.",
      painPoint: "Struggling to implement AI solutions that deliver real business value?",
      solution: "We build practical AI implementations that solve real problems and create measurable ROI for your business.",
      benefits: [
        "Process automation (save 20+ hrs/week)",
        "Customer insight generation",
        "Personalized user experiences",
        "Data-driven decision making"
      ],
      testimonial: {
        quote: "YusTech helped us implement AI that actually made sense for our business. No fluff, just results.",
        name: "Lisa Wang",
        title: "Innovation Lead",
        company: "RetailSmart",
        project: "Inventory AI",
        impact: "42% reduction in stockouts"
      }
    },
    {
      title: "Project Rescue & Management",
      description: "We take over stalled projects, fix issues, and get your product back on track with professional management.",
      icon: <HandShake className="w-6 h-6" />,
      targetAudience: "For businesses with stalled or failing projects that need expert intervention to salvage their investment and deliver results.",
      painPoint: "Have a half-finished product that's burning money and not delivering value?",
      solution: "Our rescue team will evaluate, fix, and complete your project so you can finally launch and start seeing returns.",
      benefits: [
        "Comprehensive code audit & cleanup",
        "Rapid stabilization & deployment",
        "Performance optimization",
        "Clear project roadmap"
      ],
      testimonial: {
        quote: "Our app was stuck in development hell for 9 months. YusTech rescued it and shipped a functional version in just 6 weeks.",
        name: "Thomas Wright",
        title: "Founder",
        company: "HealthTrack",
        project: "Mobile App Rescue",
        impact: "Product launched 70% faster"
      }
    }
  ];

  return (
    <section id="services" className="py-20 relative" ref={servicesRef}>
      <div className="absolute inset-0 tech-pattern"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block mb-2 px-3 py-1 rounded-full border border-brand-purple/30 text-sm text-brand-purple">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Product, <span className="gradient-text">Shipped</span> With Confidence
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We specialize in building and shipping digital products with a 100% completion guarantee. 
            No more half-finished projects or endless development cycles.
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Left side - Problem/Solution (alternating for even/odd) */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="glass rounded-lg service-card p-8 border border-brand-purple/20 relative overflow-hidden">
                    {/* Background accent */}
                    <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 blur-xl"></div>
                    
                    {/* Service tag & title */}
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-lg bg-brand-purple/10 mr-4">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    {/* Target audience section */}
                    <div className="mb-6 bg-black/20 p-4 rounded-lg border border-brand-purple/20 relative overflow-hidden">
                      <div className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-brand-purple/5 blur-xl"></div>
                      <h4 className="font-semibold text-brand-purple mb-2 flex items-center">
                        <Target className="h-4 w-4 mr-2" /> Perfect For:
                      </h4>
                      <p className="text-gray-300">{service.targetAudience}</p>
                    </div>
                    
                    {/* Pain point with emotion triggering */}
                    <div className="mb-6 bg-brand-purple/10 p-4 rounded-lg border border-brand-purple/20">
                      <h4 className="font-semibold text-brand-purple mb-2">Pain Point:</h4>
                      <p className="italic text-gray-300">{service.painPoint}</p>
                    </div>
                    
                    {/* Solution with clear value proposition */}
                    <div className="mb-6 bg-brand-blue/10 p-4 rounded-lg border border-brand-blue/20">
                      <h4 className="font-semibold text-brand-blue mb-2">Our Solution:</h4>
                      <p className="text-gray-200">{service.solution}</p>
                    </div>
                    
                    {/* Client success story with clear impact */}
                    {service.testimonial && (
                      <div className="relative mb-6 bg-gradient-to-r from-black/40 to-black/60 p-5 rounded-lg border border-brand-purple/30 overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 transform translate-x-12 -translate-y-8 bg-brand-purple opacity-10 rounded-full blur-xl"></div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mr-3">
                            <Award className="h-6 w-6 text-brand-purple" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-semibold text-brand-purple">Client Success:</h4>
                              {service.testimonial.impact && (
                                <Badge className="bg-brand-purple/20 text-brand-purple border-none text-xs ml-2">
                                  {service.testimonial.impact}
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-gray-200 italic mb-2">"{service.testimonial.quote}"</p>
                            <div className="flex items-center">
                              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue flex items-center justify-center text-xs font-medium text-white">
                                {service.testimonial.name.charAt(0)}
                              </div>
                              <p className="ml-2 text-xs text-gray-300">
                                <span className="font-medium">{service.testimonial.name}</span>, {service.testimonial.company}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 transition-all group"
                    >
                      Get Started Now
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                  </div>
                </div>
                
                {/* Right side - Benefits/Results (alternating for even/odd) */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className={`p-8 rounded-lg ${index % 2 === 0 ? 'bg-gradient-to-br from-brand-purple/10 to-transparent' : 'bg-gradient-to-br from-brand-blue/10 to-transparent'} border border-white/5`}>
                    <h4 className="text-xl font-bold mb-6 text-white">Key Benefits & Results</h4>
                    
                    <div className="space-y-6">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start">
                          <div className={`flex-shrink-0 rounded-full p-1 ${index % 2 === 0 ? 'bg-brand-purple/20' : 'bg-brand-blue/20'} mr-4`}>
                            <BarChart4 className={`w-5 h-5 ${index % 2 === 0 ? 'text-brand-purple' : 'text-brand-blue'}`} />
                          </div>
                          <div>
                            <p className="text-white font-medium">{benefit}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Visual highlight element */}
                    <div className={`mt-8 h-32 rounded-lg overflow-hidden relative ${index % 2 === 0 ? 'bg-brand-purple/10' : 'bg-brand-blue/10'}`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative z-10 text-white font-bold">
                          {index === 0 && "35% Higher Conversion Rate"}
                          {index === 1 && "Launch on Time, Every Time"}
                          {index === 2 && "2x Faster ROI Than Manual Processes"}
                          {index === 3 && "6 Week Rescue & Launch"}
                        </div>
                      </div>
                      <div className={`absolute bottom-0 left-0 h-1 ${index % 2 === 0 ? 'bg-brand-purple' : 'bg-brand-blue'} animate-pulse-width`} style={{width: '80%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Progress indicator */}
              {index < services.length - 1 && (
                <div className="w-1 h-24 bg-gradient-to-b from-brand-purple/30 to-brand-blue/30 mx-auto my-4"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Final CTA */}
        <div className="mt-16 text-center animate-on-scroll">
          <h3 className="text-2xl font-bold mb-4">Ready to Ship Your Product?</h3>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Take the first step toward guaranteed product delivery with our $100 consultation.
          </p>
          <Button
            className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 transition-all group px-8 py-6 text-lg"
          >
            Book Your Consultation
            <ArrowUpRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
