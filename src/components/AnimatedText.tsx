
import { ReactNode, useEffect, useRef } from 'react';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: 'default' | 'tech' | 'gradient';
  direction?: 'up' | 'left' | 'right';
}

const AnimatedText = ({ 
  children, 
  className = '', 
  delay = 0,
  variant = 'default',
  direction = 'up'
}: AnimatedTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-text-revealed');
              
              // Add direction-specific class
              if (direction === 'left') {
                entry.target.classList.add('reveal-from-left');
              } else if (direction === 'right') {
                entry.target.classList.add('reveal-from-right');
              } else {
                entry.target.classList.add('reveal-from-bottom');
              }
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [delay, direction]);

  const variantClasses = {
    default: '',
    tech: 'font-mono tracking-wider',
    gradient: 'bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent'
  };

  return (
    <div 
      ref={textRef} 
      className={`animate-text-hidden ${variantClasses[variant]} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedText;
