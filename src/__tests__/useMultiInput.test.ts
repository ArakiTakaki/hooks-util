import { act, renderHook } from '@testing-library/react-hooks';
import useMultiInput, { IUseMultiInput } from '../useMultiInput';

const defaultValues: IUseMultiInput[] = [
  {
    name: 'a',
    value: 'sample1',
  },
  {
    name: 'b',
    value: 'sample2',
  },
];

const createInputEventDummy = (value: any): any => ({ currentTarget: value });

const testCases: IUseMultiInput[] = [
  {
    value: 'case1',
    name: 'a',
  },
  {
    value: 'case2',
    name: 'b',
  },
  // 要素変更テスト
  {
    value: 'none',
    name: 'a',
  },
  {
    value: 'none',
    name: 'b',
  },
];

const setUp = (initialValue: IUseMultiInput[]) => renderHook(() => useMultiInput(initialValue));

it('型チェック', () => {
  const { result } = setUp(defaultValues);
  expect(result.current[0]).toBe(defaultValues);
  expect(typeof result.current[1]).toBe('function');
});

it('動作チェック', () => {
  const { result } = setUp(defaultValues);
  expect(result.current[0]).toBe(defaultValues);

  // 変更チェック
  testCases.forEach(testCase => {
    act(() => {
      result.current[1](createInputEventDummy(testCase));
    });
    expect(result.current[0].filter(value => value.name === testCase.name)[0].value).toBe(testCase.value);
  });
});
