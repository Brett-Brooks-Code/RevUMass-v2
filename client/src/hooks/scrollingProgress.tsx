import { useEffect, useState, useRef } from 'react';

const useScrollProgress = () => {
  const [scrollProgressPerc, setscrollProgressPerc] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollPercentRaw = (scrollTop / docHeight) * 100;
          const scrollPercent = Math.round(scrollPercentRaw * 100) / 100;
          const scrollTopRound = Math.round(scrollTop / window.innerHeight * 100) / 100;
          
          setscrollProgressPerc(scrollPercent);
          setScrollProgress(scrollTopRound);

          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return [scrollProgress, scrollProgressPerc];
};

export default useScrollProgress;