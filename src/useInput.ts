import { useState, useCallback, ChangeEvent } from 'react'

export default (
  defaultParam: string
  ): { value: string, change: (e: ChangeEvent<HTMLInputElement>) => void } => {
  const [state, setState] = useState(defaultParam);
  const handle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setState(e.currentTarget.value)
    },
    [state]
  );

  return { value: state, onChange: handle };
}
