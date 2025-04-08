import { useEffect } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  className?: string;
  rootMargin?: string;
}

export const useScrollAnimation = ({
  threshold = 0.1,
  className = 'appear',
  rootMargin = '0px'
}: ScrollAnimationOptions = {}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
          }
        });
      },
      { 
        threshold,
        rootMargin
      }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, [className, threshold, rootMargin]);
}; 