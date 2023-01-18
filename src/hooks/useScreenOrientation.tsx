import { useState, useLayoutEffect } from "react";

const useScreenOrientation = () => {
  const [orientation, setOrientation] = useState<string>(window.screen.orientation.type);

  useLayoutEffect(() => {
    const handleOrientationChange= () => setOrientation(window.screen.orientation.type);
    window.addEventListener('orientationchange', handleOrientationChange);
    
    return () => window.removeEventListener('orientationchange', handleOrientationChange);
  }, []);

  return orientation;
}

export default useScreenOrientation;