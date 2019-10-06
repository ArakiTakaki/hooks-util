import { act, renderHook } from '@testing-library/react-hooks';
import useDidMount from '../useDidMount';

const mockCallback = jest.fn();
afterEach(() => {
  jest.resetAllMocks();
});

it('Not Calling', () => {
  expect(mockCallback).toHaveBeenCalledTimes(0);
  renderHook(() => useDidMount(mockCallback));
  expect(mockCallback).toHaveBeenCalledTimes(1);
});

it('Other render', () => {
  expect(mockCallback).toHaveBeenCalledTimes(0);
  const { rerender, unmount } = renderHook(() => useDidMount(mockCallback));
  expect(mockCallback).toHaveBeenCalledTimes(1);
  rerender();
  expect(mockCallback).toHaveBeenCalledTimes(1);
  unmount();
  expect(mockCallback).toHaveBeenCalledTimes(1);
});
