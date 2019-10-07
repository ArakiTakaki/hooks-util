import { act, renderHook } from '@testing-library/react-hooks';
import useSetState from '../useSetState';


interface IState {
  sampleStr: string;
  sampleNum: number;
}

const defaultState: IState = {
  sampleStr: 'hello',
  sampleNum: 0,
};

const setUp = (initialValue: IState) => renderHook(() => useSetState<IState>(initialValue));

it('型チェック', () => {
  const { result } = setUp(defaultState);

  expect(result.current[0]).toEqual(defaultState);
  expect(typeof result.current[1]).toBe('function');
});

it('動作テスト：単一', () => {
  const { result } = setUp(defaultState);
  act(() => {
    result.current[1]({ sampleNum: 10 });
  });
  expect(result.current[0].sampleNum).toBe(10);

  act(() => {
    result.current[1]({ sampleStr: 'test' });
  });
  expect(result.current[0].sampleStr).toBe('test');

  expect(result.current[0]).toEqual({sampleNum: 10, sampleStr: 'test'});
});

it('動作テスト：複合', () => {
  const { result } = setUp(defaultState);
  act(() => {
    result.current[1]({sampleNum: 10, sampleStr: 'test'});
  });
  expect(result.current[0]).toEqual({sampleNum: 10, sampleStr: 'test'});
});
