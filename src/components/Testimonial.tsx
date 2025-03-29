
import { ReactNode, useEffect, useRef } from "react";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  project: string;
  children?: ReactNode;
  delay?: number;
}

const Testimonial = ({ quote, name, title, company, project, children, delay = 0 }: TestimonialProps) => {
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

  return (
    <div 
      ref={testimonialRef}
      className="backdrop-blur-sm bg-black/30 rounded-lg p-8 border border-gray-800 animate-on-scroll hover:shadow-lg hover:shadow-brand-purple/20 transition-all duration-300 transform hover:-translate-y-1"
    >
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
