
import { ReactNode, useEffect, useRef } from 'react';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedText = ({ children, className = '', delay = 0 }: AnimatedTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-text-revealed');
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
  }, [delay]);

  return (
    <div ref={textRef} className={`animate-text-hidden ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedText;
