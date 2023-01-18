import { renderHook } from '@testing-library/react';
import useDeviceType from 'hooks/useDeviceType';
import { MOBILE } from 'constants/deviceType';

test('renders Who wants to be', () => {
  const {result} = renderHook(() => useDeviceType())
  expect(result.current).toEqual(MOBILE)
});
