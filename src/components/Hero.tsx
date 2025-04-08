import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { Triangle, Hexagon, Circle, Square, Star, Award, Check } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import AnimatedText from "./AnimatedText";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import CTAPopup from "@/components/ui/cta-popup";
import { CTAButton } from "@/components/ui/cta-button";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Animate elements when the page loads
    const animateElements = heroRef.current?.querySelectorAll('.hero-animate');
    
    animateElements?.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('appear');
      }, index * 200); // Stagger the animations
    });
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/7037942851?text=Hi, I\'m interested in discussing a project with YussTech.', '_blank');
  };

  return (
    <div className="relative overflow-hidden animated-bg min-h-[90vh] flex items-center py-24" ref={heroRef}>
      {/* Tech Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-brand-purple/10 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-brand-blue/10 blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      
      {/* Geometric Elements */}
      <div className="absolute top-20 left-[10%] animate-float opacity-30" style={{ animationDelay: "1.3s" }}>
        <Triangle className="text-brand-purple w-16 h-16 md:w-24 md:h-24" />
      </div>
      <div className="absolute bottom-32 right-[15%] animate-float opacity-30" style={{ animationDelay: "2.7s" }}>
        <Square className="text-brand-blue w-12 h-12 md:w-16 md:h-16" strokeWidth={1} />
      </div>
      <div className="absolute top-[40%] right-[5%] animate-float opacity-20" style={{ animationDelay: "3.5s" }}>
        <Hexagon className="text-brand-purple w-20 h-20 md:w-32 md:h-32" strokeWidth={1} />
      </div>
      <div className="absolute bottom-20 left-[20%] animate-float opacity-20" style={{ animationDelay: "1.8s" }}>
        <Circle className="text-brand-blue w-10 h-10 md:w-14 md:h-14" strokeWidth={1} />
      </div>
      
      {/* Tech Lines - Horizontal */}
      <div className="absolute left-0 w-full h-[1px] top-1/3 bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent"></div>
      <div className="absolute left-0 w-full h-[1px] bottom-1/3 bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent"></div>
      
      {/* Tech Lines - Vertical */}
      <div className="absolute top-0 h-full w-[1px] left-1/3 bg-gradient-to-b from-transparent via-brand-purple/30 to-transparent"></div>
      <div className="absolute top-0 h-full w-[1px] right-1/3 bg-gradient-to-b from-transparent via-brand-blue/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6 px-3 py-1 rounded-full neon-border hero-animate animate-on-scroll">
            <span className="text-brand-purple text-sm">100% Ship Rate Guarantee</span>
          </div>
          
          {/* Social Proof Compact Design */}
          <div className="mb-6 mx-auto max-w-md animate-on-scroll hero-animate relative">
            <div className="bg-black/40 backdrop-blur-md border border-brand-purple/30 rounded-lg overflow-hidden p-3 flex items-center">
              <div className="absolute -top-2 -right-2">
                <div className="bg-gradient-to-r from-brand-purple to-brand-blue p-1 rounded-full">
                  <Award className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="flex space-x-2 mr-3">
                <Avatar className="w-8 h-8 border-2 border-white/10">
                  <AvatarImage src="/images/avatars/client1.jpg" alt="Client" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <Avatar className="w-8 h-8 -ml-4 border-2 border-white/10">
                  <AvatarImage src="/images/avatars/client2.jpg" alt="Client" />
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
                <Avatar className="w-8 h-8 -ml-4 border-2 border-white/10">
                  <AvatarImage src="/images/avatars/client3.jpg" alt="Client" />
                  <AvatarFallback>AL</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-300">Trusted by 50+ startups</div>
                <div className="flex items-center">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-brand-purple text-brand-purple" />
                  ))}
                  <span className="text-xs ml-1 text-white font-semibold">4.9/5</span>
                </div>
              </div>
              <Badge variant="outline" className="bg-black/20 text-brand-blue ml-2 text-xs">Verified</Badge>
            </div>
          </div>
          
          <AnimatedText 
            variant="gradient" 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
          >
            Your Vision. Our Execution. <span className="gradient-text">Launch in Days, Not Months.</span>
          </AnimatedText>
          
          <AnimatedText 
            delay={200}
            direction="left"
            className="text-lg md:text-xl text-gray-300 mb-10"
          >
            Frustrated with slow development, unreliable teams, or endless delays? 
            We turn your idea into a fully built, 100% shipped product—so you can focus 
            on growing your business, not chasing developers.
          </AnimatedText>
          
          {/* Services List */}
          <div className="mb-10 flex flex-col items-center animate-on-scroll hero-animate">
            <div className="py-3 px-5 backdrop-blur-lg bg-brand-purple/10 rounded-xl border border-brand-purple/20 inline-flex flex-col gap-3">
              <span className="text-white text-lg">Web & Mobile Apps</span>
              <span className="text-white text-lg">AI Automation & AI Integration</span>
              <span className="text-brand-purple font-medium text-lg">100% Execution. No Excuses.</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <CTAButton className="text-lg">
              Book Free Strategy Call
            </CTAButton>
            <Button
              variant="outline"
              className="text-lg border-brand-purple hover:bg-brand-purple/10"
              onClick={() => window.open('https://wa.me/2349058744770?text=Hi%20YussTech%2C%20I%27m%20interested%20in%20your%20services', '_blank')}
            >
              Get Instant Answers
            </Button>
          </div>
          
          {/* Mobile Device Showcase */}
          <div className="mt-16 relative mx-auto w-64 h-80 md:w-72 md:h-96 hero-animate animate-on-scroll">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/50 to-brand-blue/50 rounded-[40px] p-2">
              <div className="w-full h-full bg-black rounded-[36px] overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-6 bg-black flex justify-center items-center">
                  <div className="w-20 h-4 rounded-full bg-gray-900"></div>
                </div>
                {/* Screen Content */}
                <div className="pt-6 px-2 h-full">
                  <div className="h-full w-full bg-gradient-to-br from-gray-900 to-black rounded-2xl p-3 overflow-hidden flex flex-col">
                    {/* App UI Elements */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="w-8 h-2 bg-brand-purple/70 rounded-full"></div>
                      <div className="w-4 h-4 rounded-full bg-brand-blue/70"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      {[1, 2, 3, 4].map(i => (
                        <div 
                          key={i} 
                          className="h-14 rounded bg-gradient-to-r from-gray-800 to-gray-700 flex items-center justify-center"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        >
                          <div className="w-6 h-6 rounded-full bg-brand-purple/40"></div>
                        </div>
                      ))}
                    </div>
                    <div className="h-20 rounded bg-gradient-to-r from-gray-800 to-gray-700 mb-3"></div>
                    <div className="flex-1 rounded bg-gradient-to-b from-gray-800 to-gray-700"></div>
                    
                    {/* Animated Dots */}
                    <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse-glow"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse-glow" style={{ animationDelay: "0.3s" }}></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse-glow" style={{ animationDelay: "0.6s" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Glowing effect around the phone */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 rounded-[50px] blur-lg -z-10"></div>
            
            {/* Binary Code Snippets floating around */}
            <div className="absolute -top-12 -right-16 text-[8px] text-brand-purple/40 font-mono animate-float" style={{ animationDelay: "2s" }}>
              010110<br/>101010<br/>110101
            </div>
            <div className="absolute -bottom-10 -left-14 text-[8px] text-brand-blue/40 font-mono animate-float" style={{ animationDelay: "3s" }}>
              110101<br/>010101<br/>101010
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "100%", label: "Ship Rate" },
              { value: "50+", label: "Projects Shipped" },
              { value: "92%", label: "Client Retention" },
              { value: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="p-4 animate-on-scroll hero-animate glass rounded-lg hover-glow border border-brand-purple/20"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <p className="text-3xl font-bold text-brand-purple">{stat.value}</p>
                <p className="text-sm text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTAPopup 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
};

export default Hero;