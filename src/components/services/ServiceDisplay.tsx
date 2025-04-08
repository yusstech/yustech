
import { ReactNode } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  WebAppVisual, 
  MobileAppVisual, 
  AIIntegrationVisual, 
  RescueVisual, 
  DefaultVisual 
} from './visuals';

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
      return <WebAppVisual />;
    } else if (service.title.includes("Mobile")) {
      return <MobileAppVisual />;
    } else if (service.title.includes("AI")) {
      return <AIIntegrationVisual />;
    } else if (service.title.includes("Rescue")) {
      return <RescueVisual />;
    }
    
    // Default fallback visual
    return <DefaultVisual title={service.title} />;
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
              
              <p className="italic text-gray-300">{service.painPoint}</p>
            </div>
            
            <div className="mb-6 bg-brand-blue/10 p-4 rounded-lg border border-brand-blue/20">
              
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
