import { act, renderHook } from '@testing-library/react-hooks';
import useDialog from '../useDialog';

const setUp = (initialValue?: boolean) => renderHook(() => useToggle(initialValue));

it('動作チェック', () => {
  {
    const { result } = setUp(true);
    expect(result.current[0]).toBe(true);
    expect(typeof result.current[1]).toBe('function');
    expect(typeof result.current[2]).toBe('function');
  }
  {
    const { result } = setUp(false);
    expect(result.current[0]).toBe(false);
  }
  {
    const { result } = setUp();
    expect(result.current[0]).toBe(false);
  }
});

it('イベントチェック : default false', () => {
  const { result } = setUp();
  expect(result.current[0]).toBe(false);

  act(() => {
    result.current[1]();
  });
  expect(result.current[0]).toBe(true);
  act(() => {
    result.current[1]();
  });
  expect(result.current[0]).toBe(true);

  act(() => {
    result.current[2]();
  });
  expect(result.current[0]).toBe(false);
  act(() => {
    result.current[2]();
  });
  expect(result.current[0]).toBe(false);

  act(() => {
    result.current[1]();
  });
  expect(result.current[0]).toBe(true);
});
