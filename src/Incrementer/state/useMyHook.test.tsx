import { renderHook, act } from '@testing-library/react-hooks';
import { _useMyHook } from './useMyHook';

test('should use custom step when incrementing', () => {
  const { result } = renderHook(() => _useMyHook({ increment: 4 }));
  act(() => {
    result.current.incrementCount()
  })
  expect(result.current.count).toBe(4)
})