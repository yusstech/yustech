
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

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
      solution: "We deliver fully-functional, beautiful websites and web apps that actually get completed and generate results."
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: ["iOS & Android development", "User-focused design", "Performance optimization", "Continuous support"],
      painPoint: "Frustrated with mobile app developers who miss deadlines and go over budget?",
      solution: "Our fixed timeline and budget guarantee ensures your mobile app launches on schedule, every time."
    },
    {
      title: "AI Integration",
      description: "Harness the power of artificial intelligence to automate processes and unlock new capabilities for your business.",
      features: ["Custom AI solutions", "Process automation", "Data analysis", "AI-powered features"],
      painPoint: "Struggling to implement AI solutions that deliver real business value?",
      solution: "We build practical AI implementations that solve real problems and create measurable ROI for your business."
    },
    {
      title: "Project Rescue & Management",
      description: "We take over stalled projects, fix issues, and get your product back on track with professional management.",
      features: ["Code audit & refactoring", "Performance optimization", "Feature completion", "Ongoing maintenance"],
      painPoint: "Have a half-finished product that's burning money and not delivering value?",
      solution: "Our rescue team will evaluate, fix, and complete your project so you can finally launch and start seeing returns."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative" ref={servicesRef}>
      <div className="absolute inset-0 sweet-pattern"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Product, <span className="gradient-text">Shipped</span> With Confidence
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We specialize in building and shipping digital products with a 100% completion guarantee. 
            No more half-finished projects or endless development cycles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-lg shadow-sm service-card animate-on-scroll p-8"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-3 text-brand-dark">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-[#b692e0] mb-2">Pain Point:</h4>
                <p className="italic text-gray-600">{service.painPoint}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-[#7ee7d2] mb-2">Our Solution:</h4>
                <p className="text-gray-700">{service.solution}</p>
              </div>
              
              <ul className="mb-6 space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-[#b692e0]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                className="w-full bg-gradient-to-r from-[#b692e0] to-[#7ee7d2] hover:opacity-90 transition-opacity"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
