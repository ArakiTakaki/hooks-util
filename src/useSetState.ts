import { useState, useCallback } from 'react';

const useSetState = <T>(defaultState: T): [T, (nextState: Partial<T>) => void] => {
  const [state, setPureState] = useState<T>(defaultState);

  const setState = useCallback((nextState: Partial<T>) => {
    setPureState({...state, ...nextState});
  }, [state]);

  return [
    state,
    setState,
  ];
};

export default useSetState;
