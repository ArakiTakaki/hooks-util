import { useState, useCallback, ChangeEvent } from 'react';

const useInput = (defaultParam: string): { value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void } => {
  const [state, setState] = useState(defaultParam);
  const handle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setState(e.currentTarget.value);
    },
    [state]
  );

  return { value: state, onChange: handle };
};

export default useInput;
