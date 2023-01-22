import { useEffect, useState } from 'react';
import spotUSTheme from '../theme/theme';

const useScreenWidth = () => {
  const [isWidthMobile, setIsWidthMobile] = useState(false);
  const mobileWidthBreakpoint = spotUSTheme.breakpoints.values.sm;

  const handleResize = () => {
    const isScreenMobile = window.innerWidth < mobileWidthBreakpoint;
    setIsWidthMobile(isScreenMobile);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window width
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isWidthMobile;
};

export default useScreenWidth;