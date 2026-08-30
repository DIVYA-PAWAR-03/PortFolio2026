import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once revealed, no need to keep observing
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all currently existing .reveal elements
    const observe = () => {
      document.querySelectorAll('.reveal:not(.active)').forEach((el) => {
        observer.observe(el);
      });
    };

    observe();

    // Watch for new .reveal elements added to the DOM (e.g. "Show More" projects)
    const mutationObserver = new MutationObserver(() => {
      observe();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
