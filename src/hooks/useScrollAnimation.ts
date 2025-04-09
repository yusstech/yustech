import { useEffect } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  className?: string;
  rootMargin?: string;
}

export const useScrollAnimation = ({
  threshold = 0.1,
  className = 'appear',
  rootMargin = '50px'
}: ScrollAnimationOptions = {}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
            // Optional: Unobserve after animation starts
            // observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold,
        rootMargin,
        root: null // Use viewport as root
      }
    );
    
    // Observe all elements with the class
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    // Cleanup
    return () => {
      elements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, [className, threshold, rootMargin]);
}; 