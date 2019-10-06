import { renderHook } from '@testing-library/react-hooks';
import useTitle from '../useTitle';

const hook = renderHook(props => useTitle(props), { initialProps: 'use hook before' });

it('タイトル更新チェック', () => {
  expect(document.title).toBe('use hook before');
  hook.rerender('use hook after');
  expect(document.title).toBe('use hook after');
});
