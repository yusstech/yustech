
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { ArrowUpRight, Award, Quote, Target, Users, Heart, Zap, Handshake, BarChart4 } from "lucide-react";
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

  const userNeeds = [
    {
      persona: "Growth-Focused Business Leaders",
      painPoint: "Tired of websites that don't convert or apps that never launch?",
      challenge: "You need a digital presence that actively converts visitors into customers, not just looks pretty.",
      solution: {
        title: "Websites & Web Apps",
        description: "Custom responsive websites and powerful web applications built specifically to drive conversions.",
        icon: <Zap className="w-6 h-6" />,
        benefits: [
          "Increased conversion rates (avg. 35% improvement)",
          "Faster load times (under 2 seconds)",
          "Mobile-first responsive design",
          "SEO-optimized from the ground up"
        ],
        successMetric: "35% Higher Conversion Rate",
        callToAction: "Convert More Visitors"
      },
      socialProof: {
        quote: "The website exceeded our expectations and was delivered ahead of schedule.",
        name: "Alex Roberts",
        title: "Marketing Director",
        company: "GrowthBrand",
        project: "Company Website",
        impact: "127% increase in leads"
      }
    },
    {
      persona: "Time-Constrained Product Managers",
      painPoint: "Frustrated with mobile app developers who miss deadlines and go over budget?",
      challenge: "You need reliable development that delivers on time and within budget, without compromising quality.",
      solution: {
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications that launch on schedule, every time.",
        icon: <Users className="w-6 h-6" />,
        benefits: [
          "Native performance for iOS & Android",
          "User engagement analytics built-in",
          "Smooth launch on app stores",
          "On-time delivery guarantee"
        ],
        successMetric: "Launch on Time, Every Time",
        callToAction: "Launch Your App On Schedule"
      },
      socialProof: {
        quote: "Their AI integration saved us 30+ hours of manual work every week. The ROI was almost immediate.",
        name: "Michael Chen",
        title: "Operations Director",
        company: "LogisticsPro",
        project: "AI Workflow Automation",
        impact: "300% ROI within 3 months"
      }
    },
    {
      persona: "Innovation Leaders",
      painPoint: "Struggling to implement AI solutions that deliver real business value?",
      challenge: "You need AI that actually solves business problems, not just buzzword technology that looks impressive.",
      solution: {
        title: "AI Integration",
        description: "Practical AI solutions focused on measurable ROI and real business outcomes.",
        icon: <Target className="w-6 h-6" />,
        benefits: [
          "Process automation (save 20+ hrs/week)",
          "Customer insight generation",
          "Personalized user experiences",
          "Data-driven decision making"
        ],
        successMetric: "2x Faster ROI Than Manual Processes",
        callToAction: "Automate & Scale with AI"
      },
      socialProof: {
        quote: "YusTech helped us implement AI that actually made sense for our business. No fluff, just results.",
        name: "Lisa Wang",
        title: "Innovation Lead",
        company: "RetailSmart",
        project: "Inventory AI",
        impact: "42% reduction in stockouts"
      }
    },
    {
      persona: "Technical Debt Bearers",
      painPoint: "Have a half-finished product that's burning money and not delivering value?",
      challenge: "You need to salvage your existing investment and turn it into a working product that delivers value.",
      solution: {
        title: "Project Rescue & Management",
        description: "We take over stalled projects, fix issues, and get your product back on track.",
        icon: <Handshake className="w-6 h-6" />,
        benefits: [
          "Comprehensive code audit & cleanup",
          "Rapid stabilization & deployment",
          "Performance optimization",
          "Clear project roadmap"
        ],
        successMetric: "6 Week Rescue & Launch",
        callToAction: "Rescue Your Project"
      },
      socialProof: {
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
            Solutions For You
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Your Challenges</span>, Our Solutions
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We match our services to the specific challenges you're facing to ensure your product gets shipped with confidence.
          </p>
        </div>

        <div className="space-y-32">
          {userNeeds.map((need, index) => (
            <div 
              key={index} 
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Persona identification */}
              <div className="mb-8 text-center">
                <Badge className="bg-brand-purple/20 text-brand-purple border-none mb-2">
                  <Target className="w-4 h-4 mr-1" /> 
                  For {need.persona}
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold">{need.challenge}</h3>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Left side - Problem/Solution (alternating for even/odd) */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="glass rounded-lg service-card p-8 border border-brand-purple/20 relative overflow-hidden">
                    {/* Background accent */}
                    <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 blur-xl"></div>
                    
                    {/* Service tag & title */}
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-lg bg-brand-purple/10 mr-4">
                        {need.solution.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{need.solution.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{need.solution.description}</p>
                    
                    {/* Pain point with emotion triggering */}
                    <div className="mb-6 bg-brand-purple/10 p-4 rounded-lg border border-brand-purple/20">
                      <h4 className="font-semibold text-brand-purple mb-2">Your Challenge:</h4>
                      <p className="italic text-gray-300">{need.painPoint}</p>
                    </div>
                    
                    {/* Client success story with clear impact */}
                    {need.socialProof && (
                      <div className="relative mb-6 bg-gradient-to-r from-black/40 to-black/60 p-5 rounded-lg border border-brand-purple/30 overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 transform translate-x-12 -translate-y-8 bg-brand-purple opacity-10 rounded-full blur-xl"></div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mr-3">
                            <Award className="h-6 w-6 text-brand-purple" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-semibold text-brand-purple">Success Story:</h4>
                              {need.socialProof.impact && (
                                <Badge className="bg-brand-purple/20 text-brand-purple border-none text-xs ml-2">
                                  {need.socialProof.impact}
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-gray-200 italic mb-2">"{need.socialProof.quote}"</p>
                            <div className="flex items-center">
                              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue flex items-center justify-center text-xs font-medium text-white">
                                {need.socialProof.name.charAt(0)}
                              </div>
                              <p className="ml-2 text-xs text-gray-300">
                                <span className="font-medium">{need.socialProof.name}</span>, {need.socialProof.company}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 transition-all group"
                    >
                      {need.solution.callToAction}
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                  </div>
                </div>
                
                {/* Right side - Benefits/Results (alternating for even/odd) */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className={`p-8 rounded-lg ${index % 2 === 0 ? 'bg-gradient-to-br from-brand-purple/10 to-transparent' : 'bg-gradient-to-br from-brand-blue/10 to-transparent'} border border-white/5`}>
                    <h4 className="text-xl font-bold mb-6 text-white">How You'll Benefit</h4>
                    
                    <div className="space-y-6">
                      {need.solution.benefits.map((benefit, i) => (
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
                          {need.solution.successMetric}
                        </div>
                      </div>
                      <div className={`absolute bottom-0 left-0 h-1 ${index % 2 === 0 ? 'bg-brand-purple' : 'bg-brand-blue'} animate-pulse-width`} style={{width: '80%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Progress indicator */}
              {index < userNeeds.length - 1 && (
                <div className="w-1 h-24 bg-gradient-to-b from-brand-purple/30 to-brand-blue/30 mx-auto my-4"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Final CTA */}
        <div className="mt-16 text-center animate-on-scroll">
          <h3 className="text-2xl font-bold mb-4">Ready to Overcome Your Challenges?</h3>
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
