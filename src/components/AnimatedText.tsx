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
              switch (direction) {
                case 'left':
                  entry.target.classList.add('animate-[reveal-from-left_0.5s_ease-out_forwards]');
                  break;
                case 'right':
                  entry.target.classList.add('animate-[reveal-from-right_0.5s_ease-out_forwards]');
                  break;
                case 'down':
                  entry.target.classList.add('animate-[reveal-from-top_0.5s_ease-out_forwards]');
                  break;
                default: // 'up'
                  entry.target.classList.add('animate-[reveal-from-bottom_0.5s_ease-out_forwards]');
              }
              
              // Handle staggered children animation if enabled
              if (staggerChildren && textRef.current) {
                const children = textRef.current.children;
                Array.from(children).forEach((child, index) => {
                  setTimeout(() => {
                    (child as HTMLElement).classList.add('animate-text-revealed');
                    (child as HTMLElement).classList.add('animate-[reveal-from-bottom_0.5s_ease-out_forwards]');
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
      className={`opacity-0 ${variantClasses[variant]} ${className}`}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </div>
  );
};

export default AnimatedText;
