
import { ReactNode } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import WebAppFrame from "@/components/WebAppFrame";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceDisplayProps {
  service: {
    title: string;
    description: string;
    features: string[];
    painPoint: string;
    solution: string;
    testimonial?: {
      quote: string;
      name: string;
      title: string;
      company: string;
      project: string;
    };
  };
  index: number;
}

const ServiceDisplay = ({ service, index }: ServiceDisplayProps) => {
  // Determine which display type to use based on the service title
  const renderServiceVisual = () => {
    if (service.title.includes("Web")) {
      return (
        <WebAppFrame title={`${service.title} Demo`} className="w-full mb-4" showSidebar={false}>
          <div className="space-y-4">
            <div className="bg-brand-purple/10 p-3 rounded-md">
              <h4 className="text-sm font-medium mb-2">User-Focused Design</h4>
              <div className="h-24 bg-brand-purple/5 rounded border border-brand-purple/20 flex items-center justify-center">
                <span className="text-xs text-gray-400">Interactive UI Elements</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 h-8 bg-brand-blue/10 rounded border border-brand-blue/20"></div>
              <div className="flex-1 h-8 bg-brand-blue/10 rounded border border-brand-blue/20"></div>
            </div>
            <div className="h-12 bg-green-500/10 rounded border border-green-500/20 flex items-center justify-center">
              <span className="text-xs text-green-300">Conversion-Optimized Elements</span>
            </div>
          </div>
        </WebAppFrame>
      );
    } else if (service.title.includes("Mobile")) {
      return (
        <div className="relative mx-auto w-48 h-96 mb-4">
          <div className="absolute inset-0 bg-gray-800 rounded-3xl border-4 border-gray-700 overflow-hidden shadow-xl">
            <div className="absolute top-0 left-0 right-0 h-6 bg-black flex items-center justify-center">
              <div className="w-16 h-2 bg-gray-700 rounded-full"></div>
            </div>
            <div className="absolute top-6 left-0 right-0 bottom-0 bg-gradient-to-b from-brand-purple/20 to-brand-blue/20 p-2">
              <div className="h-full rounded-xl border border-white/10 bg-black/40 p-2 flex flex-col">
                <div className="h-4 w-16 bg-brand-purple/30 rounded mb-2"></div>
                <div className="flex-1 grid grid-cols-2 gap-2">
                  <div className="bg-brand-purple/10 rounded"></div>
                  <div className="bg-brand-blue/10 rounded"></div>
                  <div className="bg-brand-blue/10 rounded"></div>
                  <div className="bg-brand-purple/10 rounded"></div>
                </div>
                <div className="h-10 bg-brand-purple/20 rounded mt-2 flex items-center justify-center">
                  <div className="h-4 w-16 bg-white/10 rounded"></div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-700 rounded-full"></div>
          </div>
        </div>
      );
    } else if (service.title.includes("AI")) {
      return (
        <div className="relative h-64 mb-4 rounded-lg overflow-hidden border border-brand-purple/20">
          <div className="absolute inset-0 bg-black p-4">
            <div className="h-full rounded bg-gray-900/60 p-3 font-mono text-xs text-green-400 overflow-hidden">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-auto opacity-60 text-gray-400">ai_model.py</span>
              </div>
              <div className="animate-pulse">
                <p>{"> "}Initializing AI model...</p>
                <p>{"> "}Loading training data...</p>
                <p>{"> "}Optimizing neural network...</p>
                <p>{"> "}Analyzing business patterns...</p>
                <p>{"> "}Generating insights...</p>
                <p className="text-brand-purple">{"> "}Prediction accuracy: 97.8%</p>
                <p>{"> "}Processing customer data...</p>
                <p>{"> "}Automating workflow...</p>
                <p className="text-white">{"> "}Process complete. Business efficiency increased by 42%</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (service.title.includes("Rescue")) {
      return (
        <div className="relative h-64 mb-4 rounded-lg overflow-hidden border border-brand-purple/20">
          <div className="bg-gray-900 h-full p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="text-red-500 text-xs font-mono">Critical Issues</div>
              </div>
              <div className="text-xs text-gray-500">Before Rescue</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="h-16 bg-red-500/20 border border-red-500/30 rounded p-2">
                <div className="text-xs text-red-400 mb-1">Security Vulnerabilities</div>
                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="h-16 bg-orange-500/20 border border-orange-500/30 rounded p-2">
                <div className="text-xs text-orange-400 mb-1">Performance Issues</div>
                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <div className="text-green-500 text-xs font-mono">After Rescue</div>
              </div>
              <div className="text-xs text-gray-500">6 Weeks Later</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="h-16 bg-green-500/20 border border-green-500/30 rounded p-2">
                <div className="text-xs text-green-400 mb-1">Secure & Optimized</div>
                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
              <div className="h-16 bg-brand-blue/20 border border-brand-blue/30 rounded p-2">
                <div className="text-xs text-brand-blue mb-1">Feature Complete</div>
                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-blue rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    // Default fallback visual
    return (
      <div className="h-48 mb-4 bg-brand-purple/10 rounded-lg border border-brand-purple/20 flex items-center justify-center">
        <span className="text-lg gradient-text">{service.title}</span>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div 
        className="glass rounded-lg service-card animate-on-scroll p-8 border border-brand-purple/20"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            {renderServiceVisual()}
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col">
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
            
            <div className="mt-auto">
              <Button 
                className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 transition-all group"
              >
                Learn More
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonial below service card if available */}
      {service.testimonial && (
        <div className="animate-on-scroll" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
          <Card className="border-brand-purple/20 bg-black/40 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-start">
                <svg className="w-8 h-8 text-brand-purple mr-3 flex-shrink-0 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
                </svg>
                <div>
                  <p className="italic text-gray-300 mb-2 text-sm">{service.testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue flex items-center justify-center text-xs font-medium text-white">
                      {service.testimonial.name.charAt(0)}
                    </div>
                    <p className="ml-2 text-xs text-gray-400">
                      <span className="font-medium text-gray-300">{service.testimonial.name}</span>, {service.testimonial.title} at {service.testimonial.company}
                      <span className="block text-brand-purple text-xs mt-0.5">{service.testimonial.project}</span>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ServiceDisplay;
