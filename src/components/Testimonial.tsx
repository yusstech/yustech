
import { ReactNode, useEffect, useRef } from "react";
import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  project: string;
  children?: ReactNode;
  delay?: number;
  variant?: "default" | "compact" | "simple" | "featured" | "inline" | "minimal";
  className?: string;
  showStars?: boolean;
}

const Testimonial = ({ 
  quote, 
  name, 
  title, 
  company, 
  project, 
  children, 
  delay = 0,
  variant = "default",
  className = "",
  showStars = true
}: TestimonialProps) => {
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('appear');
          }, delay);
        }
      });
    }, { threshold: 0.1 });
    
    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }
    
    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, [delay]);

  // Base styles for all variants
  const baseStyles = "animate-on-scroll transition-all duration-300 transform hover:-translate-y-1";
  
  // New inline variant - for embedding within sections
  if (variant === "inline") {
    return (
      <div 
        ref={testimonialRef}
        className={cn(
          "border-l-2 border-brand-purple/50 pl-4 my-3 max-w-lg", 
          baseStyles, 
          className
        )}
      >
        <p className="text-gray-200 text-sm italic mb-2">"{quote}"</p>
        <div className="flex items-center">
          <div className="mr-2 w-5 h-5 bg-gradient-to-br from-brand-purple to-brand-blue rounded-full flex items-center justify-center text-white text-xs">
            {name.charAt(0)}
          </div>
          <p className="text-xs text-gray-300">
            <span className="font-medium text-white">{name}</span> · {title}, {company}
          </p>
        </div>
      </div>
    );
  }
  
  // New minimal variant - for very subtle integration
  if (variant === "minimal") {
    return (
      <div 
        ref={testimonialRef}
        className={cn(
          "bg-black/20 border border-brand-purple/10 rounded px-3 py-2 my-2", 
          baseStyles, 
          className
        )}
      >
        <p className="text-gray-300 text-xs italic mb-1">"{quote}"</p>
        <p className="text-xs text-brand-purple">— {name}, {company}</p>
      </div>
    );
  }
  
  if (variant === "compact") {
    return (
      <div 
        ref={testimonialRef}
        className={`backdrop-blur-sm bg-black/30 rounded-lg p-4 border border-gray-800 hover:shadow-lg hover:shadow-brand-purple/20 ${baseStyles} ${className}`}
      >
        <Quote className="text-brand-purple w-6 h-6 mb-2 opacity-70" />
        <p className="text-gray-200 italic text-sm mb-3">"{quote}"</p>
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-2">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-purple to-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xs">
              {name.charAt(0)}
            </div>
          </div>
          <div>
            <p className="font-semibold text-white text-sm">{name}</p>
            <p className="text-xs text-gray-300">{title}, {company}</p>
          </div>
        </div>
        {children && <div className="mt-3 text-sm">{children}</div>}
      </div>
    );
  }
  
  if (variant === "simple") {
    return (
      <div 
        ref={testimonialRef}
        className={`p-4 border-l-2 border-brand-purple/50 ${baseStyles} ${className}`}
      >
        <p className="text-gray-200 italic mb-3">"{quote}"</p>
        <p className="font-semibold text-white text-sm">{name}</p>
        <p className="text-xs text-brand-purple">{company}</p>
        {children && <div className="mt-2">{children}</div>}
      </div>
    );
  }
  
  if (variant === "featured") {
    return (
      <div 
        ref={testimonialRef}
        className={`bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 rounded-lg p-6 border border-brand-purple/30 hover:shadow-lg hover:shadow-brand-purple/20 ${baseStyles} ${className}`}
      >
        <div className="flex justify-between items-start mb-4">
          <Quote className="text-brand-purple w-8 h-8 opacity-70" />
          {showStars && (
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
          )}
        </div>
        
        <p className="text-gray-200 italic text-lg mb-6">"{quote}"</p>
        
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-4">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-purple via-indigo-500 to-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-purple/25">
              {name.charAt(0)}
            </div>
          </div>
          <div>
            <p className="font-semibold text-xl text-white">{name}</p>
            <p className="text-gray-300">{title}, {company}</p>
            <p className="text-sm text-brand-purple mt-1">Project: {project}</p>
          </div>
        </div>
        
        {children && <div className="mt-6">{children}</div>}
      </div>
    );
  }

  // Default variant
  return (
    <div 
      ref={testimonialRef}
      className={`backdrop-blur-sm bg-black/30 rounded-lg p-8 border border-gray-800 hover:shadow-lg hover:shadow-brand-purple/20 ${baseStyles} ${className}`}
    >
      {showStars && (
        <div className="flex mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
        </div>
      )}

      <p className="text-gray-200 italic mb-6">"{quote}"</p>

      <div className="flex items-center">
        <div className="flex-shrink-0 mr-3">
          <div className="w-12 h-12 bg-gradient-to-br from-brand-purple via-indigo-500 to-brand-blue rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-brand-purple/25">
            {name.charAt(0)}
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="text-sm text-gray-300">{title}, {company}</p>
          <p className="text-xs text-brand-purple mt-1">Project: {project}</p>
        </div>
      </div>
      
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default Testimonial;
