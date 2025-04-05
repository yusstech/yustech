
import { ReactNode, useEffect, useRef } from 'react';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: 'default' | 'tech' | 'gradient' | 'glow' | 'code' | 'terminal';
  direction?: 'up' | 'left' | 'right' | 'down';
  staggerChildren?: boolean;
  typewriter?: boolean;
}

const AnimatedText = ({ 
  children, 
  className = '', 
  delay = 0,
  variant = 'default',
  direction = 'up',
  staggerChildren = false,
  typewriter = false,
}: AnimatedTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);

  const animateElement = (element: HTMLElement) => {
    element.classList.add('animate-text-revealed');
    
    // Add direction-specific class
    switch (direction) {
      case 'left':
        element.classList.add('animate-[reveal-from-left_0.5s_ease-out_forwards]');
        break;
      case 'right':
        element.classList.add('animate-[reveal-from-right_0.5s_ease-out_forwards]');
        break;
      case 'down':
        element.classList.add('animate-[reveal-from-top_0.5s_ease-out_forwards]');
        break;
      default: // 'up'
        element.classList.add('animate-[reveal-from-bottom_0.5s_ease-out_forwards]');
    }
    
    // Handle staggered children animation if enabled
    if (staggerChildren && element.children.length > 0) {
      Array.from(element.children).forEach((child, index) => {
        setTimeout(() => {
          (child as HTMLElement).classList.add('animate-text-revealed');
          (child as HTMLElement).classList.add('animate-[reveal-from-bottom_0.5s_ease-out_forwards]');
        }, 100 * index);
      });
    }

    // Handle typewriter effect if enabled
    if (typewriter && element.textContent) {
      const text = element.textContent;
      element.textContent = '';
      element.classList.add('after:content-["_"]', 'after:animate-pulse', 'after:ml-0.5');
      
      let index = 0;
      const typeChar = () => {
        if (index < text.length) {
          element.textContent += text.charAt(index);
          index++;
          setTimeout(typeChar, 50);
        } else {
          // Remove cursor after typing is complete
          element.classList.remove('after:content-["_"]', 'after:animate-pulse', 'after:ml-0.5');
        }
      };
      
      setTimeout(typeChar, 100);
    }
  };

  useEffect(() => {
    if (!textRef.current) return;

    // Check if element is already in viewport
    const rect = textRef.current.getBoundingClientRect();
    const isInitiallyVisible = 
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    // If element is initially visible, animate after a short delay
    if (isInitiallyVisible) {
      setTimeout(() => {
        if (textRef.current) {
          animateElement(textRef.current);
        }
      }, delay);
    }

    // Set up intersection observer for elements not initially visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (entry.target instanceof HTMLElement) {
                animateElement(entry.target);
              }
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    // Only observe if not initially visible
    if (!isInitiallyVisible) {
      observer.observe(textRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [delay, direction, staggerChildren, typewriter]);

  const variantClasses = {
    default: '',
    tech: 'font-mono tracking-wider',
    gradient: 'bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent',
    glow: 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]',
    code: 'font-mono text-brand-blue bg-black/30 p-2 rounded border-l-4 border-brand-purple',
    terminal: 'font-mono text-brand-green bg-black/80 p-3 rounded-md before:content-["$_"] before:text-brand-purple before:mr-2'
  };

  return (
    <div 
      ref={textRef} 
      className={`opacity-0 ${variantClasses[variant]} ${className}`}
      style={{ willChange: 'transform, opacity' }}
      data-variant={variant}
    >
      {children}
    </div>
  );
};

export default AnimatedText;
