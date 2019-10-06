import { act, renderHook } from '@testing-library/react-hooks';
import { ChangeEvent } from 'react';
import useInput from '../useInput';

const changeEvent: ChangeEvent<HTMLInputElement> = {
  currentTarget: {
    value: '',
  },
};

const setUp = (initialValue: string) => renderHook(() => useInput(initialValue));

it('型チェック', () => {
  {
    const { result } = setUp('');
    expect(result.current.value).toBe('');
    expect(typeof result.current.onChange).toBe('function');
  }
  {
    const { result } = setUp('test');
    expect(result.current.value).toBe('test');
    expect(typeof result.current.onChange).toBe('function');
  }
});

it('toggleチェック : default false', () => {
  const { result } = setUp('');
  expect(result.current.value).toBe('');

  act(() => {
    changeEvent.currentTarget.value = 'test';
    result.current.onChange(changeEvent);
  });
  expect(result.current.value).toBe('test');

  act(() => {
    changeEvent.currentTarget.value = 'aiueo';
    result.current.onChange(changeEvent);
  });
  expect(result.current.value).toBe('aiueo');
});
