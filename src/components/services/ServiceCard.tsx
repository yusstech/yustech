
import { ArrowUpRight, BarChart4, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Testimonial from "../Testimonial";

interface SocialProof {
  quote: string;
  name: string;
  title: string;
  company: string;
  project: string;
  impact: string;
}

interface ServiceSolution {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  successMetric: string;
  callToAction: string;
}

export interface UserNeedProps {
  persona: string;
  painPoint: string;
  challenge: string;
  solution: ServiceSolution;
  socialProof: SocialProof;
  index: number;
}

const ServiceCard = ({ persona, painPoint, challenge, solution, socialProof, index }: UserNeedProps) => {
  return (
    <div className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
      {/* Persona identification */}
      <div className="mb-8 text-center">
        <Badge className="bg-brand-purple/20 text-brand-purple border-none mb-2">
          <BarChart4 className="w-4 h-4 mr-1" /> 
          For {persona}
        </Badge>
        <h3 className="text-2xl md:text-3xl font-bold">{challenge}</h3>
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
                {solution.icon}
              </div>
              <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
            </div>
            
            <p className="text-gray-300 mb-6">{solution.description}</p>
            
            {/* Pain point with emotion triggering */}
            <div className="mb-6 bg-brand-purple/10 p-4 rounded-lg border border-brand-purple/20">
              <h4 className="font-semibold text-brand-purple mb-2">Your Challenge:</h4>
              
            </div>
            
            {/* Client success story with clear impact */}
            {socialProof && (
              <div className="relative mb-6 bg-gradient-to-r from-black/40 to-black/60 p-5 rounded-lg border border-brand-purple/30 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 transform translate-x-12 -translate-y-8 bg-brand-purple opacity-10 rounded-full blur-xl"></div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <Award className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-brand-purple">Success Story:</h4>
                      {socialProof.impact && (
                        <Badge className="bg-brand-purple/20 text-brand-purple border-none text-xs ml-2">
                          {socialProof.impact}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-200 italic mb-2">"{socialProof.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue flex items-center justify-center text-xs font-medium text-white">
                        {socialProof.name.charAt(0)}
                      </div>
                      <p className="ml-2 text-xs text-gray-300">
                        <span className="font-medium">{socialProof.name}</span>, {socialProof.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <Button 
              className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 transition-all group"
            >
              {solution.callToAction}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </div>
        </div>
        
        {/* Right side - Benefits/Results (alternating for even/odd) */}
        <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className={`p-8 rounded-lg ${index % 2 === 0 ? 'bg-gradient-to-br from-brand-purple/10 to-transparent' : 'bg-gradient-to-br from-brand-blue/10 to-transparent'} border border-white/5`}>
            <h4 className="text-xl font-bold mb-6 text-white">How You'll Benefit</h4>
            
            <div className="space-y-6">
              {solution.benefits.map((benefit, i) => (
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
                  {solution.successMetric}
                </div>
              </div>
              <div className={`absolute bottom-0 left-0 h-1 ${index % 2 === 0 ? 'bg-brand-purple' : 'bg-brand-blue'} animate-pulse-width`} style={{width: '80%'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
