import { useLayoutEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import { DESCTOP, LAPTOP, MOBILE } from 'constants/deviceType';

const useDeviceType = (): string => {
  const [deviceType, setDeviceType] = useState<string>('');

  useLayoutEffect(() => {
    const updateSize = (): void => {
      let device = '';
      if(window.innerWidth >= 1439) {
        device = DESCTOP;
      } else if(window.innerWidth <= 1024) {
        device = MOBILE;
      } else {
        device = LAPTOP;
      }

      setDeviceType(device);
    };

    window.addEventListener('resize', debounce(updateSize, 10));
    updateSize();

    return (): void => window.removeEventListener('resize', updateSize);
  }, []);

  return deviceType;
};

export default useDeviceType;
