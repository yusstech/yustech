
import { ReactNode, useEffect, useRef } from 'react';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: 'default' | 'tech' | 'gradient' | 'glow';
  direction?: 'up' | 'left' | 'right' | 'down';
  staggerChildren?: boolean;
}

const AnimatedText = ({ 
  children, 
  className = '', 
  delay = 0,
  variant = 'default',
  direction = 'up',
  staggerChildren = false,
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
              } else if (direction === 'down') {
                entry.target.classList.add('reveal-from-top');
              } else {
                entry.target.classList.add('reveal-from-bottom');
              }
              
              // Handle staggered children animation if enabled
              if (staggerChildren && textRef.current) {
                const children = textRef.current.children;
                Array.from(children).forEach((child, index) => {
                  setTimeout(() => {
                    child.classList.add('animate-text-revealed');
                    child.classList.add('reveal-from-bottom');
                  }, 100 * index);
                });
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
  }, [delay, direction, staggerChildren]);

  const variantClasses = {
    default: '',
    tech: 'font-mono tracking-wider',
    gradient: 'bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent',
    glow: 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]',
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
