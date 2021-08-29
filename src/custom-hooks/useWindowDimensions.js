import { useState, useEffect } from 'react';

const useWindowDimensions = () => {
  const [dimension, setDimension] = useState({
    width: 0,
    height: 0
  });
  
  const handleResize = () => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }
  
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return dimension;
}

export default useWindowDimensions;