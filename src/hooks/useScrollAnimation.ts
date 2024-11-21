import { useEffect, useRef } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  animation?: 'fade-up' | 'fade-in';
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const { threshold = 0.1, animation = 'fade-up' } = options;
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold,
        rootMargin: '50px',
      }
    );

    const element = elementRef.current;
    if (element) {
      element.classList.add(animation === 'fade-up' ? 'fade-up-element' : 'fade-in-element');
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, animation]);

  return elementRef;
};