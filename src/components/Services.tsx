
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { ArrowUpRight, Award, Quote } from "lucide-react";
import Testimonial from "./Testimonial";

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
      testimonial: {
        quote: "YusTech helped us implement AI that actually made sense for our business. No fluff, just results.",
        name: "Lisa Wang",
        title: "Innovation Lead",
        company: "RetailSmart",
        project: "Inventory AI"
      }
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

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
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
              
              {/* Success story section with visual highlight */}
              {service.testimonial && (
                <div className="relative mb-6 bg-gradient-to-r from-black/40 to-black/60 p-5 rounded-lg border border-brand-purple/30 overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 transform translate-x-12 -translate-y-8 bg-brand-purple opacity-10 rounded-full blur-xl"></div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <Award className="h-6 w-6 text-brand-purple" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-purple mb-1">Client Success:</h4>
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
              
              <Button 
                className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 transition-all group"
              >
                Learn More
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
