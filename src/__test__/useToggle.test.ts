import { act, renderHook } from '@testing-library/react-hooks'
import useToggle from '../useToggle'

const setUp = (initialValue: boolean) =>
  renderHook(() => useToggle(initialValue))

it('型チェック', () => {
  const { result } = setUp(true)
  expect(result.current[0]).toBe(true)
  expect(typeof result.current[1]).toBe('function')
})

it('toggleチェック : default false', () => {
  const { result } = setUp(false)

  expect(result.current[0]).toBe(false)
  act(() => {
    result.current[1]()
  })
  expect(result.current[0]).toBe(true)
  act(() => {
    result.current[1]()
  })
  expect(result.current[0]).toBe(false)
})

it('toggleチェック : default true', () => {
  const { result } = setUp(true)

  expect(result.current[0]).toBe(true)
  act(() => {
    result.current[1]()
  })
  expect(result.current[0]).toBe(false)
  act(() => {
    result.current[1]()
  })
  expect(result.current[0]).toBe(true)
})
