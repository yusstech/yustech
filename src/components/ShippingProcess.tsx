
import { useEffect, useRef } from "react";
import { ClipboardCheck, Code, Lightbulb, Rocket } from "lucide-react";
import AnimatedText from "./AnimatedText";
import Testimonial from "./Testimonial";

const ShippingProcess = () => {
  const processRef = useRef<HTMLDivElement>(null);

  // Animation observer setup
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a staggered animation to the timeline
          const timelineDots = processRef.current?.querySelectorAll('.timeline-dot');
          const timelineConnectors = processRef.current?.querySelectorAll('.timeline-connector');
          const timelineContents = processRef.current?.querySelectorAll('.timeline-content');
          
          timelineDots?.forEach((dot, index) => {
            setTimeout(() => {
              dot.classList.add('appear');
            }, index * 300);
          });
          
          timelineConnectors?.forEach((connector, index) => {
            setTimeout(() => {
              connector.classList.add('appear');
            }, (index + 1) * 300);
          });
          
          timelineContents?.forEach((content, index) => {
            setTimeout(() => {
              content.classList.add('appear');
            }, (index * 300) + 150);
          });
        }
      });
    }, { threshold: 0.1 });
    
    if (processRef.current) {
      observer.observe(processRef.current);
    }
    
    return () => {
      if (processRef.current) {
        observer.unobserve(processRef.current);
      }
    };
  }, []);

  const steps = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Discovery & Strategy",
      description: "We start with a thorough consultation to understand your vision, goals, and requirements, then develop a strategic roadmap with clear milestones.",
      color: "bg-brand-purple",
      features: [
        "Technical requirements analysis",
        "Resource planning & allocation",
        "Risk assessment & mitigation",
        "Timeline development"
      ],
      testimonial: {
        quote: "The discovery process was thorough but efficient. They asked questions no other agency had thought to ask.",
        name: "Emma Davidson",
        title: "Product Owner",
        company: "FinTech Solutions",
        project: "Banking App"
      }
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Design & Planning",
      description: "Our designers create intuitive interfaces while our engineers plan the technical architecture. You approve each step before we move forward.",
      color: "bg-brand-blue",
      features: [
        "UI/UX prototyping",
        "Technical specification",
        "System architecture planning",
        "Client approval process"
      ],
      testimonial: {
        quote: "Their design process was collaborative and thorough. We felt like part of the team.",
        name: "Ryan Peters",
        title: "Creative Director",
        company: "BrandMasters",
        project: "E-commerce Platform"
      }
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Development & Testing",
      description: "Our developers build your product in short, focused sprints with regular demos. Rigorous testing ensures everything works flawlessly.",
      color: "bg-brand-purple",
      features: [
        "Agile development methodology",
        "Weekly sprint reviews",
        "Comprehensive QA testing",
        "Continuous integration"
      ],
      testimonial: {
        quote: "Weekly demos kept us in the loop. No surprises and total transparency throughout development.",
        name: "Jessica Kim",
        title: "VP of Engineering",
        company: "DataStream",
        project: "Analytics Dashboard"
      }
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Launch & Support",
      description: "We handle deployment and launch, then provide ongoing support to ensure your product continues to perform optimally.",
      color: "bg-brand-blue",
      features: [
        "Deployment automation",
        "Performance monitoring",
        "Post-launch optimization",
        "Ongoing maintenance"
      ],
      testimonial: {
        quote: "The launch was flawless and the support afterward has been exceptional. Our users love the product.",
        name: "Daniel Morris",
        title: "CEO",
        company: "AgriTech",
        project: "Field Management System"
      }
    }
  ];

  return (
    <div ref={processRef} className="relative mt-12">
      <div className="mx-auto">
        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on larger screens */}
          <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-brand-purple/30 to-brand-blue/30 hidden md:block"></div>
          
          {steps.map((step, index) => (
            <div key={index} className={`relative mb-16 last:mb-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
              <div className="flex flex-col md:flex-row items-start md:items-center">
                {/* For even steps (0, 2, etc) place content on left side on desktop */}
                {index % 2 === 0 && (
                  <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
                    <div className="timeline-content animate-on-scroll glass p-6 rounded-lg border border-brand-purple/20 hover:border-brand-purple/40 transition-all duration-300 transform hover:-translate-y-1">
                      <AnimatedText variant="gradient" direction="left" delay={index * 100} className="text-xl font-bold mb-2">
                        {step.title}
                      </AnimatedText>
                      <p className="text-gray-300 mb-4">{step.description}</p>
                      <ul className="space-y-1">
                        {step.features.map((feature, i) => (
                          <li key={i} className="flex items-center justify-end text-sm">
                            <span className="text-gray-400">{feature}</span>
                            <span className="ml-2 w-2 h-2 rounded-full bg-brand-purple/50"></span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Inline testimonial */}
                      {step.testimonial && (
                        <div className="mt-4 text-right">
                          <Testimonial
                            quote={step.testimonial.quote}
                            name={step.testimonial.name}
                            title={step.testimonial.title}
                            company={step.testimonial.company}
                            project={step.testimonial.project}
                            variant="inline"
                            delay={index * 150}
                            showStars={false}
                            className="ml-auto"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {/* Timeline dot */}
                <div className={`z-10 flex items-center justify-center w-12 h-12 rounded-full ${step.color} timeline-dot shadow-lg animate-on-scroll mx-auto md:mx-0`}>
                  {step.icon}
                </div>
                
                {/* For odd steps (1, 3, etc) place content on right side on desktop */}
                {index % 2 === 1 && (
                  <div className="hidden md:block md:w-1/2 md:pl-12">
                    <div className="timeline-content animate-on-scroll glass p-6 rounded-lg border border-brand-blue/20 hover:border-brand-blue/40 transition-all duration-300 transform hover:-translate-y-1">
                      <AnimatedText variant="gradient" direction="right" delay={index * 100} className="text-xl font-bold mb-2">
                        {step.title}
                      </AnimatedText>
                      <p className="text-gray-300 mb-4">{step.description}</p>
                      <ul className="space-y-1">
                        {step.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm">
                            <span className="mr-2 w-2 h-2 rounded-full bg-brand-blue/50"></span>
                            <span className="text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Inline testimonial */}
                      {step.testimonial && (
                        <div className="mt-4">
                          <Testimonial
                            quote={step.testimonial.quote}
                            name={step.testimonial.name}
                            title={step.testimonial.title}
                            company={step.testimonial.company}
                            project={step.testimonial.project}
                            variant="inline"
                            delay={index * 150}
                            showStars={false}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {/* Mobile view - always show content below the dot */}
                <div className="md:hidden mt-4 w-full">
                  <div className="timeline-content animate-on-scroll glass p-6 rounded-lg border border-brand-purple/20 hover:border-brand-purple/40 transition-all duration-300">
                    <AnimatedText variant="gradient" className="text-xl font-bold mb-2">
                      {step.title}
                    </AnimatedText>
                    <p className="text-gray-300 mb-4">{step.description}</p>
                    <ul className="space-y-1">
                      {step.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <span className="mr-2 w-2 h-2 rounded-full bg-brand-purple/50"></span>
                          <span className="text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Inline testimonial for mobile */}
                    {step.testimonial && (
                      <div className="mt-4">
                        <Testimonial
                          quote={step.testimonial.quote}
                          name={step.testimonial.name}
                          title={step.testimonial.title}
                          company={step.testimonial.company}
                          project={step.testimonial.project}
                          variant="minimal"
                          delay={index * 100}
                          showStars={false}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Connector line between steps (except after the last step) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-16 w-1 timeline-connector animate-on-scroll" style={{ 
                  top: '100%', 
                  background: `linear-gradient(to bottom, ${index % 2 === 0 ? '#b183ff' : '#7ee7d2'}, ${index % 2 === 1 ? '#b183ff' : '#7ee7d2'})` 
                }}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShippingProcess;
