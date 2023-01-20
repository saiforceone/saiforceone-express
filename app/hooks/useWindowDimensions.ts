import { useState, useEffect } from 'react';
import { useIsSsr } from '~/hooks/useIsSsr';

function getWindowDimensions(isSsr: boolean) {
  if (isSsr)
    return {
      height: 0,
      width: 0,
    };
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const isSsr = useIsSsr();
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(isSsr)
  );

  useEffect(() => {
    console.log('effect');
    console.log('isSsr: ', isSsr);
    function handleResize() {
      setWindowDimensions(getWindowDimensions(isSsr));
    }

    if (!isSsr) {
      console.log('should set dimensions');
      setWindowDimensions(getWindowDimensions(isSsr));
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSsr]);

  return windowDimensions;
}
